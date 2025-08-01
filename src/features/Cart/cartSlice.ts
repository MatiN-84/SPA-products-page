import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  cartProducts: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotals = (state)=> {
    
    state.totalItems= state.cartProducts.reduce((sum,current  ) => sum + current.count,0)
    state.totalPrice= state.cartProducts.reduce((sum ,current ) => sum + current.product.price*current.count,0).toFixed(2)

}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartProducts.push({ product: action.payload, count: 1 });
      calculateTotals(state)

    },
    removeProduct: (state, action) => {

        calculateTotals(state)
    },
    increaseNumberOfProducts: (state, action) => {
      const product = state.cartProducts.find((item) => {
        
        
        return item.product.id == +action.payload.id;
      });
      product.count+= +action.payload.number
      state.totalItems+= +action.payload.number
      calculateTotals(state)
      
    },
  },
});

export const { addProduct, removeProduct, increaseNumberOfProducts } =
  cartSlice.actions;
export default cartSlice.reducer;
