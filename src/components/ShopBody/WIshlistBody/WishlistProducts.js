import { useDispatch, useSelector } from "react-redux";
import WishlistProductItem from "./WishlistProductItem";
import { clearWishItems } from "../../../store/wishlist-slice";

const WishlistProducts = () => {
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.items);

  const clearWishItemsHandler = () => {
    dispatch(clearWishItems());
  };

  return (
    <div className="overflow-x-auto sm:w-11/12 sm:mx-auto flex flex-col mt-10 shadow-xl shadow-black/[0.1] border border-black/[0.1] px-4 pt-1 pb-3 rounded">
      <ul className="flex items-center sm:w-4/5">
        <div className="flex py-1 sm:w-3/4 justify-between font-bold text-sm text-black/[0.4]">
          <li className="py-1 px-4">Product</li>
          <li className="py-1 px-4">Name</li>
          <li className="py-1 px-4">Price</li>
          <li className="py-1 px-4">Availability</li>
          <li className="py-1 px-4">Quantity</li>
        </div>
        <div className="ml-12 sm:ml-auto py-1">
          <li>
            <button
              className="py-1 px-3 sm:py-2 sm:px-4 rounded bg-red-500 text-white font-semibold text-sm"
              onClick={clearWishItemsHandler}
            >
              <span>Clear</span>
              <span className="hidden sm:inline"> All</span>
            </button>
          </li>
        </div>
      </ul>
      <div className="sm:border-y sm:border-black/[0.1]" id="wish">
        {wishlistItems.map((item) => (
          <WishlistProductItem
            key={item.id}
            id={item.id}
            name={item.name}
            product={item.thumbnail}
            quantity={item.quantity}
            price={item.price}
            availability={item.availability}
          />
        ))}
      </div>
    </div>
  );
};

export default WishlistProducts;
