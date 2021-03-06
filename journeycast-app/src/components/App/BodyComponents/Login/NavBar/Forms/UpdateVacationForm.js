import React, { useState, useEffect } from "react";
import { Button, Header, Dropdown, Modal, Form } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FormStyles.css";

function NewVacationForm({ userID, vacationData, setRerender }) {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [note, setNote] = useState("");
  const [vacationId, setVacationID] = useState("");
  const [dropdownSelection, setDropdownSelection] = useState("");

  const setsOfVacationsArray = vacationData.filter(
    (vacationItem) => vacationItem.user_id === userID
  );

  // console.log("this user's vacations:", setsOfVacationsArray);

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

  const handleUpdatedVacation = ({ title, startDate, endDate, note }) => {
    console.log({ title, startDate, endDate, note });

    fetch(`http://localhost:3000/vacations/${vacationId}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: title,
        // user_id: userID,
        // location_id: 1,
        start_date: startDate,
        end_date: endDate,
        note: note,
        // day: 1,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => setRerender(data));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleUpdatedVacation({ title, note, startDate, endDate });
  };

  const optionsArray = [];

  for (var i = 0; i < setsOfVacationsArray.length; i++) {
    // console.log("data is", setsOfVacationsArray[i].title);
    optionsArray.push({
      value: setsOfVacationsArray[i].id,
      text: setsOfVacationsArray[i].title,
      name: setsOfVacationsArray[i].title,
    });
  }

  const handleDropdown = (event, data) => {
    for (var i = 0; i < setsOfVacationsArray.length; i++) {
      if (data.value === setsOfVacationsArray[i].id) {
        setVacationID(data.value);
        setTitle(setsOfVacationsArray[i].title);
        setStartDate(setsOfVacationsArray[i].start_date);
        setEndDate(setsOfVacationsArray[i].end_date);
        setNote(setsOfVacationsArray[i].note);
      }
    }
  };

  const deleteHandler = () => {
    fetch(`http://localhost:3000/vacations/${vacationId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setRerender(data);
      });
  };

  return (
    <div className="App">
      <Modal
        as={Form}
        trigger={<a>Update Vacation</a>}
        size="small"
        onSubmit={submitHandler}
      >
        <Header content="Update Your Vacations" />
        <Modal.Content>
          Select Vacation
          <Dropdown
            name="Title"
            label="Title"
            fluid
            search
            selection
            options={optionsArray}
            onChange={handleDropdown}
          />
          <Form.Input
            fluid
            name="Title"
            label="Title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          Start Date 
          <br></br>
          <DatePicker
            name="Start Date"
            label="Start Date"
            placeholder="Start Date"
            value={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <br></br>
          End Date 
          <br></br>
          <DatePicker
            name="End Date"
            label="End Date"
            placeholder="End Date"
            // selected={endDate}
            value={endDate}
            onChange={(date) => setEndDate(date)}
          />
          <Form.Input
            fluid
            name="note"
            label="Note"
            placeholder="Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={deleteHandler} color="pink">
            Delete Vacation
          </Button>
          <Button type="submit" color="purple">
            Update Vacation
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default NewVacationForm;
