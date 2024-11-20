import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch product details
export const fetchProductDetail = createAsyncThunk(
  "products/fetchProductDetail",
  async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Product not found");
    }
    const data = await response.json();
    console.log("data", data);
    return data;
  }
);

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: { product: null, status: "idle", error: null },
  reducers: {
    clearProductDetail: (state) => {
      state.product = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearProductDetail } = productDetailSlice.actions;
export default productDetailSlice.reducer;

