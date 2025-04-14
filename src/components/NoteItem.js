import React, { useContext } from 'react'
import { noteContext } from '../context/notes/NoteState'
function NoteItem(props) {
    const { deleteNote } = useContext(noteContext)
    const { note, updation, showAlert } = props
    return (
        <div className='col-md-3 mb-3'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid mx-2 fa-trash" onClick={() => {
                        deleteNote(note._id)
                        showAlert('Note deleted successfully', 'success')
                    }} />
                    <i className="fa-solid mx-4 fa-pen-to-square" onClick={() => updation(note)} />
                </div>
            </div>
        </div>
    )
}

export default NoteItem
