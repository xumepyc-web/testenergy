import instance from "../axios/inctance";
import {apiRequest} from "../redux/actions/actions";

export const getRandomMovie = () => {
    return async (dispatch) => {
        const movies = await instance.get('/v1.3/movie/random');
        dispatch(apiRequest(movies.data))
    }
}