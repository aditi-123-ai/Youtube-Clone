import { combineReducers, createStore } from "redux";
import videoReducer from "./videos/videoReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import darkModeReducers from "./darkmode/darkModeReducers";

const rootReducer = combineReducers({
    video: videoReducer,
    Dark: darkModeReducers
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;