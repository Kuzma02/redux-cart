import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartList: [],
  total: 0
}

export const cartSlice = createSlice({
  name: 'shopState',
  initialState,
  reducers: {
    add: (state, action) => {
      const updatedCart = state.cartList.concat(action.payload);
      const updatedTotal = state.total + action.payload.price;
      return {...state, cartList: updatedCart, total: updatedTotal}
    },
    remove: (state, action) => {
      const updatedCart = state.cartList.filter(product => product.id !== action.payload.id);    
      const updatedTotal = state.total - action.payload.price;
      return {...state, cartList: updatedCart, total: updatedTotal} 
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions

export default cartSlice.reducer