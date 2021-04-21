import React from "react";
import "./NavBarStyles.css";
import NewVacationForm from "./NewVacationForm";
// import logo from '/Users/bleakchandler/Flatiron/projects/Phase 4/journeycast-frontend/journeycast-app/src/logo.png'; // with import

function NavBar() {
    return(
      <ul>
      {/* <li><img src={logo}/></li> */}
      <li><NewVacationForm href="default.asp">Create New Vacation</NewVacationForm></li>
      <li><a href="news.asp">Edit Vacations</a></li>
      <li><a href="contact.asp">Logout</a></li>
      {/* <li><a href="about.asp">About</a></li> */}
    </ul>)
}

export default NavBar
