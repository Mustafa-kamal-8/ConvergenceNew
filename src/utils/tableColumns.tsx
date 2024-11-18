import { Column } from 'react-table';

interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export const candidateColumns: Column<Candidate>[] = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
  {
    Header: 'Address', // New column
    accessor: 'address',
  },
  {
    Header: 'Age', // New column
    accessor: 'age',
  },
  {
    Header: 'Role', // New column
    accessor: 'role',
  },
  {
    Header: 'Company', // New column
    accessor: 'company',
  },
  {
    Header: 'Joined Date', // New column
    accessor: 'joinedDate',
  },
  {
    Header: 'Status', // New column
    accessor: 'status',
  },
  {
    Header: 'Department', // New column
    accessor: 'department',
  },
  {
    Header: 'Country', // New column
    accessor: 'country',
  },
  {
    Header: 'Manager', // New column
    accessor: 'manager',
  },
];