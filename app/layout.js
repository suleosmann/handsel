import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import CookieConsent from "@/components/common/CookieConsent";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const gillSans = localFont({
    src: [
        {
            path: './fonts/gill-sans.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/gill-sans-italic.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './fonts/gill-sans-light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/gill-sans-medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/gill-sans-bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/gill-sans-bold-italic.otf',
            weight: '700',
            style: 'italic',
        },
    ],
    variable: '--font-gill-sans'
});

export const metadata = {
    title: "Handsel Consultancy - World-Class Governance Solutions",
    description: "Leading organizations with confidence through world-class governance in corporate, cyber, and AI arenas. Expert frameworks, insight, and oversight.",
    icons: {
        icon: '/assets/Favicon.svg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/assets/Favicon.svg" type="image/svg+xml" />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${gillSans.variable} antialiased`}
        >
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
        </body>
        </html>
    );
}