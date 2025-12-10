'use client';

export default function LocationsMap() {
  const locations = [
    {
      id: 1,
      name: 'Maldonado Centro',
      address: 'Primera máquina activa - Consultar ubicación exacta',
      hours: '24/7',
      status: 'Operativa',
      city: 'Maldonado'
    },
    {
      id: 2,
      name: 'Punta del Este',
      address: 'Próximamente - En instalación',
      hours: '24/7',
      status: 'Próximamente',
      city: 'Punta del Este'
    },
  ];

  return (
    <section id="ubicaciones" className="py-24 md:py-32 section-dark relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 text-sm font-medium tracking-wider uppercase mb-4">
            Dónde Encontrarnos
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
            <span className="text-gradient-orange">Maldonado</span> y <span className="text-gradient-orange">Punta del Este</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Nuestras máquinas expendedoras automáticas de pizza 24/7 están disponibles en
            ubicaciones estratégicas de Maldonado y Punta del Este. Pizza caliente al instante,
            lista en 3 minutos, todos los días del año.
          </p>
        </div>

        {/* Map Container */}
        <div className="glass-card overflow-hidden mb-10">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209419.54392857428!2d-54.97764!3d-34.904722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9575723a8d4d6cd5%3A0x9d5c1b5a6f5b5c1a!2sMaldonado%2C%20Uruguay!5e0!3m2!1ses!2suy!4v1234567890123!5m2!1ses!2suy"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Ubicación de máquinas expendedoras PizzerIA en Maldonado y Punta del Este"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="glass-card p-6 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-lg mb-1 tracking-tight">
                    {location.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {location.address}
                  </p>

                  {/* Status & Hours */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${location.status === 'Operativa' ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`} />
                      <span className={`text-xs font-medium ${location.status === 'Operativa' ? 'text-green-500' : 'text-orange-500'}`}>
                        {location.status}
                      </span>
                    </div>
                    {location.status === 'Operativa' && (
                      <span className="text-gray-500 text-xs">
                        ⏰ {location.hours} - Siempre disponible
                      </span>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              ¿Querés una <span className="text-gradient-orange">Máquina PizzerIA</span> en tu local?
            </h3>
            <p className="text-gray-400 mb-6">
              Estamos expandiendo con nuestro modelo de franquicia. Si tenés un negocio en
              Maldonado, Punta del Este o alrededores, contactanos para saber más sobre cómo
              agregar una máquina expendedora PizzerIA y generar ingresos pasivos 24/7.
            </p>
            <a href="#franquicias" className="btn-glossy inline-block">
              Quiero una Máquina
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
