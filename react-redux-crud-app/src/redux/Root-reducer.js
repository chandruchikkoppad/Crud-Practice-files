import { combineReducers } from "redux";
import usersReducers from "./Reducer";
const rootReducer = combineReducers({
    users : usersReducers
})
export default rootReducer;