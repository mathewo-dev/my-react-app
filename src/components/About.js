import React from "react";
import "../App.css";

export default function About() {
  return (
    <div className="App-about">
      <div className="pb-5">
        <h2 className="pb-2">This wep app was created by:</h2>
        <h4>Mathew Outing</h4>
        <h5>Wroclaw, Poland</h5>
      </div>
      <div className="p-2">
        <h2 className="pb-2">Contact:</h2>
        <h5>mob - +48 535 662 310</h5>
        <h5>email - mathew.outing@gmail.com</h5>
      </div>
    </div>
  );
}
