import React, { useState, useEffect } from "react";
import { Button, Header, Dropdown, Modal, Form } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FormStyles.css";

function NewVacationForm({ userID, vacationData }) {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [note, setNote] = useState("");

  const setsOfVacationsArray  = vacationData.filter(vacationItem => vacationItem.user_id === userID);

  console.log("this user's vacations:", setsOfVacationsArray)

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  function openWindowFunction() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  function closeWindowFunction() {
    modal.style.display = "none";
  }

  const handleNewVacation = ({ title, startDate, endDate, note }) => {
    fetch(`http://localhost:3000/vacations`, {
      method: "PATCH",
      body: JSON.stringify({
        title: title,
        user_id: userID,
        location_id: 1,
        start_date: startDate,
        end_date: endDate,
        note: note,
        day: 1,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => test(data));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleNewVacation({ title, note, startDate, endDate });
  };

  const countryOptions = 
  setsOfVacationsArray.map((title, id) => <option key={id}>{title}</option>);
    // for (const property in setsOfVacationsArray) {
    // // { key: "af", value: "af", flag: "af", text: "Afghanistan" }
    // { key: id, value: title, text: title}
    // }
  

  return (
    <div className="App">
      <Modal
        as={Form}
        trigger={<a>Update Your Vacations</a>}
        size="small"
        onSubmit={submitHandler}
      >
        <Header content="Update Your Vacations" />
        <Modal.Content>
          <Dropdown
            placeholder="Select Country"
            fluid
            search
            selection
            options={countryOptions}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button type="submit" color="orange">
            Update Vacation
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default NewVacationForm;
