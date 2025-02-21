import { ReportColumns } from '@/components/tables/columns/reports.columns'
import { DataTable } from '@/components/tables/data-table'
import { ReportsDummy } from '@/lib/dummy/dummy'
import React from 'react'

const AdminReports = () => {
  return (
    <div className="p-4">

      <h2 className='font-bold text-3xl underline underline-offset-2 dark:text-custom-floralwhite'>
        Reports
      </h2>
      <div className="my-3">
        <DataTable data={ReportsDummy} columns={ReportColumns} />
      </div>
    </div>
  )
}

export default AdminReports