export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "PizzerIA",
    "alternateName": "Pizzer IA",
    "description": "Máquinas expendedoras automáticas de pizza 24/7 con inteligencia artificial en Maldonado y Punta del Este, Uruguay. Pizza caliente al instante, sin gluten disponible.",
    "url": "https://pizzeria.com.uy",
    "telephone": "+598-XX-XXX-XXX",
    "servesCuisine": ["Pizza", "Italian"],
    "priceRange": "$$",
    "acceptsReservations": "False",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Maldonado",
      "addressRegion": "Maldonado",
      "addressCountry": "UY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-34.9",
      "longitude": "-54.95"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/pizzeria",
      "https://www.instagram.com/pizzeria"
    ],
    "menu": "https://pizzeria.com.uy#menu",
    "paymentAccepted": "Cash, Credit Card",
    "currenciesAccepted": "UYU"
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Pizza en Máquina Expendedora Automática",
    "description": "Pizza artesanal caliente horneada al momento en máquina expendedora automática con inteligencia artificial. Disponible 24/7 en Maldonado y Punta del Este.",
    "brand": {
      "@type": "Brand",
      "name": "PizzerIA"
    },
    "offers": {
      "@type": "Offer",
      "price": "490",
      "priceCurrency": "UYU",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2025-12-31",
      "seller": {
        "@type": "Organization",
        "name": "PizzerIA"
      }
    },
    "category": "Food & Beverage"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PizzerIA Maldonado",
    "image": "https://pizzeria.com.uy/images/pizza-hero.jpg",
    "description": "Máquina expendedora de pizza 24/7 en Maldonado, Uruguay",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Maldonado",
      "addressRegion": "Maldonado",
      "addressCountry": "UY"
    },
    "telephone": "+598-XX-XXX-XXX",
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
    "priceRange": "$$"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://pizzeria.com.uy"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Variedades de Pizza",
        "item": "https://pizzeria.com.uy#menu"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ubicaciones",
        "item": "https://pizzeria.com.uy#ubicaciones"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Franquicias",
        "item": "https://pizzeria.com.uy#franquicias"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Dónde están ubicadas las máquinas expendedoras PizzerIA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Actualmente tenemos máquinas expendedoras de pizza 24/7 en Maldonado y próximamente en Punta del Este, Uruguay. Estamos expandiendo a más ubicaciones."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta una pizza en PizzerIA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Todas nuestras pizzas cuestan $490 pesos uruguayos, sin importar la variedad. Incluye opciones clásicas, especiales y sin gluten."
        }
      },
      {
        "@type": "Question",
        "name": "¿Tienen opciones sin gluten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, ofrecemos pizzas sin gluten aptas para celíacos. Disponibles en nuestras máquinas expendedoras automáticas al mismo precio de $490."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tarda en estar lista la pizza?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La pizza está lista en aproximadamente 3 minutos. Nuestro sistema automático con inteligencia artificial hornea tu pizza al momento."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo puedo tener una máquina PizzerIA en mi negocio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos franquicias y convenios para negocios en Maldonado, Punta del Este y alrededores. Completá el formulario en nuestra sección de Franquicias y nos contactaremos contigo."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
