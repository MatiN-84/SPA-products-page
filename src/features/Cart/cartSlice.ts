import { createSlice, current } from "@reduxjs/toolkit";

const savedState =  JSON.parse(localStorage.getItem("state") )
console.log(savedState);
const initialState = {
  cartProducts: savedState?.cartProducts|| [],
  totalItems: savedState?.totalItems||0,
  totalPrice:savedState?.totalPrice|| 0,
};


const setProductsToLocalStorage = (state)=> {
  console.log(state);
  localStorage.setItem("state", JSON.stringify(state));
}
const calculateTotals = (state) => {
  state.totalItems = state.cartProducts.reduce(
    (sum, current) => sum + current.count,
    0
  );
  state.totalPrice = state.cartProducts
    .reduce((sum, current) => sum + current.product.price * current.count, 0)
    .toFixed(2);
    setProductsToLocalStorage(state)
  
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartProducts.push({ product: action.payload, count: 1 });
      calculateTotals(state);
    },
    removeProduct: (state, action) => {
      const newProducts= state.cartProducts.filter(item=> item.product.id!==action.payload.id)
      state.cartProducts=newProducts
      calculateTotals(state);
    },
    increaseNumberOfProducts: (state, action) => {
      const product = state.cartProducts.find((item) => {
        return item.product.id == +action.payload.id;
      });
      product.count += +action.payload.number;
      calculateTotals(state);
    },
    decreaseNumofProducts: (state, action) => {
      const product = state.cartProducts.find((item) => {
        return item.product.id == +action.payload.id;
      });
      if(product.count!==1){
        product.count -= 1;
        calculateTotals(state);
      }

    },
    clearAll:(state )=>{
      state.cartProducts=[]
      calculateTotals(state)
    }
  },
});

export const {
  addProduct,
  removeProduct,
  increaseNumberOfProducts,
  decreaseNumofProducts,
  clearAll,
} = cartSlice.actions;
export default cartSlice.reducer;
