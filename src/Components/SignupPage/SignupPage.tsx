import { Header } from "../Header/Header";
import { SignUpBody } from "./SignUpBody";
import { SignupWays } from "./SignupWays";

export const SignupPage = () => {
  return (
    <div className="signup-login-container">
      <Header />
      <SignupWays />
      <SignUpBody />
    </div>
  );
};
