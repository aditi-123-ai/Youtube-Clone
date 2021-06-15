export const SET_DARK_MODE = "SET_DARK_MODE";


export const setDakeMode = (bool) => {
    return{
        type: SET_DARK_MODE,
        payload: bool,
    }
}