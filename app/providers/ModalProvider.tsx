"use client";

import React from "react";
import LoginModal from "../(root)/components/login/LoginModal";
import AgentSignupModal from "../(root)/components/signUp/AgentSignupModal";
import TermsAndConditionsModal from "../(root)/components/terms/TermsAndConditionsModal";
import PrivacyPolicy from "../(root)/components/terms/PrivacyPolicy";
import UserSignupModal from "../(root)/components/signUp/UserSignupModal";
import TermsOfServiceModal from "../(root)/components/terms/TermsOfServiceModal";
import CookiesModal from "../(root)/components/terms/CookiesModal";

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
