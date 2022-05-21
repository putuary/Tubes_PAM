import React from 'react'
import { createStore } from 'redux'
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import FilmReducer from "./reducers";

const rootReducer = combineReducers({FilmReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));

