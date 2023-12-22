import { useState, useEffect, useCallback } from "react";
import stays from "../../stays.json";
import { IoIosSearch } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import logo from "../assets/img/logo.png";
import "../Styles/Header.css";
import "../Styles/SearchLocation.css";

const Header = ({ onSubmit, onLocationSelect, onGuestsSelect }) => {
  // Estado del Formulario
  const [isformActive, setIsFormActive] = useState(false);
  const [activeForm, setActiveForm] = useState(null);
  const [location, setLocation] = useState("");
  
  const [addAdult, setAddAdult] = useState(0);
  const [totalChildren, setTotalChildren] = useState(0);
  const [guestValue, setGuestValue] = useState("");
  const [isGuestSelectorActive, setIsGuestSelectorActive] = useState(true);


  // Manejando el formulario
  const handleForm = useCallback(() => {
    if (!isformActive) {
      setIsFormActive(true);
    }
  },[isformActive]);

  // Funcion para controlar que lso valores no se repitan
  const uniqueLocations = stays.reduce((unique, item) => {
    const location = `${item.city}, ${item.country}`;
    return unique.includes(location) ? unique : [...unique, location];
  }, []);

  // Creando elemento li del componente search
  const locationList = isformActive  && (
      uniqueLocations.map((item) => (
      <li key={item} onClick={() => {
        setLocation(item);
        onLocationSelect(item)
      }}>
        <IoLocationSharp style={{ fontSize: "20px", color: "#4040c7" }} />
        {item}
      </li>
    )
    ));


  const handleGuest = useCallback(() => {
    setActiveForm('guest');
  },[]);

  // Cantd total de huspedes
  const updateGuestValue = () => {
    let total = addAdult + totalChildren;
    let totalGuest = `${total} guest`;
    setGuestValue(totalGuest);
  };

  // Btn - Adult
  const handleSubtract = () => {
    if (addAdult > 0) {
      setAddAdult((prevAddAdult) => prevAddAdult - 1);
    }
    updateGuestValue();
  };

  // Btn + Adult
  const handleAdd = () => {
    setAddAdult((prevAddAdult) => prevAddAdult + 1);
    updateGuestValue();
  };

  // Btn - Children
  const handleSubtractGuest = () => {
    if (totalChildren > 0) {
      setTotalChildren((prevTotalChildren) => prevTotalChildren - 1);
    }
    updateGuestValue();
  };

  // Btn + children
  const handleAddGuest = () => {
    setTotalChildren((prevTotalChildren) => prevTotalChildren + 1);
    updateGuestValue();
  };

  useEffect(() => {
    updateGuestValue();
  }, [addAdult, totalChildren]);


  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event);
    setIsFormActive(false);
    setIsGuestSelectorActive(false)
    setActiveForm(null)
  }


  return (
    <header className="bnb__header">
      <img src={logo} alt="windbnb logo" />
      <nav className={isformActive ? "nav__form__active" : "bnb__header__nav"}>
        <form
          className="bnb__header__nav__container"
          onSubmit={handleSubmit}
          onClick={handleForm}
        >
          <label>
            Location
            <input
              className="search__input "
              type="search"
              id="search"
              name="search"
              value={location}
              placeholder="Select Location"
              onClick={() => setActiveForm('location')}
            />
          </label>
          <label htmlFor="">
            Guests
            <input
              className="search__input guest"
              placeholder="Add guest"
              onClick={handleGuest}
              value={guestValue}
            />
          </label>
          <button type="submit">
            <IoIosSearch style={{ fontSize: "20px" }} />
          </button>
        </form>
        <div className="search__location">
          {activeForm === 'location' && 
          <ul className="search__location__options">{locationList}</ul>}
          { activeForm ==='guest' && (
            <section className="search__location__guest-edit">
              <div className="seacrh__location__guest-options">
                <h4>Adults</h4>
                <p>Ages 13 or above</p>
                <div className="search__location__guest-btn">
                  <button onClick={handleSubtract}>-</button>
                  <span>{addAdult}</span>
                  <button onClick={handleAdd}>+</button>
                </div>
              </div>
              <div className="seacrh__location__guest-options">
                <h4>Children</h4>
                <p>Age 2-12</p>
                <div className="search__location__guest-btn">
                  <button onClick={handleSubtractGuest}>-</button>
                  <span>{totalChildren}</span>
                  <button onClick={handleAddGuest}>+</button>
                </div>
              </div>
            </section>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
