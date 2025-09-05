import { Apartments } from "@/components/Apartments";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header className="fixed top-0 z-50 " />
      <Hero />
      <Apartments />
      <Features />
      <BookingForm />
      <Contact />
    </div>
  );
}
