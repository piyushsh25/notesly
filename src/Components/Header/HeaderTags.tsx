import { useSelector } from "react-redux";
import { RootState } from "../../Hooks/store";
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
  const { allNotes } = useSelector((store: RootState) => store.noteReducer);
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
        {pathname === "/trash" && (
          <div className="trash-icon">
            <i className="bi bi-trash"></i>
          </div>
        )}
      </div>
    );
  }
}
