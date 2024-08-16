import Navbar from "./navbar/Navbar";
import Logo from "./logo/Logo";
import AuthButton from "./authButton/AuthButton";
import "./styles/Header.css";
function header() {
  return (
    <div className="Header">
      <Logo />
      <Navbar />
      <AuthButton />
    </div>
  );
}

export default header;
