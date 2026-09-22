import React, { useState } from "react";
import "./Educacion.css";

export default function EducacionPage() {
  const [activeFilter, setActiveFilter] = useState("todos");

  const cursosProgramas = [
    {
      id: "abc-digital",
      categoria: "plataforma",
      titulo: "Plataforma Educativa ABCDIGITALSTEAM",
      tag: "Filial Oficial",
      icono: "🚀",
      desc: "Nuestra plataforma e-learning para formación en tecnología, robótica, programación y habilidades del siglo XXI.",
      destacado: true,
      enlace: "https://abcdigitalsteam.com.co",
      btnTexto: "Ingresar a abcdigitalsteam.com.co ↗",
    },
    {
      id: "alfabetizacion",
      categoria: "digital",
      titulo: "Alfabetización Digital e Internet Seguro",
      tag: "Inclusión Digital",
      icono: "💻",
      desc: "Capacitación básica en uso de computadores, herramientas ofimáticas, navegación segura y ciudadanía digital para niños, jóvenes y adultos.",
      destacado: false,
      enlace: "https://abcdigitasteam.com.co",
      btnTexto: "Ver Cursos Digitales",
    },
    {
      id: "stem-programacion",
      categoria: "stem",
      titulo: "Semillero STEM & Pensamiento Lógico",
      tag: "Tecnología & Ciencia",
      icono: "🤖",
      desc: "Introducción a la programación de bloques, lógica computacional y proyectos interactivos diseñados para despertar la vocación científica.",
      destacado: false,
      enlace: "https://abcdigitalsteam.com.co",
      btnTexto: "Ver Ruta STEM",
    },
    {
      id: "refuerzo-escolar",
      categoria: "escolar",
      titulo: "Refuerzo Escolar y Tutorías",
      tag: "Acompañamiento Pedagógico",
      icono: "📚",
      desc: "Apoyo personalizado en lectura, matemáticas y ciencias para prevenir la deserción escolar y mejorar el rendimiento académico.",
      destacado: false,
      enlace: "#contacto",
      btnTexto: "Solicitar Tutoría",
    },
    {
      id: "oficios-laboral",
      categoria: "laboral",
      titulo: "Talleres de Emprendimiento y Oficios",
      tag: "Capacitación Laboral",
      icono: "🛠️",
      desc: "Formación práctica en herramientas digitales para el empleo, marketing básico para emprendedores y desarrollo de proyectos comunitarios.",
      destacado: false,
      enlace: "https://abcdigitalsteam.com.co",
      btnTexto: "Explorar Talleres",
    },
  ];

  const galeriaMultimedia = [
    {
      id: 1,
      tipo: "imagen",
      categoria: "stem",
      titulo: "Taller de Robótica y Código",
      subtitulo: "Niños aprendiendo lógica computacional",
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      tipo: "imagen",
      categoria: "plataforma",
      titulo: "Plataforma ABCDIGITALSTEAM en Aula",
      subtitulo: "Estudiantes navegando la plataforma filial",
      url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      tipo: "imagen",
      categoria: "digital",
      titulo: "Aulas Digitales Comunitarias",
      subtitulo: "Inclusión tecnológica para jóvenes",
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      tipo: "video",
      categoria: "videos",
      titulo: "Conoce nuestra filial ABCDIGITALSTEAM",
      subtitulo: "Impacto educativo en tecnología e inclusión",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const programasFiltrados = cursosProgramas.filter((item) => {
    if (activeFilter === "todos") return true;
    return item.categoria === activeFilter;
  });

  const galeriaFiltrada = galeriaMultimedia.filter((item) => {
    if (activeFilter === "todos") return true;
    return (
      item.categoria === activeFilter ||
      (activeFilter === "videos" && item.tipo === "video")
    );
  });

  return (
    <div className="educacion-page-wrapper">
      {/* 1. HERO HEADER DE EDUCACIÓN */}
      <header className="educacion-hero-header">
        <div className="educacion-hero-overlay"></div>
        <div className="educacion-hero-content">
          <span className="educacion-hero-badge">
            📚 Educación & Inclusión Digital
          </span>
          <h1 className="educacion-hero-title">
            Transformación educativa y formación en tecnología para el futuro
          </h1>
          <p className="educacion-hero-subtitle">
            En la <strong>Fundación Fundamor</strong> impulsamos el desarrollo
            humano a través de la educación integral, la tecnología y el
            aprendizaje continuo, potenciados por nuestra filial especializada{" "}
            <strong>ABCDIGITALSTEAM</strong>.
          </p>
          <div className="educacion-hero-actions">
            <a
              href="https://abcdigitalsteam.com.co"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-educacion-hero-primary"
            >
              🚀 Visitar abcdigitalsteam.com.co
            </a>
            <a href="#cursos" className="btn-educacion-hero-secondary">
              📖 Explorar Programas
            </a>
          </div>
        </div>
      </header>

      {/* 2. BANDA DE IMPACTO Y CIFRAS */}
      <section className="educacion-stats-strip">
        <div className="educacion-stats-container">
          <div className="stat-card">
            <span className="stat-number">+1,200</span>
            <span className="stat-label">Estudiantes Capacitados</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <span className="stat-number">100%</span>
            <span className="stat-label">Acceso a la Plataforma Filial</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <span className="stat-number">+15</span>
            <span className="stat-label">Talleres & Cursos Activos</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card">
            <span className="stat-number">ABCDIGITAS</span>
            <span className="stat-label">Plataforma Filial Oficial</span>
          </div>
        </div>
      </section>

      {/* 3. BANNER DESTACADO PLATAFORMA FILIAL ABCDIGITALSTEAM */}
      <section className="filial-highlight-section">
        <div className="filial-card-container">
          <div className="filial-content-grid">
            <div className="filial-text-col">
              <span className="filial-badge">🌐 Plataforma Filial Oficial</span>
              <h2 className="filial-title">ABCDIGITALSTEAM.COM.CO</h2>
              <p className="filial-desc">
                <strong>ABCDIGITALSTEAM</strong> es la plataforma educativa
                digital filial de la <strong>Fundación Fundamor</strong>. Nace
                con el propósito de llevar educación STEM (Ciencia, Tecnología,
                Ingeniería, Arte y Matemáticas), programación, robótica y
                desarrollo de habilidades digitales a cada rincón de nuestra
                comunidad.
              </p>
              <ul className="filial-check-list">
                <li>Aulas virtuales y cursos e-learning interactivos.</li>
                <li>
                  Rutas de aprendizaje en tecnología y emprendimiento digital.
                </li>
                <li>
                  Certificaciones de participación y acompañamiento docente.
                </li>
              </ul>
              <div className="filial-action-box">
                <a
                  href="https://abcdigitalsteam.com.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-filial-launch"
                >
                  Ir a abcdigitalsteam.com.co ↗
                </a>
              </div>
            </div>
            <div className="filial-visual-col">
              <div className="filial-image-card">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
                  alt="Plataforma ABCDIGITALSTEAM"
                  className="filial-img"
                />
                <div className="filial-floating-badge">
                  <span>🚀 Filial Educativa Fundamor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMAS Y PROGRAMA EDUCATIVO */}
      <section id="cursos" className="educacion-programas-section">
        <div className="educacion-section-container">
          <div className="section-header-center">
            <span className="section-badge-pill">Líneas Formativas</span>
            <h2 className="section-title-dark">
              Programas Educativos y Capacitación
            </h2>
            <p className="section-subtitle-muted">
              Estructuramos nuestras iniciativas educativas en alianzas
              estratégicas con la plataforma filial para formar líderes con
              competencias digitales y valores.
            </p>
          </div>

          {/* FILTROS DINÁMICOS */}
          <div className="filter-buttons-bar">
            <button
              className={`filter-btn ${activeFilter === "todos" ? "active" : ""}`}
              onClick={() => setActiveFilter("todos")}
            >
              Todos los Programas
            </button>

            <button
              className={`filter-btn ${activeFilter === "plataforma" ? "active" : ""}`}
              onClick={() => setActiveFilter("plataforma")}
            >
              🚀 Plataforma Filial
            </button>

            <button
              className={`filter-btn ${activeFilter === "digital" ? "active" : ""}`}
              onClick={() => setActiveFilter("digital")}
            >
              💻 Inclusión Digital
            </button>

            <button
              className={`filter-btn ${activeFilter === "stem" ? "active" : ""}`}
              onClick={() => setActiveFilter("stem")}
            >
              🤖 Semillero STEM
            </button>

            <button
              className={`filter-btn ${activeFilter === "escolar" ? "active" : ""}`}
              onClick={() => setActiveFilter("escolar")}
            >
              📚 Refuerzo Escolar
            </button>
          </div>

          {/* GRILLA DE PROGRAMAS */}
          <div className="cursos-grid">
            {programasFiltrados.map((item) => (
              <div
                key={item.id}
                className={`curso-card ${item.destacado ? "card-featured" : ""}`}
              >
                <div className="card-top-header">
                  <span className="curso-icon">{item.icono}</span>
                  <span className="curso-tag-pill">{item.tag}</span>
                </div>
                <h3 className="curso-card-title">{item.titulo}</h3>
                <p className="curso-card-desc">{item.desc}</p>
                <div className="curso-card-footer">
                  {item.enlace.startsWith("http") ? (
                    <a
                      href={item.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-curso-action"
                    >
                      {item.btnTexto}
                    </a>
                  ) : (
                    <a href={item.enlace} className="btn-curso-action">
                      {item.btnTexto}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALERÍA MULTIMEDIA Y VIDEOS */}
      <section className="educacion-media-section">
        <div className="educacion-section-container">
          <div className="section-header-center">
            <span className="section-badge-pill">Galería & Experiencias</span>
            <h2 className="section-title-dark">
              Aulas, Talleres y Plataforma en Acción
            </h2>
            <p className="section-subtitle-muted">
              Conoce en imágenes y videos cómo la educación y la tecnología
              transforman el futuro de nuestra comunidad.
            </p>
          </div>

          <div className="media-grid">
            {galeriaFiltrada.map((media) => (
              <div key={media.id} className="media-card">
                {media.tipo === "imagen" ? (
                  <div className="media-image-box">
                    <img
                      src={media.url}
                      alt={media.titulo}
                      className="media-img"
                    />
                    <div className="media-overlay-content">
                      <h4 className="media-title">{media.titulo}</h4>
                      <p className="media-subtitle">{media.subtitulo}</p>
                    </div>
                  </div>
                ) : (
                  <div className="media-video-box">
                    <div className="video-responsive">
                      <iframe
                        src={media.videoUrl}
                        title={media.titulo}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="video-caption">
                      <h4>{media.titulo}</h4>
                      <p>{media.subtitulo}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LLAMADO A LA ACCIÓN A LA PLATAFORMA FILIAL */}
      <section className="educacion-cta-section">
        <div className="cta-container">
          <span className="cta-badge">Aprende & Crece</span>
          <h2 className="cta-title">
            ¡Ingresa a nuestra plataforma filial y comienza tu ruta digital hoy!
          </h2>
          <p className="cta-desc">
            En alianza con <strong>abcdigitalsteam.com.co</strong>, brindamos
            herramientas digitales accesibles para transformar el conocimiento
            en oportunidades de vida.
          </p>
          <div className="cta-buttons">
            <a
              href="https://abcdigitalsteam.com.co"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-launch"
            >
              Ir a abcdigitasteam.com.co 🚀
            </a>
            <a href="#contacto" className="btn-cta-secondary">
              Contactar con Fundamor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
