import { useState } from "react";
import "./AuthForm.css";
import authData from "../../data/authData";
import authService from "../../services/authService";
import storageService from "../../services/storageService";

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await authService.loginUser(email, password);

      if (result.token) {
        storageService.setAuthToken(result.token);
        storageService.setUsername(result.username);
        storageService.setEmail(result.email);
        onLoginSuccess();
      } else {
        alert("Login failed. Please check your email and password.");
      }
    } catch (error) {
      alert("Login failed. Please check your email and password.");
    }
  }

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>{authData.emailLabel}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
