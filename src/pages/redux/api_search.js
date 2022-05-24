export const SEARCH = 'SEARCH';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '70f528175d440c1c9f1d118607cf5bf7';

const Search = (pilih, query) => {
  try {
    return async dispatch => {
      const result = await fetch(
        `${API_URL}/search/${pilih}?api_key=${API_KEY}&query=${query}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const json = await result.json();
      if (json) {
        dispatch({
          type: SEARCH,
          payload: json,
        });
      } else {
        console.log('tidak ada');
      }
    };
  } catch {
    console.log(error);
  }
};
export default Search;
