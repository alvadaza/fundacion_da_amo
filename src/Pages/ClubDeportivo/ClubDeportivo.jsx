import React, { useState } from "react";
import "./ClubDeportivo.css";

export default function ClubDeportivoPage() {
  const [activeFilter, setActiveFilter] = useState("todos");

  const disciplinas = [
    {
      id: "futbol",
      nombre: "Fútbol Formativo",
      icon: "⚽",
      categoria: "Deporte de Equipo",
      descripcion:
        "Entrenamiento técnico, táctico y físico con enfoque en trabajo en equipo, solidaridad y respeto dentro y fuera de la cancha.",
      caracteristicas: [
        "Entrenamientos semanales estructurados",
        "Participación en torneos locales e interbarriales",
        "Entrega de indumentaria y petos deportivos",
        "Acompañamiento psicológico y valores",
      ],
      badgeColor: "#1e3a8a",
      bgImage:
        "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "futsal",
      nombre: "Futsal (Fútbol Sala)",
      icon: "👟",
      categoria: "Agilidad y Espacios Reducidos",
      descripcion:
        "Desarrollo de agilidad, control rápido del balón y toma de decisiones en cancha cubierta. Ideal para mejorar la técnica individual.",
      caracteristicas: [
        "Control dinámico y pase rápido",
        "Canchas polideportivas comunitarias",
        "Torneos relámpago de integración",
        "Desarrollo de reflejos y estrategia",
      ],
      badgeColor: "#2563eb",
      bgImage:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "taekwondo",
      nombre: "Taekwondo Marcial",
      icon: "🥋",
      categoria: "Arte Marcial y Autocontrol",
      descripcion:
        "Formación en disciplina, cortesía, autocontrol, perseverancia y espíritu indomable a través del arte marcial olímpico.",
      caracteristicas: [
        "Avanzamiento de cinturones graduados",
        "Defensa personal y coordinación corporal",
        "Exhibiciones y maratones marciales",
        "Formación del carácter y el respeto",
      ],
      badgeColor: "#dc2626",
      bgImage:
        "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "patinaje",
      nombre: "Patinaje de Velocidad y Recreativo",
      icon: "🛼",
      categoria: "Coordinación y Resistencia",
      descripcion:
        "Fomento del equilibrio, la postura, la fuerza muscular y la velocidad sobre ruedas en un ambiente seguro y motivador.",
      caracteristicas: [
        "Técnica de zancada y frenado seguro",
        "Pistas comunitarias y circuitos adaptados",
        "Uso obligatorio de casco y protecciones",
        "Festivales de patinaje infantil",
      ],
      badgeColor: "#f97316",
      bgImage:
        "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const galeriaItems = [
    {
      id: 1,
      tipo: "foto",
      categoria: "futbol",
      titulo: "Torneo de Fútbol Infantil Fundamor",
      subtitulo: "Jornada de integración y juego limpio",
      url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      tipo: "video",
      categoria: "videos",
      titulo: "Demostración de Taekwondo y Cambio de Cintas",
      subtitulo: "Exhibición de disciplina y perseverancia",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      tipo: "foto",
      categoria: "futsal",
      titulo: "Final del Torneo Comunitario de Futsal",
      subtitulo: "Emoción y trabajo en equipo en cancha cubierta",
      url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      tipo: "foto",
      categoria: "patinaje",
      titulo: "Festival de Patinaje sobre Ruedas",
      subtitulo: "Niños y niñas demostrando destreza y equilibrio",
      url: "https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      tipo: "video",
      categoria: "videos",
      titulo: "Testimonio de un Joven Becado en Fútbol",
      subtitulo: "Cómo el deporte transformó su proyecto de vida",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 6,
      tipo: "foto",
      categoria: "taekwondo",
      titulo: "Clase Abierta de Taekwondo Fundamor",
      subtitulo: "Entrenamiento de enfoque, respeto y autocontrol",
      url: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const galeriaFiltrada =
    activeFilter === "todos"
      ? galeriaItems
      : galeriaItems.filter((item) => item.categoria === activeFilter);

  return (
    <div className="club-page-wrapper">
      {/* 1. HERO BANNER PRINCIPAL */}
      <section className="club-hero-banner">
        <div className="club-hero-overlay"></div>
        <div className="club-hero-container">
          <span className="club-badge-hero">🏆 Club Deportivo Fundamor</span>
          <h1 className="club-hero-title">
            Transformando vidas a través del{" "}
            <span className="highlight-orange">Deporte</span>, la{" "}
            <span className="highlight-blue">Disciplina</span> y los{" "}
            <span className="highlight-orange">Valores</span>
          </h1>
          <p className="club-hero-description">
            Brindamos formación deportiva gratuita e integral en{" "}
            <strong>Fútbol</strong>, <strong>Futsal</strong>,{" "}
            <strong>Taekwondo</strong> y <strong>Patinaje</strong> para niños,
            jóvenes y familias en entornos de vulnerabilidad social.
          </p>
          <div className="club-hero-actions">
            <a href="#contacto" className="btn-club-hero-primary">
              🏆 Becar a un Deportista
            </a>
            <a href="#disciplinas" className="btn-club-hero-secondary">
              ⚽ Explorar Disciplinas
            </a>
          </div>
        </div>
      </section>

      {/* 2. BANDA DE CIFRAS DE IMPACTO */}
      <section className="club-stats-strip">
        <div className="club-stats-container">
          <div className="club-stat-box">
            <span className="stat-number">+800</span>
            <span className="stat-label">Jóvenes Becados</span>
          </div>
          <div className="stat-divider"></div>
          <div className="club-stat-box">
            <span className="stat-number">4</span>
            <span className="stat-label">Disciplinas Activas</span>
          </div>
          <div className="stat-divider"></div>
          <div className="club-stat-box">
            <span className="stat-number">100%</span>
            <span className="stat-label">Formación en Valores</span>
          </div>
          <div className="stat-divider"></div>
          <div className="club-stat-box">
            <span className="stat-number">15+</span>
            <span className="stat-label">Torneos y Exhibiciones</span>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE DISCIPLINAS DEPORTIVAS */}
      <section id="disciplinas" className="club-disciplinas-section">
        <div className="club-section-header">
          <span className="sub-tag">Nuestras Escuelas</span>
          <h2>Disciplinas Deportivas del Club Fundamor</h2>
          <p>
            Cada una de nuestras escuelas combina entrenamiento físico de
            calidad con principios éticos, trabajo en equipo y prevención del
            riesgo social.
          </p>
        </div>

        <div className="disciplinas-grid">
          {disciplinas.map((disc) => (
            <div key={disc.id} className="disciplina-card">
              <div
                className="disc-card-header"
                style={{
                  backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.8)), url(${disc.bgImage})`,
                }}
              >
                <span className="disc-icon">{disc.icon}</span>
                <span
                  className="disc-category"
                  style={{ backgroundColor: disc.badgeColor }}
                >
                  {disc.categoria}
                </span>
                <h3 className="disc-title">{disc.nombre}</h3>
              </div>
              <div className="disc-card-body">
                <p className="disc-desc">{disc.descripcion}</p>
                <h4 className="disc-subtitle">Lo que incluye:</h4>
                <ul className="disc-list">
                  {disc.caracteristicas.map((item, idx) => (
                    <li key={idx}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SECCIÓN MULTIMEDIA: FOTOS Y VIDEOS */}
      <section className="club-galeria-section">
        <div className="club-section-header">
          <span className="sub-tag">Galería de Impacto</span>
          <h2>Fotos, Videos y Testimonios en Acción</h2>
          <p>
            Conoce de cerca la vivencia de nuestros jóvenes deportistas en
            entrenamientos, torneos y exhibiciones marciales.
          </p>
        </div>

        {/* BARRA DE FILTROS */}
        <div className="galeria-filter-bar">
          <button
            className={`filter-btn ${activeFilter === "todos" ? "active" : ""}`}
            onClick={() => setActiveFilter("todos")}
          >
            🌟 Todos
          </button>
          <button
            className={`filter-btn ${activeFilter === "futbol" ? "active" : ""}`}
            onClick={() => setActiveFilter("futbol")}
          >
            ⚽ Fútbol
          </button>
          <button
            className={`filter-btn ${activeFilter === "futsal" ? "active" : ""}`}
            onClick={() => setActiveFilter("futsal")}
          >
            👟 Futsal
          </button>
          <button
            className={`filter-btn ${activeFilter === "taekwondo" ? "active" : ""}`}
            onClick={() => setActiveFilter("taekwondo")}
          >
            🥋 Taekwondo
          </button>
          <button
            className={`filter-btn ${activeFilter === "patinaje" ? "active" : ""}`}
            onClick={() => setActiveFilter("patinaje")}
          >
            🛼 Patinaje
          </button>
          <button
            className={`filter-btn ${activeFilter === "videos" ? "active" : ""}`}
            onClick={() => setActiveFilter("videos")}
          >
            🎬 Videos & Testimonios
          </button>
        </div>

        {/* GRID MULTIMEDIA */}
        <div className="galeria-grid">
          {galeriaFiltrada.map((item) => (
            <div key={item.id} className="galeria-card animate-fadeIn">
              {item.tipo === "foto" ? (
                <div className="media-photo-box">
                  <img src={item.url} alt={item.titulo} loading="lazy" />
                  <div className="photo-overlay">
                    <h4>{item.titulo}</h4>
                    <p>{item.subtitulo}</p>
                  </div>
                </div>
              ) : (
                <div className="media-video-box">
                  <iframe
                    src={item.embedUrl}
                    title={item.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="video-info">
                    <h4>{item.titulo}</h4>
                    <p>{item.subtitulo}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. METODOLOGÍA Y PILARES DEL CLUB */}
      <section className="club-pilares-section">
        <div className="club-section-header">
          <span className="sub-tag">Formación Humana</span>
          <h2>Nuestros Pilares de Entrenamiento</h2>
        </div>

        <div className="pilares-grid">
          <div className="pilar-card">
            <span className="pilar-icon">🛡️</span>
            <h3>Disciplina & Respeto</h3>
            <p>
              El deporte es nuestra herramienta para formar ciudadanos éticos,
              puntuales y comprometidos con su comunidad.
            </p>
          </div>
          <div className="pilar-card">
            <span className="pilar-icon">👨‍🏫</span>
            <h3>Entrenadores Capacitados</h3>
            <p>
              Formadores deportivos apasionados con enfoque pedagógico, humano y
              preventivo.
            </p>
          </div>
          <div className="pilar-card">
            <span className="pilar-icon">👕</span>
            <h3>Indumentaria & Becas</h3>
            <p>
              Garantizamos que el factor económico no sea un impedimento para el
              talento de nuestros niños y niñas.
            </p>
          </div>
          <div className="pilar-card">
            <span className="pilar-icon">👨‍👩‍👧‍👦</span>
            <h3>Integración Familiar</h3>
            <p>
              Involucramos a los padres de familia en partidos, jornadas de aseo
              de escenarios y celebraciones comunitarias.
            </p>
          </div>
        </div>
      </section>

      {/* 6. LLAMADO A LA ACCIÓN / DONACIÓN Y REQUISITOS */}
      <section className="club-cta-section">
        <div className="cta-container">
          <h2>¿Quieres impulsar a un niño o joven deportista?</h2>
          <p>
            Con tu apadrinamiento o donación, garantizas uniformes,
            implementación deportiva, pago de juzgamiento en torneos y
            transporte para nuestros equipos de Fútbol, Futsal, Taekwondo y
            Patinaje.
          </p>
          <div className="cta-buttons">
            <a href="#contacto" className="btn-cta-gold">
              🏆 Becar a un Deportista
            </a>
            <a href="#contacto" className="btn-cta-outline">
              📝 Inscripciones y Requisitos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
