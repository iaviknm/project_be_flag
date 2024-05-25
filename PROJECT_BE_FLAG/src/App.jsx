import "./App.css";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Hero from "./pages/hero/Hero";
import Products from "./pages/products/Products";

function App() {
  return (
    <body>
      <Hero />
      <About />
      <Products />
      <Contacts />
      <Footer />
    </body>
  );
}

export default App;
