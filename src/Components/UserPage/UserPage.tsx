import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDetails, userActions } from "../../Hooks/slices/User/UserDetails";
import { AppDispatch } from "../../Hooks/store";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { DashboardCTA } from "../UserCTA/DashboardCTA";
import "./User.css";
import { UserNotes } from "./UserNotes";
export const UserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getDetails());
  }, []);
  return (
    <div>
      <Header />
      <div className="user-body">
        <DashboardCTA />
        <UserNotes />
      </div>
      <Footer />
    </div>
  );
};
