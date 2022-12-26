import { UserState } from "../../Hooks/slices/User/User.types";
import {
  createImageHandler,
  editProfileHandler,
} from "../../Hooks/slices/User/UserDetails";
import { AppDispatch } from "../../Hooks/store";

export const setImageChangeHandler = (file: File, dispatch: AppDispatch) => {
  dispatch(createImageHandler({ file }));
};
type Event = React.MouseEvent<HTMLButtonElement, MouseEvent>;
export const editButtonHandler = (
  e: Event,
  {
    firstName,
    lastName,
    email,
    bio,
    linkedInLink,
    githubLink,
    imageUploadStatus,
    userError,
    image,
    name,
    userstatus,
    createDate,
    profileUpdateStatus,
  }: UserState,
  dispatch: AppDispatch
) => {
  e.preventDefault();
  dispatch(
    editProfileHandler({
      firstName,
      lastName,
      email,
      bio,
      linkedInLink,
      githubLink,
      imageUploadStatus,
      userError,
      image,
      name,
      userstatus,
      createDate,
      profileUpdateStatus,
    })
  );
};
