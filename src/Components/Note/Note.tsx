import { NoteProps } from "./Notes.type";
export const Note = ({ header, content }: NoteProps) => {
  return (
    <div className="note-container">
      <div>
        <div className="note-upper-container">
          <div className="note-header">{header}</div>
          <button className="pin-icon">
            <i className="bi bi-pin-angle"></i>
            {/* <i className="bi bi-pin-angle-fill"></i> */}
          </button>
        </div>
        <div className="note-content">{content.slice(0, 70)}......</div>
      </div>
      <div>
        <hr />
        <div className="note-cta">
          <div className="note-date">created : 10/10/2010</div>
          <div className="note-icons">
            <button>
              <i className="bi bi-palette"></i>
            </button>
            <button>
              <i className="bi bi-calendar-plus"></i>
            </button>
            <button>
              <i className="bi bi-bookmarks-fill"></i>
              {/* <i className="bi bi-bookmarks"></i> */}
            </button>
            <button>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
