import { createSlice } from "@reduxjs/toolkit";

import { clearLocalStorageItem, setWishItemFunc } from "./helper";

const wishlistItems =
  localStorage.getItem("wishlistItems") !== null
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [];

const wishlistTotalQuantity =
  localStorage.getItem("wishlistTotalQuantity") !== null
    ? JSON.parse(localStorage.getItem("wishlistTotalQuantity"))
    : 0;

const wishlistIsEmpty =
  localStorage.getItem("wishlistIsEmpty") !== null
    ? JSON.parse(localStorage.getItem("wishlistIsEmpty"))
    : true;

const initialState = {
  items: wishlistItems,
  totalQuantity: wishlistTotalQuantity,
  wishlistIsEmpty: wishlistIsEmpty,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist(state, action) {
      state.wishlistIsEmpty = false;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.totalQuantity++;
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          thumbnail: newItem.thumbnail,
          price: newItem.price,
          quantity: 1,
          availability: newItem.availability,
          totalPrice: newItem.price,
        });
      } else if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      setWishItemFunc(
        state.items.map((item) => ({
          id: item.id,
          name: item.name,
          thumbnail: item.thumbnail,
          price: item.price,
          availability: item.availability,
          quantity: item.quantity,
        })),
        state.totalQuantity,
        state.wishlistIsEmpty
      );
    },
    removeItemFromWishlist(state, action) {
      state.totalQuantity--;
      const id = action.payload;
      state.items = state.items.filter((items) => items.id !== id);
      if (state.items.length === 0) {
        state.wishlistIsEmpty = true;
      }
      setWishItemFunc(
        state.items.map((item) => ({
          id: item.id,
          name: item.name,
          thumbnail: item.thumbnail,
          price: item.price,
          availability: item.availability,
          quantity: item.quantity,
        })),
        state.totalQuantity,
        state.wishlistIsEmpty
      );
    },
    clearWishItems(state) {
      state.items.length = 0;
      state.wishlistIsEmpty = true;
      state.totalQuantity = 0;
      clearLocalStorageItem("wishlistItems");
      clearLocalStorageItem("wishlistTotalQuantity");
      clearLocalStorageItem("wishlistIsEmpty");
    },
    reduceWishItemQuantity(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
  },
});

export const {
  addItemToWishlist,
  removeItemFromWishlist,
  reduceWishItemQuantity,
  clearWishItems,
} = wishlistSlice.actions;

export default wishlistSlice;
