import { Header } from "../Header/Header";
import { SignupWays } from "../SignupPage/SignupWays";
import { LoginBody } from "./LoginBody";

export const LoginPage = () => {
  return (
    <div className="signup-page-container">
      <Header />
      <LoginBody />
      <SignupWays />
    </div>
  );
};
