import { loginActions } from "../reducers/authenciateReducer"

function login (id) {
    return(dispatch,getState)=>{
        // dispatch({type:"LOGIN_SUCCESS",payload:{id}})
        dispatch(loginActions.loginSuccess({id}))
    }
}

function logout (){
    return(dispatch,getState)=>{
        // dispatch({type:"LOGOUT"})
        dispatch(loginActions.logout())
    }
}

export const authenciateAction={login,logout}