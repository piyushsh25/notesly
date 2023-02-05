import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getIndividualArchive,
  getIndividualNotes,
  getIndividualTrash,
  getTrashHandler,
} from "../../Hooks/slices/NewNote/NoteReducer";
import { AppDispatch, RootState } from "../../Hooks/store";
import { Header } from "../Header/Header";
import { DashboardCTA } from "../UserCTA/DashboardCTA";
import { NoteDetails } from "./NoteDetails";
import { SingleCTA } from "./SingleCTA";
import "./SingleNote.css";
export const SingleNote = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const dispatch = useDispatch<AppDispatch>();

  // note | trash | archive
  const presentLocation = location.pathname.split("/")[1];
  const noteId = location.pathname.split("/")[2];
  const { getSingleNoteStatus } = useSelector(
    (store: RootState) => store.noteReducer
  );
  useEffect(() => {
    if (presentLocation === "me") dispatch(getIndividualNotes({ noteId }));
    else if (presentLocation === "archive") {
      dispatch(getIndividualArchive({ noteId }));
    } else if (presentLocation === "trash") {
      dispatch(getIndividualTrash({ noteId }));
    }
  }, []);
  useEffect(() => {
    if (getSingleNoteStatus === "failed") {
      toast.error("Error loading note");
    }
  }, [getSingleNoteStatus]);
  return (
    <div>
      <Header />
      <div className="user-body">
        <DashboardCTA />
        {getSingleNoteStatus === "pending" ? (
          <div className="center-spinner">
            Hold tight.. loading note...{" "}
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </div>
        ) : null}

        {getSingleNoteStatus === "succeeded" ? (
          <div className="single-note-body">
            <SingleCTA />
            <NoteDetails />
          </div>
        ) : null}
        {getSingleNoteStatus === "failed" ? (
          <div className="center-spinner">
            Please refresh the page. We couldn't find any information{" "}
          </div>
        ) : null}
        {/* add component here:  user details like date created, edit delete buttons */}
      </div>
    </div>
  );
};
