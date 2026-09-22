import React, { useState } from "react";

import "./Donaciones.css";

export default function DonacionesPage() {
  const [activeTab, setActiveTab] = useState("monetaria"); // 'monetaria' | 'voluntariado' | 'especie'
  const [selectedAmount, setSelectedAmount] = useState(50000);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    documento: "",
    necesitaCertificado: false,
    interesVoluntariado: "comedores",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="donaciones-page-wrapper">
      {/* 1. HERO BANNER DE DONACIÓN Y VINCULACIÓN */}
      <section className="donaciones-hero">
        <div className="donaciones-hero-overlay"></div>
        <div className="donaciones-hero-content">
          <span className="donaciones-badge">❤️ Tu Apoyo Transforma Vidas</span>
          <h1 className="donaciones-title">
            Dona, Se Voluntario o Suma tu Empresa a Fundamor
          </h1>
          <p className="donaciones-lead">
            Cada aporte alimentan los sueños de nuestros niños en los{" "}
            <strong>Comedores Comunitarios</strong>, impulsa el talento en el{" "}
            <strong>Club Deportivo</strong> y abre puertas digitales con nuestra
            filial <strong>ABCDIGITASTEAM</strong>.
          </p>
          <div className="esal-certificate-tag">
            <span>
              🛡️ Entidad Sin Ánimo de Lucro (ESAL) • Expedimos Certificado de
              Donación Deducible de Impuestos
            </span>
          </div>
        </div>
      </section>

      {/* 2. SELECTOR DE MODALIDAD (PESTAÑAS PROFESIONALES) */}
      <section className="donaciones-main-section">
        <div className="donaciones-container">
          <div className="modalidad-tabs-bar">
            <button
              className={`tab-btn ${activeTab === "monetaria" ? "active" : ""}`}
              onClick={() => setActiveTab("monetaria")}
            >
              💳 Donación Económica
            </button>
            <button
              className={`tab-btn ${activeTab === "voluntariado" ? "active" : ""}`}
              onClick={() => setActiveTab("voluntariado")}
            >
              🙋 Unirme como Voluntario
            </button>
            <button
              className={`tab-btn ${activeTab === "especie" ? "active" : ""}`}
              onClick={() => setActiveTab("especie")}
            >
              📦 Donación en Especie / Alianzas
            </button>
          </div>

          <div className="donaciones-grid-layout">
            {/* PANEL IZQUIERDO: DETALLES SEGÚN PESTAÑA */}
            <div className="donaciones-info-panel">
              {activeTab === "monetaria" && (
                <div className="tab-pane-content animate-fade">
                  <h3>Selecciona tu Nivel de Impacto</h3>
                  <p className="panel-desc">
                    Elige un monto sugerido o ingresa un valor personalizado. Tu
                    aporte va directamente a la adquisición de insumos y becas.
                  </p>

                  <div className="monto-cards-grid">
                    <div
                      className={`monto-card ${selectedAmount === 20000 && !customAmount ? "selected" : ""}`}
                      onClick={() => {
                        setSelectedAmount(20000);
                        setCustomAmount("");
                      }}
                    >
                      <span className="monto-val">$20.000 COP</span>
                      <span className="monto-desc">
                        🍲 5 Almuerzos nutritivos en comedores
                      </span>
                    </div>

                    <div
                      className={`monto-card ${selectedAmount === 50000 && !customAmount ? "selected" : ""}`}
                      onClick={() => {
                        setSelectedAmount(50000);
                        setCustomAmount("");
                      }}
                    >
                      <span className="monto-val">$50.000 COP</span>
                      <span className="monto-desc">
                        ⚽ Kit deportivo para 1 niño del Club
                      </span>
                    </div>

                    <div
                      className={`monto-card ${selectedAmount === 100000 && !customAmount ? "selected" : ""}`}
                      onClick={() => {
                        setSelectedAmount(100000);
                        setCustomAmount("");
                      }}
                    >
                      <span className="monto-val">$100.000 COP</span>
                      <span className="monto-desc">
                        💻 Beca de educación digital + Nutrición
                      </span>
                    </div>
                  </div>

                  {/* CUENTAS Y MÉTODOS DE PAGO */}
                  <div className="payment-methods-box">
                    <h4>Cuentas Oficiales de la Fundación</h4>
                    <div className="bank-details-grid">
                      <div className="bank-card nequi-card">
                        <span className="bank-logo">📲 Nequi / Daviplata</span>
                        <p className="bank-number">300 123 4567</p>
                        <span className="bank-owner">
                          Fundación Da Amor (Fundamor)
                        </span>
                      </div>
                      <div className="bank-card banco-card">
                        <span className="bank-logo">🏛️ Cuenta de Ahorros</span>
                        <p className="bank-number">No. 123-456789-00</p>
                        <span className="bank-owner">NIT: 900.123.456-7</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "voluntariado" && (
                <div className="tab-pane-content animate-fade">
                  <h3>Sé parte del Equipo Fundamor</h3>
                  <p className="panel-desc">
                    Tu tiempo, conocimiento y vocación son el regalo más
                    valioso. Puedes sumarte en cualquiera de nuestros ejes
                    operativos:
                  </p>
                  <div className="voluntariado-reasons">
                    <div className="reason-item">
                      <span className="reason-icon">🍲</span>
                      <div>
                        <h4>Apoyo en Comedores</h4>
                        <p>
                          Preparación, logística y entrega de alimentos con
                          amor.
                        </p>
                      </div>
                    </div>
                    <div className="reason-item">
                      <span className="reason-icon">⚽</span>
                      <div>
                        <h4>Formación Deportiva</h4>
                        <p>
                          Entrenadores, monitores físicos o logística en
                          torneos.
                        </p>
                      </div>
                    </div>
                    <div className="reason-item">
                      <span className="reason-icon">📚</span>
                      <div>
                        <h4>Talleres y Mentorías</h4>
                        <p>
                          Tutorías académicas y capacitación digital con
                          ABCDIGITASTEAM.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "especie" && (
                <div className="tab-pane-content animate-fade">
                  <h3>Donaciones en Especie y Responsabilidad Social</h3>
                  <p className="panel-desc">
                    Recibimos insumos alimentarios no perecederos, balones,
                    uniformes, equipos de cómputo y mobiliario escolar.
                  </p>
                  <div className="especie-list-box">
                    <h4>Insumos Prioritarios:</h4>
                    <ul>
                      <li>
                        ✅ Granos, arroz, aceite y alimentos no perecederos.
                      </li>
                      <li>
                        ✅ Balones de fútbol/futsal, protecciones de taekwondo y
                        patines.
                      </li>
                      <li>
                        ✅ Computadores, tablets o monitores en buen estado para
                        aulas.
                      </li>
                      <li>
                        ✅ Material didáctico, cuadernos y útiles escolares.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* PANEL DERECHO: FORMULARIO UNIFICADO Y INTELIGENTE */}
            <div className="donaciones-form-panel">
              <div className="form-card-container">
                <div className="form-header-badge">
                  <span>
                    {activeTab === "monetaria" &&
                      "📝 Reportar Donación o Solicitar Certificado"}
                    {activeTab === "voluntariado" &&
                      "🙋 Formulario de Registro de Voluntarios"}
                    {activeTab === "especie" &&
                      "📦 Registro de Donación en Especie / Alianza"}
                  </span>
                </div>

                {submitted ? (
                  <div className="form-success-message">
                    <span className="success-icon">🎉</span>
                    <h3>¡Gracias por tu Solidaridad!</h3>
                    <p>
                      Hemos recibido tu solicitud correctamente. Nuestro equipo
                      de la <strong>Fundación Fundamor</strong> se pondrá en
                      contacto contigo en breve para coordinar los detalles.
                    </p>
                    <button
                      className="btn-reset-form"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          nombre: "",
                          email: "",
                          telefono: "",
                          documento: "",
                          necesitaCertificado: false,
                          interesVoluntariado: "comedores",
                          mensaje: "",
                        });
                      }}
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="unified-donation-form"
                  >
                    <div className="form-group">
                      <label htmlFor="nombre">
                        Nombre Completo / Razón Social *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        placeholder="Ej. María López / Empresa S.A.S."
                        value={formData.nombre}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label htmlFor="email">Correo Electrónico *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="correo@ejemplo.com"
                          value={formData.email}
                          onChange={handleInputChange}
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
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* CAMPOS DINÁMICOS SEGÚN PESTAÑA SELECCIONADA */}
                    {activeTab === "monetaria" && (
                      <>
                        <div className="form-group">
                          <label htmlFor="documento">
                            Cédula o NIT (para certificado tributario)
                          </label>
                          <input
                            type="text"
                            id="documento"
                            name="documento"
                            placeholder="Ej. 1.234.567.890 o 900.123.456-7"
                            value={formData.documento}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="form-checkbox-group">
                          <input
                            type="checkbox"
                            id="necesitaCertificado"
                            name="necesitaCertificado"
                            checked={formData.necesitaCertificado}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="necesitaCertificado">
                            Solicito Certificado de Donación para deducción de
                            impuestos (RTE)
                          </label>
                        </div>
                      </>
                    )}

                    {activeTab === "voluntariado" && (
                      <div className="form-group">
                        <label htmlFor="interesVoluntariado">
                          Área de Interés Principal
                        </label>
                        <select
                          id="interesVoluntariado"
                          name="interesVoluntariado"
                          value={formData.interesVoluntariado}
                          onChange={handleInputChange}
                        >
                          <option value="comedores">
                            🍲 Comedores Comunitarios y Nutrición
                          </option>
                          <option value="deporte">
                            ⚽ Club Deportivo (Entrenamiento / Logística)
                          </option>
                          <option value="educacion">
                            📚 Capacitación Digital (ABCDIGITASTEAM)
                          </option>
                          <option value="general">
                            ❤️ Apoyo Logístico General
                          </option>
                        </select>
                      </div>
                    )}

                    <div className="form-group">
                      <label htmlFor="mensaje">
                        Detalles o Mensaje Adicional
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="3"
                        placeholder="Cuéntanos más sobre tu aporte, disponibilidad u observaciones..."
                        value={formData.mensaje}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-submit-donation">
                      {activeTab === "monetaria" &&
                        "❤️ Enviar Reporte de Donación"}
                      {activeTab === "voluntariado" &&
                        "🙋 Registrarme como Voluntario"}
                      {activeTab === "especie" &&
                        "📦 Registrar Donación en Especie"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
