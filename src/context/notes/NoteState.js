
import { createContext, useState } from "react";

const noteContext = createContext();

const NoteState = (props) => {
  const host = "https://inotebook-backend-6rp9.onrender.com";
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    })
    const data = await response.json()
    setNotes(data);
  }

  const addNote = async (note,showAlert) => {

    await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify(note)
    }).then(res => {
      if (!res.ok) {
        showAlert("Failed to add note", "danger");
        return;
      }
      showAlert("Note added successfully", "success");
      getNotes();
    })

    getNotes()
  }

  const deleteNote = async (id) => {

    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    })

    getNotes()
  }


  const updateNote = async (note) => {
    await fetch(`${host}/api/notes/updatenote/${note._id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify(note)
    })

    getNotes()
  }

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, updateNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export { noteContext };
export default NoteState;