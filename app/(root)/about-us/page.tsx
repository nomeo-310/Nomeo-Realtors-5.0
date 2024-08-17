import React from "react";
import AboutClient from "./components/AboutClient";
import { Metadata } from "next";
import Footer from "../../components/footer/Footer";

export const metadata: Metadata = {
  title: "About Us",
};

const page = () => {
  return (
    <React.Fragment>
      <AboutClient />
      <Footer />
    </React.Fragment>
  );
};

export default page;
