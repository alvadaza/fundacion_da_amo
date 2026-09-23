import React, { useState } from "react";
import "./QuienesSomos.css";

export default function QuienesSomos() {
  const [activeTab, setActiveTab] = useState("mision");

  return (
    <section id="quienes-somos" className="overlap-section-quienes">
      {/* Indicador visual superior (Pill de arrastre) */}
      <div className="section-handle"></div>

      <div className="quienes-container">
        {/* ENCABEZADO DE SECCIÓN */}
        <div className="quienes-header">
          <span className="quienes-badge">Conócenos</span>
          <h2 className="quienes-title">
            Un legado de amor, oportunidad y transformación social
          </h2>
          <p className="quienes-description">
            La <strong>Fundación Fundamor (Fundación Da Amor)</strong> es una
            Entidad Sin Ánimo de Lucro (ESAL) dedicada a construir tejido social
            mediante la nutrición, el deporte y el desarrollo comunitario
            integral.
          </p>
        </div>

        {/* NAVEGACIÓN DE PESTAÑAS (TABS) */}
        <div className="quienes-tabs-bar">
          <button
            className={`tab-btn ${activeTab === "mision" ? "active" : ""}`}
            onClick={() => setActiveTab("mision")}
          >
            🎯 Misión y Visión
          </button>
          <button
            className={`tab-btn ${activeTab === "deporte" ? "active" : ""}`}
            onClick={() => setActiveTab("deporte")}
          >
            ⚽ Club Deportivo
          </button>
          <button
            className={`tab-btn ${activeTab === "comedores" ? "active" : ""}`}
            onClick={() => setActiveTab("comedores")}
          >
            🍲 Comedores Comunitarios
          </button>
          <button
            className={`tab-btn ${activeTab === "educacion" ? "active" : ""}`}
            onClick={() => setActiveTab("educacion")}
          >
            💻 Educación
          </button>
          <button
            className={`tab-btn ${activeTab === "valores" ? "active" : ""}`}
            onClick={() => setActiveTab("valores")}
          >
            💎 Valores
          </button>
        </div>

        {/* CONTENIDO DINÁMICO DE PESTAÑAS */}
        <div className="quienes-tab-content">
          {activeTab === "mision" && (
            <div className="tab-pane animate-fade">
              <div className="grid-2-col">
                <div className="card-mision highlight-brand">
                  <div className="icon-wrapper">🎯</div>
                  <h3>Nuestra Misión</h3>
                  <p>
                    Impulsar el bienestar social de niños, jóvenes y familias
                    vulnerables, brindándoles herramientas integrales a través
                    del deporte recreativo, la nutrición adecuada y el
                    acompañamiento afectivo.
                  </p>
                </div>
                <div className="card-mision highlight-accent">
                  <div className="icon-wrapper">🚀</div>
                  <h3>Nuestra Visión</h3>
                  <p>
                    Ser una fundación referente por su transparencia e impacto
                    duradero, ampliando nuestra cobertura con talleres
                    educativos, brigadas de salud y nuevos centros comunitarios.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "deporte" && (
            <div className="tab-pane animate-fade">
              <div className="grid-feature">
                <div className="feature-text">
                  <span className="feature-tag">Formación Integral</span>
                  <h3>Club Deportivo Fundamor</h3>
                  <p>
                    Fomentamos el uso saludable del tiempo libre, la disciplina
                    y el trabajo en equipo en niños y jóvenes, alejándolos de
                    entornos de riesgo social mediante el fútbol y diversas
                    disciplinas deportivas.
                  </p>
                  <ul className="check-list">
                    <li>Entrenamientos dirigidos por profesionales.</li>
                    <li>Entregas de equipamiento y becas deportivas.</li>
                    <li>Promoción de la solidaridad y el juego limpio.</li>
                  </ul>
                </div>
                <div className="feature-card-accent">
                  <div className="big-stat">⚽ +800</div>
                  <p>
                    Jóvenes impactados en nuestro club deportivo con formación
                    en valores.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "comedores" && (
            <div className="tab-pane animate-fade">
              <div className="grid-feature">
                <div className="feature-text">
                  <span className="feature-tag">Nutrición & Amor</span>
                  <h3>Comedores Comunitarios</h3>
                  <p>
                    Garantizamos seguridad alimentaria con raciones
                    nutricionalmente balanceadas, creando espacios seguros de
                    convivencia e integración para niños, adultos mayores y
                    familias vulnerables.
                  </p>
                  <ul className="check-list">
                    <li>Alimentación balanceada supervisada.</li>
                    <li>Espacios de acogida y acompañamiento afectivo.</li>
                    <li>Atención a la primera infancia y tercera edad.</li>
                  </ul>
                </div>
                <div className="feature-card-orange">
                  <div className="big-stat">🍲 +50k</div>
                  <p>Raciones de comida entregadas con dignidad y amor.</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "educacion" && (
            <div className="tab-pane animate-fade">
              <div className="grid-feature">
                <div className="feature-text">
                  <span className="feature-tag">Educación & Tecnología</span>

                  <h3>ABC Digital STEAM</h3>

                  <p>
                    Impulsamos el acceso a la educación y la transformación
                    digital mediante programas de formación que fortalecen las
                    competencias tecnológicas, académicas y creativas de niños,
                    jóvenes y comunidades.
                  </p>

                  <ul className="check-list">
                    <li>Formación en competencias digitales y tecnológicas.</li>
                    <li>
                      Programas educativos basados en Ciencia, Tecnología,
                      Ingeniería, Arte y Matemáticas.
                    </li>
                    <li>
                      Desarrollo de habilidades para el aprendizaje y nuevas
                      oportunidades.
                    </li>
                  </ul>
                </div>

                <div className="feature-card-orange">
                  <div className="big-stat">💻 STEAM</div>

                  <p>
                    Educación, tecnología e innovación para construir
                    oportunidades y transformar el futuro.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "valores" && (
            <div className="tab-pane animate-fade">
              <div className="values-grid">
                <div className="value-box">
                  <span className="val-icon">❤️</span>
                  <h4>Solidaridad & Amor</h4>
                  <p>
                    El motor de cada plato servido y cada entrenamiento
                    realizado.
                  </p>
                </div>
                <div className="value-box">
                  <span className="val-icon">🤝</span>
                  <h4>Empatía</h4>
                  <p>
                    Comprender y acompañar las realidades de nuestra comunidad.
                  </p>
                </div>
                <div className="value-box">
                  <span className="val-icon">🛡️</span>
                  <h4>Transparencia</h4>
                  <p>
                    Gestión responsable e íntegra como entidad ESAL certificada.
                  </p>
                </div>
                <div className="value-box">
                  <span className="val-icon">🏆</span>
                  <h4>Superación Personal</h4>
                  <p>Inspirar a cada joven a alcanzar su máximo potencial.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
