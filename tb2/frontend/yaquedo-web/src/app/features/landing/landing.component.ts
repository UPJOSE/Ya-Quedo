import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule
  ],
  template: `
    <div class="quantum-container">
      <!-- Particle Background -->
      <div class="particle-field">
        <div class="particle" *ngFor="let p of particles; let i = index" [style.--delay]="i * 0.15 + 's'" [style.left]="p.x + '%'" [style.top]="p.y + '%'"></div>
      </div>

      <!-- Navigation -->
      <nav class="quantum-nav">
        <div class="nav-brand">
          <mat-icon class="brand-icon">bolt</mat-icon>
          <span class="brand-text">Ya Quedo</span>
          <span class="brand-badge">2026</span>
        </div>
        <div class="nav-links">
          <a mat-button routerLink="/login" class="nav-link">
            <mat-icon>login</mat-icon> Ingresar
          </a>
          <a mat-raised-button color="primary" routerLink="/register" class="nav-cta">
            <mat-icon>rocket_launch</mat-icon> Comenzar
          </a>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="hero-quantum">
        <div class="hero-glass">
          <div class="hero-badge">
            <mat-icon>auto_awesome</mat-icon>
            <span>IA-Powered Matching v3.0</span>
          </div>
          <h1 class="hero-title">
            <span class="gradient-text">Conectamos</span>
            <span class="hero-highlight">talento urbano</span>
            <span class="gradient-text">con oportunidades</span>
          </h1>
          <p class="hero-subtitle">
            Plataforma neural que une clientes con trabajadores independientes usando 
            algoritmos de ML y geolocalización inteligente. La evolución del trabajo freelance.
          </p>
          <div class="hero-metrics">
            <div class="metric">
              <span class="metric-value">50K+</span>
              <span class="metric-label">Trabajadores</span>
            </div>
            <div class="metric">
              <span class="metric-value">98%</span>
              <span class="metric-label">Satisfacción</span>
            </div>
            <div class="metric">
              <span class="metric-value">&lt;2min</span>
              <span class="metric-label">Matching</span>
            </div>
          </div>
          <div class="hero-actions">
            <a mat-raised-button color="primary" routerLink="/register" class="btn-glow btn-primary">
              <mat-icon>person_add</mat-icon>
              Crear Cuenta
            </a>
            <a mat-stroked-button routerLink="/login" class="btn-glow btn-secondary">
              <mat-icon>login</mat-icon>
              Ingresar
            </a>
          </div>
        </div>

        <!-- Holographic Services -->
        <div class="hologrid">
          <div class="holo-card" *ngFor="let service of services; let i = index" [style.animation-delay]="i * 0.1 + 's'">
            <div class="holo-icon">
              <mat-icon>{{ service.icon }}</mat-icon>
            </div>
            <span class="holo-text">{{ service.name }}</span>
          </div>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="tech-stack">
        <div class="section-header">
          <mat-icon class="header-icon">code</mat-icon>
          <h2>Stack Tecnológico 2026</h2>
          <p>Enterprise-grade con procesamiento neural</p>
        </div>
        <div class="tech-grid">
          <mat-card class="tech-card" *ngFor="let tech of techStack">
            <mat-icon class="tech-logo" [style.color]="tech.color">{{ tech.icon }}</mat-icon>
            <h3>{{ tech.name }}</h3>
            <p>{{ tech.desc }}</p>
          </mat-card>
        </div>
      </section>

      <!-- Features -->
      <section class="features-section">
        <div class="section-header dark">
          <mat-icon class="header-icon">psychology</mat-icon>
          <h2>Inteligencia Artificial</h2>
          <p>Automatización predictiva para tu hogar</p>
        </div>
        <div class="features-grid">
          <div class="feature-card" *ngFor="let feat of features">
            <div class="card-icon">
              <mat-icon>{{ feat.icon }}</mat-icon>
            </div>
            <h3>{{ feat.title }}</h3>
            <p>{{ feat.desc }}</p>
            <div class="card-tags">
              <span class="tag" *ngFor="let tag of feat.tags">{{ tag }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="quantum-cta">
        <div class="cta-glass">
          <h2>El Futuro del Trabajo es Ya Quedo</h2>
          <p>Únete a la revolución del talento independiente. Sin intermediarios.</p>
          <div class="cta-buttons">
            <a mat-raised-button color="accent" routerLink="/register" class="btn-mega">
              <mat-icon>rocket_launch</mat-icon>
              Comenzar Ahora
            </a>
            <a mat-stroked-button routerLink="/login" class="btn-mega btn-outline">
              <mat-icon>login</mat-icon>
              Ya tengo cuenta
            </a>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="quantum-footer">
        <div class="footer-content">
          <div class="footer-brand">
            <mat-icon>bolt</mat-icon>
            <span>Ya Quedo</span>
          </div>
          <div class="footer-links">
            <a href="https://github.com/UPJOSE/Ya-Quedo" target="_blank">GitHub</a>
            <a href="#">API</a>
            <a href="#">Docs</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 Ya Quedo by TetraDev | Angular 17 + Spring Boot 3.2 + PostgreSQL 16</p>
        </div>
      </footer>
    </div>
  `,

  styleUrl: './landing.component.css'
})
export class LandingComponent {
  particles = Array.from({ length: 30 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  services = [
    { name: 'Electricidad', icon: 'electrical_services' },
    { name: 'Gasfitería', icon: 'plumbing' },
    { name: 'Pintura', icon: 'format_paint' },
    { name: 'Carpintería', icon: 'carpenter' }
  ];

  techStack = [
    { name: 'Angular 17', desc: 'Signals & SSR', icon: 'brush', color: '#dd0031' },
    { name: 'Spring Boot', desc: 'Java 21 + VT', icon: 'cloud', color: '#6db33f' },
    { name: 'PostgreSQL', desc: 'JSONB & Search', icon: 'storage', color: '#336791' },
    { name: 'AI Core', desc: 'Neural Matching', icon: 'psychology', color: '#a855f7' }
  ];

  features = [
    {
      icon: 'neurology',
      title: 'Matching IA',
      desc: 'Algoritmos de ML analizan historial, ubicación y disponibilidad para conectar el trabajador perfecto.',
      tags: ['ML', 'NLP', 'Geo']
    },
    {
      icon: 'my_location',
      title: 'Geolocalización',
      desc: 'Ubicación en tiempo real con zonas de servicio dinámicas y estimación inteligente de tiempos.',
      tags: ['GPS', 'Real-time']
    },
    {
      icon: 'verified_user',
      title: 'Trust Score',
      desc: 'Sistema de reputación con calificaciones, historial y validación de documentos.',
      tags: ['KYC', 'Reviews']
    },
    {
      icon: 'payments',
      title: 'Pagos Seguros',
      desc: 'Gateway integrado con escrow, facturación electrónica y múltiples métodos de pago.',
      tags: ['Escrow', 'Billing']
    }
  ];
}