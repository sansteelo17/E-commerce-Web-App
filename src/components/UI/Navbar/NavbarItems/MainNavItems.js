import { faCaretDown, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCart } from "../../../../store/cart-slice";
import CartDropdown from "../../../CartDropdown/CartDropdown";
import Search from "./Search";

const MainNavItems = () => {
  const dispatch = useDispatch();

  const cartIsShown = useSelector((state) => state.cart.cartIsShown);

  const numOfCartItems = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };

  return (
    <div className="flex justify-between py-8 sm:px-8 xl:px-0 max-h-28 max-w-6xl mx-auto">
      <div>
        <Link to="/">
          <span className="font-bold text-4xl">STEELO</span>
        </Link>
      </div>
      <Search />
      <div className="flex-col">
        <div className="flex pt-2 mb-1">
          <div className="flex-col">
            <div className="text-center pl-1">
              <span className="bg-red-600 px-2 py-1 rounded-3xl relative font-bold text-xs">
                {numOfCartItems}
              </span>
            </div>

            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-4xl cartIcon"
            />
          </div>
          <button onClick={toggleCartHandler}>
            <span className="mx-2 font-semibold">Shopping Cart</span>
            <FontAwesomeIcon icon={faCaretDown} className="text-xs" />
          </button>
        </div>
        {cartIsShown && <CartDropdown />}
      </div>
    </div>
  );
};

export default MainNavItems;
