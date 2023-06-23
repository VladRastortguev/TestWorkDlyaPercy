import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './Product/productsSlice'



export const store = configureStore({
    reducer: {
        products: productsReducer
    }
})

