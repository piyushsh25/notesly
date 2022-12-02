import { Header } from "../Header/Header";
import { SignupWays } from "../SignupPage/SignupWays";
import { LoginBody } from "./LoginBody";

export const LoginPage = () => {
  return (
    <div className="signup-login-container">
      <Header />
      <div className="header-login">Welcome back !</div>
      <SignupWays />
      <LoginBody />
    </div>
  );
};
