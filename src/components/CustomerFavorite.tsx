"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  { id: "all", name: "Todas" },
  { id: "veg", name: "Vegetarianas" },
  { id: "nonveg", name: "Con Carne" },
  { id: "special", name: "Especiales" },
];

const pizzas = [
  {
    id: 1,
    name: "Pizza Margarita",
    description: "Tomate San Marzano, mozzarella di bufala, albahaca fresca",
    price: 45,
    originalPrice: 55,
    image: "/images/pizza-margherita.jpg",
    category: "veg",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Pizza Pepperoni",
    description: "Pepperoni artesanal, mozzarella, salsa de tomate",
    price: 55,
    originalPrice: 65,
    image: "/images/pizza-pepperoni.jpg",
    category: "nonveg",
    badge: "Favorita",
  },
  {
    id: 3,
    name: "Pizza Hawaiana",
    description: "Jamón premium, piña caramelizada, queso fundido",
    price: 50,
    originalPrice: null,
    image: "/images/pizza-hawaiian.jpg",
    category: "nonveg",
    badge: null,
  },
  {
    id: 4,
    name: "Pizza al Padellino",
    description: "Estilo Turin, masa crujiente, cuatro quesos",
    price: 60,
    originalPrice: null,
    image: "/images/pizza-cheese.jpg",
    category: "special",
    badge: "Premium",
  },
  {
    id: 5,
    name: "Pizza Napolitana",
    description: "Anchoas, aceitunas negras, alcaparras, orégano",
    price: 45,
    originalPrice: 55,
    image: "/images/pizza-neapolitan.jpg",
    category: "veg",
    badge: null,
  },
  {
    id: 6,
    name: "Pizza Siciliana",
    description: "Base gruesa, tomate cherry, ricotta, berenjenas",
    price: 65,
    originalPrice: null,
    image: "/images/pizza-sicilian.jpg",
    category: "special",
    badge: "Chef",
  },
  {
    id: 7,
    name: "Pizza Cuatro Quesos",
    description: "Gorgonzola, parmesano, mozzarella, fontina",
    price: 55,
    originalPrice: null,
    image: "/images/pizza-veggie.jpg",
    category: "veg",
    badge: null,
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
            Nuestro Menú
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
            Favoritos del <span className="text-gradient-orange">Cliente</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Las pizzas más solicitadas por nuestros clientes. Preparadas con los
            mejores ingredientes y técnicas artesanales italianas.
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
                  alt={pizza.name}
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
                <h3 className="font-semibold text-white text-lg mb-1 tracking-tight">
                  {pizza.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {pizza.description}
                </p>

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

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="btn-glossy px-10">Ver Todo el Menú</button>
        </div>
      </div>
    </section>
  );
}
