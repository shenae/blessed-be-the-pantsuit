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

handleFormSubmit=(event) => {
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
    alert("Success")
 }

 resetForm=() => {
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
      <form onSubmit={this.handleFormSubmit}>
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
              I am writing to you because women’s rights need to be reinforced to promote legal, social and financial equality. Women are constantly degraded by society and legal laws, and are often reprimanded with low pay.  According to, American Civil Liberties Union, “Women still just make 78 cents for every dollar earned by men. Black women earn only 64 cents and Latinas only 54 cents for each dollar earned by white men”.  I implore you to pass more legislation to establish equal pay in the workforce.  Making the changes will not only benefit the women of our state but also the women of this country." readonly
              onChange={(e) => this.handleChange(this.state, e)} ></textarea>
            </div>
            </div>
        <input type="submit"/>
      </form>
    </div>

    )
  }
}

export default PoliticianForm;