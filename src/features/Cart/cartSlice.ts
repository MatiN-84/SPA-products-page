import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartProducts: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartProducts.push({ product: action.payload, count: 1 });
    },
    removeProduct: (state, action) => {},
    increaseNumberOfProducts: (state, action) => {
      const product = state.cartProducts.find((item) => {
        console.log(item.product.id + " " + action.payload.id);
        return item.product.id == +action.payload.id;
      });
      product.count+= +action.payload.id
      // product.count+= action.payload.number
    },
  },
});

export const { addProduct, removeProduct, increaseNumberOfProducts } =
  cartSlice.actions;
export default cartSlice.reducer;
