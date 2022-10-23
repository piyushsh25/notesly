import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Note } from "../Note/Note";
import { NotesArray } from "../Note/NotesArray";
import { DashboardCTA } from "../UserCTA/DashboardCTA";
import "./User.css"
export const User = () => {
  return (
    <div>
      <Header />
      <div className="user-body">
        <DashboardCTA />
        <NotesArray/>
      </div>
      <Footer />
    </div>
  );
};
