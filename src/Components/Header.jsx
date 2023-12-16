import { useState } from "react";
import stays from '../../stays.json'
import { IoIosSearch } from "react-icons/io";
import {  IoLocationSharp  } from "react-icons/io5";
import logo from "../assets/img/logo.png";
import "../Styles/Header.css";

const Header = ({onSubmit, onChangeLocation, valueLocation}) => {
 // Estado del Formulario
const [isformActive, setIsFormActive] = useState(false)
 
  // Manejando el formulario
 const handleForm = () =>{
  return setIsFormActive(true)
 }

  // Funcion para controlar que lso valores no se repitan
  const uniqueLocations = Array.from(
    new Set(stays.map((item) => `${item.city}, ${item.country}`))
  );

// Creando elemento li del componente search
  const locationList = isformActive && (
  uniqueLocations.map((item, index) => (
      <li key={index}>
        <IoLocationSharp style={{ fontSize: '20px' }} /> 
        {item}
      </li>

  ))
 ) ;



  return (
    <header className="bnb__header">
      <img src={logo} alt="windbnb logo" />
      <nav className={ isformActive ? 'nav__form__active': "bnb__header__nav"}>
        <form className= "bnb__header__nav__container" onSubmit={onSubmit} onClick={handleForm}>
          <input className="search__input "
            type="search"
            id="search"
            name="search"
            value={valueLocation}
            placeholder="Location"
            onChange={onChangeLocation}
            />
          <input className="search__input guest" placeholder="Add guest" /> 
          <button type="submit" >
              <IoIosSearch style={{fontSize:"20px"}}/> 
          </button>
        </form>
        <div className="search__location">
            <ul  className="search__location__options">
                {locationList}
            </ul>
            </div>
      </nav>
    </header>
  );
};

export default Header;
