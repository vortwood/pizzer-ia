import Image from 'next/image';

export default function ItalianTastes() {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Proveedores Certificados',
      description: 'Ingredientes importados directamente de Italia'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Fermentación 48h',
      description: 'Masa fermentada lentamente para mejor digestión'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      title: 'Horno de Leña',
      description: 'Cocción tradicional a más de 400°C'
    }
  ];

  return (
    <section id="nosotros" className="py-24 md:py-32 section-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-orange-500 text-sm font-medium tracking-wider uppercase mb-4">
              Nuestra Historia
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
              El <span className="text-gradient-orange">Auténtico</span> Sabor
              <br />
              Italiano
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Trabajamos con ingredientes importados directamente de Italia,
              utilizando técnicas tradicionales y procesos artesanales que
              garantizan el sabor más auténtico en cada pizza.
            </p>

            {/* Feature cards */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-5 flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* <button className="btn-glossy">
              Conoce Más
            </button> */}
          </div>

          {/* Right content - Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main image container */}
              <div className="relative max-w-lg mx-auto">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl scale-90" />

                {/* Image */}
                <div className="relative aspect-square">
                  <Image
                    src="/images/pizza-margherita.jpg"
                    alt="Pizza italiana auténtica"
                    fill
                    className="object-cover rounded-full shadow-2xl"
                  />

                  {/* Glossy overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating badge - left */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 glass-card px-4 py-6 hidden lg:block">
                  <div
                    className="text-orange-500 text-sm font-medium tracking-wider"
                    style={{ writingMode: 'vertical-rl' }}
                  >
                    Desde Italia
                  </div>
                </div>

                {/* Floating stats card */}
                <div className="absolute -right-4 -bottom-4 glass-card p-5 hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-gradient-orange">10+</div>
                      <div className="text-gray-500 text-xs">Años</div>
                    </div>
                    <div className="w-px h-10 bg-white/10" />
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-gradient-orange">50k+</div>
                      <div className="text-gray-500 text-xs">Pizzas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
