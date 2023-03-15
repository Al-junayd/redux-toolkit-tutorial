import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import catReducer from "./features/cart/catSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cat: catReducer,
  },
});
