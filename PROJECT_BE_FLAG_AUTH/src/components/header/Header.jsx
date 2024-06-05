import logo from "../../assets/images/logo.jpeg";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Company Logo" width="120" className="logo" />
    </header>
  );
};

export default Header;
