import AddNotes from "./AddNote"
import userContext from "../context/user/userContext";
import { useContext , useEffect} from "react";
 
// Thi is Add note page contains addnote component
const AddANote = (props)=>{

    const context = useContext(userContext)
    const { getUserData, user} = context
    
    useEffect(() => {
        console.log('i fire once Home user data');
        if (localStorage.getItem('token')) {
    
            getUserData()
       
            
        }
       
    
    },[])  // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <AddNotes user={user} showAlert={props.showAlert}/>
    )

}
export default AddANote
