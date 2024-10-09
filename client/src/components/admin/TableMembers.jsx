import React, { useEffect, useState } from 'react'
import TableMemberData from './TableMemberData'
import useAuthStore from '../../store/auth-store'
import axios from 'axios'
import { listMember , removeMember , updateMember } from '../../api/member'
import { toast } from 'react-toastify'

function TableMembers() {

    const [data, setData] = useState([])


    
    //zustand
    const token = useAuthStore((state)=> state.token)
    
    const getData = async () => {
        try {
            const resp = await listMember()
            setData(resp.data.member)
        } catch (err) {
            console.log(err)
        }

    }

    const hdlRemoveMember = async (id) => {
        //we got token from zustand 
        try {
            const resp = await removeMember(token,id)
            getData()
            toast.success("deleted successfully!!")
        } catch (err) {
            console.log(err)
        }   
    }

    const hdlUpdateMember = async(e,id) => {
        console.log(id,e.target.value)
        const role = e.target.value
        console.log({role})
        try {
            const resp = await updateMember(token,id,{role})
            toast.success("Updated role successfully !!")
            console.log(resp)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])



    return (
        
        <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                        <th scope="col" className="px-6 py-4">Id</th>
                        <th scope="col" className="px-6 py-4">Email</th>
                        <th scope="col" className="px-6 py-4">Role</th>
                        <th scope="col" className="px-6 py-4">Update at</th>
                        <th scope="col" className="px-6 py-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) =>
                            <TableMemberData key={index} item={item}  hdlRemoveMember={hdlRemoveMember} hdlUpdateMember={hdlUpdateMember}  />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableMembers