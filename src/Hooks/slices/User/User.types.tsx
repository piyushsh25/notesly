export type UserState = {
    name: string;
    userstatus: "idle" | "succeeded" | "pending" | "error";
    bio: string[];
    userError:boolean;
    firstName: String,
    lastName: String,
    email:String,
    createDate:String,
  };