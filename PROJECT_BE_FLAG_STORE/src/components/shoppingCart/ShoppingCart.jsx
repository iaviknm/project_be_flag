import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";

const ShoppingCart = ({
  cart,
  clearCart,
  isLoggedIn,
  handleLogin,
  updateQuantity,
  removeFromCart,
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

  const handleClearCart = () => {
    setCartInfo([]);
    localStorage.removeItem("arrayProducts");
    clearCart();
  };

  const handleUserLogin = () => {
    if (!isLoggedIn) {
      const savedCartInfo =
        JSON.parse(localStorage.getItem("arrayProducts")) || [];
      setCartInfo(savedCartInfo);
    } else {
      setCartInfo([]);
      localStorage.removeItem("arrayProducts");
      clearCart();
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
              </div>
            ))}
          </div>
          <h3>Total: {getTotalPrice().toFixed(2)} €</h3>
          <button onClick={handleCheckout} className="checkout">
            Pagamento à cobrança
          </button>
          <button onClick={handleClearCart} className="delete-all-button">
            Apagar Todos os Itens
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
