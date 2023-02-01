import { useSelector } from "react-redux";
import { RootState } from "../../Hooks/store";
import { Time } from "../Note/Time";

export const SingleCTA = () => {
  const { formatDate } = useSelector((store: RootState) => store.noteReducer);
  return (
    <div className="single-cta">
      <div className="create-date">
        Last Updated : <Time createDate={formatDate} />
      </div>
      <div className="single-cta-actions">
        <button className="single-cta-button">Edit</button>
        <button className="single-cta-button">Delete</button>
      </div>
    </div>
  );
};
