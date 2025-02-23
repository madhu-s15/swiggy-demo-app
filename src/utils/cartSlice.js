import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cartSlice",
  initialState: {
    items: ["pizza"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = slice.actions;

export default slice.reducer;
