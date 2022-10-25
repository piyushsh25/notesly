import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { DashboardCTA } from "../UserCTA/DashboardCTA";
import "./User.css";
import { UserNotes } from "./UserNotes";
export const UserPage = () => {
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
