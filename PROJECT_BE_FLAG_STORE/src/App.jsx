import React from "react";
import { Route, Switch, Redirect, useLocation } from "wouter";
import "./App.css";
import AuthPage from "./pages/auth/AuthPage";
import Store from "./pages/Store";

function App() {
  const [location, setLocation] = useLocation();

  // Redirect to store homepage on successful login
  const handleLoginSuccess = () => {
    setLocation("/store");
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/auth">
          <AuthPage onLoginSuccess={handleLoginSuccess} />
        </Route>
        <Route path="/store" component={Store} />
        <Route path="/">
          <Redirect to="/store" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
