import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    products : [
        {
            name:"mobile",
            price:1200
        }
    ]
}

const productSlice = createSlice({
     name : "products",
     initialState : initialState,
     reducers:{
        create: (state)=>{
             state.products = products.push({name:"oil",price:160})
        },
        deletes: (state)=>{
            state.products = products.pop()
        },
     }
})


export const {create, deletes} = productSlice.actions;
export default productSlice.reducer