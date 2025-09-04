import Apartments from "@/components/Apartments";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white" data-name="app" data-file="app.js">
      <Header />
      <Hero />
      <Apartments />
      <Features />
      <BookingForm />
      <Contact />
      <Footer />
    </div>
  );
}
