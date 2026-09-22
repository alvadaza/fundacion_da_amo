import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-site">
      <div className="footer-container">
        {/* COLUMNA 1: BRANDING & REGISTRO */}
        <div className="footer-brand-col">
          <div className="footer-logo">
            FUNDA<span className="logo-accent">MOR</span>
          </div>
          <span className="footer-tagline">Fundación Da Amor</span>
          <p className="footer-about">
            Entidad Sin Ánimo de Lucro (ESAL) dedicada al fortalecimiento social
            mediante nuestros comedores comunitarios y el Club Deportivo
            Fundamor.
          </p>
          <div className="legal-badge-pill">
            🏛️ Régimen Tributario Especial (DIAN)
          </div>
        </div>

        {/* COLUMNA 2: PROGRAMAS */}
        <div className="footer-nav-col">
          <h4>Programas Sociales</h4>
          <ul>
            <li>
              <a href="#club-deportivo">⚽ Club Deportivo Fundamor</a>
            </li>
            <li>
              <a href="#comedores">🍲 Comedores Comunitarios</a>
            </li>
            <li>
              <a href="#futuros-programas">🚀 Proyectos Futuros</a>
            </li>
            <li>
              <a href="#donar">❤️ Red de Donantes</a>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3: NAVEGACIÓN RÁPIDA */}
        <div className="footer-nav-col">
          <h4>Navegación</h4>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#quienes-somos">Quiénes Somos</a>
            </li>
            <li>
              <a href="#mision">Misión & Visión</a>
            </li>
            <li>
              <a href="#contacto">Contacto & Voluntariado</a>
            </li>
          </ul>
        </div>

        {/* COLUMNA 4: BOLETÍN / TRANS PARENCIA */}
        <div className="footer-action-col" id="donar">
          <h4>Transparencia & Ayuda</h4>
          <p className="footer-text-sm">
            Recibe informes de gestión y avances de nuestros comedores
            comunitarios.
          </p>
          <div className="footer-donate-card">
            <strong>¿Deseas realizar un aporte?</strong>
            <p>
              Contáctanos para transferencias directas, donación de alimentos o
              indumentaria deportiva.
            </p>
            <a href="#contacto" className="btn-footer-cta">
              Donar / Sumarme
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p>
            © {new Date().getFullYear()} Fundación Fundamor (Fundación Da Amor).
            Todos los derechos reservados.
          </p>
          <div className="footer-legal-links">
            <span>Política de Privacidad</span>
            <span>•</span>
            <span>Transparencia ESAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
