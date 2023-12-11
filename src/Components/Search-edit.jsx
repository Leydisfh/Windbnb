import "../Styles/search-edit.css";
import { IoClose } from "react-icons/io5";

const SearchEdit = () =>{
    return(
        <article className="search__container">
            <header className="search__header">
                <h5>Edit your search</h5>
                <IoClose/>
            </header>

            <section className="search__section">
                <label htmlFor="location">Location
                <input type="text" name="location" />
                </label>
                <label htmlFor="guets">
                    <input type="text" placeholder="Add guets" />
                </label>
            </section>
            <div className="search__location">
                
            </div>

        </article>
    )
}

export default SearchEdit