import React, { useState, useEffect } from "react";
import { Button, Header, Image, Modal, Form } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import "./FormStyles.css";

function NewVacationForm({ userID }) {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [note, setNote] = useState("");


  // console.log({ userID })

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

  // When the user clicks anywhere outside of the modal, close it
  // function closeFromOutsideWindowFunction(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }

  function handleNewVacation(e) {
    fetch(`http://localhost:3000/vacations`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        user_id: 1,
        location_id: 1,
        start_date: startDate,
        end_date: endDate,
        note: note,
        // user_id: 1,
        // content: content,
      }),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
    })
      .then((r) => r.json())
      .then((data) => test(data));
      // debugger
  }

//   const submitHandler = (e) => {
//     e.preventDefault()
//     handleNewVacation({title, note})
//     setTitle('')
//     setNote('')
//     // setUsername('')
//     // setPassword('')
// }

  function test(test) {}

  // const [open, setOpen] = React.useState(false);

  return (
    <div className="App" >
      <Modal as={Form} trigger={<a>Create New Vacation</a>} size="small" onSubmit={handleNewVacation}>
        <Header content="Create A New Vacation" />
        <Modal.Content>
          <Form.Input
            fluid
            name="title"
            label="Title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <SemanticDatepicker
            fluid
            name="Start Date"
            label="Start Date"
            placeholder="     Start Date"
            // value={startDate}
            // onChange={(e) => setStartDate(e.target.value)}
          />
          <br />
          <SemanticDatepicker
            fluid
            name="End Date"
            label="End Date"
            placeholder="     End Date"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
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
