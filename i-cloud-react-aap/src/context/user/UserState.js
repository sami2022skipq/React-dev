import UserContext from "./userContext";
import { useState } from "react";



const UserState =(props)=>{
    const [user, setUser] = useState({name : "", email: "", phoneNumber: "", id : ""})
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
        console.log("userDetails  from context is ", json)
        const {name, email, phoneNumber, _id} = json
        setUser({name, email, phoneNumber, _id})
    }
    
    return (
        <UserContext.Provider value={{user, setUser, getUserData}}>
            {props.children}

        </UserContext.Provider>
        
    )
}
export default UserState