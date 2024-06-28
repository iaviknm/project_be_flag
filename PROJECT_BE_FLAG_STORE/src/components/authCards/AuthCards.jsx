import React from "react";
import "./AuthCards.css";

const AuthCards = ({ username, email, onLogout }) => {
  const handleLogin = () => {
    window.location.href = "/auth";
  };

  return (
    <div className="logout__card">
      {username ? (
        <>
          <h4>A minha conta</h4>
          <p>
            <strong>Username:</strong> {username}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>

          <div>
            <button onClick={onLogout}>Logout</button>
          </div>
        </>
      ) : (
        <div className="login__card">
          <p>Ainda não criaste conta</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default AuthCards;
