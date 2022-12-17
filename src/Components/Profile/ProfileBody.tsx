import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArchivedHandler,
  getNoteHandler,
  getTrashHandler,
} from "../../Hooks/slices/NewNote/NoteReducer";
import { getDetails } from "../../Hooks/slices/User/UserDetails";
import { AppDispatch, RootState } from "../../Hooks/store";
import { NoteSummary } from "./NoteSummary";

export const ProfileBody = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getDetails());
    dispatch(getNoteHandler());
    dispatch(getArchivedHandler());
    dispatch(getTrashHandler());
  }, []);
  const { name, bio, firstName, lastName, email, createDate } = useSelector(
    (store: RootState) => store.userReducer
  );
  const { allNotes, archiveNotes, trashNotes } = useSelector(
    (store: RootState) => store.noteReducer
  );
  return (
    <div className="profile-body">
      <div className="profile-image">
        <img
          className="img-responsive"
          src={"	https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg"}
          alt="userimage"
        />
      </div>
      <div className="profile-content">
        <div className="profile-username">
          <div>{firstName}</div>
          <div>{lastName}</div>
        </div>
        <div className="profile-name">@{name}</div>
        <div className="profile-bio">
          {bio.length !== 0 ? bio : "404 bio missing!"}
        </div>
        <hr />
        <div>Note Summary</div>
        <div className="note-gist">
          <NoteSummary headerName="notes" lengthNote={allNotes.length} />
          <NoteSummary headerName="archive" lengthNote={archiveNotes.length} />
          <NoteSummary headerName="trash" lengthNote={trashNotes.length} />
        </div>
      </div>
    </div>
  );
};
