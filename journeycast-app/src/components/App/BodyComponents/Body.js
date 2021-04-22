import React, { useState, useEffect } from "react";
import Login from "./Login/Login";
import WeeklyCalendar from "./Login/WeeklyCalendarComponents/RenderWeeklyCalendar";
import MonthCalendar from "./Login/MonthComponents/RenderMonthlyCalendar";
import { Container } from "semantic-ui-react";
import NavBar from "./Login/NavBar/NavBar";

function Body() {
  const [login, setLogin] = useState(false);
  const [week, setSelectedWeek] = useState([]);
  const [vacationData, setVacationData] = useState([]);
  const [user, setUser] = useState("")

  useEffect(() => {
    fetch(`http://localhost:4000/vacations`)
      .then((r) => r.json())
      .then((data) => vacationDataFunction(data));
  }, []);

  function vacationDataFunction(data) {
    setVacationData(data);
  }

  function setSelectedWeekFunction(selectedWeek) {
    setSelectedWeek(selectedWeek);
  }

  function loginToggle(userId) {
    setLogin(login => !login);
    setUser(userId)
  }

  return (
    <div>
      {login ? (
        <div>
          <NavBar userID={user}/>
          <MonthCalendar
            userID={user}
            vacation={vacationData}
            setSelectedWeekFunction={setSelectedWeekFunction}
          />
          <WeeklyCalendar week={week} />
        </div>
      ) : (
        <Login loginToggle={loginToggle}/>
      )}
      <Container>
        <img
          class="ui fluid image"
          src="https://www.uaf.edu/oip/travelalerts/Travel-Alerts-Page-Picture.jpg"
        ></img>
      </Container>
    </div>
  );
}

export default Body;
