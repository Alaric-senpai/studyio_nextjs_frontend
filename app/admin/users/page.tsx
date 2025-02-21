import { userColumns } from '@/components/tables/columns/users.columns'
import { DataTable } from '@/components/tables/data-table'
import { Table, TableHeader } from '@/components/ui/table'
import { UsersDummy } from '@/lib/dummy/dummy'
import React from 'react'

const UsersComponent = () => {
  return (
    <div className='p-8'>
        <p className="text-3xl font-bold underline underline-offset-2">
            Users List
        </p>
        <div className="my-5">
          <DataTable data={UsersDummy} columns={userColumns} />
        </div>
    </div>
  )
}

export default UsersComponent