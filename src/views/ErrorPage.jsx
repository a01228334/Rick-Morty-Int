import errorImg from "../assets/error-4044.jpg";
import {Link} from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <img src={errorImg} alt="error404" />

      <div className="buttonContainer">
          <Link to="/home" className="linkButton linkButton-home">Regresar</Link>
      </div>
      
    </div>
  );
}

export default ErrorPage;
