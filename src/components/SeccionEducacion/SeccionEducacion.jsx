import "./SeccionEducacion.css";

export default function SeccionEducacion() {
  return (
    <section id="educacion" className="stack-card section-educacion">
      <div className="educacion-overlay"></div>
      <div className="section-handle"></div>

      <div className="educacion-container">
        <div className="educacion-content">
          <span className="educacion-badge">📚 Capacitación & Futuro</span>
          <h2 className="educacion-title">
            Talleres Educativos, Formación y Capacitación Laboral
          </h2>
          <p className="educacion-text">
            Impulsamos proyectos de formación académica, talleres de artes y
            oficios, fortalecimiento escolar y capacitaciones laborales para
            jóvenes y adultos. Creemos que la educación es la herramienta
            definitiva para romper círculos de pobreza y abrir puertas hacia
            oportunidades reales.
          </p>
          <div className="educacion-grid">
            <div className="edu-card">
              <span className="edu-icon">📖</span>
              <h3>Refuerzo Escolar</h3>
              <p>
                Acompañamiento pedagógico para niños y niñas en sus tareas
                escolares.
              </p>
            </div>
            <div className="edu-card">
              <span className="edu-icon">🛠️</span>
              <h3>Artes y Oficios</h3>
              <p>
                Capacitación técnica y habilidades prácticas para el
                emprendimiento.
              </p>
            </div>
            <div className="edu-card">
              <span className="edu-icon">🌱</span>
              <h3>Desarrollo Humano</h3>
              <p>
                Talleres de liderazgo, inteligencia emocional y proyecto de
                vida.
              </p>
            </div>
          </div>
          <div className="educacion-actions">
            <a href="/contacto" className="btn-educacion-primary">
              Unirme a los Talleres ➔
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
