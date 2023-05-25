import counterReduccer from "./counter";
import isLoggedReducer from "./isLogged";
import gooogleLogReducer from "./googleLog";

import { combineReducers } from "redux";


const allReducers =combineReducers({

    counter: counterReduccer,
    isLoggedIn:isLoggedReducer,
    googleLog: gooogleLogReducer

})
export default allReducers