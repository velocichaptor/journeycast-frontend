import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import NavBar from './NavBar';
import Body from "./BodyComponents/Body";
import MonthCalendar from "./BodyComponents/MonthComponents/MonthCalendar";
import './App.css';

function App() {
  return (
    <div className="App">
  
      <MonthCalendar />
    </div>
  );
}

export default App;
