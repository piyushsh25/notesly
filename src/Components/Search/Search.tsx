import { useDispatch, useSelector } from "react-redux";
import { noteActions } from "../../Hooks/slices/NewNote/NoteSlice";
import { AppDispatch, RootState } from "../../Hooks/store";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
export const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchHandler = (value: string) => {
    dispatch(noteActions.setSearchHandler({ value }));
  };
  const { filteredNote } = useSelector((store: RootState) => store.noteReducer);
  const [showRecommendation, setShowRecommendation] = useState(false);
  // recommendation disappears on outside click
  const menRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (!menRef.current?.contains(e.target)) {
        setShowRecommendation(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <div>
      <div className="search-bar" onFocus={() => setShowRecommendation(true)}>
        <div>
          <input
            placeholder="Start typing to search notes"
            onChange={(e) => searchHandler(e.target.value)}
          />
        </div>
        <div className="search-icon">
          <i className="bi bi-search"></i>
        </div>
        <div ref={menRef} className="search-recommendation-container">
          <ul className="search-recommendation">
            {showRecommendation
              ? filteredNote?.map((note) => {
                  return (
                    <li key={note.noteId}>
                      {" "}
                      <Link key={note.noteId} to={`/me/${note.noteId}`}>
                        {note.header}
                      </Link>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};
