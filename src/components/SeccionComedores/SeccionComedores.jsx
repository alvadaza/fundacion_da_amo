import "./SeccionComedores.css";

export default function SeccionComedores() {
  return (
    <section id="comedores-banner" className="comedores-banner-section">
      {/* CAPA DE SUPERPOSICIÓN PARA LEGIBILIDAD */}
      <div className="comedores-banner-overlay"></div>

      <div className="comedores-banner-container">
        <div className="comedores-banner-content">
          <span className="comedores-badge">🍲 Nutrición y Comunidad</span>
          <h2 className="comedores-title">
            Espacios de encuentro, bienestar y seguridad alimentaria
          </h2>
          <p className="comedores-text">
            En FUNDAMOR, creemos que una alimentación adecuada es fundamental
            para el desarrollo y bienestar de las personas. Nuestros comedores
            comunitarios son espacios de encuentro donde no solo ofrecemos
            comidas nutritivas, sino que también fomentamos la integración y el
            apoyo mutuo entre los miembros de la comunidad.
          </p>
          <div className="comedores-actions">
            <a href="/comedores" className="btn-comedores-primary">
              Conoce nuestros Comedores ➔
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
