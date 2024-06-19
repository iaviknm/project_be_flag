import React from "react";
import LoginForm from "../../components/authForms/LoginForm";
import RegisterForm from "../../components/authForms/RegisterForm";

import "./Auth.css";
import Header from "../../components/header/Header";

const AuthPage = ({ onLoginSuccess }) => {
  return (
    <>
      <Header />
      <div className="auth-page">
        <RegisterForm />
        <LoginForm onLoginSuccess={onLoginSuccess} />
      </div>
    </>
  );
};

export default AuthPage;
