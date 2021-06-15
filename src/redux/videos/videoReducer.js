import { SET_VIDEO } from "./videoAction";

const initalState = {
    video: null
}

const videoReducer = (state = initalState, action) => {
    switch(action.type){
        case SET_VIDEO:
            return{
                video: action.payload
            }

        default:
            return state
    }
}

export default videoReducer;