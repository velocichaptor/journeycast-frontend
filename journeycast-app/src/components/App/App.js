import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import NavBar from "./NavBar/NavBar";
import Body from "./BodyComponents/Body";
import MonthCalendar from "./BodyComponents/Login/MonthComponents/RenderMonthlyCalendar";
import WeeklyCalendar from "./BodyComponents/Login/WeeklyCalendarComponents/RenderWeeklyCalendar";

import "./App.css";

function App() {
  const [week, setSelectedWeek] = useState([]);
  const [vacationData, setVacationData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/vacations`)
      .then((r) => r.json())
      .then((data) => monthCalendarData(data));
  }, []);

  function monthCalendarData(data) {
    setVacationData(
      // <MonthCalendar
        // key={vacationData.id}
        // setSelectedWeekFunction={setSelectedWeekFunction}
      // />,
    );
  }

  function setSelectedWeekFunction(selectedWeek) {
    setSelectedWeek(selectedWeek);
  }
  

  return (
    <div className="App">
      <div>
        <NavBar />

      </div>
      <div>
        <Body />
      </div>
    </div>
  );
}

{/* <NavBar />
      <WeeklyCalendar week={week} />
      {vacationData} */}

export default App;


// import React, { useState, useEffect } from "react";
// // import logo from './logo.svg';
// import NavBar from "./BodyComponents/NavBar/NavBar";
// import Body from "./BodyComponents/Body";
// import MonthCalendar from "./BodyComponents/NavBar/MonthComponents/RenderMonthlyCalendar";
// import WeeklyCalendar from "./BodyComponents/NavBar/WeeklyCalendarComponents/RenderWeeklyCalendar";

// import "./App.css";

// function App() {
//   const [week, setSelectedWeek] = useState([]);
//   const [vacationData, setVacationData] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:4000/vacations`)
//       .then((r) => r.json())
//       .then((data) => setVacationData(data));
//   }, []);

//   const vacationDataNew = vacationData.map(
//     (vacationObject) => (
//       console.log(vacationObject),
//       (
//         <MonthCalendar
//           key={vacationObject.id}
//           vacation={vacationObject}
//           setSelectedWeekFunction={setSelectedWeekFunction}
//         />
//       )
//     )
//   );

//   function setSelectedWeekFunction(selectedWeek) {
//     setSelectedWeek(selectedWeek);
//   }

//   return (
//     <div className="App">
//       <NavBar />
//       <WeeklyCalendar week={week} />
//       {vacationDataNew}
//     </div>
//   );
// }

// export default App;
