import { createSlice } from "@reduxjs/toolkit";
import  {data}  from "../data"; 

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        quantity: 1,
        cartItems: data,
        total: 0,
    },
    reducers: {
        increment: (state) => {
            state.quantity += 1;
        },
        decrement: (state) => {
            state.quantity -= 1;
        },
    },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;

