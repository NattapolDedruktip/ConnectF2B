import React from 'react'
import TableMembers from '../../components/admin/TableMembers'

function Manage() {
  return (
    <div className='m-5 p-5 flex flex-col gap-4 bg-white'>
    <h1>Manage</h1>
    <TableMembers/>
    </div>
  )
}

export default Manage