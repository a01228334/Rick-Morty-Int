import {useState} from "react";
import "./styles.css"

export default function SearchBar({onSearch}) {
  const [id, setId] = useState("");

  function changeHandler(event) {
    setId(event.target.value);
  }

  return (
    <div>
      <input
        type="search"
        onChange={changeHandler}
        value={id}
        placeholder="Search Character"
      />
      <button className="agregarButton"
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
