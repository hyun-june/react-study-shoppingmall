import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    id:'',
    authenciate:false
}

//     function authenciateReducer(state=initialState,action){
//         let {type,payload} = action
//         switch(type){
//             case "LOGIN_SUCCESS":
//                 return {...state,id:payload.id,authenciate:true}
//             case "LOGOUT":
//                 return {...state,authenciate:false}
//             default:
//                 return {...state}
//         }
// }

// export default authenciateReducer

const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        loginSuccess(state,action){
            state.id = action.payload.id;
            state.authenciate = true;
        },
        logout(state,action){
            state.authenciate = false;
        }
    }
})

export const loginActions = loginSlice.actions
export default loginSlice.reducer
