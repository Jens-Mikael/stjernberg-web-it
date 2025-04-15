import { Link } from "@/i18n/navigation";
import ButtonFilled from "./ButtonFilled";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function ButtonCTA({ className }: { className?: string }) {
  const t = useTranslations("CTA");
  return (
    <Link href="#contact" className={cn("w-fit", className)} scroll={true}>
      <ButtonFilled className="w-full">{t("contact")}</ButtonFilled>
    </Link>
  );
}
