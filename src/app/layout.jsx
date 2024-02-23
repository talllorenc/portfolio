import { Inconsolata } from "next/font/google";
import { Metadata } from "next";
import Providers from "./providers";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <Providers>
          <Navigation />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
