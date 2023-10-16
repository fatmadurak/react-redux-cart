import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: data,
    quantity: 0,
    total: 0,
  },
  reducers: {
    increment: (state, action) => {
      const { itemId } = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);

      if (item) {
        item.quantity += 1;
        state.quantity = item.quantity;
      }
    },
    decrement: (state, action) => {
      const { itemId } = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.quantity = item.quantity;
      }
    },

    calculateTotal: (state) => {
      let quantity = 0;
      let total = 0;
      state.cartItems.map((item) => {
        quantity += item.quantity;
        total += item.price * item.quantity;
      });

      state.quantity = quantity;
      state.total = total;
    },

    deleteItems: (state) => {

        state.cartItems = [];
        state.quantity = 0;
        state.total = 0;
      },

  },
});

export default cartSlice.reducer;
export const { increment, decrement, calculateTotal,deleteItems } = cartSlice.actions;
