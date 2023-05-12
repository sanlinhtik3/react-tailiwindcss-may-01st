import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    number: 0
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increase: (state) => {
      state.number += 1;
    },
    decrease: (state) => {
      state.number -= 1;
    },
    reset: (state, action) => {
        console.log(action.payload)
      state.number = 0;
    }
  },
});

console.log(authSlice)

export const { increase, decrease, reset } = authSlice.actions;
export default authSlice.reducer