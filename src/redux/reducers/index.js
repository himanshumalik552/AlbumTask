import { combineReducers } from "redux";
import { albumReducer } from "./albumReducer";

const reducers = combineReducers({
    allAlbums:albumReducer,
})

export default reducers;