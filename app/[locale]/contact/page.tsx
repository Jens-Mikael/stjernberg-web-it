import ContactForm from "@/components/ContactForm";
import MinimalLayout from "@/components/shared-layouts/MinimalLayout";

export default function Contact() {
  return (
    <MinimalLayout page="contact-info-page">
      <ContactForm />
    </MinimalLayout>
  );
}
