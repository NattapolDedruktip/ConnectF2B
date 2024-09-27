import React, { useState } from 'react'

import validateRegister from "../../utils/validator"

import useAuthStore from "../../store/auth-store"

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
}

function Register() {

  //get data from zustand
  const name = useAuthStore((state) => state.name)
  const actionRegister = useAuthStore((state) => state.actionRegister)
  // console.log(name)

  const [formError, setFormError] = useState({})

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const hdlOnChange = (e) => {
    // console.log(e.target.name, e.target.value)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const hdlSubmit = (e) => {
    e.preventDefault()
    // console.log(form)

    const error = validateRegister(form)
    // console.log(error)
    if (error) {
      return setFormError(error);
    }
    //step 1 validate with joi
    //step 2 send to back

    // console.log(form)
    actionRegister(form)

    setForm(initialState)

  }

  return (
    <div className="flex justify-center h-full border bg-green-300">
      <form onSubmit={hdlSubmit} className='border flex flex-col  justify-around my-auto p-5 h-[70%] w-[30%] rounded-xl'>
        <h1 className='text-center text-4xl font-bold'>Register From</h1>

        <div className='flex flex-col gap-1'>
          <label >email :</label>
          <input className='p-2 rounded-xl'
            value={form.email}
            name='email'
            onChange={hdlOnChange}
            placeholder='email ...' />

          {
            formError.email && (
              <span className='text-red-400 text-sm'>{formError.email}</span>
            )
          }

        </div>

        <div className='flex flex-col gap-1'>
          <label >password :</label>
          <input className='p-2 rounded-xl'
            value={form.password}
            name='password'
            onChange={hdlOnChange}
            type="password"
            placeholder='password...' />

          {
            formError.password && (
              <span className='text-red-400 text-sm'>{formError.password}</span>
            )
          }

        </div>

        <div className='flex flex-col gap-1'>
          <label >confirm password :</label>
          <input className='p-2 rounded-xl'
            value={form.confirmPassword}
            name='confirmPassword'
            onChange={hdlOnChange}
            type="password"
            placeholder='confirm password...' />

          {
            formError.confirmPassword && (
              <span className='text-red-400 text-sm'>{formError.confirmPassword}</span>
            )
          }

        </div>
        <button className='p-2 border rounded-xl text-xl font-semibold' >Register</button>
      </form>
    </div>
  )
}

export default Register