import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AppDispatch, RootState } from "../../Hooks/store";
import { CTAcomponent } from "./CTAComponent";
import { pinButtonHandler } from "./NoteHelperFunctions";
import { NoteProps } from "./Notes.type";
import { SpinnerComponent } from "./SpinnerComponent";
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

  return (
    <div className="note-container" style={style} id={noteId}>
      <div>
        <div className="note-upper-container">
          <div className="note-header">{header}</div>
          {presentLocation === "me" && (
            <button
              className="pin-icon"
              onClick={() =>
                pinButtonHandler({
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
              {!pinned ? (
                <i className="bi bi-pin-angle"></i>
              ) : (
                <i className="bi bi-pin-angle-fill"></i>
              )}
            </button>
          )}
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
          <CTAcomponent
            header={header}
            content={content}
            fontFamily={fontFamily}
            backgroundColor={backgroundColor}
            pinned={pinned}
            tags={tags}
            noteId={noteId}
            createDate={createDate}
            formatDate={formatDate}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            dispatch={dispatch}
          />
        )}
      </div>
    </div>
  );
};
