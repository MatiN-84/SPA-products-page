import { configureStore,  } from "@reduxjs/toolkit";
import  productReducer  from "../features/fetch/fetchSlice";
import cartReducer from "../features/Cart/cartSlice"
const store = configureStore({
    reducer: {
        fetchData: productReducer,
        cartData:cartReducer,
       },


})

export default store;
