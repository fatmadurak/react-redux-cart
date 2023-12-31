import { createSlice } from "@reduxjs/toolkit";
import data from "../data";
import { act } from "react-dom/test-utils";

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

      if (item && item.quantity > 0) {
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
    
      },

    deleteCart:(state,action)=>{
     let itemId=action.payload;
     state.cartItems= state.cartItems.filter((item)=>item.id!==itemId)


    },

  },
});

export default cartSlice.reducer;
export const { increment, decrement, calculateTotal,deleteItems,deleteCart } = cartSlice.actions;
