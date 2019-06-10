import React, { Component } from 'react';

class SenatorHarris extends Component {
  constructor () {
    super();
    this.state = {
      isActive: false
    }
  }
  

closeModal = (event) => {
  const modalHarris = document.getElementById("openButton");
  if (this.state.isActive === false) {
    modalHarris.style.display = "none";
  } else {
    modalHarris.style.display = "block";
  }
}

render () {
  return (
    <div class="modal is-active" id="openButton">
      <div class="modal-background"></div>
        <div class="modal-card" id="modalHarris">
          <header class="modal-card-head">
            <p class="modal-card-title">Blessed Be the Info</p>
                <button class="delete" aria-label="close" onClick={this.closeModal}>Close</button>
          </header>
        <section class="modal-card-body">
          <p class="title is-4">Senator Kamala Harris</p>
    
        </section>
      </div>
    </div>
  )
}
}
    
export default SenatorHarris;
