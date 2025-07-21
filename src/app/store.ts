import { configureStore,  } from "@reduxjs/toolkit";
import  productReducer  from "../features/fetch/fetchSlice";

const store = configureStore({
    reducer: {
        fetchData: productReducer
       },

})

export default store;
