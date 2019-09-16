import { CHANGE_SEARCH_FIELD, GET_ROBOTS_FAILED, GET_ROBOTS_PENDING, GET_ROBOTS_SUCCESS } from '../constants/constants';

const initialStateSearch = {
    searchField:'',
}

const initialStateRobots = {
    isPending:false,
    robots:[],
    error:''
}

export const searchRobots = (state = initialStateSearch,action = {}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField:action.payload});    
        default:
            return state;
    }
}

export const getRobots = (state = initialStateRobots,action = {}) => {
    switch(action.type){
        case GET_ROBOTS_PENDING:
            return Object.assign({},state,{isPending:true});
        case GET_ROBOTS_SUCCESS:
            return Object.assign({},state,{robots:action.payload,isPending:false});
        case GET_ROBOTS_FAILED:
            return Object.assign({},state,{isPending:false,error:action.payload});
        default:
            return state;
    }
}