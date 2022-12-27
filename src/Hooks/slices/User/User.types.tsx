export type UserState = {
  name: string;
  userstatus: "idle" | "succeeded" | "pending" | "error";
  bio: string;
  userError: boolean;
  firstName: string;
  lastName: string;
  email: string;
  createDate: string;
  image: string;
  linkedInLink: string;
  githubLink: string;
  imageUploadStatus: "idle" | "succeeded" | "pending" | "error";
  profileUpdateStatus: "idle" | "succeeded" | "pending" | "error";
};
