import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let { email, password } = credentials
    email = email.toLocaleLowerCase()
    let history = useNavigate()

    const handelsubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
        const json = await response.json()
        console.log(json)
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authToken)
            props.showAlert("Logged in  successfully", "success")

            history("/")
        }
        else {
            props.showAlert("Invalid username or password", "danger")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const [toggleSowPassword, setToggleSowPassword] = useState(false)
    const toggle = () => {
        
        setToggleSowPassword(!toggleSowPassword)

    }


    return (
        <div>
            <div className=" my-2">
                <h3>
                    Enter your Login details
                </h3>
            </div>
            <form onSubmit={handelsubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} aria-describedby="emailHelp" onChange={onChange} required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-1">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type={toggleSowPassword ? "text" : "password"} className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} required />
                </div>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="password" id="showPassword" onChange={toggle} />
                    <label className="form-check-label" >
                        Show Password
                    </label>
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login