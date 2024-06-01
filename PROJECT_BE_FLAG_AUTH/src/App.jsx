import "./App.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <div className="auth-container">
        <RegisterForm />
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
