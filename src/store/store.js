import { configureStore, createSlice } from "@reduxjs/toolkit";
import userFavorite from "./userFavorite";

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
    userFavorite: userFavorite.reducer,
  },
});
