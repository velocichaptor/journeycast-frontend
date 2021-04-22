import React, { useState, useEffect } from "react";
import { Button, Header, Image, Modal, Form } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./FormStyles.css";

function NewVacationForm({ userID, setRerender }) {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [note, setNote] = useState("");


  console.log("start date is", startDate);
  console.log("end date is", endDate);

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
      method: "POST",
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
      .then((data) => setRerender(data));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleNewVacation({ title, note, startDate, endDate });
  };


  return (
    <div className="App">
      <Modal
        as={Form}
        trigger={<a>Create New Vacation</a>}
        size="small"
        onSubmit={submitHandler}
      >
        <Header content="Create A New Vacation" />
        <Modal.Content>
          <Form.Input
            fluid
            name="Title"
            label="Title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <DatePicker
            name="Start Date"
            label="Start Date"
            placeholder="Start Date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <DatePicker
            name="End Date"
            label="End Date"
            placeholder="End Date"
            selected={endDate}
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
          <Button type="submit" color="orange">
            Create New Vacation
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default NewVacationForm;
