import { IoIosSearch } from "react-icons/io";
import logo from "../assets/img/logo.png";
import "../Styles/Header.css";

const Header = ({onSubmit}) => {
  return (
    <header className="bnb__header">
      <img src={logo} alt="windbnb logo" />
      <nav className="bnb__header__nav">
        <form className="bnb__header__nav__container" onSubmit={onSubmit}>
          <input className="search__input "
            type="search"
            id="search"
            name="search"
            placeholder="Location"
            />
          <input className="search__input guest" placeholder="Add guest" /> 
          <button type="submit" >
              <IoIosSearch style={{fontSize:"20px"}}/> 
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
