import React from "react";
import "./NavBarStyles.css";
import NewVacationForm from "./Forms/NewVacationForm";
import UpdateVacationForm from "./Forms/UpdateVacationForm";
// import logo from '/Users/bleakchandler/Flatiron/projects/Phase 4/journeycast-frontend/journeycast-app/src/logo.png'; // with import

function NavBar({userID, vacationData}) {
    return(
      <ul>
      {/* <li><img src={logo}/></li> */}
      <li><NewVacationForm href="default.asp" userID={userID}>Create New Vacation</NewVacationForm></li>
      <li><UpdateVacationForm href="default.asp" userID={userID} vacationData={vacationData}>Edit Your Vacations</UpdateVacationForm></li>
      <li><a href="contact.asp">Logout</a></li>
      {/* <li><a href="about.asp">About</a></li> */}
    </ul>)
}

export default NavBar

