import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Yasser Esam, the greatest developer in the room. " I am the only one in that room "</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
