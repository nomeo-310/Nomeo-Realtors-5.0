import React from "react";
import { Metadata } from "next";
import ProfileClient from "../components/ProfileClient";
import { getUserById } from "@/libs/actions/user.action";
import Footer from "../../components/footer/Footer";

interface pageProps {
  params: {id: string}
}

export const metadata: Metadata = {
  title: "Profile",
};

const ProfilePage = async({params}:pageProps) => {
  const singleUser = await getUserById(params.id);

  return (
    <React.Fragment>
      <ProfileClient user={singleUser} />
      <Footer/>
    </React.Fragment>
  );
};

export default ProfilePage;
