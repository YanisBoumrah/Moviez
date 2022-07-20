import { combineReducers } from "redux";
import database from "./database";
import api from "./api";
import user from "./user";

export default combineReducers({
    database,
    api,
    user
})