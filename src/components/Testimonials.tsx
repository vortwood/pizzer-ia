'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Elena Pérez',
    role: 'Cliente Frecuente',
    image: '/images/person-2.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis quispue ac odio venera quam purelient. Maecenas alrea. Lorem ipsum dolor sit amet. Maecenas quisque ac odio amet ac pretium quis purelient.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Diego Williamson',
    role: 'Chef de Cocina',
    image: '/images/person-1.jpg',
    text: 'La mejor pizza que he probado en mi vida. Los ingredientes son frescos y el sabor es auténticamente italiano. Recomiendo especialmente la pizza Margarita, es simplemente perfecta.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Alberto Flores',
    role: 'Crítico Gastronómico',
    image: '/images/person-3.jpg',
    text: 'Una experiencia gastronómica excepcional. El ambiente, el servicio y por supuesto, las pizzas son de primera calidad. Sin duda, el mejor lugar para disfrutar de una auténtica pizza italiana.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Jenny Wilson',
    role: 'Blogger de Comida',
    image: '/images/person-4.jpg',
    text: 'Me encanta este lugar. Cada vez que vengo pruebo algo nuevo y nunca me decepciona. Las pizzas son increíbles y el personal es muy amable.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Qué Dicen Nuestros <span className="text-orange-500">Clientes</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Maecenas quis quisque eu leo
            sed amet neque.
          </p>
        </div>

        {/* Testimonial avatars */}
        <div className="flex justify-center items-center space-x-4 mb-8 overflow-x-auto pb-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 transition-all duration-300 ${
                activeIndex === index
                  ? 'scale-110 ring-4 ring-orange-500 rounded-full'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
              />
              {activeIndex === index && (
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-900 whitespace-nowrap">
                  {testimonial.name}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active testimonial */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12 relative">
            {/* Quote icon */}
            <div className="absolute top-4 right-4 text-orange-500/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 sm:h-24 sm:w-24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="relative z-10">
              <p className="text-gray-600 text-base sm:text-lg mb-6 italic">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </p>

              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      i < testimonials[activeIndex].rating
                        ? 'text-orange-500'
                        : 'text-gray-300'
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <h4 className="font-bold text-gray-900">
                {testimonials[activeIndex].name}
              </h4>
              <p className="text-gray-500 text-sm">
                {testimonials[activeIndex].role}
              </p>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Ver Todo
          </button>
        </div>
      </div>
    </section>
  );
}
