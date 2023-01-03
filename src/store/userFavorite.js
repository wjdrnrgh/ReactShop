import { createSlice } from "@reduxjs/toolkit";

const userFavorite = createSlice({
  name: "userFavorite",
  initialState: [],
  reducers: {
    itemAdd(state, action) {
      let copy = [...state];
      let params = action.payload;

      copy.push(params);
      return (state = copy);
    },
    itemDelete(state, action) {
      let copy = [...state];
      let index = copy.findIndex((item) => {
        return item.id === action.payload;
      });

      copy.splice(index, 1);
      return (state = copy);
    },
  },
});

export const { itemAdd, itemDelete } = userFavorite.actions;
export default userFavorite;
