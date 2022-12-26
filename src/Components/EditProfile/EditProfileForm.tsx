import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createImageHandler,
  editProfileHandler,
  getDetails,
  userActions,
} from "../../Hooks/slices/User/UserDetails";
import { AppDispatch, RootState } from "../../Hooks/store";

type Event = React.MouseEvent<HTMLButtonElement, MouseEvent>;
export const EditProfileForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getDetails());
  }, []);
  const {
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
  } = useSelector((store: RootState) => store.userReducer);
  async function editButtonHandler(e: Event) {
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
  }
  const setImageChangeHandler = (file: File) => {
    dispatch(createImageHandler({ file }));
  };

  useEffect(() => {
    if (imageUploadStatus === "error") {
      toast.error("Error uploading image. Select the image file again");
    }
    if (profileUpdateStatus === "error") {
      toast.error("Error updating profile");
    }
    if (profileUpdateStatus === "succeeded") {
      navigate("/profile/");
      setTimeout(()=>{
        dispatch(userActions.setProfileStatus({message:"idle"}))
      },0)
    }
  }, [imageUploadStatus, profileUpdateStatus]);
  return (
    <div className="edit-profile-form">
      <h1> Profile Information</h1>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) =>
                dispatch(userActions.setFirstNameHandler(e.target.value))
              }
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) =>
                dispatch(userActions.setLastNameHandler(e.target.value))
              }
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group className="mb-3">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter bio"
              value={bio}
              onChange={(e) =>
                dispatch(userActions.setBioHandler(e.target.value))
              }
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>LinkedIn link</Form.Label>
            <Form.Control
              placeholder="Starts with https://"
              type="text"
              value={linkedInLink}
              onChange={(e) =>
                dispatch(userActions.setLinkedInHandler(e.target.value))
              }
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Github link</Form.Label>
            <Form.Control
              placeholder="Starts with https://"
              type="text"
              value={githubLink}
              onChange={(e) =>
                dispatch(userActions.setGithubHandler(e.target.value))
              }
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Image</Form.Label>
            <input
              className="form-control"
              type="file"
              placeholder="Select image"
              onChange={(e: any) => setImageChangeHandler(e.target.files[0])}
            />
            {imageUploadStatus === "pending" && (
              <div>
                Uploading image. Please wait
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              </div>
            )}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                dispatch(userActions.setEmailHandler(e.target.value))
              }
            />
          </Form.Group>
        </Row>
        {profileUpdateStatus === "pending" ? (
          <button className="dashboard-button">
            <div>
              Saving ....{" "}
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />{" "}
            </div>
          </button>
        ) : (
          <button
            className="dashboard-button"
            type="submit"
            onClick={(e) => editButtonHandler(e)}
          >
            <div>Save Profile</div>
          </button>
        )}
      </Form>
    </div>
  );
};
