import { IoIosSearch } from "react-icons/io";
import logo from "../assets/img/logo.png";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header className="bnb__header">
      <img src={logo} alt="windbnb logo" />
      <nav className="bnb__header__nav">
        <div className="bnb__header__nav__container">
          <input className="search__input"
            type="search"
            id="search"
            name="search"
            placeholder="Escribe aquí..."
          />
          <p className="search__input"> Add guest</p> 
          <button type="submit">
              <IoIosSearch style={{fontSize:"20px"}}/> 
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
