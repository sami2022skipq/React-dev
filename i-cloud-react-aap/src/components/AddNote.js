import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNotes = (props) => {
    const context = useContext(noteContext)
    const { addNote } = context


    const [note, setNote] = useState({ societyName: "", totalPrice: "", downPayment: "",  location: "",  paidInstallments: "",  balloted: "",  discription: "",  yearOfPurchase: "" })
    const handelClick = (e) => {
        e.preventDefault()
        addNote(note.societyName, note.totalPrice,note.downPayment,  note.location,  note.paidInstallments,  note.balloted,  note.discription,  note.yearOfPurchase)
        setNote({ societyName: "", totalPrice: "", downPayment: "",  location: "",  paidInstallments: "",  balloted: "",  discription: "",  yearOfPurchase: "" })
        props.showAlert("Note Successfully added", "success")

    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })

    }

    return (

        <div className='my-3'>

            <h2> Add Your Listing</h2>
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

            <form>
                <div className="mb-3">
                    <label htmlFor="societyName" className="form-label">Society Name</label>
                    <input type="text" className="form-control" id="societyName" name="societyName" aria-describedby="emailHelp" value={note.societyName} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="totalPrice" className="form-label">Total Price</label>
                    <input type="text" className="form-control" id="discription" name="totalPrice" value={note.totalPrice} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="downPayment" className="form-label">Down Payment</label>
                    <input type="text" className="form-control" id="downPayment" name="downPayment" value={note.downPayment} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" className="form-control" id="location" name="location" value={note.location} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="paidInstallments" className="form-label">Paid Installments</label>
                    <input type="text" className="form-control" id="paidInstallments" name="paidInstallments" value={note.paidInstallments} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="balloted" className="form-label">Balloted</label>
                    <input type="boolean" className="form-control" id="balloted" name="balloted" value={note.balloted} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="discription" className="form-label">Discription</label>
                    <input type="text" className="form-control" id="discription" name="discription" value={note.discription} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="yearOfPurchase" className="form-label">Year Of Purchase</label>
                    <input type="text" className="form-control" id="yearOfPurchase" name="yearOfPurchase" value={note.yearOfPurchase} onChange={onChange} />
                </div>

                
                {/* 
                Disabling : Note submit button if lenghth of societyname and discription is less than 5 characters
                */}
                <button disabled={note.societyName.length < 5 || note.discription.length < 5} type="submit" className="btn btn-primary" onClick={handelClick}>Add Note</button>
            </form>
        </div>
    )
}
export default AddNotes