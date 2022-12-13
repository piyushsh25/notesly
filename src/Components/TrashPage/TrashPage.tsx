import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getTrashHandler,
  noteActions,
} from "../../Hooks/slices/NewNote/NoteSlice";
import { getDetails } from "../../Hooks/slices/User/UserDetails";
import { AppDispatch, RootState } from "../../Hooks/store";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { deleteAllTrash } from "../Note/NoteHelperFunctions";
import { NotesArray } from "../Note/NotesArray";
import { DashboardCTA } from "../UserCTA/DashboardCTA";
import "./TrashPage.css";
export const TrashPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { trashNotes, getTrashStatus, showDeleteAll, CTAstatus } = useSelector(
    (store: RootState) => store.noteReducer
  );
  useEffect(() => {
    dispatch(getTrashHandler());
    dispatch(getDetails());
  }, []);
  return (
    <div className="trash-body">
      <Header />
      <div className="user-body">
        <DashboardCTA />
        {getTrashStatus === "pending" ? (
          <div className="center-spinner">
            Hold tight.. loading trash
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </div>
        ) : (
          <NotesArray todisplayArray={trashNotes} />
        )}
      </div>
      {showDeleteAll && (
        <div className="delete-all-modal">
          <div className="delete-all-body">
            <div className="delete-header">
              Are you sure you want to delete all notes?
            </div>
            <div className="delete-content">
              <div>
                <button
                  className="dashboard-button confirm"
                  onClick={() => deleteAllTrash({ dispatch })}
                >
                  {CTAstatus === "pending" ? "Deleting...." : "Yes"}
                </button>
              </div>
              <div>
                <button
                  className="dashboard-button reject"
                  onClick={() =>
                    dispatch(noteActions.setDeleteAllModal({ message: false }))
                  }
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};
