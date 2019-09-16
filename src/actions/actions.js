import { CHANGE_SEARCH_FIELD, GET_ROBOTS_PENDING, GET_ROBOTS_SUCCESS, GET_ROBOTS_FAILED } from '../constants/constants';

export const setSearchField = (txt) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: txt
});

export const getRobots = () => (dispatch) => {
    dispatch({
        type:GET_ROBOTS_PENDING
    });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
            return response.json();
    })
    .then(data => dispatch({type:GET_ROBOTS_SUCCESS,payload:data}))
    .catch(e => dispatch({type:GET_ROBOTS_FAILED,payload:e}))
}