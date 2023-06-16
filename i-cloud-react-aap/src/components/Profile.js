import React from "react";
import logo from '../logo192.png'

export default function Profile() {
    const updateUserInfo = (e) => {
        e.preventDefault()



        //         <div class="alert alert-dismissible">
        //              <button type="button" class="btn-close" 
        //             data-bs-dismiss="alert">
        //              </button>
        //         </div>
    }

    return (
        <>
            <div className="container d-flex-col p-4 align-items-center">
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> Your information has been updated.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                        {/* <span aria-hidden="true">&times;</span> */}
                    </button>
                </div>
                <div>
                    <h1 className="d-flex justify-content-center bg-info p-1" >Profile</h1>
                </div>
                <div className="container d-flex">
                    <div className="container justify-content-center p-2">

                        <form>
                            <div className="form-group pb-2">
                                <label className="pb-1" htmlFor="Name">Name</label>
                                <input type="text" className="form-control" id="Name" aria-describedby="namelHelp" placeholder="Name" />

                            </div>
                            <div className="form-group pb-2">
                                <label className="pb-1" htmlFor="Email">Email</label>
                                <input disabled type="text" className="form-control" id="Email" aria-describedby="emaillHelp" placeholder="asm640@gmail.com" />

                            </div>
                            <div className="form-group pb-2">
                                <label className="pb-1" htmlFor="Contact">Contact Number</label>
                                <input type="text" className="form-control" id="Contact" aria-describedby="contactlHelp" placeholder="Contact" />
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
                                <h5 className="card-title">Name</h5>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="d-flex justify-content-center p-2 m-1">
                    <button type="submit" className="btn btn-primary" onClick={updateUserInfo}>Update</button>
                </div>

            </div>
        </>

    );
}