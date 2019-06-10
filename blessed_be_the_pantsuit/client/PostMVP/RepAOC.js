import React, { Component } from 'react';


class RepAOC extends Component {

    // const modalAOC = document.getElementsById("modalAOC");
    // const openButton = document.getElementById("openButton");

    // openButton.onclick = function() {
    //     modalHarris.style.display = "block";
    //   }

    // window.onclick = function(event) {
    // if (event.target == modalHarris) {
    //     modalHarris.style.display = "none";
    // }
    // }


    render() {
        return (
            <div class="modal" id="openButton">
      <div class="modal-background"></div>
        <div class="modal-card" id="modalAOC">
          <header class="modal-card-head">
            <p class="modal-card-title">Blessed Be the Info</p>
                <button class="delete" aria-label="close"></button>
          </header>
        <section class="modal-card-body">
          <p class="title is-4">Senator Kamala Harris</p>
    
        </section>
      </div>
    </div>
            
        )
    }

}


export default RepAOC;