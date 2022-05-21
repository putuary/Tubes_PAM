
import { GET_FILM } from "./api";

const initialState = {
    film: [],
}

function FilmReducer(state = initialState, action){
    switch(action.type){
        case GET_FILM:
            return {...state, film: action.payload};
        default:
            return state;
    }
}

export default FilmReducer;