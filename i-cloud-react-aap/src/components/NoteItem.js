import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
const NoteItem = (props) => {

    const context = useContext(noteContext)
    const { deleteNote } = context
    const { note, updateNote } = props
    return (
        <div className="col-md-3">
            <div className="card   my-3" >
                <div className="card-body">
                    {/* 
           1 societyName,
           2 totalPrice,
           3 downPayment,
           4 location,
           5 paidInstallments,
           6 balloted,
           7 discription,
           8 yearOfPurchase
            
            */}
                    <h6 className="card-title"> Society Name : {note.societyName}</h6>
                    <p className="card-text"> Total Price :{note.totalPrice}</p>
                    <p className="card-text">Down Payment : {note.downPayment}</p>
                    <p className="card-text">Location: {note.location}</p>
                    <p className="card-text">Paid Installments : {note.paidInstallments}</p>
                    <p className="card-text">Balloted : {note.balloted}</p>
                    <p className="card-text">Discription : {note.discription}</p>
                    <p className="card-text">Year of Purchase : {note.yearOfPurchase}</p>







                    <i className="fa-solid fa-trash-can mx-2" onClick={() => {
                        deleteNote(note._id)
                        props.showAlert("Deleted Successfully", "success")
                    }
                    }></i>
                    <i className="fa-sharp fa-solid fa-pen-to-square mx-2" onClick={() => updateNote(note)}></i>

                </div>
            </div>

        </div>
    )
}
export default NoteItem