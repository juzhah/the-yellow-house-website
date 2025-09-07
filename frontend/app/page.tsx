import Apartments from "@/components/apartments/Apartments";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/contact/Contact";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { getHomeInfo } from "@/lib/get-home-info";
import { HomePage } from "@/types/home-sections";

export default async function Home() {
  const sections: HomePage = await getHomeInfo();
  const { hero, featured, features, amenities, contact } = sections;

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header className="fixed top-0 z-50 " />
      <Hero data={hero} />
      <Apartments data={featured} />
      <Features />
      <BookingForm />
      <Contact />
    </div>
  );
}
