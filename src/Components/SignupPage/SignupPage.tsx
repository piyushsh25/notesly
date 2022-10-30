import { Header } from "../Header/Header";
import { SignUpBody } from "./SignUpBody";
import { SignupWays } from "./SignupWays";

export const SignupPage = () => {
  return (
    <div className="signup-page-container">
      <Header />
      <SignUpBody />
      <SignupWays />
    </div>
  );
};
