import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UserState } from "./User.types";
type File = {
  file: any;
};
const initialState: UserState = {
  name: "",
  userstatus: "idle",
  bio: "",
  userError: false,
  firstName: "",
  lastName: "",
  email: "",
  createDate: "",
  image: "",
  linkedInLink: "",
  githubLink: "",
  imageUploadStatus: "idle",
  profileUpdateStatus: "idle",
};
export const getDetails = createAsyncThunk("user/getDetails", async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get("https://notesly-backend.onrender.com/me", {
    headers: { authorization: token },
  });
  return response.data;
});

export const createImageHandler = createAsyncThunk(
  "user/createImageHandler",
  async ({ file }: File) => {
    const data: FormData = new FormData();
    data.append("file", file);
    data.append("upload_preset", "notesly-profile-pic");
    data.append("cloud_name", "dm5yi6c11");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dm5yi6c11/image/upload",
      data
    );
    return response.data;
  }
);
export const editProfileHandler = createAsyncThunk(
  "user/editProfileHandler",
  async ({
    firstName,
    lastName,
    bio,
    linkedInLink,
    githubLink,
    image,
    email,
  }: UserState) => {
    const token = localStorage.getItem("token");
    const user = {
      firstName,
      lastName,
      email,
      image,
      githubLink,
      linkedInLink,
      bio,
    };
    const response = await axios.post(
      "https://notesly-backend.onrender.com/user/profile/edit/",
      { user: user },
      { headers: { authorization: token } }
    );
    return response.data;
  }
);
const UserSlice = createSlice({
  name: "userdetails",
  initialState,
  reducers: {
    setUserHandler: (state, action) => {
      state.userError = false;
    },
    setUserNameHandler: (state, action) => {
      state.name = action.payload;
    },
    setFirstNameHandler: (state, action) => {
      state.firstName = action.payload;
    },
    setLastNameHandler: (state, action) => {
      state.lastName = action.payload;
    },
    setEmailHandler: (state, action) => {
      state.email = action.payload;
    },
    setBioHandler: (state, action) => {
      state.bio = action.payload;
    },
    setLinkedInHandler: (state, action) => {
      state.linkedInLink = action.payload;
    },
    setGithubHandler: (state, action) => {
      state.githubLink = action.payload;
    },
    setProfileStatus: (state, action) => {
      state.profileUpdateStatus = action.payload.message;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state, action) => {
      state.userstatus = "pending";
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.userstatus = "error";
      state.userError = true;
      localStorage.clear();
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.name = action.payload.user[0].username;
      state.firstName = action.payload.user[0].firstName;
      state.lastName = action.payload.user[0].lastName;
      state.email = action.payload.user[0].email;
      state.bio = action.payload.user[0].bio;
      state.createDate = action.payload.user[0].createDate;
      state.githubLink = action.payload.user[0]?.githubLink || "https://github.com";
      state.linkedInLink = action.payload.user[0]?.linkedInLink || "https://linkedin.com";
      state.image =
        action.payload.user[0]?.image ||
        "https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg";
      state.userError = false;
      state.userstatus = "succeeded";
    });
    // create image link cloudinary api
    builder.addCase(createImageHandler.pending, (state, action) => {
      state.imageUploadStatus = "pending";
    });
    builder.addCase(createImageHandler.fulfilled, (state, action) => {
      state.imageUploadStatus = "succeeded";
      state.image = action.payload.secure_url;
    });
    builder.addCase(createImageHandler.rejected, (state, action) => {
      state.imageUploadStatus = "error";
    });
    // edit profile route
    builder.addCase(editProfileHandler.pending, (state, action) => {
      state.profileUpdateStatus = "pending";
    });
    builder.addCase(editProfileHandler.fulfilled, (state, action) => {
      state.profileUpdateStatus = "succeeded";
    });
    builder.addCase(editProfileHandler.rejected, (state, action) => {
      state.profileUpdateStatus = "error";
    });
  },
});
export const userReducer = UserSlice.reducer;
export const userActions = UserSlice.actions;
