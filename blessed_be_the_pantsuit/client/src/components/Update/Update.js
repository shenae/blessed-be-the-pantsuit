import React, { Component } from 'react';


class Update extends Component {


    render() {
        return (

            <div>
                <form>
                <input type="text" name="username" value={this.state.username} placeholder="username" />
                <input type="text" name="email" value={this.state.email} placeholder="email" />
                <input type="text" name="password" value={this.state.password} placeholder="password" />
                <input type="text" name="city" value={this.state.city} placeholder="city" />
                <input type="text" name="state" value={this.state.state} placeholder="state" />
                <button>Update</button> <button>Delete</button>
                </form>
            </div>
        )
    }

}


export default Update;