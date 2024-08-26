import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/index"
import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import authenciateReducer from "./reducers/authenciateReducer"


// let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore({
    reducer:{
        auth : authenciateReducer,
        product : productReducer
    }
})

export default store