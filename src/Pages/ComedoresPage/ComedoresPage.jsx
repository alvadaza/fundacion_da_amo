/* ==========================================
   1. ComedoresPage.jsx
   ========================================== */
import React, { useState } from "react";
import "./ComedoresPage.css";
import Footer from "../../components/Footer/Footer";
export default function ComedoresPage() {
  const [activeTab, setActiveTab] = useState("galeria");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  // Galería de Fotos y Videos con categorías
  const mediaItems = [
    {
      id: 1,
      type: "foto",
      category: "almuerzos",
      title: "Alimentación Balanceada Diario",
      description:
        "Menús supervisados por nutricionistas para garantizar proteína, verdura y carbohidratos adecuados.",
      imageUrl: "nuticion.webp",
      badge: "nuticion.webp",
    },
    {
      id: 2,
      type: "video",
      category: "historias",
      title: "Un Día en Nuestro Comedor Comunitario",
      description:
        "Conoce el recorrido diario desde la preparación a las 5:00 AM hasta la sonrisa de cada niño al recibir su plato.",
      videoUrl: "fundamor.mp4", // Reemplazar con URL o tag de video propio
      posterUrl: "videodocumental.avif",
      badge: "Video Documental",
    },
    {
      id: 3,
      type: "foto",
      category: "comunidad",
      title: "Integración y Convivencia Familiar",
      description:
        "Espacios seguros donde madres comunitarias, niños y adultos mayores comparten en un ambiente lleno de amor.",
      imageUrl: "comunidad.webp",
      badge: "comunidad.webp",
    },
    {
      id: 4,
      type: "foto",
      category: "almuerzos",
      title: "Jornadas de Entrega y Talleres",
      description:
        "Complementamos la ración de comida con talleres de higiene oral y hábitos saludables para la primera infancia.",
      imageUrl: "salud y igiene.webp",
      badge: "salud y igiene.webp",
    },
  ];

  const filteredMedia =
    selectedCategory === "todos"
      ? mediaItems
      : mediaItems.filter(
          (item) =>
            item.category === selectedCategory ||
            item.type === selectedCategory,
        );

  return (
    <div className="comedores-page-wrapper">
      {/* 1. HERO HEADER DE LA PÁGINA */}
      <section className="comedores-hero-header">
        <div className="comedores-hero-overlay"></div>
        <div className="comedores-hero-content">
          <span className="comedores-hero-badge">
            🍲 Programa Social Nutricional
          </span>
          <h1 className="comedores-hero-title">
            Comedores Comunitarios Fundamor
          </h1>
          <p className="comedores-hero-lead">
            Garantizamos seguridad alimentaria, nutrición de alto valor y
            espacios de acogida con amor para cientos de niños, jóvenes y
            familias en situación de vulnerabilidad.
          </p>
          <div className="comedores-hero-actions">
            <a href="/donaciones" className="btn-comedores-hero-primary">
              ❤️ Donar un Menú o Insumos
            </a>
            <a
              href="#galeria-multimedia"
              className="btn-comedores-hero-secondary"
            >
              📸 Ver Galería y Videos
            </a>
          </div>
        </div>
      </section>

      {/* 2. BANDA DE IMPACTO / CIFRAS EN TIEMPO REAL */}
      <section className="comedores-stats-strip">
        <div className="stats-container">
          <div className="stat-box">
            <span className="stat-num">+50,000</span>
            <span className="stat-text">Platos Nutritivos Servidos</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-num">100%</span>
            <span className="stat-text">Menús Balanceados</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-num">+12</span>
            <span className="stat-text">Puntos de Entrega y Sedes</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-box">
            <span className="stat-num">365</span>
            <span className="stat-text">Días de Compromiso Social</span>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE NARRATIVA Y PILARES */}
      <section className="comedores-pillars-section">
        <div className="section-container">
          <div className="section-header text-center">
            <span className="section-subtitle">Nuestra Metodología</span>
            <h2 className="section-main-title">
              Más que un plato de comida: un hogar de acogida
            </h2>
            <p className="section-description">
              En la Fundación Fundamor entendemos que la nutrición es el pilar
              biológico del aprendizaje, el deporte y el crecimiento sano. Por
              ello, estructuramos nuestros comedores con cuatro ejes integrales:
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card border-orange">
              <div className="pillar-icon">🥗</div>
              <h3>Nutrición Balanceada</h3>
              <p>
                Menús diseñados por especialistas que cumplen los requerimientos
                calóricos y proteicos esenciales para el desarrollo infantil y
                juvenil.
              </p>
            </div>
            <div className="pillar-card border-blue">
              <div className="pillar-icon">🛡️</div>
              <h3>Espacios de Acogida Segura</h3>
              <p>
                Entornos libres de violencia donde los niños y niñas comparten,
                juegan y refuerzan sus lazos de amistad con acompañamiento
                afectivo.
              </p>
            </div>
            <div className="pillar-card border-green">
              <div className="pillar-icon">🧼</div>
              <h3>Educación en Salud</h3>
              <p>
                Promoción de hábitos de higiene, lavado de manos, cuidado oral y
                buenas prácticas alimentarias en el hogar.
              </p>
            </div>
            <div className="pillar-card border-purple">
              <div className="pillar-icon">🤝</div>
              <h3>Acompañamiento Familiar</h3>
              <p>
                Vinculación de madres cabeza de familia y voluntarios
                comunitarios en la preparación e integración comunitaria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALERÍA MULTIMEDIA DE FOTOS Y VIDEOS */}
      <section id="galeria-multimedia" className="comedores-gallery-section">
        <div className="section-container">
          <div className="section-header text-center">
            <span className="section-subtitle">Evidencia de Impacto</span>
            <h2 className="section-main-title">Galería de Fotos y Videos</h2>
            <p className="section-description">
              Explora en imágenes y testimonios audiovisuales la labor diaria en
              nuestros comedores comunitarios.
            </p>
          </div>

          {/* FILTROS DE MULTIMEDIA */}
          <div className="gallery-filter-bar">
            <button
              className={`filter-btn ${selectedCategory === "todos" ? "active" : ""}`}
              onClick={() => setSelectedCategory("todos")}
            >
              Todos
            </button>
            <button
              className={`filter-btn ${selectedCategory === "almuerzos" ? "active" : ""}`}
              onClick={() => setSelectedCategory("almuerzos")}
            >
              🥗 Almuerzos & Menús
            </button>
            <button
              className={`filter-btn ${selectedCategory === "comunidad" ? "active" : ""}`}
              onClick={() => setSelectedCategory("comunidad")}
            >
              👨‍👩‍👧‍👦 Convivencia
            </button>
            <button
              className={`filter-btn ${selectedCategory === "video" ? "active" : ""}`}
              onClick={() => setSelectedCategory("video")}
            >
              🎥 Videos & Testimonios
            </button>
          </div>

          {/* GRID DE MULTIMEDIA */}
          <div className="gallery-grid">
            {filteredMedia.map((item) => (
              <div key={item.id} className="media-card">
                <div className="media-preview-container">
                  <span className="media-badge">{item.badge}</span>
                  {item.type === "video" ? (
                    <div className="video-wrapper">
                      {/* Enlace o Tag de Video HTML5 / Embed */}
                      <iframe
                        src={item.videoUrl}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="media-video-frame"
                      ></iframe>
                    </div>
                  ) : (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="media-photo"
                    />
                  )}
                </div>
                <div className="media-card-body">
                  <h3 className="media-card-title">{item.title}</h3>
                  <p className="media-card-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN DE DONACIONES / CÓMO APOYAR */}
      <section id="donar-menu" className="comedores-cta-section">
        <div className="cta-container">
          <div className="cta-card">
            <div className="cta-content">
              <span className="cta-badge">Suma tu Granito de Arena</span>
              <h2 className="cta-title">
                ¿Cómo puedes apoyar los Comedores Comunitarios?
              </h2>
              <p className="cta-desc">
                Con tu donación en dinero o en insumos alimentarios no
                perecederos (arroz, granos, aceite, enlatados) garantizas que un
                niño o adulto mayor reciba su plato de comida caliente
                diariamente.
              </p>
              <div className="cta-buttons">
                <a href="/donaciones" className="btn-cta-accent">
                  ❤️ Donar para Menús Nutritivos
                </a>
                <a href="#contacto" className="btn-cta-outline">
                  📦 Donar Insumos o Alimentos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
