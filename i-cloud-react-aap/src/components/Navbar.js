import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from 'react';
import { useState } from "react";


export default function Navbar() {
    const [name, setName] = useState("")
    const getUserData = async () => {
        // TODO :API call
        const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        })
        const json = await response.json()
        console.log("userDetails is ", json)
        setName(json.name)

    }
    let location = useLocation()
    useEffect(() => {

    }, [location])

    useEffect(() => {
        console.log('i fire once twice');
        if (localStorage.getItem('token')) {

            getUserData()
        }
        // eslint-disable-next-line

    },[])
    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        {/* only show navbar [Home, About] if person is logged in  */}
                        {localStorage.getItem("token") && <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                            </li>
                        </ul>}
                        {/* Login/ Signup if not logged in else Logout */}
                        <form className="d-flex" role="search">
                            {localStorage.getItem('token') ?
                                <>
                                    <h5>{name}</h5>
                                    <Link className="btn btn-primary mx-1" to='/login' role="button" onClick={() => localStorage.setItem('token', "")}>Log Out</Link>
                                </>
                                :
                                <div >
                                    <Link className="btn btn-primary mx-1" to='/login' role="button">Login</Link>
                                    <Link className="btn btn-primary mx-1" to='/signup' role="button">Sign Up</Link>
                                </div>
                            }

                        </form>
                    </div>
                </div>
            </nav>
        </>

    )

}
