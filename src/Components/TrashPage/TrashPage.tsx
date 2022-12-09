import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrashHandler, noteActions } from "../../Hooks/slices/NewNote/NoteSlice";
import { getDetails } from "../../Hooks/slices/User/UserDetails";
import { AppDispatch, RootState } from "../../Hooks/store";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { NotesArray } from "../Note/NotesArray";
import { DashboardCTA } from "../UserCTA/DashboardCTA";
// const TrashArray = [
//   {
//     header: "lol 1",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//     backgroundColor: "#FDFDBD",
//     fontFamily: "'PT Sans', sans-serif",
//     pinned: true,
//     tags:["tag1","lol","lmao"],
//     noteId: "string",
//     createDate: "string",
//     formatDate:"string"
//   },
  // {
  //   header: "lol 2",
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  //   backgroundColor: "#C8FFD4",
  //   fontFamily: "'PT Sans', sans-serif",
  //   pinned: false,
  //   tags:["lol","lmao"]
  // },
  // {
  //   header: "lol 3",
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  //   backgroundColor: "#B8E8FC",
  //   fontFamily: "'Nunito Sans', sans-serif",
  //   pinned: true,
  //   tags:["tag1","lol","lmao"]
  // },
  // {
  //   header: "lol 4",
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  //   backgroundColor: "#B1AFFF",
  //   fontFamily: "'Lora', serif",
  //   pinned: false,
  //   tags:["tag1","lol"]
  // },
  // {
  //   header: "lol5",
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  //   backgroundColor: "white",
  //   fontFamily: "'Lora', serif",
  //   pinned: true,
  //   tags:["tag1","lmao"]
  // },
  // {
  //   header: "lol 6",
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  //   backgroundColor: "white",
  //   fontFamily: "'Fuzzy Bubbles', cursive",
  //   pinned: true,
    
  //   tags:["tag1"]
  // },
// ];
export const TrashPage = () => {
  const dispatch=useDispatch<AppDispatch>()
  const {archiveNotes}=useSelector((store:RootState)=>store.noteReducer)
  useEffect(() => {
    dispatch(getDetails());
    dispatch(getTrashHandler())
  }, []);
  return (
    <div>
      <Header />
      <div className="user-body">
        <DashboardCTA />
        <NotesArray todisplayArray={archiveNotes} />
      </div>
      <Footer />
    </div>
  );
};
