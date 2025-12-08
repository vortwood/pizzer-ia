import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ItalianTastes from "@/components/ItalianTastes";
import CustomerFavorite from "@/components/CustomerFavorite";
import LocationsMap from "@/components/LocationsMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ItalianTastes />
        <CustomerFavorite />
        <LocationsMap />
      </main>
      <Footer />
    </>
  );
}
