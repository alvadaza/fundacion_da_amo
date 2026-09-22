import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero-viewport">
      {/* VIDEO DE FONDO */}{" "}
      <video className="hero-background-video" autoPlay muted loop playsInline>
        {" "}
        <source src="fundamor.mp4" type="video/mp4" />{" "}
      </video>{" "}
      {/* CAPA DE FONDO VISUAL CON DEGRADADO */}{" "}
      <div className="hero-bg-overlay"></div>{" "}
      {/* ELEMENTOS DECORATIVOS DINÁMICOS */}{" "}
      <div className="glow-shape shape-1"></div>{" "}
      <div className="glow-shape shape-2"></div>{" "}
      <div className="hero-main-container">
        {" "}
        {/* LADO IZQUIERDO: TEXTO Y LLAMADO A LA ACCIÓN */}{" "}
        <div className="hero-content-block">
          {" "}
          <div className="hero-badge-pill">
            {" "}
            <span className="badge-pulse"></span> Fundación Da Amor (Fundamor) •
            ESAL{" "}
          </div>{" "}
          <h1 className="hero-heading">
            {" "}
            Transformamos realidades con{" "}
            <span className="highlight-blue">Deporte</span> y{" "}
            <span className="highlight-orange">Nutrición</span>{" "}
          </h1>{" "}
          <p className="hero-lead">
            {" "}
            Brindamos oportunidades reales a niños, jóvenes y familias
            vulnerables a través de nuestros{" "}
            <strong>Comedores Comunitarios</strong> y el{" "}
            <strong>Club Deportivo Fundamor</strong>.{" "}
          </p>{" "}
          <div className="hero-action-group">
            {" "}
            <a href="#donar" className="btn-hero-primary">
              {" "}
              ❤️ Donar o Apoyar{" "}
            </a>{" "}
            <a href="#servicios" className="btn-hero-secondary">
              {" "}
              ⚽ Explorar Programas{" "}
            </a>{" "}
          </div>{" "}
          {/* INDICADORES RÁPIDOS */}{" "}
          <div className="hero-trust-strip">
            {" "}
            <div className="trust-item">
              {" "}
              <span className="trust-number">+50k</span>{" "}
              <span className="trust-label">
                {" "}
                Platos de comida servidos{" "}
              </span>{" "}
            </div>{" "}
            <div className="trust-divider"></div>{" "}
            <div className="trust-item">
              {" "}
              <span className="trust-number">+800</span>{" "}
              <span className="trust-label">
                {" "}
                Jóvenes becados en deporte{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
