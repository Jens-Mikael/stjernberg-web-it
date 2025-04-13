import Footer from "./Footer";
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
