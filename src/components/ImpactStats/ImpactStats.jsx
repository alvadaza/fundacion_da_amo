import React from "react";
import "./ImpactStats.css";

export default function ImpactStats() {
  const stats = [
    {
      id: 1,
      icon: "🍲",
      number: "+50,000",
      title: "Platos de Comida",
      subtitle: "Entregados en comedores comunitarios",
    },
    {
      id: 2,
      icon: "⚽",
      number: "+800",
      title: "Jóvenes Deportistas",
      subtitle: "Integrados al Club Deportivo Fundamor",
    },
    {
      id: 3,
      icon: "🏘️",
      number: "12",
      title: "Sedes y Comedores",
      subtitle: "Puntos de atención e integración social",
    },
    {
      id: 4,
      icon: "🤝",
      number: "+150",
      title: "Voluntarios Activos",
      subtitle: "Unidos transformando comunidades",
    },
  ];

  return (
    <section className="impact-strip-section">
      <div className="impact-container">
        <div className="impact-header-text">
          <span className="impact-tag">Impacto Transparente & Medible</span>
          <h2>Nuestros Resultados Hablan por Nosotros</h2>
        </div>

        <div className="stats-grid-container">
          {stats.map((s) => (
            <div key={s.id} className="stat-card-box">
              <div className="stat-icon-wrapper">{s.icon}</div>
              <div className="stat-number">{s.number}</div>
              <div className="stat-title">{s.title}</div>
              <div className="stat-subtitle">{s.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
