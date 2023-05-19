import React, { useState } from "react"
import { IonIcon } from "@ionic/react"
import { callSharp } from "ionicons/icons"
const AllListings = (props) => {

    const { note } = props

    /* 
    1 societyName,
    2 totalPrice,
    3 downPayment,
    4 location,
    5 paidInstallments,
    6 balloted,
    7 discription,
    8 yearOfPurchase
    
    */
   const [bool, setBool]= useState(false) // for toggle show phone number
    return (
        <>
        <div className="col-md-3">
            <div className="card   my-3" >
                <div className="card-body"><span className="badge bg-info">New</span>
                    <h6 className="card text-bg-secondary mb-3 "> Society Name : {note.societyName}</h6>
                    <p className="card-text border light rounded">Area : {note.area}</p>
                    <p className="card-text border light rounded">Total Price : {note.totalPrice}</p>
                    <p className="card-text border light rounded">Down Payment : {note.downPayment}</p>
                    <p className="card-text border light rounded">Location : {note.location}</p>
                    <p className="card-text border light rounded">Paid Installments : {note.paidInstallments}</p>
                    <p className="card-text border light rounded">Balloted : {note.balloted? 'Yes': 'No'}</p>
                    {note.balloted &&
                        <p className="card-text border light rounded">Plot Number : {note.plotNumber}</p>
                    }
                    <p className="card-text border light rounded">Discription : {note.discription}</p>
                    <p className="card-text border light rounded">Year of Purchase : {note.yearOfPurchase}</p>
                <button type="button" className="btn btn-primary btn-xlg" href="tel:713-992-0916"  onClick={()=>setBool(!bool)}>
                    {/* toggle show phone number */}
                    <IonIcon   icon ={callSharp}/> Click to Call {bool && <span className="glyphicon glyphicon-earphone">713-992-0916</span>}
                </button>
                {/* <ion-icon name="call"></ion-icon> */}
                </div>
            </div>

        </div>
        </>

    )
}
export default AllListings