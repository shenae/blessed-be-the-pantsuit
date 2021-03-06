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

export const registerUser = async (data) => {
    console.log(data)
    try {
        const response = await axios.post(`${URL}/users`, data)
        return response
    } catch(error) {
        console.log("Registration error: ", error);
    }
}

export const editUser = async (registerData, id) => {
    try {
        const response = await axios.put(`${URL}/users/${id}`, registerData)
        return response.data
    } catch(error) {
        console.log("Update error: ", error);
    }
}

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${URL}/users/${id}`)
        return response.data
    } catch(error) {
        console.log("Deletion error: ", error);
    }
}