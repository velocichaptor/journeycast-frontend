import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import MonthCalendar from "./MonthComponents/RenderMonthlyCalendar";
import WeeklyCalendar from "./WeeklyCalendarComponents/RenderWeeklyCalendar";
import "../Body"

function FetchCalendarData() {
  const [week, setSelectedWeek] = useState([]);
  const [vacationData, setVacationData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/vacations`)
      .then((r) => r.json())
      .then((data) => test(data)) 
  }, []);

  function test(data){
    setVacationData(data)
    console.log(vacationData)
  }

  function setSelectedWeekFunction(selectedWeek) {
    setSelectedWeek(selectedWeek);
  }
}

export default FetchCalendarData;
