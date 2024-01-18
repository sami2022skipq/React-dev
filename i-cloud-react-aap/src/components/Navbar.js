import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useContext } from 'react';
import userContext from "../context/user/userContext";


export default function Navbar() {
    const context = useContext(userContext)
    const { user, setUser } = context


    let location = useLocation()
    useEffect(() => {

    }, [location])


    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">ZmeenFiles.com</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        {/* only show navbar [Home, About] if person is logged in  */}
                        {localStorage.getItem("token") &&
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/userhome" ? "active" : ""}`} aria-current="page" to="/userhome">Your Listings</Link>
                                </li>

                            </ul>

                        }
                        {/* Login/ Signup if not logged in else Logout */}
                        <form className="d-flex" role="search">
                            {localStorage.getItem('token') ?
                                <>
                                    {(location.pathname === "/userhome" || location.pathname === "/" ) &&
                                    <Link className='btn btn-info mx-1' aria-current="page" to="/addanote">Post Add</Link>}
                                    <h5 className="mx-3 mt-2">{user.name}</h5>
                                    <Link  aria-current="page" to="/userProfile"> <i className="fa-sharp fa-solid fa-pen-to-square mx-2"></i></Link>
                                   
                                    <Link className="btn btn-primary mx-1" to='/login' role="button" onClick={() => { localStorage.setItem('token', ""); setUser({ name: "", email: "" }) }}>Log Out</Link>
                                </>
                                :
                                // showing Login and Sigup button based on pathname
                                <div >
                                    {location.pathname === "/login" &&
                                        <Link className="btn btn-primary mx-1" to='/signup' role="button">Sign Up</Link>}
                                </div>
                            }

                        </form>
                    </div>
                </div>
            </nav>
        </>

    )

}
