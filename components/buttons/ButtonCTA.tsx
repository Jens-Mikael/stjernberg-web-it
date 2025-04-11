import { Link } from "@/i18n/navigation";
import ButtonFilled from "./ButtonFilled";
import { useTranslations } from "next-intl";

export default function ButtonCTA() {
  const t = useTranslations("CTA");
  return (
    <Link href="#contact" className="w-fit" scroll={true}>
      <ButtonFilled>{t("contact")}</ButtonFilled>
    </Link>
  );
}
