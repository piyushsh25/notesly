import { useState } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const presentLocation = location.pathname.slice(1, location.pathname.length);
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
              <button>
                <i className="bi bi-calendar-plus"></i>
              </button>
            )}
            {/* add to trash */}
            <button>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
