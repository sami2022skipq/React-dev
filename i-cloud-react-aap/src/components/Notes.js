import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
// import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
const Notes = (props) => {
    let history = useNavigate()
    const context = useContext(noteContext)
    const { notes, getNotes, editNote } = context
    const [note, setNote] = useState({ id: '', esocietyName: "", earea: "", etotalPrice: "", edownPayment: "", elocation: "", epaidInstallments: "", eballoted: false, eplotNumber: "", ediscription: "", eyearOfPurchase: "" })

    // only load user notes if user is logged in
    useEffect(() => {
        console.log('i fire once');
        if (localStorage.getItem('token')) {

            getNotes()
            // getAllListings()
        }
        else {
            history("/login")
        }



    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // text to be updated in update form
    const updateNote = (currentNote) => {
        const { _id, societyName, area, totalPrice, downPayment, location, paidInstallments, balloted, plotNumber, discription, yearOfPurchase } = currentNote
        ref.current.click()
        setNote({ id: _id, esocietyName: societyName, earea: area, etotalPrice: totalPrice, edownPayment: downPayment, elocation: location, epaidInstallments: paidInstallments, eballoted: balloted, eplotNumber: plotNumber, ediscription: discription, eyearOfPurchase: yearOfPurchase })

    }
    const ref = useRef(null)
    const refClose = useRef(null)

    const handelClick = (e) => {
        console.log("Updateing the Note", " Title ", note)
        editNote(note.id, note.esocietyName, note.earea, note.etotalPrice, note.edownPayment, note.elocation, note.epaidInstallments, note.eballoted, note.eplotNumber, note.ediscription, note.eyearOfPurchase)
        refClose.current.click()
        props.showAlert("Note has been updated", "success")
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })

    }
    return (
        <>
            {/* <AddNote showAlert={props.showAlert} user={props.user} /> */}

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit your listing</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
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
                                <div className="mb-3">
                                    <label htmlFor="esocietyName" className="form-label">Society Name</label>
                                    <input type="text" className="form-control" id="esocietyName" value={note.esocietyName} name="esocietyName" aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="earea" className="form-label">Area</label>
                                    <input type="text" className="form-control" id="earea" name="earea" value={note.earea} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etotalPrice" className="form-label">Total Price</label>
                                    <input type="text" className="form-control" id="etotalPrice" name="etotalPrice" value={note.etotalPrice} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edownPayment" className="form-label">Down Payment</label>
                                    <input type="text" className="form-control" id="edownPayment" name="edownPayment" value={note.edownPayment} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="elocation" className="form-label">Location</label>
                                    <input type="text" className="form-control" id="elocation" name="elocation" value={note.elocation} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="epaidInstallments" className="form-label">Paid Installments</label>
                                    <input type="text" className="form-control" id="epaidInstallments" name="epaidInstallments" value={note.epaidInstallments} onChange={onChange} />
                                </div>
                                {/* <div className="mb-3">
                                    <label htmlFor="eballoted" className="form-label">Balloted</label>
                                    <input type="text" className="form-control" id="eballoted" name="eballoted" value={note.eballoted} onChange={onChange} /> 
                                 </div> */}
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="eballoted">Balloted</label>
                                    <select className="form-select" id="eballoted" name="eballoted" onChange={onChange}>
                                        <option value={note.eballoted} >{String(note.eballoted)}</option>
                                        <option value={!note.eballoted}>{String(!note.eballoted)}</option>
                                    </select>
                                </div>
                                {
                                    note.eballoted  &&
                                    <div className="mb-3">
                                        <label htmlFor="eplotNumber" className="form-label">Plot Number</label>
                                        <input type="text" className="form-control" id="eplotNumber" name="eplotNumber" value={note.eplotNumber} onChange={onChange} />
                                    </div>
                                }
                                <div className="mb-3">
                                    <label htmlFor="ediscription" className="form-label">Discription</label>
                                    <input type="text" className="form-control" id="ediscription" name="ediscription" value={note.ediscription} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="eyearOfPurchase" className="form-label">Year Of Purchase</label>
                                    <input type="text" className="form-control" id="eyearOfPurchase" name="eyearOfPurchase" value={note.eyearOfPurchase} onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.esocietyName.length < 5 || note.ediscription.length < 5} type="button" className="btn btn-primary" onClick={handelClick}>Update Listing</button>
                        </div>
                    </div>
                </div >
            </div >

            <div className='row my-3'>
                <h2>Your Listings</h2>
                <div className='container'>
                    <h5>
                        {notes.length === 0 && 'No listing to be displayed'}
                    </h5>
                </div>
                {notes.map((note) => {
                    return <NoteItem showAlert={props.showAlert} key={note._id} note={note} updateNote={updateNote} />
                })}


            </div>
        </>
    )
}

export default Notes