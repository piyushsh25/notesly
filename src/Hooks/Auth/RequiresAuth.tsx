import { Navigate, Outlet, useLocation } from "react-router-dom";
type RequiresType = JSX.Element | React.ReactElement | null;
export const RequiresAuth = (): RequiresType => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
