import axios from 'axios';
import { LOGGEDIN_USER, LOGIN_ERROR, STORE_TOKEN } from './actionTypes';

const url = `${process.env.REACT_APP_BACKEND_URL}/user`

export const storingUserDetails = (payload)=>(dispatch)=>{
    console.log(payload)
    axios.post(`${url}/signup`,{
        name:payload.name,
        email:payload.email,
        mobile:payload.mobile,
        password:payload.password
    })
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const loginFunction = (payload)=>{
    return async(dispatch)=>{
    axios.post(`${url}/login`,{
        mobile:payload.mobile,
        password:payload.password
    })
    .then((res)=>{
        dispatch({
            type:LOGGEDIN_USER,
            payload:res.data.user
        })
        dispatch({
            type:STORE_TOKEN,
            payload:res.data.token
        })
    })
    .catch((err)=>{
        dispatch({type:LOGIN_ERROR})
    })
    
    }
}