import counterReduccer from "./counter";
import isLoggedReducer from "./isLogged";

import { combineReducers } from "redux";


const allReducers =combineReducers({

    counter: counterReduccer,
    isLoggedIn:isLoggedReducer

})
export default allReducers