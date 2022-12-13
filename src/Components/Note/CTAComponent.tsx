import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { AppDispatch } from "../../Hooks/store";
import {
  addToHomeHandler,
  archiveButtonHandler,
  deleteTrashButton,
  noteDeleteHandler,
} from "./NoteHelperFunctions";
import { NoteEditProps } from "./Notes.type";
import { Time } from "./Time";
export function CTAcomponent({
  header,
  content,
  fontFamily,
  backgroundColor,
  pinned,
  tags,
  noteId,
  createDate,
  formatDate,
  isSelected,
  setIsSelected,
}: NoteEditProps) {
  const location = useLocation();
  const presentLocation = location.pathname.slice(1, location.pathname.length);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="note-cta">
      {/* time component */}
      <div className="note-date">
        <Time createDate={createDate} />
      </div>
      {/* cta */}
      <div className="note-icons">
        {presentLocation === "archives" || presentLocation === "trash" ? (
          // add to home/main notes page
          <button
            onClick={() =>
              addToHomeHandler({
                header,
                content,
                fontFamily,
                backgroundColor,
                pinned,
                tags,
                noteId,
                createDate,
                formatDate,
                isSelected,
                setIsSelected,
                dispatch,
              })
            }
          >
            <i className="bi bi-house"></i>
          </button>
        ) : (
          // add to archives
          <button
            onClick={() =>
              archiveButtonHandler({
                header,
                content,
                fontFamily,
                backgroundColor,
                pinned,
                tags,
                noteId,
                createDate,
                formatDate,
                isSelected,
                setIsSelected,
                dispatch,
              })
            }
          >
            <i className="bi bi-calendar-plus"></i>
          </button>
        )}
        {/* add to trash */}
        {presentLocation === "trash" ? (
          <button>
            <i
              className="bi bi-trash"
              onClick={() =>
                deleteTrashButton({
                  header,
                  content,
                  fontFamily,
                  backgroundColor,
                  pinned,
                  tags,
                  noteId,
                  createDate,
                  formatDate,
                  isSelected,
                  setIsSelected,
                  dispatch,
                })
              }
            ></i>
          </button>
        ) : (
          <button
            onClick={() =>
              noteDeleteHandler({
                header,
                content,
                fontFamily,
                backgroundColor,
                noteId,
                pinned,
                tags,
                createDate,
                formatDate,
                isSelected,
                setIsSelected,
                dispatch,
              })
            }
          >
            <i className="bi bi-trash"></i>
          </button>
        )}
      </div>
    </div>
  );
}
