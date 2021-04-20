import React, { useState, useEffect } from "react";
import MonthDayCard from "./MonthDayCard";
import moment from "moment";
import "./MonthlyCalendarStyles.css";
import BuildCalendar from "./BuildMonthlyCalendar";
import Header from "./MonthlyCalendarHeader"

function MonthCalendar() {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(BuildCalendar(value));
  }, [value])
  
  
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
    if (beforeToday(day)) return "before"
    if (isSelected(day)) return "selected"
    if (isToday(day)) return "today"
    return ""
  }
  
  return (
    <div className="calendar">
      <Header value={value} setValue={setValue} />
      <div className="body">
      <div className="day-names">
      {["s", "m", "t", "w", "t", "f", "s"].map((d) => (
        <div className="week">{d}</div>
      ))}
      </div>
        {calendar.map((week) => (
          <div>
            {week.map((day) => (
              <div className="day" onClick={() => setValue(day)}>
                <div className={dayStyles(day)}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthCalendar;
