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
  styles: [`
    :host { display: block; }
    
    .quantum-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0f0f2f 100%);
      color: #fff;
      position: relative;
    }

    /* Particles */
    .particle-field {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(99,102,241,0.6);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;
      animation-delay: var(--delay);
      box-shadow: 0 0 10px rgba(99,102,241,0.8);
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
      50% { transform: translateY(-30px) scale(1.2); opacity: 1; }
    }

    /* Nav */
    .quantum-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 5%;
      background: rgba(10,10,26,0.8);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .nav-brand { display: flex; align-items: center; gap: 12px; }
    .brand-icon {
      font-size: 28px;
      width: 28px;
      height: 28px;
      color: #6366f1;
      animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    .brand-text {
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, #6366f1, #a855f7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .brand-badge {
      font-size: 0.7rem;
      padding: 4px 8px;
      background: linear-gradient(135deg, #6366f1, #a855f7);
      border-radius: 12px;
      font-weight: 600;
    }
    .nav-links { display: flex; gap: 16px; }
    .nav-link { color: rgba(255,255,255,0.8) !important; }
    .nav-cta {
      background: linear-gradient(135deg, #6366f1, #a855f7) !important;
      border: none !important;
    }

    /* Hero */
    .hero-quantum {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 120px 5% 80px;
      gap: 60px;
      position: relative;
      z-index: 1;
    }
    .hero-glass {
      flex: 1;
      max-width: 650px;
      padding: 48px;
      background: rgba(255,255,255,0.03);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: rgba(99,102,241,0.2);
      border: 1px solid rgba(99,102,241,0.3);
      border-radius: 50px;
      font-size: 0.85rem;
      color: #818cf8;
      margin-bottom: 32px;
    }
    .hero-title {
      font-size: 3.5rem;
      line-height: 1.1;
      margin: 0 0 24px 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .gradient-text {
      background: linear-gradient(135deg, #fff 0%, #818cf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-highlight {
      background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 800;
    }
    .hero-subtitle {
      font-size: 1.15rem;
      color: rgba(255,255,255,0.7);
      line-height: 1.7;
      margin-bottom: 32px;
    }
    .hero-metrics {
      display: flex;
      gap: 32px;
      margin-bottom: 40px;
    }
    .metric { display: flex; flex-direction: column; }
    .metric-value {
      font-size: 2rem;
      font-weight: 700;
      background: linear-gradient(135deg, #6366f1, #a855f7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .metric-label {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.5);
    }
    .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
    .btn-glow {
      padding: 16px 32px !important;
      font-size: 1rem !important;
      border-radius: 12px !important;
      transition: all 0.3s ease !important;
    }
    .btn-primary {
      background: linear-gradient(135deg, #6366f1, #a855f7) !important;
      box-shadow: 0 0 30px rgba(99,102,241,0.4) !important;
    }
    .btn-primary:hover {
      box-shadow: 0 0 50px rgba(99,102,241,0.6) !important;
      transform: translateY(-2px);
    }
    .btn-secondary {
      border: 2px solid rgba(255,255,255,0.3) !important;
      color: white !important;
    }
    .btn-secondary:hover {
      border-color: rgba(255,255,255,0.6) !important;
      background: rgba(255,255,255,0.1) !important;
    }

    /* Holo Grid */
    .hologrid {
      flex: 0 0 400px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .holo-card {
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px;
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      animation: holoFloat 5s ease-in-out infinite;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .holo-card:hover {
      transform: translateY(-8px);
      border-color: rgba(99,102,241,0.5);
      box-shadow: 0 0 30px rgba(99,102,241,0.3);
    }
    @keyframes holoFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .holo-icon {
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(99,102,241,0.3), rgba(168,85,247,0.3));
      border-radius: 12px;
    }
    .holo-icon mat-icon {
      font-size: 28px;
      width: 28px;
      height: 28px;
      color: #818cf8;
    }
    .holo-text {
      font-size: 0.9rem;
      font-weight: 500;
      color: rgba(255,255,255,0.9);
    }

    /* Tech Stack */
    .tech-stack {
      padding: 100px 5%;
      background: linear-gradient(180deg, #0a0a1a 0%, #0f0f2f 100%);
      position: relative;
      z-index: 1;
    }
    .section-header {
      text-align: center;
      margin-bottom: 60px;
    }
    .section-header.dark { color: white; }
    .header-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: #6366f1;
      margin-bottom: 16px;
    }
    .section-header h2 {
      font-size: 2.5rem;
      margin: 0 0 12px 0;
    }
    .section-header p {
      color: rgba(255,255,255,0.6);
      font-size: 1.1rem;
    }
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .tech-card {
      background: rgba(255,255,255,0.03) !important;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.1) !important;
      border-radius: 20px !important;
      padding: 40px 32px;
      text-align: center;
      transition: all 0.3s ease;
    }
    .tech-card:hover {
      transform: translateY(-8px);
      border-color: rgba(99,102,241,0.5) !important;
      box-shadow: 0 20px 40px rgba(99,102,241,0.2);
    }
    .tech-logo {
      font-size: 48px;
      width: 48px;
      height: 48px;
      margin-bottom: 20px;
    }
    .tech-card h3 {
      font-size: 1.3rem;
      margin: 0 0 8px 0;
      color: white;
    }
    .tech-card p {
      color: rgba(255,255,255,0.6);
      margin: 0;
    }

    /* Features */
    .features-section {
      padding: 100px 5%;
      background: linear-gradient(180deg, #0f0f2f 0%, #1a1a3e 100%);
      position: relative;
      z-index: 1;
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 32px;
      max-width: 1400px;
      margin: 0 auto;
    }
    .feature-card {
      background: rgba(255,255,255,0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px;
      padding: 40px 32px;
      transition: all 0.3s ease;
    }
    .feature-card:hover {
      transform: translateY(-8px);
      border-color: rgba(99,102,241,0.5);
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }
    .card-icon {
      width: 64px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2));
      border-radius: 16px;
      margin-bottom: 24px;
    }
    .card-icon mat-icon {
      font-size: 32px;
      width: 32px;
      height: 32px;
      color: #818cf8;
    }
    .feature-card h3 {
      font-size: 1.4rem;
      margin: 0 0 12px 0;
      color: white;
    }
    .feature-card p {
      color: rgba(255,255,255,0.7);
      line-height: 1.6;
      margin-bottom: 20px;
    }
    .card-tags { display: flex; gap: 8px; flex-wrap: wrap; }
    .tag {
      padding: 6px 12px;
      background: rgba(99,102,241,0.2);
      border: 1px solid rgba(99,102,241,0.3);
      border-radius: 20px;
      font-size: 0.75rem;
      color: #818cf8;
      font-weight: 500;
    }

    /* CTA */
    .quantum-cta {
      padding: 120px 5%;
      background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 100%);
      position: relative;
      z-index: 1;
    }
    .cta-glass {
      max-width: 800px;
      margin: 0 auto;
      padding: 60px 48px;
      background: rgba(255,255,255,0.03);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 32px;
      text-align: center;
    }
    .cta-glass h2 {
      font-size: 2.8rem;
      margin: 0 0 16px 0;
      background: linear-gradient(135deg, #fff 0%, #818cf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .cta-glass p {
      font-size: 1.2rem;
      color: rgba(255,255,255,0.7);
      margin-bottom: 40px;
    }
    .cta-buttons { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
    .btn-mega {
      padding: 20px 48px !important;
      font-size: 1.1rem !important;
      border-radius: 16px !important;
    }
    .btn-outline {
      border: 2px solid rgba(255,255,255,0.3) !important;
      color: white !important;
    }
    .btn-outline:hover {
      border-color: rgba(255,255,255,0.6) !important;
      background: rgba(255,255,255,0.1) !important;
    }

    /* Footer */
    .quantum-footer {
      background: rgba(0,0,0,0.5);
      padding: 40px 5%;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto 24px;
    }
    .footer-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.3rem;
      font-weight: 600;
    }
    .footer-brand mat-icon {
      color: #6366f1;
    }
    .footer-links { display: flex; gap: 24px; }
    .footer-links a {
      color: rgba(255,255,255,0.6);
      text-decoration: none;
      transition: color 0.3s;
    }
    .footer-links a:hover { color: #818cf8; }
    .footer-bottom {
      text-align: center;
      color: rgba(255,255,255,0.4);
      font-size: 0.9rem;
    }

    /* Responsive */
    @media (max-width: 1024px) {
      .hero-quantum { flex-direction: column; }
      .hologrid { flex: none; width: 100%; max-width: 400px; }
      .hero-title { font-size: 2.5rem; }
    }
    @media (max-width: 768px) {
      .hero-title { font-size: 2rem; }
      .section-header h2 { font-size: 1.8rem; }
      .cta-glass h2 { font-size: 2rem; }
      .hero-glass { padding: 32px 24px; }
      .hologrid { grid-template-columns: repeat(2, 1fr); }
      .nav-links { display: none; }
      .footer-content { flex-direction: column; gap: 20px; }
    }
  `]
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
