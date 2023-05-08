import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext)
    const { notes, getNotes, editNote } = context
    const [note, setNote]= useState({id : '',etitle:"",ediscription:"", etag : ""})


    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])
    const updateNote = (currentNote ) => {
        ref.current.click()
        setNote({ id: currentNote._id  ,etitle: currentNote.title, ediscription: currentNote.discription, etag: currentNote.tag })

    }
    const ref = useRef(null)
    const refClose = useRef(null)

    const handelClick=(e)=>{
        console.log("Updateing the Note" , " Title " ,note)
        editNote(note.id, note.etitle , note.ediscription, note.etag)
        refClose.current.click()
    }
    const onChange=(e)=>{
        setNote({...note, [e.target.name]:e.target.value})
        
    }
    return (
        <>
            <AddNote />

            <button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle"  value ={note.etitle} name="etitle" aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ediscription" className="form-label">Discription</label>
                                    <input type="text" className="form-control" id="ediscription" name="ediscription" value ={note.ediscription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value ={note.etag}  onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose}type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handelClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-3'>
                <h2>Your notes</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} updateNote={updateNote} />
                })}


            </div>
        </>
    )
}

export default Notes