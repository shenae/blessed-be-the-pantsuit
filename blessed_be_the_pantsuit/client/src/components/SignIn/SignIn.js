import React, { Component } from 'react';
import { registerUser } from '../services/api_login';
import Update from '../Update/Update';

class SignIn extends Component {
constructor(){
    super();
    this.state = {
        username: "",
        email: "",
        password: "",
        city: "",
        state: "",
        created: false
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
    let createdUser = await registerUser(newUser);
    alert("Success")
    this.setState({
        created: true,
        id: createdUser.data.id
    })
    console.log(this.state.id)
    await this.props.setUserId(this.state.id)
    } catch(e) {
        console.log(e)
    }
}

    render() {
        if (this.state.created) {
            return <Update id={this.state.id}/>
        }

        return (
            
            <div>
                
                <form onSubmit={this.createUser}>
                <div class="field">
                <div class="control">
                    <input class="input is-small" type="text" name="username" value={this.state.username} placeholder="username" onChange={this.handleFormChange}/>
                    </div>
                    </div>

                    <div class="field">
                    <div class="control has-icons-left has-icons-right">
                    <input class="input is-small" type="email" name="email" value={this.state.email} placeholder="email" 
                    onChange={this.handleFormChange}/>
                    <span class="icon is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    </div>
                    </div>
                
            

                    <div class="field">
                    <div class="control has-icons-left">
                    <input class="input is-small" type="password" name="password" value={this.state.password} placeholder="password" 
                    onChange={this.handleFormChange}/>
                    <span class="icon is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                </div>
                </div>
                <div class="field">
<div class="control">
                    <input class="input is-small" type="text" name="city" value={this.state.city} placeholder="city" 
                    onChange={this.handleFormChange}/>
                    </div>
                    </div>

<div class="field">
<div class="control">
                    <input class="input is-small" type="text" name="state" value={this.state.state} placeholder="state" 
                    onChange={this.handleFormChange}/>
                    </div>
                    </div>
                        <button type="Submit">Register</button>
                </form>
            </div>
            
        )
    }

}
 

export default SignIn;