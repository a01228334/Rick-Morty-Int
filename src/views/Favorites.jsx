// import {connect} from "react-redux";
import {useSelector, useDispatch} from "react-redux";
import {sortById, filterByGender, reset} from "../redux/actions/actions";
import Cards from "../components/Cards";
import {Link} from "react-router-dom";

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  function sortHandler(event) {
    dispatch(sortById(event.target.value));
  }

  function filterHandler(event) {
    dispatch(filterByGender(event.target.value));
  }

  function resetHandler() {
    dispatch(reset());
  }

  return (
    <div>
      <select placeholder="Gender" onChange={filterHandler}>
        {["Male", "Female", "unknown", "Genderless"].map((gender) => (
          <option key={gender} value={gender}>
            {gender}
          </option>
        ))}
      </select>
      <select placeholder="Sort" onChange={sortHandler}>
        {["Ascendente", "Descendente"].map((order) => (
          <option key={order} value={order}>
            {order}
          </option>
        ))}
      </select>
      <button onClick={resetHandler}>RESET</button>
      <Cards characters={favorites} />

      <div className="buttonContainer">
          <Link to="/home" className="linkButton linkButton-home">Regresar</Link>
      </div>
    </div>
  );
}

export default Favorites;
