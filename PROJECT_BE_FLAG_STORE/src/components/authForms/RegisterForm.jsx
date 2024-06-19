import { useState } from "react";
import authData from "../../data/authData";
import "../../pages/auth/Auth.css";
import authService from "../../services/authService";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await authService.registerUser(username, email, password);

    if (result.status === "OK") {
      alert("Working");
    } else {
      alert("Not working...");
    }
  };

  return (
    <div className="auth-form">
      <h2>{authData.registerTitle}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>{authData.usernameLabel}</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>{authData.emailLabel}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>{authData.passwordLabel}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
