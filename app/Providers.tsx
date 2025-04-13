"use client"
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider
      height="3px"
      color="#615fff"
      options={{ showSpinner: false }}
    >
      {children}
    </ProgressProvider>
  );
}
