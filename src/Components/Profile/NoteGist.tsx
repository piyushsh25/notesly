import { NoteSummary } from "./NoteSummary";
import { RootState } from "../../Hooks/store";
import { useSelector } from "react-redux";
export const NoteGist = () => {
    const { allNotes, archiveNotes, trashNotes } = useSelector(
        (store: RootState) => store.noteReducer
      );
  return (
    <div>
      <div className="note-gist-header">Note Summary</div>
      <div className="note-gist">
        <NoteSummary headerName="notes" lengthNote={allNotes.length} />
        <NoteSummary headerName="archive" lengthNote={archiveNotes.length} />
        <NoteSummary headerName="trash" lengthNote={trashNotes.length} />
      </div>
    </div>
  );
};
