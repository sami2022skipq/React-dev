import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from 'react-router-dom';


const AddNotes = (props) => {
    const { phoneNumber, email } = props.user
    const context = useContext(noteContext)
    const { addNote } = context
    const [note, setNote] = useState({ societyName: "", area: "", totalPrice: "", downPayment: "", location: "", paidInstallments: "", balloted: "", plotNumber: "", discription: "", yearOfPurchase: "" })
    let history = useNavigate()
    


    // useEffect(()=>{
    //     if(note.phoneNumber){

    //         setNote({ phoneNumber: phoneNumber, email: email })
    //         console.log("from use effect ")
    //     }

    // },[props.user])  // eslint-disable-line react-hooks/exhaustive-deps
    const handelClick = (e) => {
        e.preventDefault()

        addNote(note.societyName, note.area, note.totalPrice, note.downPayment, note.location, note.paidInstallments, note.balloted, note.plotNumber, note.discription, note.yearOfPurchase, phoneNumber, email)
        setNote({ societyName: "", area: "", totalPrice: "", downPayment: "", location: "", paidInstallments: "", balloted: "", plotNumber: "", discription: "", yearOfPurchase: "" })
        props.showAlert("Note Successfully added", "success")
        history("/userhome")

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
                    <label htmlFor="area" className="form-label">Arae</label>
                    <input type="text" className="form-control" id="area" name="area" aria-describedby="emailHelp" value={note.area} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="totalPrice" className="form-label">Total Price</label>
                    <input type="text" className="form-control" id="totalPrice" name="totalPrice" value={note.totalPrice} onChange={onChange} />
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
                {/* <div className="mb-3">
                    <label htmlFor="balloted" className="form-label">Balloted</label>
                    <input type="text" className="form-control" id="balloted" name="balloted" value={note.balloted} onChange={onChange} />
                </div> */}
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="balloted">Balloted</label>
                    <select className="form-select" id="balloted" name="balloted" onChange={onChange}>

                        <option value="">Select</option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                    </select>
                </div>
                {
                    note.balloted === "yes" &&
                    <div className="mb-3">
                        <label htmlFor="plotNumber" className="form-label">Plot Number</label>
                        <input type="text" className="form-control" id="plotNumber" name="plotNumber" value={note.plotNumber} onChange={onChange} />
                    </div>
                }
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