import React, { useState, useEffect } from "react";
import moment from "moment";
import "./MonthlyCalendarStyles.css";
import BuildCalendar from "./BuildMonthlyCalendar";
import Header from "./MonthlyCalendarHeader";

function MonthCalendar({ setSelectedWeekFunction, vacation }) {
  const { vacation_days } = vacation;
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  function handleSelectedWeek(week) {
    setSelectedWeekFunction(week);
  }

  useEffect(() => {
    setCalendar(BuildCalendar(value));
  }, [value]);

  function isSelected(day) {
    return value.isSame(day, "day");
  }

  function beforeToday(day) {
    return day.isBefore(new Date(), "day");
  }

  // function isToday(day) {
  //   return day.isSame(new Date(), "day");
  // }

  function isVacationDay(day) {
    for (var index = 0; index < vacation_days.length; index++) {
      if (day.isSame(vacation_days[index], "day")) {
        return true;
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
          <div onClick={() => handleSelectedWeek(week)}>
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
