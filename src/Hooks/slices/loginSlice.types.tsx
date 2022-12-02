export type User = {
    username: string;
    password: string;
  };
  export type LoginInitialState = {
    username: string;
    password: string;
    loginLoadState: "idle" | "pending" | "succeeded" | "failed";
    message: string;
  };
  export type Action = {
    payload: any;
    type: string;
  };