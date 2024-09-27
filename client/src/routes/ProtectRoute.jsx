import React , {useEffect, useState} from 'react'
import useAuthStore from '../store/auth-store'
import { currentUser } from '../api/auth'
import { Navigate } from 'react-router-dom'

function ProtectRoute({element,allow}) {

  const [isAllowed , setIsAllowed] = useState(null);
  
  const token = useAuthStore((state)=>state.token)
  const user = useAuthStore((state)=>state.user)

  useEffect(()=>{
    checkRole()
  },[])

  const checkRole = async() =>{
    try {
      const resp = await currentUser(token)
      console.log(resp)

      const role = resp.data.member.role
      console.log("Role from Back-end :  ",role)

      if(allow.includes(role)) {
        setIsAllowed(true)
      }else{
        setIsAllowed(false)
      }
    } catch (err) {
      console.log(err)
      setIsAllowed(false)
    }
  };

  if(isAllowed === null) {
    return <div>Loading...</div>
  }

  if(!isAllowed) {
    return <Navigate to={"/unauthorization"}/>
  }

  
  return element
}

export default ProtectRoute