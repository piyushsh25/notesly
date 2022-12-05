import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { User } from "./Pages/User";
import { Archive } from "./Pages/Archive";
import { Trash } from "./Pages/Trash";
import { Tags } from "./Pages/Tags";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { RequiresAuth } from "./Hooks/Auth/RequiresAuth";
import { RedirectAuth } from "./Hooks/Auth/RedirectAuth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Hooks/store";
import { ToastComponent } from "./Components/Toast/ToastBody";
import { Logout } from "./Components/Logout/Logout";
import { toastAction } from "./Hooks/slices/Toast/ToastSlice";

function App() {
  const { showToast } = useSelector((store: RootState) => store.toastReducer);
  const { userError } = useSelector((store: RootState) => store.userReducer);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (userError) {
      localStorage.clear();
      dispatch(
        toastAction.setMessage({
          header: "You have been logged out",
          description:
            "There is some issue with authentication. Please login again",
          color: "Warning",
        })
      );
      dispatch(toastAction.setToastHandler({ message: true }));
      setTimeout(() => {
        dispatch(toastAction.setToastHandler({ message: false }));
      }, 5000);
    }
  }, [userError]);
  return (
    <div className="app-container">
      {showToast && <ToastComponent />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route element={<RequiresAuth />}>
            <Route path="/me" element={<User />} />
            <Route path="/archives" element={<Archive />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route element={<RedirectAuth />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
