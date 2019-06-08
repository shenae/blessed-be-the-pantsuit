import React, { Component } from 'react';
import { editUser } from '../services/api_login';

class Update extends Component {
    constructor(){
        super()
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
    
    editUser = async (event) => {
        event.preventDefault()
        const { username, email, password, city, state } = this.state;
        let user = {
            "username": username,
            "email": email,
            "password": password,
            "city": city,
            "state": state
        } 
        try {
        let updatedUser = await editUser(user, this.props.id);
        alert("Success")
        // this.setState({
        //     created: true,
        //     id: createdUser.data.id
        // })
        // console.log(this.state.id)
        // await this.props.setUserId(this.state.id)
        } catch(error) {
            console.log("Update user error: ",error);
        }
    }
    render() {
        return (

            <div>
                <form onSubmit={this.editUser}>
                <input type="text" name="username"placeholder="username" onChange={this.handleFormChange}/>
                <input type="text" name="email"  placeholder="email" onChange={this.handleFormChange}/>
                <input type="text" name="password"  placeholder="password" onChange={this.handleFormChange}/>
                <input type="text" name="city" placeholder="city" onChange={this.handleFormChange} />
                <input type="text" name="state"placeholder="state" onChange={this.handleFormChange}/>
                <button>Update</button> <button>Delete</button>
                </form>
            </div>
        )
    }

}


export default Update;