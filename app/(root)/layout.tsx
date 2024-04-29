import type { Metadata } from "next";
import localFont from 'next/font/local'
import "../globals.css";
import Navigation from "./components/navigation/Navigation";

export const metadata: Metadata = {
  title: "Nomeo Apartments | Home",
  description: "A real estate webapp built with nextjs. A webapp designed by Salomi Afolabi of Nomeo Consults. The app was initially intended as a real estate application to help in leasing and purchasing apartments but it will now serve as an app that advertise and monitors a certain real estate.",
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
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
