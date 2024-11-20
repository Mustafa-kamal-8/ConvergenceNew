import { Column } from "react-table";

interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  age: number;
  role: string;
  company: string;
  joinedDate: string;
  status: string;
  department: string;
  country: string;
  manager: string;
}

export const SchemeColumns: Column<Candidate>[] = [
  {
    Header: "Slno.", // Serial number column
    accessor: (_, rowIndex) => rowIndex + 1, // Calculate serial number
    id: "slno", // Custom ID since no direct field exists for Slno
    Cell: ({ value }: any) => <span>{value}</span>, // Render the serial number
  },
  {
    Header: "Details", // The single column header
    accessor: "details", // Placeholder accessor (not directly used here)
    Cell: ({ row }: any) => {
      const {
        id,
        name,
        email,
        phone,
        address,
        age,
        role,
        company,
        joinedDate,
        status,
        department,
        country,
        manager,
      } = row.original;

      return (
        <div className="grid grid-cols-6 gap-4 text-sm w-full"> {/* Grid layout for better alignment */}
          <p>
            <span className="font-semibold text-gray-700">ID:</span> {id}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Name:</span> {name}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Email:</span> {email}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Phone:</span> {phone}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Address:</span>{" "}
            {address}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Age:</span> {age}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Role:</span> {role}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Company:</span>{" "}
            {company}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Joined Date:</span>{" "}
            {joinedDate}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Status:</span>{" "}
            {status}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Department:</span>{" "}
            {department}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Country:</span>{" "}
            {country}
          </p>
          <p>
            <span className="font-semibold text-gray-700">Manager:</span>{" "}
            {manager}
          </p>
        </div>
      );
    },
  },
  {
    Header: "Action", 
    accessor: "action", 
    Cell: ({ row }: any) => (
      <button
        onClick={() => handleView(row.original)} 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        View
      </button>
    ),
  },
];

const handleView = (candidate: Candidate) => {
  console.log("View Candidate:", candidate); 
};
