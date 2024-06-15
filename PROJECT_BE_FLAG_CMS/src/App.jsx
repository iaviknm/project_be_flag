import "./App.css";
// import RegisterForm from "./components/RegisterForm";
// import LoginForm from "./components/LoginForm";
import Header from "./components/header/Header";

import AddProductForm from "./components/productForm/AddProductForm";
import ProductsTable from "./components/productForm/ProductsTable";

import EditProduct from "./components/productForm/EditProduct";

import { Route, Switch } from "wouter";

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <section>
          <div className="auth-container">
            <Switch>
              <Route path="/">
                <ProductsTable />
              </Route>

              <Route path="/add">
                <AddProductForm />
              </Route>

              <Route path="/edit/:id">
                {(params) => <EditProduct id={params.id} />}
              </Route>
            </Switch>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
