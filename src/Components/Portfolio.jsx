import React from 'react';
import image from "./images/folio.jpg";

function Portfolio(){
  return(
    <div id="portfolio">

      <div id="portfolio-head">Portfolio</div>

      <div id="content">
      <img className="folio-img" src={image} alt=""/>

<div className="projects">

   <div id="project1">
    <a href="https://tejkaranrane.github.io/Password_Generator_app/" className="pro-head" target="_blank"> Password Generator </a>
    <div className="pro-des">Developed a responsive password generator web application using HTML, CSS, and JavaScript. The tool generates secure passwords based on user-defined criteria such as length and character sets.</div>
   </div>

   <div id="project2">
   <a href="https://tejkaranrane.github.io/Weather_App/" className="pro-head" target="_blank"> Weather App </a>
    <div className="pro-des">Built a dynamic weather application using HTML, CSS, and JavaScript that fetches real-time weather data from an external API. Features include displaying temperature, humidity, and conditions for any user-input location.</div>
   </div>

   <div id="project3">
   <a href="https://tejkaranrane.github.io/Tic_Tac_Toe_Game/" className="pro-head" target="_blank"> Tic Tac Toe </a>
    <div className="pro-des">Tic Tac Toe project is a modern take on the classic game, built using HTML, CSS, and JavaScript. It features a clean, interactive interface where two players compete to align their symbols in a 3x3 grid. It's simple, fun, and user-friendly!</div>
   </div>

   <div id="project4" >
   <a href="https://github.com/TejkaranRane/Razorpay_clone"className="pro-head" target="_blank"> Razorpay Clone </a>
    <div className="pro-des">Built a Razorpay clone using HTML and Tailwind CSS with a responsive, pixel-perfect design. Focused on replicating the payment gateway's interface.</div>
    
   </div>
  </div>
      </div>

     
    </div>
  )

}
export default Portfolio;