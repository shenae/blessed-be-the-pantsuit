import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';



class PoliticianForm extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  }

handleFormSubmit(event) {
  event.preventDefault()
    const { name, email, subject, message } = this.state;
  
  let templateParams = {
    from_name: email,
    to_name: '<YOUR_EMAIL_ID>',
    subject: subject,
    message_html: message,
    }

  emailjs.send(
    'gmail',
    'template_qLEovVpK',
      templateParams,
    'user_T0Fs9kXIV9GrXf7fdG95W'
    )
    this.resetForm()
 }

 resetForm() {
  this.setState({
    name: '',
    email: '',
    subject: '',
    message: '',
    });
  }
handleChange = (param, event) => {
  this.setState({ [param]: event.target.value })
}

render() {
  return (
  <div>
      <form onSubmit={this.handleFormSubmit.bind(this)}>
          <div class="field is-horizontal">
            <label class="label" id="label-form">Name</label>
            <input class="input" type="text" value={this.state.name} 
            onChange={this.handleChange.bind(this, 'name')} 
            placeholder="e.g Shenae Simmons"/>
          </div>
          <div class="field is-horizontal">
            <label class="label" id="label-form">Email</label>
            <input class="input" type="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} placeholder="enter your email address e.g. example@gmail.com"/>
          </div>
          <div class="field is-horizontal">
              <label class="label" id="label-form">Subject</label>
              <input class="input" type="text" value={this.state.subject}
              onChange={this.handleChange.bind(this, 'subject')} 
              placeholder="e.g Women's Rights"/>
            </div>
            <div class="field">
            <div className="control">
            <textarea class="textarea" placeholder="10 lines of textarea" rows="10" value="Please send this drafted
            email to your state governor: 
              Dear Governor, 
              I am writing this email... " readonly
              onChange={this.handleChange.bind(this, 'message')} ></textarea>
            </div>
            </div>
        <button type="Submit">Submit</button>
      </form>
    </div>

    )
  }
}

export default PoliticianForm;