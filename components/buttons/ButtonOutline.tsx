import { cn } from "@/lib/utils";

export default function ButtonOutline({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        `border border-gray-200 text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-200/10 transition-all cursor-pointer`,
        className
      )}
    >
      {children}
    </button>
  );
}
