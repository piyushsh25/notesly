import { useSelector } from "react-redux"
import { RootState } from "../../Hooks/store"

export const UserImage=()=>{
  const {image}=useSelector((store:RootState)=>store.userReducer)
    return <div className="profile-image">
      <img
        className="img-responsive"
        src={image}
        alt="userimage"
      />
    </div>
}