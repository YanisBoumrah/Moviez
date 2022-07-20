import { GET_USER_ID } from "../actions/user";

const initialState = {
    userId:null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default(state=initialState,action)=>{
    switch(action.type){
        case GET_USER_ID:
            return{
                ...state,
                userId:action.payload
            }
        default:
            return state;
    }
}