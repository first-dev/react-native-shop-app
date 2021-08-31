import { configureStore } from '@reduxjs/toolkit'
import { ProductsReducer } from '../reducers/products'

const store = configureStore({
  reducer: {
    products: ProductsReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
