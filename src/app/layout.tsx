import type { Metadata } from "next";
import "./globals.css";
import { Lora } from "next/font/google"
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: "Prop Vista",
  description: "Prop Vista is a real estate company in India that offers residential and commercial properties in India.",
};

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
});

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lora.variable + " " + inter.variable}
      >
        {children}
      </body>
    </html>
  );
}
