import { useState } from "react";
import NoteContext from "./noteContext";


const NoteStatus = (props) => {
  const s1 = [
    {
      "_id": "644a8a52fce16cf3b9f7bd110",
      "user": "6448e99999f6bd8b41aae3d5",
      "title": "Moring  Routine",
      "discription": "Go for a walk, Eat breakfast  before 7, Plan the  day tasks",
      "tag": "personal",
      "date": "2023-04-27T14:44:34.205Z",
      "__v": 0
    },
    {
      "_id": "644a8a52fce16cf3b9f7bd111",
      "user": "6448e99999f6bd8b41aae3d5",
      "title": "Mid Day  Routine",
      "discription": "Eat your Lunch, before 3, Plan the  day tasks",
      "tag": "personal",
      "date": "2023-04-27T14:44:34.205Z",
      "__v": 0
    },
    {
      "_id": "644a79f872ac59026391a3e32",
      "user": "6448e99999f6bd8b41aae3d5",
      "title": "Evening Routine updated ",
      "discription": " updated Go for a walk, Eat dinner before 7, Plan the next day tasks",
      "tag": "personal",
      "date": "2023-04-27T13:34:48.734Z",
      "__v": 0
    },
    {
      "_id": "644a8a52fce16cf3b9f7bd113",
      "user": "6448e99999f6bd8b41aae3d5",
      "title": "Moring  Routine",
      "discription": "Go for a walk, Eat breakfast  before 7, Plan the  day tasks",
      "tag": "personal",
      "date": "2023-04-27T14:44:34.205Z",
      "__v": 0
    },
  ]
  const [notes, setNotes] = useState(s1)

  //  Add a Note
  const addNote = (title, discription, tag) => {
    // TODO :API call
    const note = {
      "_id": "644a8a52fce16cf3b9f7bd11a3",
      "user": "6448e99999f6bd8b41aae3d5",
      "title": title,
      "discription": discription,
      "tag": tag,
      "date": "2023-04-27T14:44:34.205Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
    
  }
  //  Delete a Note
  const deleteNote = (id) => {
    // TODO :API call
    console.log(` Deleting the Note with ID : ${id}`)
    const newNotes = notes.filter((note)=> note._id !=id)
    setNotes(newNotes)


  }
  //  Edit a Note
  const editNote = () => {

  }


  return (

    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteStatus