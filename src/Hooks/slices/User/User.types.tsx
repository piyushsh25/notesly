export type UserState = {
    name: string;
    userstatus: "idle" | "succeeded" | "pending" | "error";
    bio: string[];
    userError:boolean
  };