import React, { useContext, useState } from 'react'
import Notes from './Notes'
import { noteContext } from '../context/notes/NoteState'

function Home(props) {
    const { addNote, updateNote } = useContext(noteContext)
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const [modalNote, setModalNote] = useState({})
    const [showModal, setShowModal] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        addNote(note , props.showAlert)
        setNote({ title: "", description: "", tag: "" })
    }
    const updation = (myNote) => {
        setModalNote(myNote)
        setShowModal(true)
    }

    return (
        <div>
            <div className='border border-danger rounded p-3 my-3'>
                <h2>Add a note</h2>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="title" placeholder="" onChange={(e) => {
                        setNote({ ...note, [e.target.id]: e.target.value })
                    }} value={note.title} />
                    <label htmlFor="floatingInput">Note Title</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="description" placeholder="" onChange={(e) => {
                        setNote({ ...note, [e.target.id]: e.target.value })
                    }} value={note.description} />
                    <label htmlFor="floatingPassword">Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="tag" placeholder="" onChange={(e) => {
                        setNote({ ...note, [e.target.id]: e.target.value })
                    }} value={note.tag} />
                    <label htmlFor="floatingInput">Tag</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </div>



            {showModal && <div className="modal show d-block" id="exampleModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Your Note Here...</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setShowModal(false) }}></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="title" placeholder="" onChange={(e) => {
                                    setModalNote({ ...modalNote, [e.target.id]: e.target.value })
                                }} value={modalNote.title} />
                                <label htmlFor="floatingInput">Note Title</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="description" placeholder="" onChange={(e) => {
                                    setModalNote({ ...modalNote, [e.target.id]: e.target.value })
                                }} value={modalNote.description} />
                                <label htmlFor="floatingPassword">Description</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="tag" placeholder="" onChange={(e) => {
                                    setModalNote({ ...modalNote, [e.target.id]: e.target.value })
                                }} value={modalNote.tag} />
                                <label htmlFor="floatingInput">Tag</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setShowModal(false) }}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => { setShowModal(false); updateNote(modalNote); setShowModal(false); props.showAlert('Note Updated successfully', 'success') }}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>}



            <Notes updation={updation} showAlert={props.showAlert} />
        </div>
    )
}

export default Home