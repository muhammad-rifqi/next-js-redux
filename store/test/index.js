import { createSlice } from '@reduxjs/toolkit';
export const initialState = {
   say: "Hello",
};
const testSlice = createSlice({
   name: 'test',
   initialState,
   reducers: {
      setSay(state, action) {
         state.say = action.payload
      }
   },
});
export const { setSay } = testSlice.actions
const test = testSlice.reducer;
export default test;