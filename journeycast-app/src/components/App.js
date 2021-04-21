import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import NavBar from './NavBar';
import Body from "./BodyComponents/Body";
import MonthCalendar from "./BodyComponents/MonthComponents/MonthlyCalendar";
import WeeklyCalendar from "./BodyComponents/WeeklyCalendarComponents/WeeklyCalendar";

import './App.css';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <WeeklyCalendar />
      <MonthCalendar />
=======
      <div>
        <NavBar />
      </div>
      <div>
        <Body />
      </div>
>>>>>>> navbarstart
    </div>
  );
}

export default App;
