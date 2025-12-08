'use client';

import { useState } from 'react';
import Image from 'next/image';

const weeklyPizzas = [
  {
    id: 1,
    name: 'Pizza Margarita',
    price: 45,
    originalPrice: null,
    image: '/images/pizza-margherita.jpg',
    discount: '-10%',
  },
  {
    id: 2,
    name: 'Pizza Pepperoni',
    price: 55,
    originalPrice: 65,
    image: '/images/pizza-pepperoni.jpg',
    discount: '-15%',
  },
  {
    id: 3,
    name: 'Pizza Hawaiana',
    price: 50,
    originalPrice: null,
    image: '/images/pizza-hawaiian.jpg',
    discount: null,
  },
  {
    id: 4,
    name: 'Pizza Mexicana',
    price: 34,
    originalPrice: null,
    image: '/images/pizza-taco.jpg',
    discount: null,
  },
];

export default function WeeklyPizza() {
  const [hoveredPizza, setHoveredPizza] = useState<number | null>(null);

  return (
    <section id="productos" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pizza de la <span className="text-orange-500">Semana</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras ofertas especiales de esta semana. Pizzas frescas
            preparadas diariamente con los mejores ingredientes.
          </p>
        </div>

        {/* Pizza Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {weeklyPizzas.map((pizza) => (
            <div
              key={pizza.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredPizza(pizza.id)}
              onMouseLeave={() => setHoveredPizza(null)}
            >
              {/* Discount badge */}
              {pizza.discount && (
                <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                  {pizza.discount}
                </span>
              )}

              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={pizza.image}
                  alt={pizza.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Order button overlay */}
                <div
                  className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredPizza === pizza.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-colors transform hover:scale-105">
                    Ordenar
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{pizza.name}</h3>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-orange-500 font-bold text-lg">${pizza.price}.00</span>
                  {pizza.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ${pizza.originalPrice}.00
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
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
