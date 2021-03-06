import React, { useState, useEffect } from "react";
import Login from "./Login/Login";
import WeeklyCalendar from "./Login/WeeklyCalendarComponents/RenderWeeklyCalendar";
import MonthCalendar from "./Login/MonthComponents/RenderMonthlyCalendar";
import { Container, Segment, Grid } from "semantic-ui-react";
import NavBar from "./Login/NavBar/NavBar";

function Body() {
  const [login, setLogin] = useState(false);
  const [week, setSelectedWeek] = useState([]);
  const [vacationData, setVacationData] = useState([]);
  const [user, setUser] = useState("")
  const [rerender, setRerender] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/vacations`)
      .then((r) => r.json())
      .then((data) => vacationDataFunction(data));
  }, [rerender]);

  function vacationDataFunction(data) {
    setVacationData(data);
  }

  function setSelectedWeekFunction(selectedWeek) {
    setSelectedWeek(selectedWeek);
  }

  function loginToggle(userId) {
    setLogin((login) => !login);
    setUser(userId);
  }

  return (
    <div>
      {login ? (
        <div>
          <NavBar userID={user} 
          vacationData={vacationData}
          setRerender={setRerender}/>
          <MonthCalendar
            vacationData={vacationData}
            setSelectedWeekFunction={setSelectedWeekFunction}
            userID={user}
            
          />
          <WeeklyCalendar 
          week={week} 
          userID={user}
          vacationData={vacationData}
           />
        </div>
      ) : (
        <Login loginToggle={loginToggle} />
      )}
      <Container>
        {/* <img
          class="ui fluid image"
          src="https://www.uaf.edu/oip/travelalerts/Travel-Alerts-Page-Picture.jpg"
        ></img> */}
      </Container>
    </div>
  );
}

export default Body;