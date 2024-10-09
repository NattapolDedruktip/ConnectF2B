import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import AppRoute from './routes/AppRoute'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {

  useEffect(() => {

    getData()

  }, [])

  const getData = async () => {
    try {

      const resp = await axios.get("http://localhost:5000/api/member")
      console.log(resp)

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

      />
      <AppRoute />
    </div>
  )
}
