import logo from "../../assets/images/logo.jpeg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="Company Logo" width="120" className="logo" />
      </nav>
    </header>
  );
};

export default Header;
