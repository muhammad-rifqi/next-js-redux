import { createSlice } from '@reduxjs/toolkit';
export const initialState = {
   name: "Rifqi",
   age:34
};
const personSlice = createSlice({
   name: 'person',
   initialState,
   reducers: {
      setName(state, action) {
         state.name = action.payload
      },
       setAge(state, action) {
         state.age = action.payload
      },
   },
});
export const { setName, setAge } = personSlice.actions
const test = personSlice.reducer;
export default test;