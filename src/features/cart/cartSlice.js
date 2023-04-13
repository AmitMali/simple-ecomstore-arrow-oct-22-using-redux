import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, payload) => {
      //   const item = payload.payload;
      state.cartItems.push(payload.payload);
    },
    removeFromCart: (state, payload) => {
      const id = payload.payload;
      console.log(id);
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
