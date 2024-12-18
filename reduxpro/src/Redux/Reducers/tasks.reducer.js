import { createSlice } from "@reduxjs/toolkit";


export const taskSlice = createSlice({
  name: "Count",
  initialState: {
    Count:0,
  },
  reducers: {
    increament: (state, action) => {
      return{
        ...state,
        Count:state.Count+1
      }},

    decreament: (state, action) => {
      return{
        ...state,
        Count:state.Count-1
      }
    },
  },
});


// Action creators are generated for each case reducer function
export const {increament,decreament} = taskSlice.actions;
export default taskSlice.reducer;

