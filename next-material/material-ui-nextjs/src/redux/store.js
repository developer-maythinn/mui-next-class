import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice';
import cartReducer from './features/cart/cartSlice';
import productDetailReducer from './features/products/productDetailSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    productDetail: productDetailReducer,
  },
});
