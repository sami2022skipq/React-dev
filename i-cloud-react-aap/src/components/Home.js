import Notes from "./Notes";
import userContext from "../context/user/userContext";
import { useContext , useEffect} from "react";

export default function Home(props) {
    
    
    const context = useContext(userContext)
    const { getUserData, user} = context
    
    const {email, phoneNumber } = user
    useEffect(() => {
        console.log('i fire once Home user data');
        if (localStorage.getItem('token')) {

            getUserData()
       
            
        }
       

    },[])  // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <div className='my-3'>
            {     console.log("from home context",email, "and" ,phoneNumber)}
            <div className="">
                <Notes showAlert={props.showAlert} />

            </div>



        </div>
    )
}