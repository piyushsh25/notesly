import { Navigate, Outlet, useLocation } from "react-router-dom";
type RequiresType = JSX.Element | React.ReactElement | null;
export const RedirectAuth = (): RequiresType => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  // navigate to me incase the user accesses login route, when already logged in
  return !token ? <Outlet /> : <Navigate to="/me" state={{ from: location }} />;
};
