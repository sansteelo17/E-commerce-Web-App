import { createSlice } from "@reduxjs/toolkit";

import { setCurrFunc } from "./helper";

const dollarIsActive =
  localStorage.getItem("$") !== null
    ? JSON.parse(localStorage.getItem("$"))
    : true;
const euroIsActive =
  localStorage.getItem("€") !== null
    ? JSON.parse(localStorage.getItem("€"))
    : false;

const selectedCurrency = JSON.parse(localStorage.getItem("€")) ? "€" : "$";

const initialCurrencyState = {
  selectedCurrency: selectedCurrency,
  isActive: {
    dollar: dollarIsActive,
    euro: euroIsActive,
    currencyDropdown: false,
  },
};

const currencySlice = createSlice({
  name: "currency",
  initialState: initialCurrencyState,
  reducers: {
    changeCurrency(state, action) {
      const currency = action.payload;
      state.selectedCurrency = currency;
      if (currency === "$") {
        state.isActive.euro = false;
        state.isActive.dollar = true;
      } else if (currency === "€") {
        state.isActive.dollar = false;
        state.isActive.euro = true;
      }
      setCurrFunc("$", state.isActive.dollar);
      setCurrFunc("€", state.isActive.euro);
    },
    toggleCurrDropdown(state) {
      state.isActive.currencyDropdown = !state.isActive.currencyDropdown;
    },
    disableCurrDropdown(state) {
      state.isActive.currencyDropdown = false;
    },
  },
});

export const { changeCurrency, toggleCurrDropdown, disableCurrDropdown } =
  currencySlice.actions;

export default currencySlice;
