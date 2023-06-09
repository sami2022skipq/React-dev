
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ResetPassword() {
    const queryParameters = new URLSearchParams(window.location.search)
    const token = queryParameters.get("token")
    const userId = queryParameters.get("id")

    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    let history = useNavigate()

    const [toggleSowPassword, setToggleSowPassword] = useState(false)
    const toggle = () => {

        setToggleSowPassword(!toggleSowPassword)

    }
    const [info, setInfo] = useState("")
    const handelsubmit = async (e) => {
        e.preventDefault()

        if (password === passwordConfirm) {
            const response = await fetch(`http://localhost:5000/api/auth/resetpassword`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({userId, token,  password }),
            })
            const json = await response.json()
            console.log(json)
            if (json.success) {
                setInfo(json.msg)
                // props.showAlert("Logged in  successfully", "success")
                setTimeout(() => {

                    history("/login")
                }, 1500);

            }

            else {
                setInfo(json.msg)
                // props.showAlert("Logged in  successfully", "success")
                setTimeout(() => {

                    history("/login")
                }, 1500);

            }

        }
        else {
            alert("Password doesn't match");
        }

    }




    return (
        <>
            <div>
                <p>token: {token}</p>
                <p>userId: {userId}</p>

            </div>
            <div>
                <form onSubmit={handelsubmit}>
                    <span>{info}</span>
                    <div className="mb-1">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type={toggleSowPassword ? "text" : "password"} className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="password" className="form-label">Confirm Password</label>
                        <input type={toggleSowPassword ? "text" : "password"} className="form-control" id="passwordConfirm" name="passwordConfirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required />
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="password" id="showPassword" onChange={toggle} />
                        <label className="form-check-label" >
                            Show Password
                        </label>
                    </div>
                    <div className="mb-3">
                        <button disabled={password.length < 5 || passwordConfirm.length < 5} type="submit" className="btn btn-primary ">Reset</button>
                    </div>
                </form>
            </div>
        </>



    )
}