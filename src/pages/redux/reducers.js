
import { SET_USER_AGE, SET_USER_NAME, GET_FILM } from "./api";

const initialState = {
    name: '',
    age: 0,
    film: [],
}

function userReducer(state = initialState, action){
    switch(action.type){
        case SET_USER_NAME:
            return {...state, name: action.payload};
        case SET_USER_AGE:
            return {...state, age: action.payload};
        case GET_FILM:
            return {...state, film: action.payload};
        default:
            return state;
    }
}

export default userReducer;