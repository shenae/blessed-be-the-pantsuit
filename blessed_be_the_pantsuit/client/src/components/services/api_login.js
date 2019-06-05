import axios from 'axios'

const URL = 'http://localhost:4567';

export const loginUser = async (loginData) => {
    try {

        const response = await axios.post(`${URL}/auth/login`, loginData)
        return response.data
    } catch(error) {
        console.log("Login error: ", error);
    }
}

export const registerUser = async (registerData) => {
    try {
        const response = await axios.post(`${URL}/users`, registerData)
        return response.data
    } catch(error) {
        console.log("Registration error: ", error);
    }
}