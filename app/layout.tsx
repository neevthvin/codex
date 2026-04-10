import type { Metadata } from "next";
import "./globals.css";
import { AppNav } from "@/components/nav";

export const metadata: Metadata = {
  title: "CreatorOS Dashboard",
  description: "Unified social performance and revenue dashboard for creators"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
