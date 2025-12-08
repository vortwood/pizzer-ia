import Image from "next/image";

export default function QualityBanner() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Pizza image */}
          <div className="relative order-2 md:order-1">
            <div className="relative max-w-md mx-auto">
              {/* Small pizza */}
              <div className="absolute -left-8 bottom-0 z-10 hidden sm:block">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <Image
                    src="/images/pizza-neapolitan.jpg"
                    alt="Pizza pequeña"
                    fill
                    className="object-cover rounded-full shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded">
                  <span className="text-orange-400 font-bold">$45.00</span>
                </div>
              </div>

              {/* Main pizza */}
              <div className="relative aspect-square">
                <Image
                  src="/images/pizza-pepperoni.jpg"
                  alt="Pizza de calidad"
                  fill
                  className="object-cover rounded-full shadow-2xl"
                />
              </div>

              {/* Price tag for main pizza */}
              <div className="absolute -right-4 top-4 bg-black text-white px-4 py-2 rounded-lg hidden sm:block">
                <p className="text-xs text-gray-400">Pizza al Padellino</p>
                <p className="text-orange-400 font-bold">$45.00</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-center md:text-left order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Tenemos Pizza de
              <br />
              <span className="text-black">Excelente Calidad</span>
            </h2>

            <p className="text-white/90 mb-8 max-w-md mx-auto md:mx-0">
              Una oferta increíble para la pizza vegetariana con 30% de
              descuento en ingredientes adicionales. Aprovecha esta promoción
              por tiempo limitado.
            </p>

            <button className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Ordenar Ahora
            </button>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-400/30 rounded-full" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-400/30 rounded-full" />
    </section>
  );
}
