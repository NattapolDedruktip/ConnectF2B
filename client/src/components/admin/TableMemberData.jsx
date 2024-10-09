import React from 'react'

function TableMemberData({ item, hdlRemoveMember  ,hdlUpdateMember }) {
  // console.log(data)
  return (
    <>
      {

        <tr  className="border-b dark:border-neutral-500 bg-neutral-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-600">
          <td className="whitespace-nowrap px-6 py-4 font-medium">{item.id}</td>
          <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
          <td className="whitespace-nowrap px-6 py-4">
            
            {/* {item.role} */}
            <select 
            onChange={(e)=>hdlUpdateMember(e,item.id)}
            defaultValue={item.role}>
              <option>ADMIN</option>
              <option>USER</option>
            </select>


          </td>
          <td className="whitespace-nowrap px-6 py-4">{item.updatedAt}</td>
          <td>
            <button
              className='border bg-blue-300 p-2 rounded'
              onClick={()=>hdlRemoveMember(item.id)}>
                Delete User
            </button>
          </td>
        </tr>
      }
    </>
  )
}

export default TableMemberData