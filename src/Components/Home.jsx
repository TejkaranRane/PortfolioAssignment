import React from 'react';
import image from "./images/profile.jpg";

function Home(){
  return(
    <div id="home">
      <img className="profile" src={image} alt=""/>
      
      <div id="name">TEJKARAN <br/><span id="surname">RANE</span></div>

      <div id="info">Web Designer <br/><span id="and">& </span><br/>Content Creator</div>
      </div>
      
  )
}

export default Home;