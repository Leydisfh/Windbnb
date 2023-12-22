import "../Styles/Box.css";
import { IoIosStar } from "react-icons/io";

const Box = ({stays}) => {
  const boxes = stays.map((stay, index) => {
    return (
      <article key={index} className="box__container">
        <div className="box__container-img" style={{ backgroundImage:`url(${stay.photo})`}}></div>
        <section className="box__section">
          <div className="box__section_container">
            {stay.superHost && <button>SUPER HOST</button>}
            <div className="box__section__description">
            <p>
              {stay.type}   {stay.beds} beds
            </p>
            <span><IoIosStar style={{color:"#EB5757B8"}}/> {stay.rating}</span>
            </div>
          </div>
          <h4>{stay.title}</h4>
        </section>
      </article>
    );
  });

  return (
    <div className="container__box__section">
    { boxes }
    </div>
    );
};

export default Box;
