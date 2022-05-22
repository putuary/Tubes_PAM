import { GET_FILM } from "./api";
import { GET_SERIAL } from "./api2";
import { GET_DISCOVER_TMDB } from "./api3";

const TitikAwal = {
    trending_film: [],
    serial_tv: [],
    movie: [],
};

export const FilmReducer=(state = TitikAwal, action) =>{
    switch(action.type){
        case GET_FILM:
            return {...state, trending_film: action.payload};
        case GET_SERIAL:
            return {...state, serial_tv: action.payload};
        case GET_DISCOVER_TMDB:
            return {...state, movie: action.payload};
        default:
            return state;
    };
};

