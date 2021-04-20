import React, {useState, useEffect} from "react";

function calendarHeader({ value, setValue }) {

  function currentMonth() {
    return value.format("MMMM");
  }

  function currentYear() {
    return value.format("YYYY");
  }

  function previousMonth() {
    return value.clone(). subtract(1, "month")
  }

  function nextMonth() {
    return value.clone().add(1, "month")
  }

  function thisMonth() {
    return value.isSame(new Date(), "month");
  }

  return (
    <div className="header">
      <div className="previous"></div>
      <div className="current">Selected Week</div>
      <div className="next"></div>
    </div>
  );
}

export default calendarHeader;
