import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Services from "@/components/Services";
import Identity from "@/components/Identity";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import FloatingUI from "@/components/FloatingUI";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Works />
        <Services />
        <Identity />
        <Testimonials />
        <Clients />
      </main>
      <Footer />
      <FloatingUI />
    </>
  );
}
