import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}
const counterSlice = createSlice({
     name: "Counter",
     initialState:initialState,
     reducers:{
      incree : (state) =>{
        state.value +=1;
      },
      dcree : (state) =>{
        state.value -=1;
      },
     }
})

export const {incree,dcree}  = counterSlice.actions
export default counterSlice.reducer