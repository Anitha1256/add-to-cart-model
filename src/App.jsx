import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartModal from "./components/CartModal";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      alert("Item already added to the cart!");
      return;
    }

    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar cartCount={cart.length} openCart={() => setShowCart(true)} />

      <Home addToCart={addToCart} />

      {showCart && (
        <CartModal
          cartItems={cart}
          closeCart={() => setShowCart(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </>
  );
};

export default App;
