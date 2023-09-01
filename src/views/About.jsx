import {Link} from "react-router-dom";
import AboutMe from "../components/AboutMe";

function About() {
  return (
    <div>

      <div>
        <h1>Carlos Daniel Rodriguez S.</h1>
        <h3>Full-Stack Developer</h3>
      </div>

      <div className="App">
      <header className="App-header">
        <h1>Welcome to my Portfolio</h1>
      </header>
      <AboutMe />
    </div>
      
      <div className="buttonContainer">
          <Link to="/home" className="linkButton linkButton-home">Regresar</Link>
      </div>
      
    </div>

    

    
  );
}

export default About;
