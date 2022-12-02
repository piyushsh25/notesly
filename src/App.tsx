import React from "react";
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

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route element={<RequiresAuth />}>
            <Route path="/me" element={<User />} />
            <Route path="/archives" element={<Archive />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/tags" element={<Tags />} />
          </Route>
          <Route element={<RedirectAuth/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
