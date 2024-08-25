import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    incrementProduct: (state, action) => {
      const { name } = action.payload
      const duplicateProduct = state.items.find(
        (product) => product.name === name
      )
      if (duplicateProduct) {
        duplicateProduct.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    decrementProduct: (state, action) => {
      const { name } = action.payload
      const decrementProduct = state.items.find(
        (product) => product.name === name
      )
      decrementProduct.quantity -= 1
      if (decrementProduct.quantity < 1) {
        state.items = state.items.filter((product) => product.name !== name)
      }
    },
    removeProduct: (state, action) => {
      const { name } = action.payload
      state.items = state.items.filter((product) => product.name !== name)
    },
    resetCart: (state) => {
      state.items = []
    },
  },
})

export const { incrementProduct, decrementProduct, removeProduct, resetCart } =
  cartSlice.actions
export default cartSlice.reducer
