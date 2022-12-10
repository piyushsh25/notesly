import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArchivedHandler } from "../../Hooks/slices/NewNote/NoteSlice";
import { getDetails } from "../../Hooks/slices/User/UserDetails";
import { AppDispatch, RootState } from "../../Hooks/store";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { NotesArray } from "../Note/NotesArray";
import { DashboardCTA } from "../UserCTA/DashboardCTA";
import { Spinner } from "react-bootstrap";
import "./Archive.css"
export const ArchivedPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { archiveNotes: ArchiveArray, getArchiveStatus } = useSelector(
    (store: RootState) => store.noteReducer
  );
  useEffect(() => {
    dispatch(getArchivedHandler());
    dispatch(getDetails());
  }, []);
  return (
    <div>
      <Header />
      <div className="user-body">
        <DashboardCTA />
        {getArchiveStatus === "pending" ? (
          <div className="center-spinner">
            Hold tight.. loading archives
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </div>
        ) : (
          <>
            {" "}
            <NotesArray todisplayArray={ArchiveArray} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};
