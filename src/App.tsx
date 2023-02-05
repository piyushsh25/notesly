import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { Logout } from "./Components/Logout/Logout";
import { NewNote } from "./Pages/NewNote";
import { userActions } from "./Hooks/slices/User/UserDetails";
import { Toastify } from "./Components/ToastContainer/ToastContainer";
import { toast } from "react-toastify";
import { AppDispatch, RootState } from "./Hooks/store";
import { ErrorPage } from "./Pages/Error";
import { Profile } from "./Pages/Profile";
import { EditProfile } from "./Pages/EditProfile";
import { IndividualNote } from "./Pages/IndividualNote";

function App() {
  const { userError } = useSelector((store: RootState) => store.userReducer);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    //user slice will run everytime a page is loaded to authenticate a user
    if (userError) {
      dispatch(userActions.setUserHandler({}));
      toast.error(
        "There is some issue with authentication. Please login again :)"
      );
    }
  }, [userError]);
  return (
    <div className="app-container">
      <Toastify />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
          <Route element={<RequiresAuth />}>
            <Route path="/me" element={<User />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/newnote" element={<NewNote />} />
            <Route path="/profile/" element={<Profile />} />
            <Route path="/profile/edit/" element={<EditProfile />} />
            {/* main note section in me/id */}
            <Route path="/me/:id" element={<IndividualNote/>}/>
            <Route path="/archive/:id" element={<IndividualNote/>}/>
            <Route path="/trash/:id" element={<IndividualNote/>}/>
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
