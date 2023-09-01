import SearchBar from "./SearchBar";
import {Link} from "react-router-dom";
import './styles.css';

function Nav({onSearch, randomize}) {
  return (
    <div>
      <div className="buttonContainer">

        <Link to="/about" className="linkButton linkButton-about">About</Link>
        <Link to="/home" className="linkButton linkButton-home">Home</Link>
        <Link to="/favorites" className="linkButton linkButton-home">Favorites</Link>
        <Link to="/my_account" className="linkButton linkButton-home">My Account</Link>

      </div>

      <SearchBar onSearch={onSearch} />
      <button className="linkButton linkButton-home" onClick={randomize}>ADD RANDOM</button>
    </div>
  );
}

export default Nav;
