import React, { Component } from 'react';


class Login extends Component {



    render() {
        return (
            <div>
                <form>
                    <input type="text" name="username" value={this.state.username} placeholder="username" />
                    <input type="text" name="email" value={this.state.email} placeholder="email" />
                    <input type="text" name="password" value={this.state.password} placeholder="password" />
                        <button>Login</button>
                </form>
            </div>
            
        )
    }

}


export default Login;