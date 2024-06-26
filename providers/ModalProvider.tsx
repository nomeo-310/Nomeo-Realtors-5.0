"use client";

import LoginModal from "@/app/(root)/components/login/LoginModal";
import AgentSignupModal from "@/app/(root)/components/signUp/AgentSignupModal";
import SignupModal from "@/app/(root)/components/signUp/UserSignupModal";
import PrivacyPolicy from "@/app/(root)/components/terms/PrivacyPolicy";
import TermsAndConditionsModal from "@/app/(root)/components/terms/TermsAndConditionsModal";
import TermsOfServiceModal from "@/app/(root)/components/terms/TermsOfServiceModal";
import React from "react";

const ModalProvider = () => {
  return (
    <React.Fragment>
      <LoginModal />
      <SignupModal />
      <AgentSignupModal />
      <TermsAndConditionsModal />
      <PrivacyPolicy />
      <TermsOfServiceModal />
    </React.Fragment>
  );
};

export default ModalProvider;
