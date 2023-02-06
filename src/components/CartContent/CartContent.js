import { Fragment } from "react";
import { useSelector } from "react-redux";
import HasCartItems from "./HasCartItems";
import NoCartItems from "./NoCartItems";

const CartContent = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const noCartContent = cartItems.length === 0;
  const cartContent = cartItems.length > 0;

  return (
    <Fragment>
      {noCartContent && <NoCartItems />}
      {cartContent && <HasCartItems />}
    </Fragment>
  );
};

export default CartContent;
