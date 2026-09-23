import React, { useState } from "react";
import "./ContactoPage.css";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "voluntariado",
    mensaje: "",
    aceptaPoliticas: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.aceptaPoliticas) {
      alert("Por favor acepta las políticas de tratamiento de datos.");
      return;
    }
    setFormSubmitted(true);
  };

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    {
      q: "¿Cómo puedo realizar una donación a la Fundación Fundamor?",
      a: "Puedes realizar transferencias directas a nuestras cuentas bancarias oficiales de la ESAL, donaciones a través de nuestra pasarela de pagos en línea o donaciones en especie (alimentos no perecederos, implementos deportivos e insumos escolares).",
    },
    {
      q: "¿Entregan certificado de donación para deducción de impuestos?",
      a: "Sí. Como Entidad Sin Ánimo de Lucro (ESAL) perteneciente al Régimen Tributario Especial, expedimos certificados oficiales de donación que aplican para beneficios tributarios ante la DIAN.",
    },
    {
      q: "¿Cómo inscribo a mi hijo en el Club Deportivo o Comedores Comunitarios?",
      a: "Puedes diligenciar el formulario de esta página seleccionando 'Inscripciones' o acercarte directamente a la sede administrativa o comedores en los horarios de atención. No se cobra matrícula ni mensualidad a familias en vulnerabilidad.",
    },
    {
      q: "¿Cuáles son los requisitos para ser Voluntario?",
      a: "Tener ganas de servir, disponibilidad de al menos 2 horas a la semana y vocación social. Contamos con programas de voluntariado presencial (entrenamientos, talleres, entrega de almuerzos) y profesional/virtual.",
    },
  ];

  return (
    <div className="contacto-page-wrapper">
      {/* 1. HERO HEADER */}
      <section className="contacto-hero-header">
        <div className="contacto-hero-overlay"></div>
        <div className="contacto-hero-content">
          <span className="contacto-badge">📍 Estamos para Servirte</span>
          <h1 className="contacto-title">Contacto y Atención a la Comunidad</h1>
          <p className="contacto-subtitle">
            ¿Tienes dudas, deseas inscribir a un beneficiario, vincularte como
            voluntario o realizar un aporte? Escríbenos y nuestro equipo
            institucional te responderá a la brevedad.
          </p>
        </div>
      </section>

      {/* 2. TARJETAS DE INFORMACIÓN RÁPIDA */}
      <section className="contacto-cards-section">
        <div className="contacto-container">
          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-icon">📍</div>
              <h3>Ubicación Sede</h3>
              <p>Sede Principal & Centro Comunitario</p>
              <strong>Colombia</strong>
            </div>

            <div className="info-card">
              <div className="info-card-icon">📞</div>
              <h3>Líneas de Atención</h3>
              <p>Lunes a Viernes (8:00 am - 5:00 pm)</p>
              <strong>+57 (300) 123-4567</strong>
            </div>

            <div className="info-card">
              <div className="info-card-icon">✉️</div>
              <h3>Correo Electrónico</h3>
              <p>Respuesta en menos de 24 horas</p>
              <strong>fundaciondaamor2024@gmail.com</strong>
            </div>

            <div className="info-card">
              <div className="info-card-icon">🏛️</div>
              <h3>Personería Jurídica</h3>
              <p>Entidad Sin Ánimo de Lucro (ESAL)</p>
              <strong>Régimen Tributario Especial</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN PRINCIPAL: FORMULARIO Y MAPA */}
      <section className="contacto-main-section">
        <div className="contacto-container">
          <div className="contacto-grid-2col">
            {/* FORMULARIO DE CONTACTO */}
            <div className="contacto-form-card">
              <div className="form-card-header">
                <h2>Envíanos un Mensaje</h2>
                <p>
                  Completa los campos a continuación y nos pondremos en contacto
                  contigo.
                </p>
              </div>

              {formSubmitted ? (
                <div className="form-success-box">
                  <div className="success-icon">🎉</div>
                  <h3>¡Mensaje Enviado con Éxito!</h3>
                  <p>
                    Gracias por comunicarte con la{" "}
                    <strong>Fundación Fundamor</strong>. Un integrante de
                    nuestro equipo se pondrá en contacto contigo muy pronto.
                  </p>
                  <button
                    className="btn-reset-form"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        nombre: "",
                        email: "",
                        telefono: "",
                        asunto: "voluntariado",
                        mensaje: "",
                        aceptaPoliticas: false,
                      });
                    }}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contacto-form">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre Completo *</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      placeholder="Ej. María Fernanda Rodríguez"
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-row-2col">
                    <div className="form-group">
                      <label htmlFor="email">Correo Electrónico *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="tu@correo.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono / WhatsApp *</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        placeholder="+57 300 000 0000"
                        value={formData.telefono}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="asunto">Tipo de Solicitud / Asunto *</label>
                    <select
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                    >
                      <option value="voluntariado">
                        {" "}
                        Quiero ser Voluntario/a
                      </option>
                      <option value="donaciones">
                        {" "}
                        Informes sobre Donaciones
                      </option>
                      <option value="inscripciones">
                        {" "}
                        Inscripciones (Deporte / Comedores)
                      </option>
                      <option value="alianzas">
                        {" "}
                        Alianzas Empresariales / ESAL
                      </option>
                      <option value="filial">
                        {" "}
                        Consulta Filial ABCDIGITASTEAM
                      </option>
                      <option value="general"> Consulta General</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje">Mensaje *</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows="4"
                      required
                      placeholder="Escribe tu consulta o mensaje aquí..."
                      value={formData.mensaje}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="form-group-checkbox">
                    <input
                      type="checkbox"
                      id="aceptaPoliticas"
                      name="aceptaPoliticas"
                      checked={formData.aceptaPoliticas}
                      onChange={handleChange}
                    />
                    <label htmlFor="aceptaPoliticas">
                      Acepto el tratamiento de datos personales conforme a la
                      política de privacidad de la Fundación.
                    </label>
                  </div>

                  <button type="submit" className="btn-submit-contacto">
                    Enviar Mensaje ➔
                  </button>
                </form>
              )}
            </div>

            {/* MAPA Y SEDES */}
            <div className="contacto-map-card">
              <div className="map-card-header">
                <h2>Nuestra Ubicación</h2>
                <p>
                  Visita nuestra sede principal o comunícate con nuestros
                  centros de atención.
                </p>
              </div>

              {/* MAPA INTERACTIVO EMBED */}
              <div className="map-frame-wrapper">
                <iframe
                  title="Mapa Fundación Fundamor"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.5389040567259!2d-74.09397686158316!3d4.580049272495285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f98e44c432b61%3A0xfd404aaa01c06428!2sCl.%2015%20Sur%20%2310-44%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1790197855288!5m2!1ses!2sco"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "16px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              {/* DETALLES DE SEDES Y ATENCIÓN */}
              <div className="sedes-list">
                <div className="sede-item">
                  <span className="sede-badge">Sede Central</span>
                  <h4>Centro Social & Administrativo Fundamor</h4>
                  <p>
                    📍 Atención al público, recepción de insumos y gestiones
                    institucionales.
                  </p>
                </div>

                <div className="sede-item">
                  <span className="sede-badge badge-orange">
                    Comedores & Deporte
                  </span>
                  <h4>Centros Comunitarios y Canchas Poli-Deportivas</h4>
                  <p>
                    🍲 Sedes asistenciales de alimentación diaria y formación en
                    fútbol, futsal, taekwondo y patinaje.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN PREGUNTAS FRECUENTES (FAQ) */}
      <section className="contacto-faq-section">
        <div className="contacto-container">
          <div className="faq-header">
            <span className="contacto-badge">❓ Preguntas Frecuentes</span>
            <h2>Resuelve tus dudas al instante</h2>
            <p>
              A continuación respondemos las preguntas más comunes de nuestra
              comunidad, donantes y voluntarios.
            </p>
          </div>

          <div className="faq-accordion-grid">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${faqOpen === idx ? "open" : ""}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <span className="faq-toggle-icon">
                    {faqOpen === idx ? "−" : "+"}
                  </span>
                </div>
                {faqOpen === idx && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BANNER FINAL CTA */}
      <section className="contacto-cta-banner">
        <div className="contacto-container">
          <div className="cta-box">
            <h2>¿Quieres hacer una diferencia hoy?</h2>
            <p>
              Apoya nuestros comedores comunitarios, becas deportivas y
              proyectos de inclusión digital. Tu aporte transforma vidas reales.
            </p>
            <div className="cta-buttons">
              <a href="#donar" className="btn-cta-orange">
                ❤️ Donar Ahora
              </a>
              <a
                href="https://abcdigitalsteam.com.co"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-outline"
              >
                💻 Conocer Filial ABCDIGITALSTEAM
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
