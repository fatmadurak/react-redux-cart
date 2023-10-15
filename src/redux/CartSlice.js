import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        quantity: 1,
        total: 0,
        cartItems:data,
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


export default cartSlice.reducer;
export const { increment, decrement } = cartSlice.actions;


