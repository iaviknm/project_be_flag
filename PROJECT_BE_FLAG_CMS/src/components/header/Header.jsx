import logo from "../../assets/images/logo.jpeg";
import "./Header.css";
import { Link } from "wouter";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="Company Logo" width="120" className="logo" />

        <div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/add">
                  Add Product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
