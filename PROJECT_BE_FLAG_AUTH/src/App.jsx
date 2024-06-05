import "./App.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <section>
          <div className="auth-container">
            <RegisterForm />
            <LoginForm />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
