import React from "react";
import "./NavBarStyles.css";
// import logo from '/Users/bleakchandler/Flatiron/projects/Phase 4/journeycast-frontend/journeycast-app/src/logo.png'; // with import



function NavBar() {

    return(
      <ul>
      {/* <li><img src={logo}/></li> */}
      <li><a href="default.asp">Home</a></li>
      <li><a href="news.asp">News</a></li>
      <li><a href="contact.asp">Contact</a></li>
      <li><a href="about.asp">About</a></li>
    </ul>)
}

export default NavBar

