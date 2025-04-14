import React, { useContext, useEffect } from 'react'
import { noteContext } from '../context/notes/NoteState'
import NoteItem from './NoteItem'
import { useNavigate } from 'react-router-dom';

function Notes(props) {
    const navigate = useNavigate();
    const { notes, getNotes } = useContext(noteContext)
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes()
        }else{
            navigate('/login');
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div className='row my-3'>
            <h2>Your Notes</h2>
            <h5 style={{color:"gray"}}>{notes.length===0 && "Add a Note to show up here..."}</h5>
            {notes.map((note, index) => <NoteItem showAlert={props.showAlert} key={index} note={note} updation={props.updation}/>)}
        </div>
    )
}

export default Notes