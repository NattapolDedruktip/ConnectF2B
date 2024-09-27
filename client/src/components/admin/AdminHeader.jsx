import React from 'react'

import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import useAuthStore from '../../store/auth-store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminHeader() {

  const navigate = useNavigate()
  const actionLogout = useAuthStore((state)=>state.actionLogout)

  const hdlLogout = () => {
    actionLogout()
    navigate("/")
    toast.error("Log out successfully!")
  } 

  return (
    <div className="bg-neutral-900 text-white h-12 px-4 items-center flex justify-end">
      <div className="relative group bg-neutral-900">
        <button
          className="flex items-center justify-between gap-2
                    hover:text-green-500 hover:scale-110 hover:-translate-y-1 hover:duration-200"
        >
          <img
            src={"https://cdn-icons-png.flaticon.com/512/6858/6858504.png"}
            className="w-8 h-8"
          />
          Profile
          {/* Profile */}
          <IoIosArrowDown />
        </button>
        <ul className="absolute bg-neutral-900 rounded-lg w-full hidden group-hover:block">
          <li className="py-2 px-3 cursor-pointer rounded-sm hover:bg-neutral-700 hover:duration-200 active:bg-green-400">
            Username
          </li>
          <li className="py-2 px-3 cursor-pointer rounded-sm hover:bg-neutral-700 hover:duration-200 active:bg-green-400">
            Setting
          </li>
          <li 
          onClick={hdlLogout} 
          className="py-2 px-3 cursor-pointer rounded-sm hover:bg-neutral-700 hover:duration-200 active:bg-green-400">
            LogOut
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AdminHeader