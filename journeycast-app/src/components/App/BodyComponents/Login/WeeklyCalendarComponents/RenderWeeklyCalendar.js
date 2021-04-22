import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  Container
} from "semantic-ui-react";
import "./WeeklyCalendarStyles.css";
// import BuildCalendar from "./BuildWeeklyCalendar";
import Header from "./WeeklyCalendarHeader";

function WeekCalendar({ week, userID, vacationData }) {
  
  // const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  // if (week !== undefined && week.length !== 0) {
  //   console.log("worked bitch", week);
  //   setCalendar(week)
  //   console.log("the weekly calendar values are", week);
  //   week.map((day) => ((console.log("TEST", day.format("D").toString()))))
  // }

  const setsOfVacationsArray  = vacationData.filter(vacationItem => vacationItem.user_id === userID);


  const userVacations = setsOfVacationsArray.map((vacationObj) => [
    ...vacationObj.vacation_days, 
  ]);

  function isSelected(day) {
    return value.isSame(day, "day");
  }

  function beforeToday(day) {
    return day.isBefore(new Date(), "day");
  }

  function isToday(day) {
    return day.isSame(new Date(), "day");
  }

  function dayStyles(day) {
    if (beforeToday(day)) return "before";
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";
    return "";
  }

  function isVacationDay(day) {
    for (const property in userVacations) {
      for (let i = 0, l = userVacations[property].length; i < l; i++) {
        if (day.isSame(userVacations[property][i], "day")) {
          // console.log(true)
         return true;
        }
      }
    }
  }

  function renderVacationNotes(day) {
    for (const property in setsOfVacationsArray) {


      for (let i = 0, l = userVacations[property].length; i < l; i++) {
        console.log(setsOfVacationsArray)
        if (day.isSame(userVacations[property][i], "day")) {
          debugger
          // console.log(setsOfVacationsArray)
         return true;
        }
      }
    }
  }
 

  function dayStyles(day) {
    if (beforeToday(day)) return "before";
    if (isSelected(day)) return "selected";
    // if (isToday(day)) return "today";
    if (isVacationDay(day)) return "vacationDay";
    return "";
  }

  const testProp = () => {
    console.log("hello", {setsOfVacationsArray})
  }

  return (
    <Container>
    <div className="weeklyCalendar">
      <Header value={value} setValue={setValue} />
      <div className="body">
        <div className="day-names">
          {["s", "m", "t", "w", "t", "f", "s"].map((d) => (
            <div className="week">{d}</div>
          ))}
        </div>
        {week.map((day) => (
          <div className="day" onClick={() => setValue(day)}>
            <div className={dayStyles(day)}>{day.format("D").toString()}</div>
            <div className="dayInfo">{renderVacationNotes(day)}</div>
            <button onClick={testProp}> blep</button>
          </div>
        ))}
      </div>
    </div>
    </Container>
  );
}

export default WeekCalendar;
