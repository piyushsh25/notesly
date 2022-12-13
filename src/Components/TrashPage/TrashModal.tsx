import { useDispatch, useSelector } from "react-redux";
import { noteActions } from "../../Hooks/slices/NewNote/NoteSlice";
import { AppDispatch, RootState } from "../../Hooks/store";
import { deleteAllTrash } from "../Note/NoteHelperFunctions";

export const TrashModal = () => {
  const {  CTAstatus } = useSelector(
    (store: RootState) => store.noteReducer
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="delete-all-modal">
      <div className="delete-all-body">
        <div className="delete-header">
          Are you sure you want to delete all notes?
        </div>
        <div className="delete-content">
          <div>
            <button
              className="dashboard-button confirm"
              onClick={() => deleteAllTrash({ dispatch })}
            >
              {CTAstatus === "pending" ? "Deleting...." : "Yes"}
            </button>
          </div>
          <div>
            <button
              className="dashboard-button reject"
              onClick={() =>
                dispatch(noteActions.setDeleteAllModal({ message: false }))
              }
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
