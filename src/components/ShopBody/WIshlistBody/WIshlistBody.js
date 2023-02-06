import { Fragment } from "react";
import { useSelector } from "react-redux";
import WishlistProducts from "./WishlistProducts";

const WishlistBody = () => {
  const wishListIsEmpty = useSelector(
    (state) => state.wishlist.wishlistIsEmpty
  );

  return (
    <Fragment>
      {wishListIsEmpty && (
        <div className="flex w-full justify-center">
          <p className="bg-red-600 text-white font-semibold text-sm text-center w-72 mt-8 px-2 py-1 rounded-2xl">
            YOU HAVE NO ITEMS IN YOUR WISHLIST.
          </p>
        </div>
      )}
      {!wishListIsEmpty && <WishlistProducts />}
    </Fragment>
  );
};

export default WishlistBody;
