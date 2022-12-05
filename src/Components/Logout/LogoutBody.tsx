import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LogoutBody = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        localStorage.clear()
        setTimeout(()=>{
            navigate("/login")
        },2000)
    },[])
  return <div className="logout-body">
      <div className="logout-message">  Hang in there. Logging you out...</div>
  </div>;
};
