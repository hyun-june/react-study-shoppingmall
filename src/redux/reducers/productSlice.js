import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    productList:[],
    selectItem : null,
    isLoading:false,
    error:null
}

export const fetchProducts = createAsyncThunk('product/fetchAll',async (searchQuery,thunkApi)=>{
    try {
        let url = `https://my-json-server.typicode.com/hyun-june/react-study-shoppingmall/products?q=${searchQuery}`
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        thunkApi.rejectWithValue()
    }
})

export const fetchDetailProducts = createAsyncThunk('product/fetchDetail',async(id,thunkApi)=>{
    try {
        let url = `https://my-json-server.typicode.com/hyun-june/react-study-shoppingmall/products/${id}`
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        thunkApi.rejectWithValue();
    }
})

// function productReducer(state=initialState,action){
//     let {type,payload} = action;
//     switch(type){
//         case "GET_PRODUCT_SUCCESS":
//             return{...state,productList:payload.data}
//         case "GET_PRODUCT_DETAIL":
//             return{...state,selectItem:payload.data}
//         default:
//             return {...state}
//     }
// }

// export default productReducer

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        // getAllProducts(state,action){
        //    state.productList=action.payload.data
        // },
        getDetailProduct(state,action){
            state.selectItem = action.payload.data
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.isLoading=false
            state.productList=action.payload;
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.payload
        })
        .addCase(fetchDetailProducts.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(fetchDetailProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.selectItem=action.payload
        })
        .addCase(fetchDetailProducts.rejected,(state,action)=>{
            state.error=action.payload
        })
    }
})

export const productActions = productSlice.actions
export default productSlice.reducer