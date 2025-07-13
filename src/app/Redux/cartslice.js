import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const item = state.cartItems.find(item => item._id === action.payload._id);
            if (item !== undefined) {
                item.quantity += 1;
            }
            else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
           
        },
        removeFromCart: (state, action) => {
            const item = state.cartItems.find(item => item._id === action.payload._id);
            if (item && item.quantity != 1) {
                item.quantity -= 1;
            } else {               
                state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
                console.log(state.cartItems.length);
            }
        },
        removeItem: (state, action) => {
            
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
        },
    },
});

export const { addToCart, removeFromCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
