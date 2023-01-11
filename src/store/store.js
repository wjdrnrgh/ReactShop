import { configureStore, createSlice } from "@reduxjs/toolkit";
import userRecent from "./userRecent";
import cartCounting from "./cartCounting";

const localKey = createSlice({
  name: "localKey",
  initialState: {
    favorite: "favorite",
    cart: "cart",
  },
});

export default configureStore({
  reducer: {
    localKey: localKey.reducer,
    userRecent: userRecent.reducer,
    cartCounting: cartCounting.reducer,
  },
});
