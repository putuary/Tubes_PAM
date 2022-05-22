export const GET_SERIAL = 'GET_SERIAL';

const API_URL2 = 'https://api.themoviedb.org/3/discover/tv?api_key=70f528175d440c1c9f1d118607cf5bf7';

const getSerial = () => {
    try{
        return async dispatch => {
            const result = await fetch(API_URL2, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await result.json();
            if(json){
                dispatch({
                    type: GET_SERIAL,
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
export default getSerial;
