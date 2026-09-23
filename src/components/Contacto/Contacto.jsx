import React, { useState } from "react";
import "./Contacto.css";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    interes: "voluntariado",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        {/* LADO IZQUIERDO: INFORMACIÓN DE CONTACTO Y SEDES */}
        <div className="contacto-info-side">
          <span className="section-eyebrow-orange">Estamos para Servir</span>
          <h2 className="contacto-title">
            Ponte en Contacto con Fundación Fundamor
          </h2>
          <p className="contacto-lead">
            ¿Quieres sumarte como voluntario, realizar un aporte o conocer más
            sobre nuestros comedores comunitarios y club deportivo? Escríbenos.
          </p>

          <div className="info-cards-stack">
            <div className="info-card-box">
              <span className="info-card-icon">📍</span>
              <div>
                <strong>Ubicación & Atención</strong>
                <p>Sedes de Comedores y Club Deportivo en Colombia</p>
              </div>
            </div>

            <div className="info-card-box">
              <span className="info-card-icon">✉️</span>
              <div>
                <strong>Correo Electrónico</strong>
                <p>fundaciondaamor2024@gmail.com</p>
              </div>
            </div>

            <div className="info-card-box">
              <span className="info-card-icon">📞</span>
              <div>
                <strong>Línea Directa / WhatsApp</strong>
                <p>+57 3114535541</p>
              </div>
            </div>

            <div className="info-card-box border-esal">
              <span className="info-card-icon">🏛️</span>
              <div>
                <strong>Transparencia Institucional</strong>
                <p>
                  Registrados ante la DIAN • Régimen Tributario Especial (ESAL)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: FORMULARIO MODERNO */}
        <div className="contacto-form-side">
          {submitted ? (
            <div className="form-success-card animate-fade">
              <span className="success-icon">🎉</span>
              <h3>¡Mensaje Recibido con Éxito!</h3>
              <p>
                Gracias por contactar a la Fundación Fundamor. Nuestro equipo te
                responderá en breve para atender tu solicitud o voluntariado.
              </p>
              <button
                className="btn-reset-form"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    nombre: "",
                    email: "",
                    telefono: "",
                    interes: "voluntariado",
                    mensaje: "",
                  });
                }}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className="contacto-form-card" onSubmit={handleSubmit}>
              <h3 className="form-header-title">Envíanos un Mensaje</h3>

              <div className="form-group-field">
                <label>Nombre Completo</label>
                <input
                  type="text"
                  placeholder="Ej. María Rodríguez"
                  required
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                />
              </div>

              <div className="form-row-two">
                <div className="form-group-field">
                  <label>Correo Electrónico</label>
                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group-field">
                  <label>Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+57 300 000 0000"
                    value={formData.telefono}
                    onChange={(e) =>
                      setFormData({ ...formData, telefono: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="form-group-field">
                <label>¿Cómo te gustaría colaborar?</label>
                <select
                  value={formData.interes}
                  onChange={(e) =>
                    setFormData({ ...formData, interes: e.target.value })
                  }
                >
                  <option value="voluntariado">
                    Voluntariado en Comedores o Club Deportivo
                  </option>
                  <option value="donacion">
                    Aportes Económicos o en Especie
                  </option>
                  <option value="alianza">
                    Alianza Empresarial / Institucional
                  </option>
                  <option value="consulta">Información General</option>
                </select>
              </div>

              <div className="form-group-field">
                <label>Mensaje o Comentario</label>
                <textarea
                  rows="4"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                ></textarea>
              </div>

              <button type="submit" className="btn-submit-contacto">
                Enviar Mensaje Directo 🚀
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
