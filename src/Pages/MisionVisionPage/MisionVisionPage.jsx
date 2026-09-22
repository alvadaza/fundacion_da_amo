import React, { useState, useEffect } from "react";
import "./MisionVisionPage.css";

export default function MisionVisionPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carrusel de imágenes inspiradoras de la Fundación
  const carouselImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80",
      title: "Nutrición con Dignidad y Amor",
      subtitle:
        "Garantizamos seguridad alimentaria y espacios de convivencia familiar a través de nuestros Comedores Comunitarios.",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=1920&q=80",
      title: "Deporte, Disciplina y Oportunidad",
      subtitle:
        "Formación en valores, trabajo en equipo y uso saludable del tiempo libre en el Club Deportivo Fundamor.",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80",
      title: "Educación y Futuro Comunitario",
      subtitle:
        "Talleres formativos, brigadas de salud y capacitación laboral para familias en situación vulnerable.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="mision-vision-page">
      {/* 1. ENCABEZADO CON CARRUSEL DE IMÁGENES */}
      <section className="mv-hero-carousel">
        <div
          className="mv-carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselImages.map((item) => (
            <div
              key={item.id}
              className="mv-slide"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.72), rgba(15, 23, 42, 0.78)), url(${item.url})`,
              }}
            >
              <div className="mv-slide-caption">
                <span className="mv-tag">Nuestra Esencia Institucional</span>
                <h1 className="mv-slide-title">{item.title}</h1>
                <p className="mv-slide-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controles de Navegación del Carrusel */}
        <button
          className="mv-arrow mv-arrow-left"
          onClick={prevSlide}
          aria-label="Anterior"
        >
          ❮
        </button>
        <button
          className="mv-arrow mv-arrow-right"
          onClick={nextSlide}
          aria-label="Siguiente"
        >
          ❯
        </button>

        <div className="mv-dots">
          {carouselImages.map((_, idx) => (
            <span
              key={idx}
              className={`mv-dot ${idx === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
            ></span>
          ))}
        </div>
      </section>

      {/* 2. TARJETAS PRINCIPALES: MISIÓN Y VISIÓN */}
      <section className="mv-cards-section">
        <div className="mv-container">
          <div className="mv-header-text">
            <span className="section-badge">Fundación Fundamor</span>
            <h2>Propósito e Identidad Institucional</h2>
            <p>
              Como Entidad Sin Ánimo de Lucro (ESAL) perteneciente al Régimen
              Tributario Especial, orientamos cada una de nuestras acciones al
              bienestar social y al desarrollo integral de familias vulnerables.
            </p>
          </div>

          <div className="mv-grid-primary">
            {/* Tarjeta Misión */}
            <div className="mv-card card-mision">
              <div className="card-header-icon">
                <span className="icon-circle brand-icon">🎯</span>
                <span className="card-label">Eje Fundamental</span>
              </div>
              <h3>Nuestra Misión</h3>
              <p>
                Impulsar el desarrollo social, la nutrición balanceada y la
                formación integral de niños, jóvenes y familias vulnerables a
                través de nuestros comedores comunitarios y el deporte
                recreativo, promoviendo la disciplina, la inclusión y la
                dignidad humana.
              </p>
              <div className="card-footer-highlights">
                <div className="chip">🍲 Comedores Comunitarios</div>
                <div className="chip">⚽ Club Deportivo</div>
              </div>
            </div>

            {/* Tarjeta Visión */}
            <div className="mv-card card-vision">
              <div className="card-header-icon">
                <span className="icon-circle accent-icon">🚀</span>
                <span className="card-label">Hacia el Futuro</span>
              </div>
              <h3>Nuestra Visión</h3>
              <p>
                Consolidarnos como una organización referente en impacto social
                transformador, expandiendo nuestra cobertura con talleres
                educativos, brigadas de salud y alianzas estratégicas que
                aseguren un futuro de oportunidades e integración social.
              </p>
              <div className="card-footer-highlights">
                <div className="chip">📚 Talleres Educativos</div>
                <div className="chip">🏥 Brigadas de Salud</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALORES INSTITUCIONALES (CARDS INTERACTIVAS) */}
      <section className="mv-values-section">
        <div className="mv-container">
          <div className="mv-header-text">
            <span className="section-badge bg-orange">Nuestros Pilares</span>
            <h2>Valores que Guían Nuestra Labor</h2>
            <p>
              Principios éticos que inspiran cada entrenamiento deportivo, cada
              alimento servido y cada programa de desarrollo comunitario.
            </p>
          </div>

          <div className="mv-values-grid">
            <div className="value-card">
              <div className="value-icon-box">❤️</div>
              <h4>Solidaridad</h4>
              <p>
                Compromiso genuino y desinteresado por el bienestar y progreso
                de quienes más lo necesitan.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">🤝</div>
              <h4>Empatía</h4>
              <p>
                Escucha activa y comprensión profunda de las realidades y
                necesidades comunitarias.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">🏆</div>
              <h4>Juego Limpio</h4>
              <p>
                Fomento de la honestidad, el respeto mutuo y la convivencia
                pacífica dentro y fuera de la cancha.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">🌟</div>
              <h4>Superación Personal</h4>
              <p>
                Estimular la disciplina y la perseverancia para transformar
                obstáculos en oportunidades de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LÍNEAS DE IMPACTO Y EXPANSIÓN */}
      <section className="mv-expansion-section">
        <div className="mv-container">
          <div className="expansion-box">
            <div className="expansion-info">
              <span className="expansion-badge">Estructura Modular</span>
              <h3>Líneas Estratégicas de Impacto Social</h3>
              <p>
                Integramos programas enfocados para maximizar la cobertura y
                generar un cambio duradero en el territorio.
              </p>
              <div className="expansion-list">
                <div className="exp-item">
                  <span className="exp-bullet">⚽</span>
                  <div>
                    <h5>Club Deportivo Fundamor</h5>
                    <p>
                      Fomento del deporte, uso saludable del tiempo libre y
                      disciplina para jóvenes.
                    </p>
                  </div>
                </div>
                <div className="exp-item">
                  <span className="exp-bullet">🍲</span>
                  <div>
                    <h5>Comedores Comunitarios</h5>
                    <p>
                      Espacios seguros para la nutrición de calidad e
                      integración familiar.
                    </p>
                  </div>
                </div>
                <div className="exp-item">
                  <span className="exp-bullet">🚀</span>
                  <div>
                    <h5>Evolución y Expansión</h5>
                    <p>
                      Talleres educativos, brigadas de salud y red de
                      voluntariado coordinado.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="expansion-cta-card">
              <h4>¿Quieres ser parte de nuestra misión?</h4>
              <p>
                Tu apoyo como voluntario o donante nos permite seguir brindando
                platos de comida y becas deportivas a cientos de niños.
              </p>
              <a href="#donar" className="btn-mv-primary">
                Unirme como Voluntario
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
