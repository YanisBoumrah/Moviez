export const GET_USER_ID = 'GET_USER_ID';

export const get_user_id = userId =>{
    return{
        type:GET_USER_ID,
        payload:userId
    }
}

export const getUid = (id) => dispatch =>{
    dispatch(get_user_id(id));
}