import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment , reset} from './actions/counter';
import { isLogged } from './actions/isLogged';


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


function App() {
  const dispatch = useDispatch()
  let isLoggedin = useSelector(state=>state.isLoggedIn)
  const counter = useSelector(state=>state.counter)
  let newIValue= 11
  let newDValue= 9
  return (
    <div className="App">
      <h1>Redux is {isLoggedin ? "Logged In":  ""}</h1>
      <button onClick={()=>dispatch(isLogged())}>Change</button>
      <h2>Counter : {counter}</h2>
      <button className="Button" onClick={()=>dispatch(increment(newIValue))}>Increment</button>
      <button className="Button" onClick={()=>dispatch(reset())}>Reset</button>
      <button className="Button" onClick={()=>dispatch(decrement(newDValue))}>Decrement</button>
    </div>
  );
}

export default App;
