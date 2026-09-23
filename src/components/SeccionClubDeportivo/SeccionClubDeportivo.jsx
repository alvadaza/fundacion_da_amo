import "./SeccionClubDeportivo.css";

export default function SeccionClubDeportivo() {
  return (
    <section id="club-deportivo-banner" className="club-banner-section">
      {/* CAPA DE SUPERPOSICIÓN PARA LEGIBILIDAD */}
      <div className="club-banner-overlay"></div>

      <div className="club-banner-container">
        <div className="club-banner-content">
          <span className="club-badge">⚽ Club Deportivo Fundamor</span>
          <h2 className="club-title">
            Formación deportiva integral y desarrollo de talentos en valores
          </h2>
          <p className="club-text">
            Contamos con un equipo de formadores capacitados, metodologías de
            entrenamiento adaptadas y un enfoque en disciplina y trabajo en
            equipo. Brindamos a niños, niñas y jóvenes la oportunidad de
            desarrollarse físicamente, cultivar valores saludables y prevenir
            riesgos sociales mediante el deporte recreativo y formativo.
          </p>
          <div className="club-actions">
            <a href="/club-deportivo" className="btn-club-primary">
              Conoce nuestro Club Deportivo ➔
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
