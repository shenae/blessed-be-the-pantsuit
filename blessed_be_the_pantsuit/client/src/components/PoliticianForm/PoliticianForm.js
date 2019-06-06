import React from 'react';

const PoliticianForm = (props) => (
    <div className="film-details">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
            <input class="input" type="text" placeholder="e.g Alex Smith"/>
        </div>
        </div>

        <div class="field">
        <label class="label">Email</label>
        <div class="control">
            <input class="input" type="email" placeholder="your email address e.g. alexsmith@gmail.com"/>
        </div>
        </div>

        <div class="field">
        <label class="label">Body</label>
        <div class="control">
            <textarea class="input" type="text" placeholder="e.g. Dear Governor ..."/>
        </div>
        </div>
    </div>
  )

export default PoliticianForm;