import React, { useState, useEffect } from "react";
import moment from "moment";
import { Container } from "semantic-ui-react";
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

  const setsOfVacationsArray = vacationData.filter(
    (vacationItem) => vacationItem.user_id === userID
  );

  const userVacations = setsOfVacationsArray.map((vacationObj) => [
    ...vacationObj.vacation_days,
  ]);

  // function isSelected(day) {
  //   return value.isSame(day, "day");
  // }

  function beforeToday(day) {
    return day.isBefore(new Date(), "day");
  }

  function isToday(day) {
    return day.isSame(new Date(), "day");
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

  function renderVacationInfo(day) {
    for (let i = 0, l = setsOfVacationsArray.length; i < l; i++) {
      for (
        let i2 = 0, l = setsOfVacationsArray[i].vacation_days.length;
        i2 < l;
        i2++
      ) {
        if (day.isSame(setsOfVacationsArray[i].vacation_days[i2], "day")) {
          return [setsOfVacationsArray[i].title, <br/>, "Note:", <br/>, setsOfVacationsArray[i].note];
        }
      }
    }
  }

  function dayStyles(day) {
    if (beforeToday(day)) return "before";
    // if (isSelected(day)) return "selected";
    // if (isToday(day)) return "today";
    if (isVacationDay(day)) return "vacationDay";
    return "normal";
  }

  return (
    <Container>
      <div className="weeklyCalendar">
        <Header value={value} setValue={setValue} />
        <div className="body">
          <div className="day-info">
            {["s", "m", "t", "w", "t", "f", "s"].map((d) => (
              <div className="week">{d}</div>
            ))}

            {week.map((day) => (
              <div className="day" onClick={() => setValue(day)}>
                <div className={dayStyles(day)}>
                  {day.format("D").toString()}
                </div>

                <div className="dayInfo"> {renderVacationInfo(day)} 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default WeekCalendar;
