import { useState } from "react";
import NoteContext from "./noteContext";


const NoteStatus = (props) => {
  const host = "http://localhost:5000"
  const s1 = []
  const [notes, setNotes] = useState(s1)

  //   ******************************               Get all Note           ********************************************* 
  const getNotes = async () => {
    // TODO :API call
    const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0OGU5OTk5OWY2YmQ4YjQxYWFlM2Q1In0sImlhdCI6MTY4MjU5MDg0Nn0.LbzJWALs07pWBOPMy0soTpsH31-kv9n5j9fSBNNq8vI"
      },
    })
    const json = await response.json()
    console.log("from get notes", json)
    setNotes(json)

  }

  //   ********************************               Add a Note         *******************************************
  const addNote = async (title, discription, tag) => {
    // TODO :API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0OGU5OTk5OWY2YmQ4YjQxYWFlM2Q1In0sImlhdCI6MTY4MjU5MDg0Nn0.LbzJWALs07pWBOPMy0soTpsH31-kv9n5j9fSBNNq8vI"
      },
      body: JSON.stringify({ title, discription, tag }),
    })
    const json = await response.json()
    console.log(json)
    // const note = {
    //   "_id": "644a8a52fce16cf3b9f7bd11a3",
    //   "user": "6448e99999f6bd8b41aae3d5",
    //   "title": title,
    //   "discription": discription,
    //   "tag": tag,
    //   "date": "2023-04-27T14:44:34.205Z",
    //   "__v": 0
    // }
    // setNotes(notes.concat(note))
    getNotes()

  }
  //  *****************************                    Delete a Note            *******************************************************
  const deleteNote = async (id) => {
    // TODO :API call
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0OGU5OTk5OWY2YmQ4YjQxYWFlM2Q1In0sImlhdCI6MTY4MjU5MDg0Nn0.LbzJWALs07pWBOPMy0soTpsH31-kv9n5j9fSBNNq8vI"

      },
    })
    const json = await response.json();
    console.log(json)

    console.log(` Deleting the Note with ID : ${id}`)
    const newNote = notes.filter((note) => note._id !== id)
    setNotes(newNote)



  }
  //  ******************************                     Edit a Note            ********************************************************
  const editNote = async (id, title, discription, tag) => {

    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0OGU5OTk5OWY2YmQ4YjQxYWFlM2Q1In0sImlhdCI6MTY4MjU5MDg0Nn0.LbzJWALs07pWBOPMy0soTpsH31-kv9n5j9fSBNNq8vI"

      },
      body: JSON.stringify({title, discription, tag}),
    })
    const json =await response.json();
    console.log(json)

    // Logic to edit in client
    let newNotes= JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNotes.length; index++) {
      let element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title
        newNotes[index].discription = discription
        newNotes[index].tag = tag
        break;

      }

    }
    setNotes(newNotes)

  }
  // Passing Value to Context Provider 
  return (

    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteStatus