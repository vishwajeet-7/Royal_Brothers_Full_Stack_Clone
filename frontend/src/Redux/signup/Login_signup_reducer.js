import { LOGGEDIN_USER } from "./actionTypes";

const initialData = {
    user: {},
    isLoading:false,
    token:"",
    isLoggedIn:false,
}

const Login_Singup_Reducer = (state=initialData,{type,payload})=>{
    switch(type){
        case LOGGEDIN_USER:
            return {
                ...state,
                user:payload,
                isLoggedIn:true
            }
        default:
            return state;
    }
}

export default Login_Singup_Reducer;