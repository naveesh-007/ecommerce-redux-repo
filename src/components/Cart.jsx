import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../features/cart/cartSlice";

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
  
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <span>
            {item.title} — Qty: {item.quantity}
          </span>

          <div>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      )}
    </div>
  );
}
