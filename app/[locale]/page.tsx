import AboutMe from "@/components/AboutMe";
import ContactForm from "@/components/ContactForm";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Footer from "@/components/shared-layouts/Footer";
import Hero from "@/components/shared-layouts/Hero";
import Testimonials from "@/components/shared-layouts/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero page="home" />
      <div className="bg-base-light">
        <Services />
        <Testimonials />
        <Projects />
        <AboutMe />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
