
import { create } from 'zustand'
import { login, register } from '../api/auth'
import { toast } from 'react-toastify';
import {createJSONStorage, persist} from 'zustand/middleware'
import {listLandmarks} from "../api/admin"

const useAuthStore = create(persist((set) => ({
  user : null,
  token : null,

  actionRegister : async (form) => {
    try {
        const resp = await register(form);
        console.log("resp",resp)
        console.log(resp.data)
        toast.success(resp.data.message)
    } catch (err) {
        console.log(err.response.data.message)
        toast.error(err.response.data.message)
    }
  },

  actionLogin : async (form) => {
    try {
        const resp = await login(form);
        // console.log("Role :",resp.data.user.user.role)
        // console.log("token",resp.data.token)
        set({
            user : resp.data.user,
            token : resp.data.token
        })
        toast.success("login success!")
        return resp.data.user.user.role
    } catch (err) {
        console.log(err.response.data.message)
        toast.error(err.response.data.message)
    }
  },

  actionLogout : () => {
    localStorage.clear()
    set({
        user : null ,
        token : null
    })
  },

  actionGetLandmarks : async () => {
    try {
      const resp = await listLandmarks()
      console.log(resp)
    } catch (err) {
      console.log(err)
    }
  } 




}),{
    name : "user-store",
    storage : createJSONStorage(()=>localStorage)
}))


export default useAuthStore
