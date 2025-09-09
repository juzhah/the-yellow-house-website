import Apartments from "@/components/apartments/Apartments";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/contact/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";

export default async function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden ">
      <Hero />
      <Apartments />
      <Features />
      <BookingForm />
      <Contact />
    </div>
  );
}
