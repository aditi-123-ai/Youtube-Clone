import { SET_DARK_MODE } from "./darkModeActions";

const initialState = {
    darMode: true,

}

const darkModeReducers = (state = initialState, action) => {
    switch(action.type){
        case SET_DARK_MODE:
            return{
                darkMode: action.payload
            }

        default:
            return state
    }
}

export  default darkModeReducers;