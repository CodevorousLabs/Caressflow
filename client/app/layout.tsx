import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik, Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/landingPageComponents/header/header";
const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});

const heeboSans = Heebo({
  variable: "--font-heebo-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Caressflow TR",
  description: "Caressflow TR Case Study",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
