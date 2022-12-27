import { Header } from "../Header/Header";
import { DashboardCTA } from "../UserCTA/DashboardCTA";
import { EditProfileForm } from "./EditProfileForm";
import "./EditProfile.css"
export const EditProfilePage = () => {
  return <div className="user-body">
    <Header/>
    <DashboardCTA/>

    <EditProfileForm/>
  </div>;
};
