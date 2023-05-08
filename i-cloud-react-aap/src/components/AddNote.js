import React, { useContext, useState} from "react";
import noteContext from "../context/notes/noteContext";

const AddNotes = () => {
    const context = useContext(noteContext)
    const { addNote, getNotes} = context
    
    
    const [note, setNote]= useState({title:"", discription:"", tag : "Default"})
    const handelClick=(e)=>{
        e.preventDefault()
        addNote(note.title, note.discription, note.tag)
       // updating notes in realtime while adding
       
        
    }
    const onChange=(e)=>{
        setNote({...note, [e.target.name]:e.target.value})
        
    }

    return (

        <div className='my-3'>

            <h2> Add a Note</h2>

            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title"  name="title" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="discription" className="form-label">Discription</label>
                    <input type="text" className="form-control" id="discription" name= "discription" onChange={onChange}/>
                </div>
               
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name= "tag" onChange={onChange}/>
                </div>
               
                <button type="submit" className="btn btn-primary" onClick={handelClick}>Add Note</button>
            </form>
        </div>
    )
}
export default AddNotes