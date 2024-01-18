import { useState } from "react";
import NoteContext from "./noteContext";


const NoteStatus = (props) => {
  const host = "http://localhost:5000"
  const s1 = []
  const [notes, setNotes] = useState(s1)
  const [allListings, setAllListings] = useState(s1)

  //   ******************************               Get all Note           ********************************************* 
  const getNotes = async () => {
    // TODO :API call
    const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    })
    const json = await response.json()
    console.log("from get notes", json)
    setNotes(json)

  }
  // phoneNumber
  //   ********************************               Add a Note         *******************************************
  const addNote = async (societyName, area,  totalPrice, downPayment, location, paidInstallments, balloted, plotNumber,  discription, yearOfPurchase,phoneNumber, email) => {
    // TODO :API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ societyName,area,  totalPrice, downPayment, location, paidInstallments, balloted, plotNumber, discription, yearOfPurchase, phoneNumber, email }),
    })
  
    const note = await response.json()
    console.log(note)
    // const note = {
    //   "_id": "644a8a52fce16cf3b9f7bd11a3",
    //   "user": "6448e99999f6bd8b41aae3d5",
    //   "title": title,
    //   "discription": discription,
    //   "tag": tag,
    //   "date": "2023-04-27T14:44:34.205Z",
    //   "__v": 0
    // }
    setNotes(notes.concat(note))

  }
  //  *****************************                    Delete a Note            *******************************************************
  const deleteNote = async (id) => {
    // TODO :API call
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')

      },
    })
    const json = await response.json();
    console.log(json)

    console.log(` Deleting the Note with ID : ${id}`)
    const newNote = notes.filter((note) => note._id !== id)
    setNotes(newNote)



  }
  //  ******************************                     Edit a Note            ********************************************************
  const editNote = async (id, societyName, area, totalPrice, downPayment, location, paidInstallments, balloted, plotNumber ,discription, yearOfPurchase) => {

    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')

      },
      body: JSON.stringify({ societyName,area, totalPrice, downPayment, location, paidInstallments, balloted,  plotNumber, discription, yearOfPurchase }),
    })
    const json = await response.json();
    console.log(json)

    // Logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNotes.length; index++) {
      let element = newNotes[index];
      if (element._id === id) {
        newNotes[index].societyName = societyName
        newNotes[index].area = area
        newNotes[index].totalPrice = totalPrice
        newNotes[index].downPayment = downPayment
        newNotes[index].location = location
        newNotes[index].paidInstallments = paidInstallments
        newNotes[index].balloted = balloted
        newNotes[index].plotNumber = plotNumber
        newNotes[index].discription = discription
        newNotes[index].yearOfPurchase = yearOfPurchase
        break;

      }

    }
    setNotes(newNotes)

  }


  //   ******************************               Get All Listing       ********************************************* 
  const getAllListings = async () => {
    // TODO :API call
    const response = await fetch(`${host}/api/notes/fetchallnotesPublic/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    })
    const json = await response.json()
    console.log("from All Listing NoteStatus", json)
    setAllListings(json)

  }
  // Passing Value to Context Provider 
  return (

    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes, getAllListings, allListings, setAllListings }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteStatus