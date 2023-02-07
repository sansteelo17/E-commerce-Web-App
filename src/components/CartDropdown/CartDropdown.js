import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../store/cart-slice";
import CartItems from "./CartItems";
import ClearAndCheckout from "./ClearAndCheckout";

const CartDropdown = () => {
  const dispatch = useDispatch();

  const cartIsShown = useSelector((state) => state.cart.cartIsShown);
  const totalQuantityOfItems = useSelector((state) => state.cart.totalQuantity);
  const items = useSelector((state) => state.cart.items);
  const cartIsEmpty = useSelector((state) => state.cart.cartIsEmpty);
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );
  const euroIsActive = useSelector((state) => state.currency.isActive.euro);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const disableCartHandler = () => {
    if (cartIsShown) {
      dispatch(toggleCart());
    }
  };

  return (
    <div
      className="flex-col bg-white absolute sm:w-72 cart shadow-2xl shadow-black/[0.8] rounded-lg p-3 z-30"
      onMouseLeave={disableCartHandler}
    >
      <div className="flex justify-between text-black/[0.4] font-bold py-2 border-b border-black/[0.2] text-xs sm:text-sm">
        <p>
          <span>{totalQuantityOfItems}</span>
          <span>
            {items.length === 0 || items.length === 1 ? " ITEM" : " ITEMS"}
          </span>
        </p>
        <Link to="/viewcart" className="underline">
          VIEW CART
        </Link>
      </div>
      {cartIsEmpty && (
        <div className="text-black/[0.4] text-xs font-bold text-center py-3">
          You have no items in your shopping cart.
        </div>
      )}
      {!cartIsEmpty && (
        <div className="flex-col text-black/[0.4] text-xs font-bold text-center pt-3">
          <CartItems />
          <div className="flex justify-between px-1 text-sm text-black/[0.6] pt-2 pb-3 border-b border-black/[0.2]">
            <div>
              <span>TOTAL:</span>
            </div>
            <div className="text-red-600">
              <span>{selectedCurrency}</span>
              <span>
                {!euroIsActive ? totalAmount : Math.floor(totalAmount * 0.92)}
              </span>
            </div>
          </div>
          <ClearAndCheckout />
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
