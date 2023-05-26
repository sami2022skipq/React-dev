
// //Action => increment 
// const increment =()=>{
//   return {
//     type: "INCREMENT"
//   }
// }
// const decrement =()=>{
//   return {
//     type: "DECREMENT"
//   }
// }
// // Reducer  => check which action is performing and modifty and update store
// const counter =(state =10, action)=>{
//   switch (action.type) {
//     case "INCREMENT":
//       return state +5
//     case "DECREMENT":
//       return state -1
//     default:
//       return state
//   }

// }
// //Store => Globalized state
// let Store = createStore(counter);
// Store.subscribe(()=> console.log(Store.getState()))
// //Dispached => Execute action 
// Store.dispatch(increment())
// Store.dispatch(decrement())

import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from './actions/counter';
import { isLogged} from './actions/isLogged';
import { login, logout } from './actions/googleLog';
import RadioForm from './RadioForm';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
// import Range from './Range';



function App() {


  const dispatch = useDispatch()
  let isLoggedin = useSelector(state => state.isLoggedIn)
  const counter = useSelector(state => state.counter)
  const googleLog = useSelector(state => state.googleLog)
  let newIValue = 11
  let newDValue = 9
  const handelCallbackResponse = (response) => {
    console.log(" Encoded JWT ID token : " + response.credential)
    const userObject = jwt_decode(response.credential)
    console.log(userObject)
    dispatch(login(userObject))
    document.getElementById("signInDiv").hidden = true


  }

  // If we have no user show the login button
  // If we have a user show the logout button 

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "831383772830-9332ou7qdn4ffj4vjoo3v5hi55ud2nft.apps.googleusercontent.com",
      callback: handelCallbackResponse
    })
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "filled_black", size: "large"
      }
    )
    google.accounts.id.prompt()

  }, []) // eslint-disable-next-line
  return (
    <div className="App">


      <div className="align-items-right" id="signInDiv"></div>
      {
        Object.keys(googleLog).length !== 0 &&
        <div>
          <button onClick={() => {
            console.log(googleLog)
            document.getElementById("signInDiv").hidden = false
            dispatch(logout())
          }
          }
          >logout</button>
          <div>
            <img src={googleLog.picture} alt="No image" />
            <h2>{googleLog.name}</h2>
            <h5>{googleLog.email}</h5>
          </div>
        </div>


      }





      <h1>Redux is {isLoggedin ? "Logged In" : ""}</h1>
      <button onClick={() => dispatch(isLogged())}>Change</button>
      <h2>Counter : {counter}</h2>
      <button className="Button" onClick={() => dispatch(increment(newIValue))}>Increment</button>
      <button className="Button" onClick={() => dispatch(reset())}>Reset</button>
      <button className="Button" onClick={() => dispatch(decrement(newDValue))}>Decrement</button>
      <RadioForm></RadioForm>
      <div>

        { Object.keys(googleLog).length === 0 ? <h1>No user is logged in </h1>:
          <h1>{`${googleLog.name} with ${Object.keys(googleLog).length} other attributes`}</h1>
          }
      </div>


    </div>
  );
}

export default App;
