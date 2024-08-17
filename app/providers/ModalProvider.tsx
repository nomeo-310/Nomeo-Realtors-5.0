"use client";

import React from "react";
import LoginModal from "../components/login/LoginModal";
import UserSignupModal from "../components/signUp/UserSignupModal";
import AgentSignupModal from "../components/signUp/AgentSignupModal";
import TermsAndConditionsModal from "../components/terms/TermsAndConditionsModal";
import PrivacyPolicy from "../components/terms/PrivacyPolicy";
import TermsOfServiceModal from "../components/terms/TermsOfServiceModal";
import CookiesModal from "../components/terms/CookiesModal";


const ModalProvider = () => {
  return (
    <React.Fragment>
      <LoginModal />
      <UserSignupModal />
      <AgentSignupModal />
      <TermsAndConditionsModal />
      <PrivacyPolicy />
      <TermsOfServiceModal />
      <CookiesModal />
    </React.Fragment>
  );
};

export default ModalProvider;
