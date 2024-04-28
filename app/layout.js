import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "@/UI/NavBar";
import Footer from "@/UI/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clocking 🕓",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Navbar/>
    {children}
    </body>
    <Footer />
    </html>
  );
}
