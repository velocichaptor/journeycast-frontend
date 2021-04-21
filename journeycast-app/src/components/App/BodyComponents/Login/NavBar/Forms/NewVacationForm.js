import React, {useState, useEffect} from "react";
import "./FormStyles.css";

function NewVacationForm() {
  const [title, setTitle] = useState([])
  const [startDate, setStartDate] = useState([])
  const [endDate, setEndDate] = useState([])
  const [note, setNote] = useState([])

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
    e.preventDefault();
    fetch(`http://localhost:4000/vacations`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        start_date: startDate,
        end_date: endDate,
        note: note,
        // content: content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => r.json());
    // .then((newPoemData) => onAdd(newPoemData));
  }

  return (
    <div >
      <a id="myBtn" onClick={openWindowFunction}>
        Create New Vacation
      </a>

      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={closeWindowFunction}>
            &times;
            <form className="new-poem-form" onSubmit={handleNewVacation}>
              <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {/* <input
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <textarea
                placeholder="Write your masterpiece here..."
                rows={10}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              /> */}
              <input type="submit" value="Add New Vacation" />
            </form>
          </span>
          <p>TEST</p>
        </div>
      </div>
    </div>
  );
}

export default NewVacationForm;
