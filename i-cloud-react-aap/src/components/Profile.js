import React, { useContext, useEffect, useState } from "react";
import logo from '../logo192.png'
import userContext from "../context/user/userContext";
export default function Profile() {
    const contextuser = useContext(userContext)
    const { user } = contextuser

    const [eUser, eSetUser] = useState({ name: user.name, email: user.email, phoneNumber: user.phoneNumber, id: user._id })
    const [status, setStatus] = useState("")

    // const {name, email, phoneNumber}= user
    useEffect(() => {
        // getUserData()
        console.log("user is ", user)

    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const onChange = (e) => {
        eSetUser({ ...eUser, [e.target.name]: e.target.value })
    }


    const updateUserInfo = async (e) => {
        e.preventDefault()
        const { id, name, email, phoneNumber } = eUser
        console.log("Console.log : ", eUser)
        console.log(`${typeof(Number(phoneNumber))} length ${phoneNumber.length}`)
        if (typeof(Number(phoneNumber)) != 'number' || phoneNumber.length < 11 || phoneNumber.length >= 13 )
        {
            alert("invlid phone number")
 
        }

        try {


            const response = await fetch(`http://localhost:5000/api/userinformation/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id, name, email, phoneNumber }),
            })
            const json = await response.json()
            setStatus(json.success)
            console.log(json)
            if (json.success) {
                // save the auth token and redirect
                // props.showAlert("Logged in  successfully", "success")

                // history("/")
            }
            else {
                console.log(`jason is ${json.success}`)
                // props.showAlert("Invalid username or password", "danger")
            }
        } catch (error) {

        }

    }


    return (
        <>
            <div className="container d-flex-col p-4 align-items-center">
                {status && <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> Your information has been updated.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                        {/* <span aria-hidden="true">&times;</span> */}
                    </button>
                </div>}
                <div>
                    <h1 className="d-flex justify-content-center bg-info p-1" >Profile</h1>
                </div>
                <div className="container d-flex">
                    <div className="container justify-content-center p-2">

                        <form >
                            <div className="form-group pb-2">
                                <label className="pb-1" htmlFor="Name">Name</label>
                                <input type="text" className="form-control" id="Name" aria-describedby="namelHelp" name="name" placeholder="Name" value={eUser.name} onChange={onChange} />

                            </div>
                            <div className="form-group pb-2">
                                <label className="pb-1" htmlFor="Email">Email</label>
                                <input disabled type="text" className="form-control" id="Email" aria-describedby="emaillHelp" name="email" placeholder="Email" value={eUser.email} onChange={onChange} />

                            </div>
                            <div className="form-group pb-2">
                                <label className="pb-1" htmlFor="Contact">Contact Number</label>
                                <input type="text" className="form-control" id="Contact" aria-describedby="contactlHelp" placeholder="Contact number" name="phoneNumber" value={eUser.phoneNumber} onChange={onChange} />
                            </div>
                            <div className="form-group pb-2">
                                <label className="pb-1" htmlFor="City">City</label>
                                <input type="text" className="form-control" id="City" aria-describedby="cityHelp" placeholder="City" />
                            </div>

                        </form>
                    </div>
                    <div className="container p-2 d-flex justify-content-center">
                        <div className="card" style={{ "width": "18rem" }}>
                            <img src={logo} className="card-img-top" alt="Profile" />
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center p-2 m-1">
                    <button disabled= {user.name === eUser.name && user.phoneNumber === eUser.phoneNumber} type="submit" className="btn btn-primary" onClick={updateUserInfo}>Update</button>
                </div>
            </div>
        </>

    );
}