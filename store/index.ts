import { configureStore } from '@reduxjs/toolkit'
import { CartReducer } from '../reducers/cart'
import { ProductsReducer } from '../reducers/products'

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: CartReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
