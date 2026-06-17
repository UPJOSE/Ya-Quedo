import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TrabajadorService } from '../../../core/services/trabajador.service';
import { SolicitudService } from '../../../core/services/solicitud.service';
import { PerfilService } from '../../../core/services/perfil.service';
import { AuthService } from '../../../core/services/auth.service';
import { CategoriaServicio } from '../../../core/models/trabajador.model';
import { ClienteResponse } from '../../../core/models/perfil.model';

@Component({
  selector: 'app-create-request',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './create-request.component.html',
  styleUrl: './create-request.component.css'
})
export class CreateRequestComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly trabajadores = inject(TrabajadorService);
  private readonly solicitudes = inject(SolicitudService);
  private readonly perfil = inject(PerfilService);
  private readonly auth = inject(AuthService);
  private readonly snack = inject(MatSnackBar);

  categorias = signal<CategoriaServicio[]>([]);
  cliente = signal<ClienteResponse | null>(null);
  loadingCliente = signal(true);
  saving = signal(false);

  paso1 = this.fb.nonNullable.group({
    trabajadorId: ['', Validators.required],
    categoriaId: ['', Validators.required]
  });

  paso2 = this.fb.nonNullable.group({
    descripcion: ['', [Validators.required, Validators.minLength(15)]],
    fechaServicio: [new Date(), Validators.required],
    direccion: ['', Validators.required]
  });

  paso3 = this.fb.nonNullable.group({
    precioOfrecido: [50, [Validators.required, Validators.min(10)]]
  });

  ngOnInit(): void {
    const trabajadorId = this.route.snapshot.queryParamMap.get('trabajadorId') ?? '';
    const categoriaId = this.route.snapshot.queryParamMap.get('categoriaId') ?? '';
    this.paso1.patchValue({ trabajadorId, categoriaId });
    this.trabajadores.listCategorias().subscribe(c => this.categorias.set(c));

    const user = this.auth.currentUser();
    if (user && user.role === 'CLIENTE') {
      this.perfil.getClienteByUsuario(user.id).subscribe({
        next: c => {
          this.cliente.set(c);
          this.loadingCliente.set(false);
        },
        error: () => {
          this.loadingCliente.set(false);
          this.snack.open('No tienes un perfil de cliente. Crea uno primero.', 'Cerrar', { duration: 5000 });
          this.router.navigate(['/app/perfil']);
        }
      });
    } else {
      this.loadingCliente.set(false);
    }
  }

  confirmar(): void {
    if (this.paso1.invalid || this.paso2.invalid || this.paso3.invalid) {
      this.snack.open('Completa todos los pasos del formulario', 'Cerrar', { duration: 3000 });
      return;
    }
    this.saving.set(true);
    const cliente = this.cliente();
    if (!cliente) {
      this.saving.set(false);
      this.snack.open('Debes tener un perfil de cliente para crear solicitudes', 'Cerrar', { duration: 5000 });
      this.router.navigate(['/app/perfil']);
      return;
    }

    const body = {
      ...this.paso1.getRawValue(),
      ...this.paso2.getRawValue(),
      ...this.paso3.getRawValue(),
      clienteId: cliente.id,
      fechaServicio: this.paso2.controls.fechaServicio.value.toISOString()
    };
    this.solicitudes.create(body).subscribe({
      next: () => {
        this.snack.open('Solicitud enviada al trabajador', 'Cerrar', { duration: 3000 });
        this.router.navigate(['/app/solicitudes']);
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.message ?? 'No se pudo crear la solicitud';
        this.snack.open(msg, 'Cerrar', { duration: 3000 });
      }
    });
  }
}
