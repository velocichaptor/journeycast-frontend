function buildCalendar(value) {
  const startDay = value[0]
  const endDay = value[6]
  // console.log("the start day is", startDay)
  // console.log("the end day is", endDay)
  // const endDay = value.clone().endOf("week").endOf("week");
  const day = startDay.clone().subtract(1, "day");
  // console.log("the DAY is", day)

  const calendar = [];

// console.log("the build calendar value is", value)

  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }
  return calendar
}

export default buildCalendar;