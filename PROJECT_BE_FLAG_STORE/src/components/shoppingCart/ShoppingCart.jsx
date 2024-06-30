import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";

const ShoppingCart = ({
  removeFromCart,
  isLoggedIn,
  handleLogin,
  clearCart,
}) => {
  const [cartInfo, setCartInfo] = useState(() => {
    const savedCartInfo =
      JSON.parse(localStorage.getItem("arrayProducts")) || [];
    return savedCartInfo;
  });

  useEffect(() => {
    if (isLoggedIn) {
      const savedCartInfo =
        JSON.parse(localStorage.getItem("arrayProducts")) || [];
      setCartInfo(savedCartInfo);
    } else {
      setCartInfo([]);
    }
  }, [isLoggedIn]);

  const getTotalPrice = () => {
    return cartInfo.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartInfo.filter((item) => item.product.id !== id);
    setCartInfo(updatedCart);
    localStorage.setItem("arrayProducts", JSON.stringify(updatedCart));
    removeFromCart(id);
  };

  const handleUserLogin = () => {
    if (!isLoggedIn) {
      const savedCartInfo =
        JSON.parse(localStorage.getItem("arrayProducts")) || [];
      setCartInfo(savedCartInfo);
    } else {
      setCartInfo([]);
      localStorage.removeItem("arrayProducts");
      clearCart(); // Clear the cart when logging out or switching accounts
    }
    handleLogin();
  };

  const handleCheckout = () => {
    if (cartInfo.length === 0) {
      alert("O carrinho está vazio.");
    } else {
      const totalPrice = getTotalPrice().toFixed(2);
      alert(
        `Os itens foram comprados com sucesso! Tens de pagar à cobrança um total de ${totalPrice} €`
      );
      clearCart();
      setCartInfo([]);
    }
  };

  return (
    <div className="cart">
      {isLoggedIn ? (
        <>
          <h4>As Minhas Compras</h4>
          <div>
            {cartInfo.map((item) => (
              <div key={item.product.id} className="cart-item">
                <span>
                  {item.product.name} - {item.product.price} €
                </span>
                <button
                  onClick={() => handleRemoveFromCart(item.product.id)}
                  className="remove-button"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            ))}
          </div>
          <h3>Total: {getTotalPrice().toFixed(2)} €</h3>
          <button onClick={handleCheckout} className="checkout">
            Pagamento à cobrança
          </button>
        </>
      ) : (
        <div className="login__card">
          <p>Não podes fazer compras, não efetuaste o login</p>
          <button onClick={handleUserLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
