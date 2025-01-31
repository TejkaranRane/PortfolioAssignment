import React from 'react';
import image1 from './images/link.webp';
import image2 from './images/git.png';
import image3 from './images/twitter.webp';
import image4 from './images/mail.png';

const Footer = () => {
  return (
    <div id="footer">
      <div id="foot-img">
      <a className="cont-img" href="https://www.linkedin.com/in/tejkaran-rane-26204b254/" target="_blank">
          <img src={image1} alt="" />
        </a>

       <a id="git-img"className="cont-img" href="https://github.com/TejkaranRane" target="_blank">
          <img src={image2} alt="" />
        </a>

       <a className="cont-img" href="https://x.com/home" target="_blank">
          <img src={image3} alt="" />
        </a>

        <a className="cont-img" href="mailto:tejasrane890@gmail.com" target="_blank">
          <img src={image4} alt="" />
        </a>
      </div>
        
        <p>Created By Tejkaran Rane</p>
        
      </div>
  );
}

export default Footer;
