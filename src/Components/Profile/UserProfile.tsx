import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { DashboardCTA } from "../UserCTA/DashboardCTA";
import { ProfileBody } from "./ProfileBody";
import "./Profile.css";
export const UserProfile = () => {
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
