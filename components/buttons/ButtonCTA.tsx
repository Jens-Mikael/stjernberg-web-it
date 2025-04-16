import { Link } from "@/i18n/navigation";
import ButtonFilled from "./ButtonFilled";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function ButtonCTA({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  const t = useTranslations("CTA");
  return (
    <Link
      href="#contact"
      className={cn("w-fit", className)}
      scroll={true}
      onClick={onClick}
    >
      <ButtonFilled className="w-full">{t("contact")}</ButtonFilled>
    </Link>
  );
}
