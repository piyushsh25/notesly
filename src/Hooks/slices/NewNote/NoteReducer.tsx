import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NewNote } from "./NewNote.types";
import { v4 as uuidv4 } from "uuid";
//get notes

export const getNoteHandler = createAsyncThunk(
    "getNote/getNoteHandler",
    async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://notesly-backend.onrender.com/notes/",
        { headers: { authorization: token } }
      );
      return response.data;
    }
  );
  // get archived notes
  export const getArchivedHandler = createAsyncThunk(
    "getNote/getArchivedHandler",
    async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://notesly-backend.onrender.com/archive/",
        { headers: { authorization: token } }
      );
      return response.data;
    }
  );
  //get trash notes
  export const getTrashHandler = createAsyncThunk(
    "getNote/getTrashNotes",
    async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://notesly-backend.onrender.com/trash/",
        { headers: { authorization: token } }
      );
      return response.data;
    }
  );
  export const saveNewNoteHandler = createAsyncThunk(
    "saveNote/saveNewNoteHandler",
    async ({
      header,
      content,
      fontFamily,
      backgroundColor,
      pinned,
      tagHolder,
    }: NewNote) => {
      const noteId = uuidv4();
      const token = localStorage.getItem("token");
      const user = {
        noteId,
        header,
        content,
        fontFamily,
        backgroundColor,
        pinned,
        tags:tagHolder.split(" "),
      };
      const response = await axios.post(
        "https://notesly-backend.onrender.com/notes/add/",
        { user: user },
        { headers: { authorization: token } }
      );
      return response.data;
    }
  );