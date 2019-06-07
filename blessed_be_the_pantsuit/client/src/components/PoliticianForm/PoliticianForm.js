import React from 'react';
// let transporter = nodemailer.createTransport(transport[, defaults])

// transporter.sendMail(data[, callback]);

// var message = {
//   from: 'sender@server.com',
//   to: 'receiver@sender.com',
//   subject: 'Message title',
//   text: 'Plaintext version of the message',
//   html: '<p>HTML version of the message</p>'
// };



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