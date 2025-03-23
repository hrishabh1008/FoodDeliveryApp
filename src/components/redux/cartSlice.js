import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    Items: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log("add item is triggered");
    },
    removeItem: (sate, action) => {
      console.log("item removed");
    },
    clearCart: (state, action) => {
      console.log("cart cleared");
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; //actions exported seperately
export default cartSlice.reducers;
