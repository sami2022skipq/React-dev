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
                    <h6 className="card text-bg-secondary mb-3 "> Society Name : {note.societyName}</h6>
                    <p className="card-text border light rounded">Area : {note.area}</p>
                    <p className="card-text border light rounded">Total Price : {(note.totalPrice.toLocaleString())}</p>
                    <p className="card-text border light rounded">Down Payment : {note.downPayment.toLocaleString()}</p>
                    <p className="card-text border light rounded">Location : {note.location}</p>
                    <p className="card-text border light rounded">Paid Installments : {note.paidInstallments}</p>
                    <p className="card-text border light rounded">Balloted : {note.balloted? 'Yes': 'No'}</p>
                    {note.balloted &&
                        <p className="card-text border light rounded">Plot Number : {note.plotNumber}</p>
                    }
                    <p className="card-text border light rounded">Discription : {note.discription}</p>
                    <p className="card-text border light rounded">Year of Purchase : {note.yearOfPurchase}</p>







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