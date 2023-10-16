import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../redux/slices/sliderSlice";
import productsReducer from "../redux/slices/productsSlice";
import cartReducer from "../redux/slices/cartSlice";
export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
