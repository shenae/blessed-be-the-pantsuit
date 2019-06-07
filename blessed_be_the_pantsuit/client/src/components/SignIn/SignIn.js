import React, { Component } from 'react';
import { registerUser } from '../services/api_login';

class SignIn extends Component {
constructor(){
    super();
    this.state = {
        username: "",
        email: "",
        password: "",
        city: "",
        state: ""
    }
}

handleFormChange = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;

    this.setState({
        [fieldName]: value 
    })
}

createUser = async (event) => {
    event.preventDefault()
    const { username, email, password, city, state } = this.state;
    let newUser = {
        "username": username,
        "email": email,
        "password": password,
        "city": city,
        "state": state
    } 
    try {
    await registerUser(newUser);
    alert("Success")
    } catch(e) {
        console.log(e)
    }
}

    render() {
        return (
            <div>
                <form onSubmit={this.createUser}>
                    <input type="text" name="username" value={this.state.username} placeholder="username" onChange={this.handleFormChange}/>
                    <input type="email" name="email" value={this.state.email} placeholder="email" 
                    onChange={this.handleFormChange}/>
                    <input type="password" name="password" value={this.state.password} placeholder="password" 
                    onChange={this.handleFormChange}/>
                    <input type="text" name="city" value={this.state.city} placeholder="city" 
                    onChange={this.handleFormChange}/>
                    <input type="text" name="state" value={this.state.state} placeholder="state" 
                    onChange={this.handleFormChange}/>/
                        <button type="Submit">Register</button>
                </form>
            </div>
            
        )
    }

}


export default SignIn;