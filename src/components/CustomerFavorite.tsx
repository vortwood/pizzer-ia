"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  { id: "all", name: "Todas" },
  { id: "clasicas", name: "Clásicas" },
  { id: "especiales", name: "Especiales" },
  { id: "singluten", name: "Sin Gluten" },
];

const pizzas = [
  {
    id: 1,
    name: "Muzzarella",
    description: "Salsa de tomate, muzzarella de calidad, orégano. La clásica de siempre, perfecta para cualquier momento.",
    price: 490,
    image: "/images/pizza-margherita.jpg",
    category: "clasicas",
    badge: "Clásica",
  },
  {
    id: 2,
    name: "Napolitana",
    description: "Salsa de tomate, muzzarella, tomate en rodajas, ajo, orégano. Sabor tradicional argentino.",
    price: 490,
    image: "/images/pizza-neapolitan.jpg",
    category: "clasicas",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Pepperoni",
    description: "Salsa de tomate, muzzarella, pepperoni premium. Ideal para los amantes del picante suave.",
    price: 490,
    image: "/images/pizza-pepperoni.jpg",
    category: "clasicas",
    badge: null,
  },
  {
    id: 4,
    name: "Fugazzeta",
    description: "Muzzarella, cebolla salteada. Sabor único y auténtico, perfecta para fanáticos del queso.",
    price: 490,
    image: "/images/pizza-cheese.jpg",
    category: "especiales",
    badge: "Especial",
  },
  {
    id: 5,
    name: "Jamón y Morrones",
    description: "Salsa de tomate, muzzarella, jamón cocido, morrones asados. Combinación perfecta y equilibrada.",
    price: 490,
    image: "/images/pizza-hawaiian.jpg",
    category: "especiales",
    badge: null,
  },
  {
    id: 6,
    name: "Cuatro Quesos",
    description: "Muzzarella, provolone, parmesano, queso azul. Para los verdaderos amantes del queso.",
    price: 490,
    image: "/images/pizza-veggie.jpg",
    category: "especiales",
    badge: null,
  },
  {
    id: 7,
    name: "Muzzarella Sin Gluten",
    description: "Masa apta para celíacos, salsa de tomate, muzzarella, orégano. Rico y seguro para vos.",
    price: 490,
    image: "/images/pizza-margherita.jpg",
    category: "singluten",
    badge: "🌾 Sin Gluten",
  },
  {
    id: 8,
    name: "Napolitana Sin Gluten",
    description: "Masa sin gluten, salsa de tomate, muzzarella, tomate, ajo. Sabor auténtico para celíacos.",
    price: 490,
    image: "/images/pizza-sicilian.jpg",
    category: "singluten",
    badge: "🌾 Sin Gluten",
  },
];

export default function CustomerFavorite() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPizzas =
    activeCategory === "all"
      ? pizzas
      : pizzas.filter((pizza) => pizza.category === activeCategory);

  return (
    <section
      id="menu"
      className="py-24 md:py-32 section-dark relative overflow-hidden"
    >
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 text-sm font-medium tracking-wider uppercase mb-4">
            Variedades Disponibles
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
            Todas a <span className="text-gradient-orange">$490</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Pizzas clásicas, especiales y opciones sin gluten. Todas al mismo precio,
            horneadas al momento en nuestra máquina expendedora automática.
            <span className="block mt-2 text-orange-500 font-medium">
              🌾 Opciones sin gluten disponibles para celíacos
            </span>
          </p>
        </div>

        {/* Categories - Apple style pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`pill ${
                activeCategory === category.id ? "pill-active" : ""
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Pizza Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPizzas.map((pizza) => (
            <div
              key={pizza.id}
              className="glass-card group cursor-pointer overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-t-[23px]">
                <Image
                  src={pizza.image}
                  alt={`${pizza.name} - Pizza al paso $490 en máquina expendedora PizzerIA`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out "
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0  transition-opacity duration-500" />

                {/* Badge */}
                {pizza.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-500/90 backdrop-blur-sm text-white">
                      {pizza.badge}
                    </span>
                  </div>
                )}

                {/* Quick action on hover */}
                {/* <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <button className="w-full btn-glossy text-sm py-3">
                    Ver Detalles
                  </button>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-white text-lg mb-2 tracking-tight">
                  {pizza.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {pizza.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-2xl font-semibold text-gradient-orange">
                    ${pizza.price}
                  </span>
                  <span className="text-xs text-gray-500">
                    Lista en 3min
                  </span>
                </div>

                {/* Price */}
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-semibold text-gradient-orange">
                      ${pizza.price}
                    </span>
                    {pizza.originalPrice && (
                      <span className="text-sm text-gray-600 line-through">
                        ${pizza.originalPrice}
                      </span>
                    )}
                  </div>


                  <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Info footer */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm">
            Todas las pizzas disponibles 24/7 en nuestra máquina expendedora automática
          </p>
        </div>
      </div>
    </section>
  );
}
