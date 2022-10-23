import { Search } from "../Search/Search"
import { Note } from "./Note"
import "./Notes.css"
export const NotesArray=()=>{
    const notes=[1,2,3,43]
    return <div className="notes-array">
    <Search/>
        {notes.map(note=><Note/>)}
    </div>
}