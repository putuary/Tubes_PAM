export const GET_FILM = 'GET_FILM';

const API_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=70f528175d440c1c9f1d118607cf5bf7';

export const getfilm = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json =  await result.json();
            if(json){
                dispatch({
                    type: GET_FILM,
                    payload: json
                });
            } else {
                console.log('tidak tampil')
            }
        }
    } catch (error) {
        console.log(error);
    }
}