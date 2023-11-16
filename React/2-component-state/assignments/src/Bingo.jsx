import PropTypes from "prop-types";
import './Bingo.css';
import BingoButton from './BingoButton';

const names = [
  "Anakin Skywalker",
  "Leia Organa",
  "Han Solo",
  "C-3PO",
  "R2-D2",
  "Darth Vader",
  "Obi-Wan Kenobi",
  "Yoda",

  "Palpatine",
  "Boba Fett",
  "Lando Calrissian",
  "Jabba the Hutt",
  "Mace Windu",
  "Padmé Amidala",
  "Count Dooku",
  "Qui-Gon Jinn",
  "Aayla Secura",
  "Ahsoka Tano",
  "Ki-Adi-Mundi",
  "Luminara Unduli",
  "Plo Koon",
  "Kit Fisto",
  "Shmi Skywalker",
  "Beru Whitesun",
  "Owen Lars"
];

const Bingo = () => {
  return (
    <div className="grid-container">
      {names.map((name, index) => 
        <BingoButton key={index} index={index} name={name}/>
      )}
    </div>
  )
}

Bingo.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Bingo;


 