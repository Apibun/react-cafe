import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    incrementProduct: (state, action) => {
      let duplicateProduct = state.items.find(
        (product) => product.name === action.payload.name
      )
      if (duplicateProduct) {
        duplicateProduct.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    decrementProduct: (state) => {},
    removeProduct: (state) => {},
  },
})

export const { incrementProduct, decrementProduct, removeProduct } =
  cartSlice.actions
export default cartSlice.reducer
