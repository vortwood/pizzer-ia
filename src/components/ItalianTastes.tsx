import Image from "next/image";

export default function ItalianTastes() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Disponible 24/7",
      description:
        "Pizza caliente a cualquier hora del día y de la noche. Perfecta para madrugadas, fines de semana y cuando todo está cerrado.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Lista en 3 Minutos",
      description:
        "Sistema automático con inteligencia artificial que hornea tu pizza al instante. Sin esperas, sin demoras.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Calidad Garantizada",
      description:
        "Masa y toppings de primera calidad. Temperatura perfecta controlada por IA para mantener frescura y sabor auténtico.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      title: "Opciones Sin Gluten",
      description:
        "Pizza apta para celíacos disponible en nuestras máquinas expendedoras. Comé rico y sin preocupaciones.",
    },
  ];

  return (
    <section
      id="nosotros"
      className="py-24 md:py-32 section-dark relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left content */}

          <div>
            <span className="inline-block text-orange-500 text-sm font-medium tracking-wider uppercase mb-4">
              Por qué PizzerIA
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
              Pizza <span className="text-gradient-orange">Rica</span> y{" "}
              <span className="text-gradient-orange">Accesible</span>
              <br />
              Cuando Querés
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Nuestras máquinas expendedoras automáticas combinan tecnología de
              punta con inteligencia artificial para ofrecerte pizza caliente y
              deliciosa a cualquier hora. Ya sea de madrugada, en días feriados
              o cuando todo está cerrado, PizzerIA está siempre disponible para
              vos en Maldonado y Punta del Este.
            </p>{" "}
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-5 flex flex-col items-start gap-3"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
