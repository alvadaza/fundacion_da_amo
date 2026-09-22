import React, { useState } from "react";
import "./Programas.css";

export default function Programas() {
  const [filter, setFilter] = useState("todos");
  const [selectedPrograma, setSelectedPrograma] = useState(null);

  // Lista modular de programas sociales
  const programasData = [
    {
      id: "club-deportivo",
      categoria: "deporte",
      icon: "⚽",
      titulo: "Club Deportivo Fundamor",
      subtitulo: "Formación Integral & Salud Deporte",
      badge: "Activo • Becas 100%",
      descripcion:
        "Entrenamiento deportivo en fútbol y disciplinas atléticas para niños, niñas y jóvenes. Fomentamos valores como la disciplina, el respeto, el trabajo en equipo y la prevención de conductas de riesgo social.",
      impacto: "+800 Jóvenes beneficiados",
      meta: "Meta 2026: 1,000 deportistas becados",
      detalles: [
        "Entrenamientos dirigidos por profesionales cualificados",
        "Equipamiento deportivo, uniformes e indumentaria gratuita",
        "Torneos comunitarios e intermunicipales",
        "Acompañamiento en hábitos de vida saludable y valores",
      ],
    },
    {
      id: "comedores",
      categoria: "nutricion",
      icon: "🍲",
      titulo: "Comedores Comunitarios",
      categoriaTag: "Nutrición & Bienestar",
      badge: "Diario • Familias",
      descripcion:
        "Garantizamos nutrición balanceada y de alta calidad para familias, adultos mayores y niños en situación de vulnerabilidad alimentaria, ofreciendo espacios cálidos de convivencia e integración comunitaria.",
      impacto: "+50,000 Raciones anuales",
      meta: "Atención continua en 12 sedes comunitarias",
      detalles: [
        "Menús supervisados por profesionales en nutrición",
        "Atención prioritaria a primera infancia y adultos mayores",
        "Talleres de higiene, cocina saludable y aprovechamiento de alimentos",
        "Acompañamiento social a familias del sector",
      ],
    },
    {
      id: "futuros-programas",
      categoria: "futuro",
      icon: "🚀",
      titulo: "Próximas Iniciativas Sociales",
      categoriaTag: "Línea de Expansión Modular",
      badge: "En Planificación",
      descripcion:
        "Nuestra estructura modular permite incorporar constantemente nuevos proyectos de impacto. Próximamente activaremos programas de capacitación laboral, brigadas médicas y talleres educativos.",
      impacto: "Espacio abierto a nuevas alianzas",
      meta: "Proyección 2027: Talleres de Artes y Oficios",
      detalles: [
        "Talleres educativos y de competencias digitales",
        "Brigadas de salud visual, oral y prevención integral",
        "Red de apoyo psicosocial y fortalecimiento familiar",
        "Módulo flexible preparado para sumar donantes y aliados",
      ],
    },
  ];

  const programasFiltrados =
    filter === "todos"
      ? programasData
      : programasData.filter((p) => p.categoria === filter);

  return (
    <section id="servicios" className="programas-section">
      <div className="programas-container">
        {/* ENCABEZADO */}
        <div className="section-header-center">
          <span className="section-eyebrow-orange">
            Líneas de Acción Social
          </span>
          <h2 className="section-title-large">
            Nuestros Programas Comunitarios
          </h2>
          <p className="section-lead-text">
            Soluciones integrales diseñadas para responder a las necesidades
            nutricionales, de salud y desarrollo personal en las comunidades.
          </p>
        </div>

        {/* FILTROS DINÁMICOS */}
        <div className="filter-buttons-bar">
          <button
            className={`filter-btn ${filter === "todos" ? "active" : ""}`}
            onClick={() => setFilter("todos")}
          >
            Todos los Programas
          </button>
          <button
            className={`filter-btn ${filter === "deporte" ? "active" : ""}`}
            onClick={() => setFilter("deporte")}
          >
            ⚽ Club Deportivo
          </button>
          <button
            className={`filter-btn ${filter === "nutricion" ? "active" : ""}`}
            onClick={() => setFilter("nutricion")}
          >
            🍲 Comedores Comunitarios
          </button>
          <button
            className={`filter-btn ${filter === "futuro" ? "active" : ""}`}
            onClick={() => setFilter("futuro")}
          >
            🚀 Próximos Proyectos
          </button>
        </div>

        {/* GRILLA DE TARJETAS MODERNAS (NON-FLAT) */}
        <div className="programas-grid">
          {programasFiltrados.map((prog) => (
            <div key={prog.id} className="programa-card-modern" id={prog.id}>
              <div className="card-top-bar">
                <span className="card-icon-avatar">{prog.icon}</span>
                <span className="card-badge-status">{prog.badge}</span>
              </div>

              <h3 className="card-title-text">{prog.titulo}</h3>
              <p className="card-desc-text">{prog.descripcion}</p>

              <div className="card-highlight-pill">
                <span className="pill-label">Impacto Directo:</span>
                <strong className="pill-value">{prog.impacto}</strong>
              </div>

              <div className="card-footer-action">
                <button
                  className="btn-details-trigger"
                  onClick={() => setSelectedPrograma(prog)}
                >
                  Ver Detalles & Cobertura ➔
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL / PANEL EXPANDIBLE DE DETALLES */}
        {selectedPrograma && (
          <div
            className="modal-backdrop"
            onClick={() => setSelectedPrograma(null)}
          >
            <div
              className="modal-container-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedPrograma(null)}
              >
                ✕
              </button>
              <div className="modal-header-flex">
                <span className="modal-icon">{selectedPrograma.icon}</span>
                <div>
                  <h3 className="modal-title">{selectedPrograma.titulo}</h3>
                  <span className="modal-tag">{selectedPrograma.badge}</span>
                </div>
              </div>

              <p className="modal-description">
                {selectedPrograma.descripcion}
              </p>

              <div className="modal-section-details">
                <h4>Componentes Principales del Programa:</h4>
                <ul className="modal-list">
                  {selectedPrograma.detalles.map((det, idx) => (
                    <li key={idx}>✓ {det}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-footer-cta">
                <a
                  href="#donar"
                  className="btn-modal-donate"
                  onClick={() => setSelectedPrograma(null)}
                >
                  ❤️ Apoyar este Programa
                </a>
                <a
                  href="#contacto"
                  className="btn-modal-contact"
                  onClick={() => setSelectedPrograma(null)}
                >
                  📩 Consultar o Voluntariado
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
