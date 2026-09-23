import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ currentPage, setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Escuchar desplazamiento de pantalla para cambiar estilo de barra
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicios = [
    {
      id: "club-deportivo",
      ruta: "/club-deportivo",
      titulo: "⚽ Club Deportivo",
      tag: "Deporte & Valores",
      desc: "Formación deportiva integral, disciplina y uso saludable del tiempo libre.",
    },
    {
      id: "comedores",
      ruta: "/comedores",
      titulo: "🍲 Comedores Comunitarios",
      tag: "Nutrición & Familia",
      desc: "Alimentación balanceada y acompañamiento a familias vulnerables.",
    },
    {
      id: "educacion",
      ruta: "/educacion",
      titulo: "📚 Educación",
      tag: "Formación & Oportunidades",
      desc: "Programas educativos, formación académica y oportunidades de aprendizaje para niños, jóvenes y familias.",
    },
    {
      id: "futuros-programas",
      titulo: "🌱 Próximos Proyectos",
      tag: "Crecimiento Social",
      desc: "Talleres educativos, brigadas de salud y capacitación laboral.",
    },
  ];

  return (
    <header className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>
      {/* BARRA SUPERIOR DE CONTACTO / RÁPIDA */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-info">
            <span>📍 Colombia</span>
            <span className="separator">•</span>
            <span>📞 +57 (311) 4535541</span>
            <span className="separator">•</span>
            <span>✉️ fundaciondaamor2024@gmail.com</span>
          </div>
          <div className="top-badge-esal">
            Entidad Sin Ánimo de Lucro (ESAL)
          </div>
        </div>
      </div>

      {/* NAVBAR PRINCIPAL CON GLASSMORPHISM */}
      <nav className="main-navbar">
        <div className="navbar-container">
          {/* LOGO CON SUB-TAG */}
          <Link
            to="/"
            className="brand-logo"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="logo-text">
              FUNDA<span className="logo-accent">MOR</span>
            </div>
            <span className="logo-tagline">Fundación Da Amor</span>
          </Link>

          {/* MENÚ HAMBURGUESA MÓVIL */}
          <button
            className={`mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir Menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* ENLACES DE NAVEGACIÓN */}
          <div className={`nav-menu-wrapper ${mobileMenuOpen ? "active" : ""}`}>
            <ul className="nav-links">
              <li>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>

              <li>
                <a
                  href="#quienes-somos"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Quiénes Somos
                </a>
              </li>

              <li>
                <Link
                  to="/mision-vision"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Misión & Visión
                </Link>
              </li>
              <li>
                <Link
                  to="/programas"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Programas
                </Link>
              </li>

              <li className="dropdown-wrapper">...</li>
              {/* DESPLEGABLE DINÁMICO DE SERVICIOS */}
              <li
                className="dropdown-wrapper"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="nav-link dropdown-btn"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                >
                  Programas Sociales{" "}
                  <span className={`arrow ${dropdownOpen ? "rotate" : ""}`}>
                    ▾
                  </span>
                </button>

                {dropdownOpen && (
                  <div className="mega-dropdown">
                    <div className="dropdown-header">
                      <span>Líneas de Impacto Social</span>
                    </div>
                    <div className="dropdown-grid">
                      {servicios.map((s) => (
                        <Link
                          key={s.id}
                          to={s.ruta}
                          className="dropdown-card"
                          onClick={() => {
                            setDropdownOpen(false);
                            setMobileMenuOpen(false);
                          }}
                        >
                          <div className="card-top">
                            <span className="card-title">{s.titulo}</span>
                            <span className="card-tag">{s.tag}</span>
                          </div>
                          <p className="card-desc">{s.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/contacto"
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </Link>
              </li>
            </ul>

            {/* BOTÓN DE DONACIÓN DE ALTO IMPACTO */}
            <div className="navbar-actions">
              <Link to="/donaciones" className="btn-donate-glow">
                Hacer una Donación
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
