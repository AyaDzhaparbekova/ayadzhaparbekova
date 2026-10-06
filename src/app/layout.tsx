import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aya Dzhaparbekova | Portfolio",
  description:
    "Full-Stack Developer building human-centered digital products and AI automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}