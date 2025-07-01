import { useTranslations } from "next-intl";
import Image from "next/image";

export default function TrustedBy() {
  const heroOther = useTranslations("hero");

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 lg:text-start text-center w-full gap-3 sm:gap-5 lg:gap-10 relative">
      {[
        "one-point-code",
        "eskimo-village",
        "roof-history",
        "hansatorin-apteekki",
        "hexer-network",
        "lokota",
      ].map((brand) => (
        <div key={brand} className="relative h-8 lg:h-10 flex-1 brightness-90">
          <Image
            key={brand}
            src={`/brands/${brand}.png`}
            alt={brand}
            className="object-contain"
            fill
          />
        </div>
      ))}
    </div>
  );
}
