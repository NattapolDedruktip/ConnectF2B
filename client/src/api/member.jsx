import axios from "axios";

export const listMember = () =>
    axios.get("http://localhost:5000/api/member")


export const removeMember = (token,id) => {
    return axios.delete("http://localhost:5000/api/member/"+id,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
}