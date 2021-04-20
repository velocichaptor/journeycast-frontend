import React, {useState} from "react";
import Login from "./Login"
import { Container } from 'semantic-ui-react'
import WeeklyCalendar from "./WeekComponents/WeeklyCalendar"
import MonthCalendar from "./MonthComponents/MonthCalendar"



function Body() {
    const [login, setLogin] = useState(false)
return (
    <div>
       { login ? <MonthCalendar/> : <Login /> }
       <Container>
           <img class="ui fluid image" src="https://www.uaf.edu/oip/travelalerts/Travel-Alerts-Page-Picture.jpg"></img>
       </Container>
       
    </div>
)
}

export default Body