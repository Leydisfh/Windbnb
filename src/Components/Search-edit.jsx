
import "../Styles/search-edit.css";
import { IoClose} from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const SearchEdit = ({locationValue, locationOptions, value, onChangeGuest}) =>{
   

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
                <input type="text" name="location" placeholder="Add location" value={locationValue} onChange={()=>{locationValue}}/>
                </label>
                <label htmlFor="guets" > Guests
                    <input type="text" placeholder="Add guets" value={value} onChange={onChangeGuest}/>
                </label>
            </section>
            <div className="search__location">
            <ul  className="search__location__options">
                {locationOptions}
            </ul>
            </div>

            <button className="search__container-button" >
                <IoIosSearch style={{fontSize:'18px'}}/> Search
            </button>

        </article>
    )
}

export default SearchEdit