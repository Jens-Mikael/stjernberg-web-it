import ContactForm from "@/components/ContactForm";
import Projects from "@/components/Projects";
import MinimalLayout from "@/components/shared-layouts/MinimalLayout";

export default function Page() {
  return (
    <MinimalLayout page="projects-page">
      <Projects showAll={true} />
      <ContactForm />
    </MinimalLayout>
  );
}
