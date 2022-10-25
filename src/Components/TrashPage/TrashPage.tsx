import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { NotesArray } from "../Note/NotesArray";
import { DashboardCTA } from "../UserCTA/DashboardCTA";
const TrashArray = [
  {
    header: "lol 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    backgroundColor: "#FDFDBD",
    fontFamily: "'PT Sans', sans-serif",
    pinned: true,
  },
  {
    header: "lol 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    backgroundColor: "#C8FFD4",
    fontFamily: "'PT Sans', sans-serif",
    pinned: false,
  },
  {
    header: "lol 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    backgroundColor: "#B8E8FC",
    fontFamily: "'Nunito Sans', sans-serif",
    pinned: true,
  },
  {
    header: "lol 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    backgroundColor: "#B1AFFF",
    fontFamily: "'Lora', serif",
    pinned: false,
  },
  {
    header: "lol5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    backgroundColor: "white",
    fontFamily: "'Lora', serif",
    pinned: true,
  },
  {
    header: "lol 6",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    backgroundColor: "white",
    fontFamily: "'Fuzzy Bubbles', cursive",
    pinned: true,
  },
];
export const TrashPage = () => {
  return (
    <div>
      <Header />
      <div className="user-body">
        <DashboardCTA />
        <NotesArray todisplayArray={TrashArray} />
      </div>
      <Footer />
    </div>
  );
};
