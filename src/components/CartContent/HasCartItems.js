import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCartItems } from "../../store/cart-slice";
import CartContentItem from "./CartContentItem";

const HasCartItems = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );
  const euroIsActive = useSelector((state) => state.currency.isActive.euro);

  const clearCartItemsHandler = () => {
    dispatch(clearCartItems());
  };

  return (
    <div className="w-11/12 mx-auto flex flex-col mt-10 shadow-xl shadow-black/[0.1] border border-black/[0.1] px-4 pt-1 pb-3 rounded">
      <div>
        <ul className="flex items-center w-4/5">
          <div className="flex py-1 w-3/4 justify-between font-bold text-sm text-black/[0.4]">
            <li className="py-1 px-4">Product</li>
            <li className="py-1 px-4">Name</li>
            <li className="py-1 px-4">Price</li>
            <li className="py-1 px-4">Quantity</li>
            <li className="py-1 px-4">Total</li>
          </div>
          <div className="ml-auto py-1">
            <li>
              <button
                className="py-2 px-4 rounded bg-red-500 text-white font-semibold text-sm"
                onClick={clearCartItemsHandler}
              >
                Clear All
              </button>
            </li>
          </div>
        </ul>
      </div>
      <div className="border-y border-black/[0.1]">
        {cartItems.map((item) => (
          <CartContentItem
            key={item.id}
            id={item.id}
            name={item.name}
            product={item.thumbnail}
            price={item.price}
            quantity={item.quantity}
            total={item.totalPrice}
          />
        ))}
      </div>
      <div className="flex justify-between items-center py-5 w-4/5">
        <div>
          <button>
            <Link
              to="/"
              className="bg-lime-600 py-2 px-4 rounded text-white font-semibold text-sm"
            >
              Continue shopping
            </Link>
          </button>
        </div>
        <div>
          <span className="font-bold text-sm text-red-600">
            {` Grand total: ${selectedCurrency}${
              euroIsActive ? Math.floor(totalAmount * 0.92) : totalAmount
            }`}
          </span>
        </div>
        <div>
          <button>
            <Link
              to="/checkout"
              className="bg-lime-600 py-2 px-4 rounded text-white font-semibold text-sm"
            >
              Proceed to checkout
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HasCartItems;
