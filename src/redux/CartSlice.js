import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: data,
    },
    reducers: {
        increment: (state, action) => {
            const { itemId } = action.payload;
            const item = state.cartItems.find((item) => item.id === itemId);

            if (item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const { itemId } = action.payload;
            const item = state.cartItems.find((item) => item.id === itemId);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
    },
});

export default cartSlice.reducer;
export const { increment, decrement } = cartSlice.actions;


