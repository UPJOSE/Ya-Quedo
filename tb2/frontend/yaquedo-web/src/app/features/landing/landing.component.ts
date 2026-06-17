import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  template: `
    <div class="landing-container">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Ya Quedo</h1>
          <p class="hero-subtitle">
            Conectamos clientes urbanos con trabajadores independientes de confianza.
            Encuentra profesionales para electricidad, gasfitería, pintura y más.
          </p>
          <div class="hero-actions">
            <a mat-raised-button color="primary" routerLink="/register">
              <mat-icon>person_add</mat-icon>
              Crear Cuenta
            </a>
            <a mat-stroked-button routerLink="/login">
              <mat-icon>login</mat-icon>
              Iniciar Sesión
            </a>
          </div>
        </div>
        <div class="hero-image">
          <mat-icon class="hero-icon">home_repair_service</mat-icon>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features">
        <h2 class="section-title">¿Por qué elegir Ya Quedo?</h2>
        <div class="features-grid">
          <mat-card class="feature-card">
            <mat-icon color="primary" class="feature-icon">search</mat-icon>
            <h3>Encuentra Profesionales</h3>
            <p>Busca trabajadores calificados por categoría, ubicación y calificación.</p>
          </mat-card>

          <mat-card class="feature-card">
            <mat-icon color="primary" class="feature-icon">schedule</mat-icon>
            <h3>Rápido y Conveniente</h3>
            <p>Solicita servicios en minutos y recibe respuesta de los trabajadores.</p>
          </mat-card>

          <mat-card class="feature-card">
            <mat-icon color="primary" class="feature-icon">verified</mat-icon>
            <h3>Trabajadores Verificados</h3>
            <p>Todos los profesionales cuentan con calificaciones y reseñas de clientes.</p>
          </mat-card>

          <mat-card class="feature-card">
            <mat-icon color="primary" class="feature-icon">security</mat-icon>
            <h3>Seguro y Confiable</h3>
            <p>Sistema de solicitudes con seguimiento de estados y historial completo.</p>
          </mat-card>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services">
        <h2 class="section-title">Servicios Disponibles</h2>
        <div class="services-grid">
          <div class="service-item">
            <mat-icon>electrical_services</mat-icon>
            <span>Electricidad</span>
          </div>
          <div class="service-item">
            <mat-icon>plumbing</mat-icon>
            <span>Gasfitería</span>
          </div>
          <div class="service-item">
            <mat-icon>format_paint</mat-icon>
            <span>Pintura</span>
          </div>
          <div class="service-item">
            <mat-icon>carpenter</mat-icon>
            <span>Carpintería</span>
          </div>
          <div class="service-item">
            <mat-icon>cleaning_services</mat-icon>
            <span>Limpieza</span>
          </div>
          <div class="service-item">
            <mat-icon>local_shipping</mat-icon>
            <span>Mudanzas</span>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <h2>¿Listo para comenzar?</h2>
        <p>Únete a nuestra comunidad y encuentra el profesional que necesitas.</p>
        <a mat-raised-button color="accent" routerLink="/register">
          Registrarse Gratis
        </a>
      </section>

      <!-- Footer -->
      <footer class="landing-footer">
        <p>© 2024 Ya Quedo - Conectando talento con oportunidades</p>
      </footer>
    </div>
  `,
  styles: [`
    .landing-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .hero {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 80px 10%;
      min-height: 80vh;
      gap: 60px;
    }

    .hero-content {
      flex: 1;
      max-width: 600px;
    }

    .hero-title {
      font-size: 4rem;
      font-weight: 700;
      color: white;
      margin: 0 0 20px 0;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: rgba(255,255,255,0.9);
      line-height: 1.6;
      margin-bottom: 40px;
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    .hero-actions a {
      padding: 12px 32px;
      font-size: 1.1rem;
    }

    .hero-image {
      flex: 0 0 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-icon {
      font-size: 200px;
      width: 200px;
      height: 200px;
      color: rgba(255,255,255,0.3);
    }

    .features {
      background: white;
      padding: 80px 10%;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 60px;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 32px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .feature-card {
      text-align: center;
      padding: 40px 24px;
    }

    .feature-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      margin-bottom: 20px;
    }

    .feature-card h3 {
      margin: 16px 0;
      color: #333;
    }

    .feature-card p {
      color: #666;
      line-height: 1.5;
    }

    .services {
      background: #f8f9fa;
      padding: 80px 10%;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 24px;
      max-width: 800px;
      margin: 0 auto;
    }

    .service-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 32px 24px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }

    .service-item:hover {
      transform: translateY(-4px);
    }

    .service-item mat-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: #667eea;
    }

    .service-item span {
      font-weight: 500;
      color: #333;
    }

    .cta {
      background: #333;
      color: white;
      padding: 80px 10%;
      text-align: center;
    }

    .cta h2 {
      font-size: 2.5rem;
      margin-bottom: 16px;
    }

    .cta p {
      font-size: 1.2rem;
      color: rgba(255,255,255,0.8);
      margin-bottom: 32px;
    }

    .cta a {
      padding: 16px 48px;
      font-size: 1.2rem;
    }

    .landing-footer {
      background: #222;
      color: rgba(255,255,255,0.6);
      padding: 24px;
      text-align: center;
    }

    @media (max-width: 768px) {
      .hero {
        flex-direction: column;
        text-align: center;
        padding: 40px 5%;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-actions {
        justify-content: center;
      }

      .hero-icon {
        font-size: 120px;
        width: 120px;
        height: 120px;
      }

      .section-title {
        font-size: 1.8rem;
      }
    }
  `]
})
export class LandingComponent {}
