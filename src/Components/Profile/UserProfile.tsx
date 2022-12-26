import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { DashboardCTA } from "../UserCTA/DashboardCTA";
import { ProfileBody } from "./ProfileBody";
import "./Profile.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Hooks/store";
import { toast } from "react-toastify";
export const UserProfile = () => {
  const { profileUpdateStatus } = useSelector(
    (store: RootState) => store.userReducer
  );
  useEffect(() => {
    if (profileUpdateStatus === "succeeded") {
      toast.success("Successfully Updated profile");
    }
  },[]);
  return (
    <>
      <Header />
      <div className="user-body profile-page">
        <DashboardCTA />
        <ProfileBody />
      </div>
      <Footer />
    </>
  );
};
