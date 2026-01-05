import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../feature/cart/cartSlice"
import productsReducer from "../feature/cart/productSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
