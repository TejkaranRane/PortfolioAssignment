import React from 'react';
import image from "./images/background.jpeg";

function About(){
  return(
    <div id="about">
      <img className="background" src={image} alt=""/>

      <div id="text">
      <span id="heading">About Myself</span>

      <p className="about-info">I'm a Computer Science student at
      Jawaharlal Institute Of Techchnology
      Borawan.I'm web developer .I enjoy creating websites in
      creative ways  </p>

      <hr style={{ height: "0.5px", backgroundColor: "black", width: "80%", margin: "40px auto", border: "none" }} />


      <ul style={{ listStyleType: "disc" }}>
        <li>web<br/>design</li>
        <li>user<br/> experience </li>
        <li>inclusive <br/>design</li>
        <li>focus <br/>group</li>
        <li>Mobile <br/>user <br/>interface</li>
      </ul>

      <hr style={{ height: "0.5px", backgroundColor: "black", width: "80%", margin: "40px auto", border: "none" }} />

      <p id="para2"className="about-info">
      As an honest and skilled software developer, I am passionate about writing clean, modular, and scalable code. I aim to contribute to innovative projects by applying design patterns and best practices. I efficiently manage multiple tasks and focus my efforts on the growth of the organisation while also enhancing my personal development.
      </p>
      </div>
    </div>
  )
}

export default About;
