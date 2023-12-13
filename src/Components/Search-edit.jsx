import "../Styles/search-edit.css";
import { IoClose, IoLocationSharp  } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const SearchEdit = () =>{
    return(
        <article className="search__container">
            <header className="search__header">
                <h5>Edit your search</h5>
                <button>
                <IoClose style={{fontSize:'20px'}}/>
                </button>
            </header>

            <section className="search__section">
                <label htmlFor="location">Location
                <input type="text" name="location" placeholder="Add location" />
                </label>
                <label htmlFor="guets" > Guests
                    <input type="text" placeholder="Add guets" />
                </label>
            </section>
            <div className="search__location">
                <ul className="serch__location__options">
                    <li><IoLocationSharp style={{fontSize:'20px'}}/> Helsinki, Finland</li>
                    <li><IoLocationSharp style={{fontSize:'20px'}}/>Turku, Finland</li>
                    <li><IoLocationSharp style={{fontSize:'20px'}}/>Oulu, Finland</li>
                    <li><IoLocationSharp style={{fontSize:'20px'}}/>Vaasa, Finland</li>
                </ul>
            </div>

            <button className="search__container-button" >
                <IoIosSearch style={{fontSize:'18px'}}/> Search
            </button>

        </article>
    )
}

export default SearchEdit