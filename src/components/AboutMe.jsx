import "./styles.css"

import react from "../assets/react.svg";
import django from "../assets/django.svg";
import python from "../assets/python.svg";
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import mongo from "../assets/mongo.svg";

const AboutMe = () => {
  return (
    <div className="about-me-section">
      
      <p>
    Hello! I am <span className="highlighted-name">Carlos Rodriguez</span>, a passionate Full Stack developer 
    with over 1 years of experience in building web applications. 
    I love to create dynamic and responsive websites that provide 
    users with a seamless experience.
    </p>


      <h3>Technologies I have worked with:</h3>
      <ul>
        <li><img src={react} alt="React Logo" className="tech-logo" /> React.js</li>
        <li><img src={node} alt="Node.js Logo" className="tech-logo" /></li>
        <li><img src={express} alt="Express.js Logo" className="tech-logo" /></li>
        <li><img src={mongo} alt="MongoDB Logo" className="tech-logo" /></li>
        <li><img src={python} alt="Python Logo" className="tech-logo" /> Python</li>
        <li><img src={django} alt="Django Logo" className="tech-logo" /></li> 
      </ul>
    </div>
  );
}

export default AboutMe;
