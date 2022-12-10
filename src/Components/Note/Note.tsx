import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { addToArchiveHandler } from "../../Hooks/slices/NewNote/NoteReducer";
import { AppDispatch, RootState } from "../../Hooks/store";
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
  const { archiveCTAstatus } = useSelector(
    (store: RootState) => store.noteReducer
  );

  const [isSelected, setIsSelected] = useState("");
  const archiveButtonHandler = ({
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
    setIsSelected(noteId);
    dispatch(
      addToArchiveHandler({
        header,
        content,
        fontFamily,
        backgroundColor,
        pinned,
        tags,
        noteId,
        createDate,
        formatDate,
      })
    );
  };
  function CTAcomponent() {
    return (
      <div className="note-cta">
        {/* time component */}
        <div className="note-date">
          <Time createDate={createDate} />
        </div>
        {/* cta */}
        <div className="note-icons">
          {/* color icon cta */}
          <button>
            <i className="bi bi-palette"></i>
          </button>

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
                })
              }
            >
              <i className="bi bi-calendar-plus"></i>
            </button>
          )}
          {/* add to trash */}
          <button>
            <i className="bi bi-trash"></i>
          </button>
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
          <button className="pin-icon">
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

        {archiveCTAstatus === "pending" && isSelected === noteId ? (
          <SpinnerComponent />
        ) : (
          <CTAcomponent />
        )}
      </div>
    </div>
  );
};
