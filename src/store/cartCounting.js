import { createSlice } from "@reduxjs/toolkit";

const cartCounting = createSlice({
  name: "cartCounting",
  initialState: [],
  reducers: {
    cartCounter(state, action) {
      let copy = [...state];
      let params = action.payload;
      params.forEach((item) => {
        return copy.push(item);
      });
      return (state = copy);
    },
  },
});

export let { cartCounter } = cartCounting.actions;
export default cartCounting;
