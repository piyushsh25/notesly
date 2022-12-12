import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AppDispatch, RootState } from "../../Hooks/store";
import { archiveButtonHandler, noteDeleteHandler, pinButtonHandler } from "./NoteHelperFunctions";
import { NoteProps } from "./Notes.type";
import { Time } from "./Time";
export const Note = ({
  header,
  content,
  fontFamily,
  backgroundColor,
  pinned,
  tags,
  noteId,
  createDate,
  formatDate,
}: NoteProps) => {
  const style = {
    fontFamily: fontFamily,
    backgroundColor: backgroundColor,
  };
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const presentLocation = location.pathname.slice(1, location.pathname.length);
  const { CTAstatus } = useSelector((store: RootState) => store.noteReducer);
// isSelected will store note id for a specific note, when an action is performed. that noteid will be use for spinner component for a specific note
  const [isSelected, setIsSelected] = useState("");

  function CTAcomponent() {
    return (
      <div className="note-cta">
        {/* time component */}
        <div className="note-date">
          <Time createDate={createDate} />
        </div>
        {/* cta */}
        <div className="note-icons">
          {presentLocation === "archives" ? (
            // add to home/main notes page
            <button>
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
          {presentLocation === "archives" ? (
            <button>
              <i className="bi bi-trash"></i>
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
  function SpinnerComponent() {
    return (
      <div className="note-cta">
        Hold tight.. we are working on it...
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      </div>
    );
  }
  return (
    <div className="note-container" style={style} id={noteId}>
      <div>
        <div className="note-upper-container">
          <div className="note-header">{header}</div>
          <button className="pin-icon" onClick={()=>pinButtonHandler({      header,
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
                  dispatch})}>
            {!pinned ? (
              <i className="bi bi-pin-angle"></i>
            ) : (
              <i className="bi bi-pin-angle-fill"></i>
            )}
          </button>
        </div>
        <div className="note-content">{content.slice(0, 70)}......</div>
      </div>
      <div>
        <hr />

        <div className="tag-names">
          {tags?.map((tag, id) => {
            return <div key={id}>#{tag}</div>;
          })}
        </div>
        <hr />

        {CTAstatus === "pending" && isSelected === noteId ? (
          <SpinnerComponent />
        ) : (
          <CTAcomponent />
        )}
      </div>
    </div>
  );
};
