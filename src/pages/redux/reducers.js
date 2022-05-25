import {GET_FILM} from './api';
import {GET_SERIAL} from './api2';
import {GET_DISCOVER_TMDB} from './api3';
import {GET_DETAIL} from './api_detail';
import {SEARCH} from './api_search';

const TitikAwal = {
  trending_film: [],
  serial_tv: [],
  movie: [],
  detail: [],
  pencarian: [],
};

export const FilmReducer = (state = TitikAwal, action) => {
  switch (action.type) {
    case GET_FILM:
      return {...state, trending_film: action.payload};
    case GET_SERIAL:
      return {...state, serial_tv: action.payload};
    case GET_DISCOVER_TMDB:
      return {...state, movie: action.payload};
    case GET_DETAIL:
      return {...state, detail: action.payload};
    case SEARCH:
      return {...state, pencarian: action.payload};
    default:
      return state;
  }
};
