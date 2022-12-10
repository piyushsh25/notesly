import { useNavigate } from "react-router-dom"
import { Header } from "../Components/Header/Header"

export const ErrorPage=()=>{
    const navigate=useNavigate()
    setTimeout(()=>{
        navigate("/me")
    },2000)

    return <>
    <Header/>
    <div className="error-body">
        Error. This route doesn't exist. Redirecting you to homepage...
    </div>
    </>
}