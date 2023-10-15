import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: data,
        quantity:0,
    },
    reducers: {
        increment: (state, action) => {
            const { itemId } = action.payload;
            const item = state.cartItems.find((item) => item.id === itemId);

            if (item) {
                item.quantity += 1;
                state.quantity=item.quantity
            }

            state.quantity=item.quantity
        },
        decrement: (state, action) => {
            const { itemId } = action.payload;
            const item = state.cartItems.find((item) => item.id === itemId);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.quantity=item.quantity
                
            }
           
        },
    },
});

export default cartSlice.reducer;
export const { increment, decrement } = cartSlice.actions;


