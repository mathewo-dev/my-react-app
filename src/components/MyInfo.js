import React from "react";
import logo from "../logo.svg";

function MyInfo() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Mathew Outing</h1>
      <h4>IT Software Engineer</h4>
      <ul>
        <li>Krakow</li>
        <li>Wroclaw</li>
        <li>Gdansk</li>
      </ul>
    </div>
  );
}

export default MyInfo;
