import { GET_FILM } from "../api";

const initialState = {
    film_data: []
}

function userReducer(state= initialState, action) {
    switch(action.type){
        case GET_FILM :
            return {...state, film_data: action.payload};
        default:
            return state;
    }
}
export default userReducer;