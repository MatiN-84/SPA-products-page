import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}



interface ProductsState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
}


const fetchProducts = createAsyncThunk<Product[]>("products/fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});

const productSlice = createSlice({
  name: "products",
  initialState:  {
    items: [],
    status: "idle",
  } as ProductsState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  }

});

export default productSlice.reducer;
export { fetchProducts }