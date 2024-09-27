import React, { useState } from 'react'
import useAuthStore from '../../store/auth-store';
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "pack2@gmail.com",
    password: "123456",
  });

  //zustand

  const actionLogin = useAuthStore((state)=> state.actionLogin)
  




  const hdlOnChange = (e) => {
    console.log(e.target.name, e.target.value)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const hdlSubmit = async (e) => {
    e.preventDefault()
    // console.log(form)
    const role  = await actionLogin(form)
    console.log("Role :",role)
    if(role === "ADMIN") {
      
      navigate("/admin")

    }else{
      navigate("/user")
    }
  }

  return (
    <div className="flex justify-center h-full border bg-green-300">
      <form onSubmit={hdlSubmit} className='border flex flex-col  justify-around my-auto p-5 h-[60%] w-[30%] rounded-xl'>
        <h1 className='text-center text-4xl font-bold'>Log In</h1>
        
        <div className='flex flex-col gap-1'>
        <label >email :</label>
        <input className='p-2 rounded-xl' 
        value={form.email}
        name='email'
        onChange={hdlOnChange}
        type="email" 
        placeholder='email ...'/>
        </div>

        <div className='flex flex-col gap-1'>
        <label >password :</label>
        <input className='p-2 rounded-xl' 
        value={form.password}
        name='password'
        onChange={hdlOnChange}
        type="password" 
        placeholder='password...'/>
        </div>

        
        <button className='p-2 border rounded-xl text-xl font-semibold' >Login</button>
      </form>
    </div>
  )
}

export default Login