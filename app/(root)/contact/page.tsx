import React from "react";
import ContactClient from "./components/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nomeo Suites | Contact",
  description: "A real estate webapp built with nextjs. A webapp designed by Salomi Afolabi of Nomeo Consults. The app was initially intended as a real estate application to help in leasing and purchasing apartments but it will now serve as an app that advertise and monitors a certain real estate.",
};

const ContactPage = () => {
  return <ContactClient />;
};

export default ContactPage;
