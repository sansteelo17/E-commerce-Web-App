import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItems = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div>
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          price={item.price}
          quantity={item.quantity}
          name={item.name}
          thumbnail={item.thumbnail}
        />
      ))}
    </div>
  );
};

export default CartItems;
