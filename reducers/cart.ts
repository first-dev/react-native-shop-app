import { createSlice } from '@reduxjs/toolkit'
type CartState = {
  ids: string[]
}
const cartInitialState: CartState = {
  ids: [],
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    setCart(state, action: { payload: string[] }) {
      const targetId = action.payload
      state.ids = targetId
    },
    addItem(state, action: { payload: string }) {
      const targetId = action.payload
      if (!state.ids.includes(targetId)) {
        state.ids.push(targetId)
      }
    },
    removeItem(state, action: { payload: string }) {
      const targetId = action.payload
      state.ids = state.ids.filter(id => id !== targetId)
    },
  },
})
const CartReducer = cartSlice.reducer
const CartAction = cartSlice.actions

export default cartSlice
export { CartAction, CartReducer }
