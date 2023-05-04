import { LOGGEDIN_USER, LOGIN_ERROR, LOGOUT_USER } from "./actionTypes";

const initialData = {
    user: {},
    isLoading:false,
    token:"",
    isLoggedIn:false,
    isError:false,
}

const Login_Singup_Reducer = (state=initialData,{type,payload})=>{
    switch(type){
        case LOGGEDIN_USER:
            return {
                ...state,
                user:payload,
                isLoading:false,
                isLoggedIn:true,
            }
        case LOGOUT_USER:
            return{
                state:initialData,
            }
        case LOGIN_ERROR:
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        default:
            return state;
    }
}

export default Login_Singup_Reducer;