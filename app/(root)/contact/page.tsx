import React from "react";
import ContactClient from "./components/ContactClient";
import { Metadata } from "next";
import Footer from "../components/footer/Footer";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <React.Fragment>
      <ContactClient />
      <Footer/>
    </React.Fragment>

  );
};

export default ContactPage;
