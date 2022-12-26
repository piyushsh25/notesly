import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getArchivedHandler,
  getNoteHandler,
  getTrashHandler,
} from "../../Hooks/slices/NewNote/NoteReducer";
import { getDetails } from "../../Hooks/slices/User/UserDetails";
import { AppDispatch, RootState } from "../../Hooks/store";
import { NoteGist } from "./NoteGist";
import { UserImage } from "./UserImage";
export const ProfileBody = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { name, bio, firstName, lastName, email, createDate } = useSelector(
    (store: RootState) => store.userReducer
  );
  useEffect(() => {
    dispatch(getDetails());
    dispatch(getNoteHandler());
    dispatch(getArchivedHandler());
    dispatch(getTrashHandler());
  }, []);
  return (
    <div className="profile-body">
      <UserImage />

      <div className="profile-content">
        <Link className="edit-user-profile" to="/profile/edit/">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <div className="profile-name">@{name}</div>
        <div className="profile-username">
          <div>{firstName}</div>
          <div>{lastName}</div>
        </div>

        <div className="profile-email">{email}</div>
        <div className="profile-bio">{bio ? bio : "404 bio missing!"}</div>
        <hr />
        <NoteGist />
      </div>
    </div>
  );
};
