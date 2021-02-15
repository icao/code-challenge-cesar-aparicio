import React from "react";
import { useHistory } from "react-router-dom";
import "./About.scss";

const About = () => {
  let history = useHistory();

  return (
    <div className="section">
      <div className="about-container">
        <h2>About</h2>
        <p>This is a web application to consult information about pokemons.</p>
        <p>The technologies used are: </p>
        <ul>
          <li>React.js</li>
          <li>React Router</li>
          <li>Poke API</li>
        </ul>
        <br />
        <button className="button" onClick={() => history.push("/")}>
          &#8592; Return
        </button>
      </div>
    </div>
  );
};

export default About;
