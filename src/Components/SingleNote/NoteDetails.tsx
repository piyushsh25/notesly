import { useSelector } from "react-redux";
import { RootState } from "../../Hooks/store";

export const NoteDetails = () => {
  //integrated individual note api .
  // stored in respective states
  //design and structure remaining
  const { header, content, fontFamily, backgroundColor, pinned, tags } =
    useSelector((store: RootState) => store.noteReducer);

  return (
    <div
      className="individual-note-container"
      style={{ fontFamily: fontFamily }}
    >
      <div className="individual-note-header">{header}</div>
      <div className="note-tags">
        {tags.map((tag, id) => {
          return <div key={id}>#{tag}</div>;
        })}
      </div>
      <div className="individual-note-content">{content}</div>
    </div>
  );
};
