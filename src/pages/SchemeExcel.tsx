import React from 'react'
import CentralizedTable from "../components/CentralizedTable";
import { SchemeColumns } from '../utils/ExcelTableColumn'

const data = [
  {
    id: "1",
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "1234567890",
    address: "123 Street, City",
    age: 30,
    role: "Developer",
    company: "ABC Corp",
    joinedDate: "2020-05-15",
    status: "Active",
    department: "IT",
    country: "USA",
    manager: "Jane Smith",
  },

];


const SchemeExcel = () => {
  return (
    <div className="p-6">
     
      <CentralizedTable columns={SchemeColumns} data={data} pageSize={5} />
    </div>
  )
}

export default SchemeExcel
