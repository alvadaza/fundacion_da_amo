import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      badge: "Fundación Da Amor",
      title: "Fundación Fundamor",
      vocation:
        "Transformando vidas y construyendo futuro a través del deporte, la disciplina y la formación integral de nuestros niños y jóvenes.",
      btnPrimaryText: "Unirme como Voluntario",
      btnPrimaryLink: "/contacto",
      btnSecondaryText: "Club Deportivo",
      btnSecondaryLink: "/club-deportivo",
      bgImage: "fundamor.jpg",
    },
    {
      id: 2,
      badge: "Nutrición y Esperanza",
      title: "Comedores Comunitarios",
      vocation:
        "Garantizando seguridad alimentaria, bienestar y un plato lleno de amor para cientos de familias y niños en situación de vulnerabilidad.",
      btnPrimaryText: "Cómo Donar",
      btnPrimaryLink: "/donaciones",
      btnSecondaryText: "Ver Comedores",
      btnSecondaryLink: "/comedores",
      bgImage: "comedoes.jpg",
    },
    {
      id: 3,
      badge: "Educación y Oportunidades",
      title: "Educación para Todos",
      vocation:
        "Impulsando el acceso a la educación, la formación y las oportunidades de aprendizaje para niños, jóvenes y comunidades.",
      btnPrimaryText: "Conoce Nuestro Proyecto",
      btnPrimaryLink: "/educacion",
      btnSecondaryText: "Ver Programas",
      btnSecondaryLink: "/educacion",
      bgImage: "educacion.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="hero-slider-container">
      {/* Pista deslizante horizontal (Carrusel) */}
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="slide-item"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.65)), url(${slide.bgImage})`,
            }}
          >
            <div className="slide-content">
              <span className="slide-badge">{slide.badge}</span>
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-vocation">{slide.vocation}</p>
              <div className="slide-actions">
                <a href={slide.btnPrimaryLink} className="btn-slider-primary">
                  {slide.btnPrimaryText}
                </a>
                <a
                  href={slide.btnSecondaryLink}
                  className="btn-slider-secondary"
                >
                  {slide.btnSecondaryText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas de Navegación */}
      <button
        className="slider-arrow arrow-left"
        onClick={prevSlide}
        aria-label="Anterior"
      >
        ❮
      </button>

      <button
        className="slider-arrow arrow-right"
        onClick={nextSlide}
        aria-label="Siguiente"
      >
        ❯
      </button>

      {/* Puntos Indicadores */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active-dot" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
