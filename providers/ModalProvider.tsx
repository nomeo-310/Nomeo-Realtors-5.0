"use client";

import LoginModal from "@/app/(root)/components/Login/LoginModal";
import AgentSignupModal from "@/app/(root)/components/signUp/AgentSignupModal";
import SignupModal from "@/app/(root)/components/signUp/UserSignupModal";
import React from "react";


const ModalProvider = () => {
  return (
    <React.Fragment>
      <LoginModal />
      <SignupModal />
      <AgentSignupModal/>
    </React.Fragment>
  );
};

export default ModalProvider;
