import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import MyInfo from "./components/MyInfo";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <MyInfo />
      <AppFooter />
    </div>
  );
}

export default App;
