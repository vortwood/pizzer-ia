import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10  via-transparent to-black" />
      </div>

      {/* Side navigation text */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center space-y-4">
        {/* <div
          className="text-gray-500 text-xs tracking-[0.2em] font-medium rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          ORDENA AHORA
        </div> */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 text-orange-500 tracking-wider">
                🤖 PIZZA + INTELIGENCIA ARTIFICIAL
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
              Pizza <span className="text-gradient-orange">Caliente</span>
              <br />
              24/7 en Uruguay
            </h1>

            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Máquinas expendedoras de pizza artesanal con inteligencia artificial.
              Pizza caliente en 3 minutos, disponible las 24 horas en Maldonado y
              Punta del Este. <span className="text-orange-500 font-medium">Ahora con opciones sin gluten.</span>
            </p>
            {/* 
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <button className="btn-glossy px-10">Ordenar Ahora</button>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <Image
                    src="/images/person-1.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-black/50 object-cover ring-2 ring-white/10"
                  />
                  <Image
                    src="/images/person-2.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-black/50 object-cover ring-2 ring-white/10"
                  />
                  <Image
                    src="/images/person-3.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-black/50 object-cover ring-2 ring-white/10"
                  />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">5,000+</div>
                  <div className="text-gray-500 text-xs">Clientes felices</div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right content - Pizza image */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main pizza */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl scale-90" />

              <div className="relative aspect-square">
                <Image
                  src="/images/pizza-hero.jpg"
                  alt="Pizza caliente 24 horas en máquina expendedora automática - PizzerIA Maldonado Punta del Este"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
                {/* Glossy overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Price badge - glass card */}
              <div className="absolute bottom-6 left-6 glass-card p-4">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl font-semibold text-gradient-orange">
                    $490
                  </span>
                </div>
                <p className="text-gray-400 text-xs font-medium">
                  Todas las variedades
                </p>
              </div>

              {/* Quality badge - glass card */}
              <div className="absolute top-6 right-6 glass-card p-4 text-center">
                <div className="text-2xl font-semibold text-gradient-orange">
                  24/7
                </div>
                <div className="text-gray-500 text-xs font-medium">Disponible</div>
              </div>

              {/* Floating ingredient tag */}
              <div className="absolute top-1/2 -right-4 glass-card px-3 py-2 hidden lg:block">
                <span className="text-xs text-gray-400">🤖 Con IA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side navigation */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center space-y-4">
        {/* <div
          className="text-gray-500 text-xs tracking-[0.2em] font-medium"
          style={{ writingMode: "vertical-rl" }}
        >
          TRADICIONES
        </div> */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
        {/* <div
          className="text-gray-500 text-xs tracking-[0.2em] font-medium"
          style={{ writingMode: "vertical-rl" }}
        >
          INGREDIENTES
        </div> */}
      </div>

      {/* Bottom indicators */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        <span className="w-8 h-1 bg-orange-500 rounded-full" />
        <span className="w-1 h-1 bg-gray-600 rounded-full" />
        <span className="w-1 h-1 bg-gray-600 rounded-full" />
      </div> */}

      {/* Payment methods - glass style */}
      {/* <div className="absolute bottom-10 right-8 hidden lg:flex items-center gap-3 z-20">
        <div className="glass-card px-4 py-2 flex items-center gap-3">
          <span className="text-gray-400 text-xs font-medium">VISA</span>
          <span className="w-px h-4 bg-white/10" />
          <span className="text-gray-400 text-xs font-medium">PayPal</span>
          <span className="w-px h-4 bg-white/10" />
          <span className="text-gray-400 text-xs font-medium">MasterCard</span>
        </div>
      </div> */}
    </section>
  );
}
