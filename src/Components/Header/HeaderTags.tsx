import { useDispatch, useSelector } from "react-redux";
import { noteActions } from "../../Hooks/slices/NewNote/NoteSlice";
import { AppDispatch, RootState } from "../../Hooks/store";
import { NoteProps } from "../Note/Notes.type";

type DisplayArray = {
  todisplayArray: NoteProps[];
};
export function HeaderTags(
  pathname: string,
  { todisplayArray }: DisplayArray,
  tagName: string,
  setTag: React.Dispatch<React.SetStateAction<string>>
) {
  const { allNotes, trashNotes } = useSelector(
    (store: RootState) => store.noteReducer
  );
  const dispatch = useDispatch<AppDispatch>();
  if (pathname === "/tags") {
    const tagsFromArr = allNotes.map((item) => item.tags);
    const flattenedArray = tagsFromArr.flat(1);
    let uniqueTags = flattenedArray.filter(
      (value, index, self) => self.indexOf(value) === index
    );
    uniqueTags.push("All");
    return (
      <div className="tag-header">
        <div className="array-header-cta-all">
          <div className="h2">
            {pathname.slice(1, pathname.length).toLocaleUpperCase()}
          </div>
        </div>
        <div className="array-header-cta-all">
          <div className="tag-names">
            {uniqueTags.map((tags, id) => (
              <div className="tag-input" key={id}>
                <input
                  type="radio"
                  id={tags}
                  name="radios"
                  value="all"
                  onChange={() => setTag(tags)}
                  checked={tags === tagName}
                />{" "}
                <label className="label-tag" htmlFor={tags}>
                  #{tags}
                </label>
              </div>
              // <div onClick={() => setTag(tags)}>#{tags}</div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="array-header-cta-all">
        <div className="h2">
          {pathname.slice(1, pathname.length).toLocaleUpperCase()} :{" "}
          {todisplayArray.length}
        </div>
        {pathname === "/trash" && trashNotes.length !== 0 && (
          <button
            className="trash-icon"
            onClick={() =>
              dispatch(noteActions.setDeleteAllModal({ message: true }))
            }
          >
            <i className="bi bi-trash"></i>
          </button>
        )}
      </div>
    );
  }
}
