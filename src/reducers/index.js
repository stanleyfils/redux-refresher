// add all reducers here
// include combineReducers import. You combine all reducers in order to import them all in index.js file
import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

// set the name each reducer. Can be any name.
const allReducers = combineReducers({
  counter: counterReducer,
  isLoggedIn: isLoggedReducer,
});

// export allReducers to index.js file
export default allReducers;
