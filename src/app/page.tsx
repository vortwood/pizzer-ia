import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ItalianTastes from "@/components/ItalianTastes";
import CustomerFavorite from "@/components/CustomerFavorite";
import LocationsMap from "@/components/LocationsMap";
import FranchiseSection from "@/components/FranchiseSection";
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
        <FranchiseSection />
      </main>
      <Footer />
    </>
  );
}
