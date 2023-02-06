import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorageItem, setCartItemFunc } from "./helper";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalAmount =
  localStorage.getItem("cartTotalAmount") !== null
    ? JSON.parse(localStorage.getItem("cartTotalAmount"))
    : 0;

const totalQuantity =
  localStorage.getItem("cartTotalQuantity") !== null
    ? JSON.parse(localStorage.getItem("cartTotalQuantity"))
    : 0;

const cartIsEmpty =
  localStorage.getItem("cartIsEmpty") !== null
    ? JSON.parse(localStorage.getItem("cartIsEmpty"))
    : true;

const initialState = {
  items: items,
  totalQuantity: totalQuantity,
  cartIsEmpty: cartIsEmpty,
  totalAmount: totalAmount,
  cartIsShown: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartIsShown = !state.cartIsShown;
    },
    addItemToCart(state, action) {
      state.totalQuantity++;
      state.cartIsEmpty = false;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          name: newItem.name,
          thumbnail: newItem.thumbnail,
          totalPrice: newItem.price,
        });
        state.totalAmount = state.totalAmount + newItem.price;
        // localStorage.setItem("totalPrice", newItem.price);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
        state.totalAmount = state.totalAmount + existingItem.price;
        // localStorage.setItem("totalPrice", existingItem.totalPrice);
      }
      setCartItemFunc(
        state.items.map((item) => ({
          id: item.id,
          price: item.price,
          name: item.name,
          thumbnail: item.thumbnail,
          quantity: item.quantity,
          totalPrice: item.totalPrice,
        })),
        state.totalAmount,
        state.totalQuantity,
        state.cartIsEmpty
      );
    },
    removeItemFromCart(state, action) {
      // localStorage.removeItem("totalPrice");
      state.totalQuantity--;
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      if (existingItem.quantity !== 1) {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        // localStorage.setItem("newTotalPrice", existingItem.totalPrice);
        state.totalAmount = state.totalAmount - existingItem.price;
      } else if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (items) => items.id !== existingItem.id
        );
        state.totalAmount = state.totalAmount - existingItem.price;
      }
      if (state.items.length === 0) {
        state.cartIsEmpty = true;
      }
      setCartItemFunc(
        state.items.map((item) => ({
          id: item.id,
          price: item.price,
          name: item.name,
          thumbnail: item.thumbnail,
          quantity: item.quantity,
          totalPrice: item.totalPrice,
        })),
        state.totalAmount,
        state.totalQuantity,
        state.cartIsEmpty
      );
    },
    clearCartItems(state) {
      state.items.length = 0;
      state.totalAmount = 0;
      state.totalQuantity = 0;
      state.cartIsEmpty = true;
      clearLocalStorageItem("cartTotalAmount");
      clearLocalStorageItem("cartTotalQuantity");
      clearLocalStorageItem("cartIsEmpty");
      clearLocalStorageItem("cartItems");
    },
  },
});

export const { addItemToCart, removeItemFromCart, toggleCart, clearCartItems } =
  cartSlice.actions;

export default cartSlice;
