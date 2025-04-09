import Footer from "@/components/shared-layouts/Footer";
import ContactForm from "@/components/ContactForm";
import AboutMe from "@/components/AboutMe";
import Testimonials from "@/components/shared-layouts/Testimonials";
import Hero from "@/components/shared-layouts/Hero";
import Projects from "@/components/Projects";
import { headers } from "next/headers";
export default async function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname")?.split("/").pop() || "";
  console.log(pathname);
  return (
    <main>
      <Hero page={`services.${pathname}`} />
      <div className="bg-base-light">
        {children}
        <Testimonials />
        <Projects />
        <AboutMe />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
