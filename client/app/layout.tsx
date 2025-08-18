import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik, Heebo } from "next/font/google";
import "./globals.css";
import Header from "@/components/landingPageComponents/header/header";
import LoadingLayout from "@/components/layoutComponents/loadingLayout";
import Footer from "@/components/landingPageComponents/footer/footer";
import InformationSection from "@/components/landingPageComponents/informationSection/informationSection";
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
        <LoadingLayout>
          <Header />
          {children}
          <div className="w-full bg-[#FCF7FF]">
            <InformationSection />
          </div>
          <div className="w-full bg-[#FCF7FF]">
            <Footer />
          </div>
        </LoadingLayout>
      </body>
    </html>
  );
}
