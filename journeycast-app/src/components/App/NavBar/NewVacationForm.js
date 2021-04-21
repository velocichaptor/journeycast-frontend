import React from "react";
import "./NavBarStyles.css";

function NewVacationForm() {
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
  //   window.onclick = function (event) {
  //     if (event.target == modal) {
  //       modal.style.display = "none";
  //     }
  //   };

  return (
    <div>
   

      <a id="myBtn" onClick={openWindowFunction}>
        Create New Vacation
      </a> 


      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close" onClick={closeWindowFunction}>
            &times;
          </span>
          <p>A modal in a codepen!</p>
        </div>
      </div>
    </div>
  );
}

export default NewVacationForm;
