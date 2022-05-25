export const GET_DISCOVER_TMDB = 'GET_DISCOVER_TMDB';

const API_URL3 = 'https://api.themoviedb.org/3/discover/movie?api_key=70f528175d440c1c9f1d118607cf5bf7';

const getMovie = () => {
    try{
        return async dispatch => {
            const result = await fetch(API_URL3, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await result.json();
            if(json){
                dispatch({
                    type: GET_DISCOVER_TMDB,
                    payload: json
                })
            }else{
                console.log('tidak ada')
            }
        }
    } catch{
        console.log(error)
    }
};
export default getMovie;