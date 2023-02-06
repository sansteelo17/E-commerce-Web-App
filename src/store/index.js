import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import currencySlice from "./currency-slice";
import wishlistSlice from "./wishlist-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    currency: currencySlice.reducer,
    wishlist: wishlistSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
