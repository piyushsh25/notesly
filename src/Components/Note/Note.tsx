type Props = {
  header: string;
  content: string;
};
export const Note = ({ header, content }: Props) => {
  return (
    <div className="note-container">
      <div>
        <div className="note-upper-container">
          <div className="note-header">{header}</div>
          <div className="pin-icon">
            <i className="bi bi-pin-angle"></i>
            {/* <i className="bi bi-pin-angle-fill"></i> */}
          </div>
        </div>
        <div className="note-content">{content.slice(0,70)}......</div>
      </div>
      <div>
        <hr />
        <div className="note-cta">
          <div className="note-date">created on 10/10/2010</div>
          <div className="note-icons">
            <div>
              <i className="bi bi-palette"></i>
            </div>
            <div>
              <i className="bi bi-calendar-plus"></i>
            </div>
            <div>
              <i className="bi bi-bookmarks-fill"></i>
              {/* <i className="bi bi-bookmarks"></i> */}
            </div>
            <div>
              <i className="bi bi-trash"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
