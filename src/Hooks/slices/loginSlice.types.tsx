export type User = {
    username: String;
    password: String;
  };
  export type LoginInitialState = {
    username: String;
    password: String;
    loginLoadState: "idle" | "pending" | "succeeded" | "failed";
    message: String;
  };
  export type Action = {
    payload: any;
    type: string;
  };