//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hourOfDay = date.getHours();
console.log(hourOfDay);

const greetingStyle = {
  color: "black"
};

function greeting() {
  if (hourOfDay < 12) {
    greetingStyle.color = "red";
    ReactDOM.render(
      <h1 style={greetingStyle}>Good Morning</h1>,
      document.getElementById("root")
    );
  } else if (hourOfDay >= 12 && hourOfDay < 18) {
    greetingStyle.color = "green";
    ReactDOM.render(
      <h1 style={greetingStyle}>Good Afternoon</h1>,
      document.getElementById("root")
    );
  } else if (hourOfDay >= 18) {
    greetingStyle.color = "blue";
    ReactDOM.render(
      <h1 style={greetingStyle}>Good Night</h1>,
      document.getElementById("root")
    );
  }
}

greeting();
