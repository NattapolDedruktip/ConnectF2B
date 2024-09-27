import axios from "axios"

export const register = (form) =>
    axios.post("http://localhost:5000/api/register",form)

export const login = (form) =>
    axios.post("http://localhost:5000/api/login",form)

export const currentUser = (token) => {
    return axios.post("http://localhost:5000/api/current-user",{},{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}





