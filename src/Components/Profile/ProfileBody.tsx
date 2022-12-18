import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArchivedHandler,
  getNoteHandler,
  getTrashHandler,
} from "../../Hooks/slices/NewNote/NoteReducer";
import { getDetails } from "../../Hooks/slices/User/UserDetails";
import { AppDispatch, RootState } from "../../Hooks/store";
import { NoteGist } from "./NoteGist";
import { NoteSummary } from "./NoteSummary";
import { UserImage } from "./UserImage";

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

  return (
    <div className="profile-body">
      <UserImage />

      <div className="profile-content">
        <button className="edit-user-profile">
          <i className="bi bi-pencil-square"></i>
        </button>
        <div className="profile-username">
          <div>{firstName}</div>
          <div>{lastName}</div>
        </div>
        <div className="profile-name">@{name}</div>
        <div className="profile-bio">
          {bio.length !== 0 ? bio : "404 bio missing!"}
        </div>
        <hr />
        <NoteGist />
      </div>
    </div>
  );
};
