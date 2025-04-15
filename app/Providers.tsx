"use client";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
import { Toaster } from "@/components/ui/sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider
      height="3px"
      color="#615fff"
      options={{ showSpinner: false }}
    >
      {children}
      <Toaster />
    </ProgressProvider>
  );
}
