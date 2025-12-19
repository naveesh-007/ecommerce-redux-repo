import { Link, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

export default function App() {

  // Get cart items from Redux
  const cartItems = useSelector(state => state.cart.items);

  // Calculate total quantity
  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <nav>
        <Link to="/">Home</Link>

        <Link to="/cart">
          Cart {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}
