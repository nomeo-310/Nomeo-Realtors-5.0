import type { Metadata } from "next";
import localFont from 'next/font/local'
import "../globals.css";
import Navigation from "./components/navigation/Navigation";
import ToastProvider from "@/app/providers/ToastProvider";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import ModalProvider from "../providers/ModalProvider";

export const metadata: Metadata = {
  title: {template: "%s | Nomeo Suites", default: "Home Page | Nomeo Suites"},
  description: "A real estate webapp built with ReactJs bootsrapped in NextJS, styled with TailwindCSS. A WebApp designed by Salomi Afolabi of Nomeo Consults. The app was initially intended as a real estate application to help in leasing and purchasing apartments but in the future will include investment opportunities as well other types of real estate adverts."
};

const urbanist = localFont({
  src:[{path: "../../public/fonts/Urbanist-Regular.ttf", weight: '400' }],
  variable: '--font-urbanist',
})

const barlow = localFont({
  src:[{path: "../../public/fonts/Barlow-Regular.ttf", weight: '400' }],
  variable: '--font-barlow',
});


export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${barlow.variable}`}>
        <ReactQueryProvider>
          <ToastProvider/>
          <ModalProvider/>
          <Navigation/>
          <ScrollToTopButton/>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
