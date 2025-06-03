"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useCallback } from "react";
import FieldError from "./FieldError";

export default function Textarea({
  className,
  value,
  onChange,
  id,
  label,
  error,

  ...props
}: {
  label?: string;
  error?: string;
  id: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const adjustHeight = useCallback(() => {
    const textarea = document.getElementById(id);
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [id]);

  useEffect(() => {
    adjustHeight();
  }, [value, adjustHeight]);

  return (
    <div className="flex flex-col gap-1 text-start">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold">
          {label}
        </label>
      )}

      <textarea
        className={cn(
          "w-full rounded-md  bg-gray-100 text-content-dark px-3 py-2 placeholder-gray-400",
          "focus:ring-main focus:border-main focus:ring-1 focus:outline-none",
          "overflow-hidden",
          className
        )}
        onChange={(e) => {
          onChange?.(e);
          adjustHeight();
        }}
        id={id}
        value={value}
        rows={4}
        {...props}
      />
      {error && <FieldError error={error} />}
    </div>
  );
}
