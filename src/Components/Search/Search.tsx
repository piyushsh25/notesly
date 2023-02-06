import { useDispatch, useSelector } from "react-redux";
import { noteActions } from "../../Hooks/slices/NewNote/NoteSlice";
import { AppDispatch, RootState } from "../../Hooks/store";
import { useEffect, useRef, useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
export const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  function fetch(value: any) {
    dispatch(noteActions.setSearchHandler({ value }));
  }
  const debounceFunction = (fetch: any, delay: number) => {
    let timer: any;
    return (value: any) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fetch(value);
      }, delay);
    };
  };

  const optimizeFunc = debounceFunction(fetch, 500);
  const searchHandler = (value: string) => {
    optimizeFunc(value);
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
