import {Inter} from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/Footer";
import DashboardNavbar from "@/components/DashboardNavbar";

config.autoAddCss = false;

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "CLOCK[ing]",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {

    return (
        <html lang="en">
        <body className={inter.className} style={{backgroundColor: '#FFF8F0'}}>
        <DashboardNavbar/>
        <main className={'min-h-svh'}>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}