export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const GET_FILM = 'GET_FILM';

const API_URL = 'https://mocki.io/v1/e0127f73-cf50-4c68-b643-0809b3b844af';

export const getFilm = () => {
    try{
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await result.json();
            if(json){
                dispatch({
                    type: GET_FILM,
                    payload: json
                })
            }else{
                console.log('tidak ada')
            }
        }
    } catch{
        console.log(error)
    }
}
export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
}

export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload: age,
    });
}