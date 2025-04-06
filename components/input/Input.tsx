import { cn } from "@/lib/utils";
import FieldError from "./FieldError";

export default function InputText({
  className,
  label,
  id,
  helperText,
  error,
  ...props
}: {
  className?: string;
  label?: string;
  helperText?: string;
  error?: string;
} & React.ComponentPropsWithoutRef<"input">) {
  return (
    <div className="flex flex-col gap-1 text-start">
      {label && (
        <label htmlFor={id} className=" text-sm font-semibold ">
          {label}
        </label>
      )}
      <input
        className={cn(
          "ring-main focus:border-main bg-gray-100  text-content-dark rounded-lg border-1 px-3 py-2 ring-0 ring-offset-0 outline-0 transition-all focus:ring-1 focus:outline-0",
          className,
        )}
        {...props}
      />
      {error && <FieldError error={error} />}
    </div>
  );
}
