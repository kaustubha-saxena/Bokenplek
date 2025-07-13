import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar2 from "./components/Navbar/Navbar2";
import { ReduxProvider } from './Redux/provider'
import { ToastContainer } from "react-toastify";

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
      <ReduxProvider>

      <body

className={`${geistSans.variable} ${geistMono.variable} antialiased`}
>
              <Navbar2/>
        {children}
        <ToastContainer /> 
        {/* <Footer/> */}
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </body>
        </ReduxProvider>
    </html>
  );
}
