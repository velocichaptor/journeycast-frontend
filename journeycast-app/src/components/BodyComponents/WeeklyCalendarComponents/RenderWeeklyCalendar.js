import React, { useState, useEffect } from "react";
import moment from "moment";
import "./WeeklyCalendarStyles.css";
// import BuildCalendar from "./BuildWeeklyCalendar";
import Header from "./WeeklyCalendarHeader";

function WeekCalendar({ week }) {
  // const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  // if (week !== undefined && week.length !== 0) {
  //   console.log("worked bitch", week);
  //   setCalendar(week)
  //   console.log("the weekly calendar values are", week);
  //   week.map((day) => ((console.log("TEST", day.format("D").toString()))))
  // }

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

  return (
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
            <div className="dayInfo">•DATA</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeekCalendar;
