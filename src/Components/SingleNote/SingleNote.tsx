import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getIndividualNotes } from "../../Hooks/slices/NewNote/NoteReducer";
import { AppDispatch, RootState } from "../../Hooks/store";
import { Header } from "../Header/Header";
import { DashboardCTA } from "../UserCTA/DashboardCTA";
import { NoteDetails } from "./NoteDetails";
import "./SingleNote.css";
export const SingleNote = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const dispatch = useDispatch<AppDispatch>();
  const noteId = pathName.slice(6, pathName.length) as string;
  const { getSingleNoteStatus } = useSelector(
    (store: RootState) => store.noteReducer
  );
  useEffect(() => {
    dispatch(getIndividualNotes({ noteId }));
  }, []);
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
        {getSingleNoteStatus === "succeeded" ? <NoteDetails /> : null}
        {/* add component here:  user details like date created, edit delete buttons */}
      </div>
    </div>
  );
};
