// import React from 'react';
import React, { Component } from 'react';


const SenatorHarris () =>  {

    // Get the modal
const modalHarris = document.getElementsById("modalHarris");

// Get the button that opens the modal
const openButton = document.getElementById("openButton");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
openButton.onclick = function() {
  modalHarris.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modalHarris.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalHarris) {
    modalHarris.style.display = "none";
  }
}

render () {
  return (
    <div class="modal" id="openButton">
      <div class="modal-background"></div>
        <div class="modal-card" id="modalHarris">
          <header class="modal-card-head">
            <p class="modal-card-title">Blessed Be the Info</p>
                <button class="delete" aria-label="close"></button>
          </header>
        <section class="modal-card-body">
          <p class="title is-4">Senator Kamala Harris</p>
    
        </section>
      </div>
    </div>
  )} 
}
    
export default SenatorHarris;
