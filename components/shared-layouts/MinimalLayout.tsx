import AboutMe from "../AboutMe";
import ContactForm from "../ContactForm";
import Footer from "./Footer";
import Hero from "./Hero";
import MinimalHero from "./MinimalHero";

export default function MinimalLayout({
  children,
  page,
}: {
  children: React.ReactNode;
  page: string;
}) {
  return (
    <main>
      <MinimalHero page={page} />
      <div className="bg-base-light">
        {children}

        <Footer />
      </div>
    </main>
  );
}
