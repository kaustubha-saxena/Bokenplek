import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
        <Footer/>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </body>
    </html>
  );
}
