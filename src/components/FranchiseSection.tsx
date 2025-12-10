"use client";

import { useState } from "react";

export default function FranchiseSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    location: "",
    message: "",
  });

  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Ingresos Pasivos 24/7",
      description: "Generá ingresos adicionales sin necesidad de personal. La máquina funciona automáticamente las 24 horas del día, todos los días del año.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Atraé Más Clientes",
      description: "Una máquina PizzerIA en tu local atrae nuevo público y aumenta el tráfico de clientes, especialmente en horarios nocturnos y feriados.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Sin Personal de Cocina",
      description: "No necesitás contratar cocineros ni personal adicional. Todo el proceso es automático y controlado por inteligencia artificial.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Soporte Total",
      description: "Nos encargamos del mantenimiento, reposición de stock y monitoreo remoto. Vos solo recibís tus ganancias.",
    },
  ];

  const idealFor = [
    "⛽ Estaciones de servicio",
    "🏨 Hoteles y hostels",
    "🏪 Minimercados 24hs",
    "🏢 Centros comerciales",
    "🎓 Campus universitarios",
    "🏖️ Zonas turísticas",
    "🏋️ Gimnasios y centros deportivos",
    "🚉 Terminales y estaciones",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - this would integrate with your backend
    console.log("Form submitted:", formData);
    alert("¡Gracias por tu interés! Nos contactaremos pronto.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="franquicias"
      className="py-24 md:py-32 section-dark relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 text-sm font-medium tracking-wider uppercase mb-4">
            Oportunidad de Negocio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
            Franquicia de <span className="text-gradient-orange">Máquinas Expendedoras</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            ¿Tenés un negocio en Maldonado, Punta del Este o alrededores? Sumá una máquina
            expendedora PizzerIA y ofrecé comida caliente 24/7 sin sumar personal ni complicaciones.
            Ideal para estaciones de servicio, minimercados, hoteles, centros comerciales y más.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Ideal For */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Ideal para tu <span className="text-gradient-orange">Negocio</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Nuestras máquinas expendedoras automáticas de pizza son perfectas para negocios que
              buscan ofrecer un servicio adicional sin inversión en personal ni cocina. Especialmente
              diseñadas para:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {idealFor.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-300 text-sm bg-white/5 rounded-xl px-4 py-3"
                >
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Modelo de Franquicia Flexible
              </h4>
              <p className="text-gray-400 text-sm">
                Ofrecemos distintas modalidades de convenio, franquicia o alquiler según las
                necesidades de tu negocio. Consultá por el modelo que mejor se adapte a vos.
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Solicitá tu <span className="text-gradient-orange">Máquina</span>
            </h3>
            <p className="text-gray-400 mb-6 text-sm">
              Completá el formulario y nos pondremos en contacto para contarte más sobre el modelo de negocio,
              costos y beneficios.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  placeholder="+598 XX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-2">
                  Tipo de negocio *
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  required
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  placeholder="Ej: Estación de servicio, hotel, etc."
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                  Ubicación *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  placeholder="Maldonado, Punta del Este, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none"
                  placeholder="Contanos más sobre tu negocio..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-glossy py-3.5 text-base"
              >
                Enviar Solicitud
              </button>

              <p className="text-xs text-gray-500 text-center">
                Al enviar este formulario, aceptás que nos contactemos para brindarte más información
                sobre nuestras franquicias de máquinas expendedoras de pizza.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
