
import firebase from '../config/Firebase';


export const GET_DATA = 'GET_DATA';
export const ADD_DATA = 'ADD_DATA';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';


const ref = firebase.firestore().collection("users");

export const get_data = users =>{
    return{
        type:GET_DATA,
        payload:users
    }
}

export const add_data = () =>{
    return{
        type:ADD_DATA
    }
}

export const get_current_user = user =>{
    return{
        type:GET_CURRENT_USER,
        payload:user
    }
}


export const getUser = () => dispatch =>{
    const id = localStorage.getItem('userId')
    firebase.firestore().collection('users').doc(id).get().then((snapshot)=>{
        dispatch(get_current_user(snapshot.data()));
    }).catch((e)=>console.log('ereur : ' + e))
}

export const addUser = (newUser) =>{
    ref
        .doc(newUser.id)
        .set(newUser)
        .catch((err)=>{
            console.log(err);
        })
        
} 

export const getUsers = () => dispatch =>{
        ref.onSnapshot((querySnapshot) =>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            })
            dispatch(get_data(items));
        })
}
