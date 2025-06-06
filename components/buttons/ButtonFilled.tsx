import { cn } from "@/lib/utils";

export default function ButtonFilled({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(
        "bg-main text-white px-4 py-2 flex items-center gap-2 justify-center rounded-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-main hover:bg-main/80 transition-all cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
