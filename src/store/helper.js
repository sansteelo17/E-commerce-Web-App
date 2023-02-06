export const setCartItemFunc = (
  items,
  totalAmount,
  totalQuantity,
  cartIsEmpty
) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
  localStorage.setItem("cartTotalQuantity", JSON.stringify(totalQuantity));
  localStorage.setItem("cartTotalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("cartIsEmpty", JSON.stringify(cartIsEmpty));
};

export const setWishItemFunc = (items, totalQuantity, wishlistIsEmpty) => {
  localStorage.setItem("wishlistItems", JSON.stringify(items));
  localStorage.setItem("wishlistTotalQuantity", JSON.stringify(totalQuantity));
  localStorage.setItem("wishlistIsEmpty", JSON.stringify(wishlistIsEmpty));
};

export const setCurrFunc = (currencySign, currencyState) => {
  localStorage.setItem(`${currencySign}`, JSON.stringify(currencyState));
};

export const clearLocalStorageItem = (item) => {
  localStorage.removeItem(item);
};
