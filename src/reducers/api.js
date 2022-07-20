import {GET_NOW_PLAYING_MOVIES,
        GET_POPULAR_MOVIES,
        GET_TOP_RATED_MOVIES,
        GET_UPCOMING_MOVIES
        } from "../actions/api"

const initialState = {
    movies:[]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>{
    switch(action.type){
        case GET_NOW_PLAYING_MOVIES:
            return{
                ...state,
                movies:action.payload
            }
        case GET_POPULAR_MOVIES:
            return{
                ...state,
                movies:action.payload
            }
        case GET_TOP_RATED_MOVIES:
            return{
                ...state,
                movies:action.payload
            }
        case GET_UPCOMING_MOVIES:
            return{
                ...state,
                movies:action.payload
            }
        default:
            return state
    }
}