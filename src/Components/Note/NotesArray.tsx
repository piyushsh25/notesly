import { Search } from "../Search/Search";
import { Note } from "./Note";
import "./Notes.css";
import { NoteProps } from "./Notes.type";
export const NotesArray = () => {
  /* font-family: 'Freehand', cursive;
font-family: 'Lora', serif;
font-family: 'Nunito Sans', sans-serif;
font-family: 'PT Sans', sans-serif;
font-family: 'Fasthand', cursive;
font-family: 'Fuzzy Bubbles', cursive;
*/

  const notes = [
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
  function pinnedTotal(acc: number, curr: NoteProps) {
    return curr.pinned ? (acc = acc + 1) : acc;
  }
  function unpinnedTotal(acc: number, curr: NoteProps) {
    return !curr.pinned ? (acc = acc + 1) : acc;
  }
  return (
    <div className="notes-array">
      <Search />
      <h2>Pinned NOTESLY : {notes.reduce(pinnedTotal, 0)}</h2>
      {notes?.map(
        (note) =>
          note.pinned && (
            <Note
              header={note.header}
              content={note.content}
              fontFamily={note.fontFamily}
              backgroundColor={note.backgroundColor}
              pinned={note.pinned}
            />
          )
      )}
      <h2>OTHER NOTESLY:  {notes.reduce(unpinnedTotal, 0)}</h2>
      {notes?.map(
        (note) =>
          !note.pinned && (
            <Note
              header={note.header}
              content={note.content}
              fontFamily={note.fontFamily}
              backgroundColor={note.backgroundColor}
              pinned={note.pinned}
            />
          )
      )}
    </div>
  );
};
