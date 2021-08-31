import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../models/product'
import { PRODUCTS } from '../data/dummy-data'
type ProductsState = {
  availableProducts: Product[]
  userProducts: Product[]
}
const productsInitialState: ProductsState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1'),
}
const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {},
})
const ProductsReducer = productsSlice.reducer
const ProductsAction = productsSlice.actions

export default productsSlice
export { ProductsAction, ProductsReducer }
