import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import NavBar from "./NavBar";
import Body from "./BodyComponents/Body";
import MonthCalendar from "./BodyComponents/MonthComponents/RenderMonthlyCalendar";
import WeeklyCalendar from "./BodyComponents/WeeklyCalendarComponents/RenderWeeklyCalendar";

import "./App.css";

function App() {
  const [week, setSelectedWeek] = useState([]);
  const [vacationData, setVacationData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/vacations/2`)
      .then((r) => r.json())
      .then((vacationData) => monthCalendarData(vacationData));
  }, []);

  function monthCalendarData(vacationData) {
    setVacationData(
      <MonthCalendar
        key={vacationData.id}
        vacation={vacationData}
        setSelectedWeekFunction={setSelectedWeekFunction}
      />
    );
  }

  function setSelectedWeekFunction(selectedWeek) {
    setSelectedWeek(selectedWeek);
  }

  return (
    <div className="App">
      <WeeklyCalendar week={week} />
      {vacationData}
    </div>
  );
}

export default App;
