import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"; // Değişiklik burada

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});