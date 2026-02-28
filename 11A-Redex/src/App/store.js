import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/Counter/counterSlice'
import productsReducer from '../features/Products/productSlice'

export const store = configureStore({
      reducer: {
    counter: counterReducer,
    products: productsReducer,
  }


})