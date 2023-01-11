import { createSlice } from "@reduxjs/toolkit";

const userRecent = createSlice({
  name: "userRecent",
  initialState: [],
  reducers: {
    itemAdd(state, action) {
      let copy = [...state];
      let params = action.payload;
      const overlap = copy.find((item) => {
        return params.id === item.id;
      });
      if (overlap) {
        return;
      }
      const recent = {
        id: params.id,
        cover: params.cover,
      };
      copy.push(recent);
      return (state = copy);
    },
  },
});

export const { itemAdd } = userRecent.actions;
export default userRecent;
