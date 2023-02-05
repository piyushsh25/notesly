import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteHandler } from "../../Hooks/slices/NewNote/NoteReducer";
import { AppDispatch, RootState } from "../../Hooks/store";
import { NoteEditProps } from "../Note/Notes.type";
import { Time } from "../Note/Time";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { noteActions } from "../../Hooks/slices/NewNote/NoteSlice";
import { deleteTrashButton } from "../Note/NoteHelperFunctions";
export const SingleCTA = () => {
  const {
    noteId,
    header,
    content,
    fontFamily,
    backgroundColor,
    pinned,
    tags,
    createDate,
    formatDate,
    CTAstatus,
    CTAmessage,
  } = useSelector((store: RootState) => store.noteReducer);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  // note | trash | archive
  const presentLocation = location.pathname.split("/")[1];
  const deleteNote = ({
    header,
    content,
    fontFamily,
    backgroundColor,
    noteId,
    pinned,
    tags,
    createDate,
    formatDate,
    isSelected = "",
    dispatch,
    setIsSelected = () => null,
  }: NoteEditProps) => {
    presentLocation === "trash"
      ? deleteTrashButton({
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
      : dispatch(
          deleteNoteHandler({
            header,
            content,
            fontFamily,
            backgroundColor,
            noteId,
            pinned,
            tags,
            createDate,
            formatDate,
          })
        );
  };
  useEffect(() => {
    if (CTAstatus === "failed") {
      toast.error(CTAmessage);
      dispatch(noteActions.setCTAstatusIdle({}));
    }
    if (CTAstatus === "succeeded") {
      toast.success(CTAmessage);
      dispatch(noteActions.setCTAstatusIdle({}));
      setTimeout(() => {
        navigate(`/${presentLocation}`);
      }, 1);
    }

  }, [CTAstatus]);
  return (
    <div className="single-cta">
      <div className="create-date">
        Last Updated : <Time createDate={formatDate} />
      </div>
      <div className="single-cta-actions">
        {CTAstatus === "pending" ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            className="single-cta-button delete"
          />
        ) : (
          <button
            className="single-cta-button delete"
            onClick={() =>
              deleteNote({
                header,
                content,
                fontFamily,
                backgroundColor,
                noteId,
                pinned,
                tags,
                createDate,
                formatDate,
                isSelected: "",
                dispatch,
                setIsSelected: () => null,
              })
            }
          >
            Delete
          </button>
        )}

        {presentLocation === "me" ? (
          <Link className="single-cta-button edit" to={`/edit/${noteId}`}>Edit</Link>
        ) : null}
      </div>
    </div>
  );
};
