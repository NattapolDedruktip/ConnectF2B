import React from 'react'
import { Link } from 'react-router-dom'

function MainNav() {
    return (
        <div className='bg-neutral-800 text-white flex h-12 w-full items-center px-4 gap-4'>
            <div className='text-2xl font-bold'><Link to={"/"} >Logo</Link></div>

            <div className='flex w-full justify-between'>
                <ul className='flex items-center gap-4'>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"} >About</Link></li>
                </ul>

                <div>
                    <ul className='flex gap-4'>
                        <li><Link to={"/register"} >Register</Link></li>
                        <li><Link to={"/login"} >Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainNav