import { ADD_DATA, GET_DATA, GET_CURRENT_USER} from "../actions/database";

const initialState = {
    users:[],
    user:{},
    movies:[]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) =>{
    switch(action.type){
        case GET_DATA:
            return{
                ...state,
                users:action.payload
            }
        case ADD_DATA:
                return{
                    ...state
                }
        case GET_CURRENT_USER:
             return{
                 ...state,
                 user:action.payload
             }
       
        default:
            return state
    }
}