import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop Next",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="black">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
