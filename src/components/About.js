import React from "react";
import "./About.css";
import image from './images/earth-img.png';
function About() {
  return (
    <div className="about-container">
      
      <div  className="about-text">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        vestibulum, elit vel malesuada bibendum, elit nisl pellentesque nunc,
        ac consectetur velit velit eget neque.
      </p>
      <p>
        Duis vitae neque eu velit hendrerit ullamcorper. Morbi sit amet leo
        suscipit, iaculis mi vel, eleifend lorem. Donec tristique velit odio,
        vitae ultrices lacus maximus a. Fusce vel congue eros.
      </p>
      <p>
        Nullam sit amet purus ex. Nulla facilisi. Nam ullamcorper accumsan
        augue, non dapibus purus faucibus non. In imperdiet nunc a felis
        vestibulum, nec faucibus dolor rutrum.
      </p>
      </div>
      <img src={image} alt="World image"></img>
    </div>
  );
}

export default About;
