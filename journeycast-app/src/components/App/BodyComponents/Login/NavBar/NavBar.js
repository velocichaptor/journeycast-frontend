import React from "react";
import "./NavBarStyles.css";
import NewVacationForm from "./Forms/NewVacationForm";
import UpdateVacationForm from "./Forms/UpdateVacationForm";
import logo from './logo.png'

function NavBar({userID, vacationData, setRerender}) {
    return(
      <ul>
      <li ><img src={logo} /></li>
      <li><NewVacationForm href="default.asp" userID={userID} setRerender={setRerender} >Create New Vacation</NewVacationForm></li>
      <li><UpdateVacationForm href="default.asp" userID={userID} vacationData={vacationData} setRerender={setRerender}>Edit Your Vacations</UpdateVacationForm></li>
      <li><a href="contact.asp">Logout</a></li>
      {/* <li><a href="about.asp">About</a></li> */}
    </ul>)
}

export default NavBar

