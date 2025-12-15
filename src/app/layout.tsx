import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "PizzerIA | Pizza 24/7 en Maldonado y Punta del Este | Máquinas Expendedoras con IA",
  description: "Pizza caliente 24 horas en Maldonado y Punta del Este. Máquinas expendedoras automáticas con inteligencia artificial. Pizza al instante, sin gluten disponible. Franquicias disponibles en Uruguay.",
  keywords: [
    "máquinas expendedoras de pizza",
    "pizza 24 horas Punta del Este",
    "pizza 24/7 Maldonado",
    "pizza caliente al instante",
    "pizza sin gluten Maldonado",
    "pizza sin gluten Punta del Este",
    "franquicia máquinas expendedoras",
    "pizza con inteligencia artificial",
    "pizza al paso Maldonado",
    "pizza al paso Punta del Este",
    "máquinas expendedoras Uruguay",
    "comida 24/7 Punta del Este",
    "pizza automática",
    "vending machine pizza Uruguay"
  ],
  authors: [{ name: "PizzerIA Uruguay" }],
  creator: "PizzerIA",
  publisher: "PizzerIA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: "https://pizzeria.com.uy",
    siteName: "PizzerIA",
    title: "PizzerIA | Pizza 24/7 en Maldonado y Punta del Este",
    description: "Pizza caliente a cualquier hora con máquinas expendedoras automáticas. Tecnología e IA aplicada a la gastronomía. Disponible en Maldonado y Punta del Este, Uruguay.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PizzerIA - Máquinas expendedoras de pizza 24/7"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PizzerIA | Pizza 24/7 en Maldonado y Punta del Este",
    description: "Pizza caliente 24 horas con máquinas expendedoras automáticas en Uruguay",
    images: ["/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://pizzeria.com.uy",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="apple-mobile-web-app-title" content="PizzerIA" />
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
