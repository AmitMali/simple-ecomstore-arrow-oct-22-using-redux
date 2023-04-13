import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    countPlus: (state, payload) => {
      const inputValue = Number(payload.inputValue);
      // console.log(inputValue);
      if (inputValue) {
        debugger;
        state.count += inputValue;
      } else {
        state.count += 1;
      }
    },
    countMinus: (state, payload) => {
      const inputValue = Number(payload.inputValue);
      if (inputValue) {
        state.count -= inputValue;
      } else {
        state.count -= 1;
      }
    },
  },
});

export const { countPlus, countMinus } = counterSlice.actions;
export default counterSlice.reducer;
