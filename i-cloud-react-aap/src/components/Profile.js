import React from "react";
import logo from '../logo192.png'

export default function Profile() {
    const updateUserInfo = (e) => {
        e.preventDefault()



    }

    return (
        <>
            <div className="container d-flex">
                <div className="container justify-content-center p-5">
                <div class="alert alert-success">
                    <strong>success!</strong> Information has been updated
                </div>
                    <form>

                        <div className="form-group">
                            <label htmlFor="Name">Name</label>
                            <input type="text" className="form-control" id="Name" aria-describedby="namelHelp" placeholder="Name" />

                        </div>
                        <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input disabled type="text" className="form-control" id="Email" aria-describedby="emaillHelp" placeholder="Email" />

                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Contact</label>
                            <input type="text" className="form-control" id="contact" aria-describedby="contactlHelp" placeholder="contact" />

                        </div>

                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={updateUserInfo}>Update</button>
                    </form>
                </div>
                <div className="container">
                    <div className="card" style={{ "width": "18rem" }}>
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>

                        </div>
                    </div>

                </div>

            </div>
        </>

    );
}