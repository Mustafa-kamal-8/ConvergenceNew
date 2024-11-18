import React from "react";
import { useTable, usePagination } from "react-table";

interface CentralizedTableProps {
  columns: any;
  data: any[];
  pageSize?: number;
}

const CentralizedTable: React.FC<CentralizedTableProps> = ({
  columns,
  data,
  pageSize = 10,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page , 
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    gotoPage,
    pageOptions,
    setPageSize,
    state: { pageIndex, pageSize: currentPageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize },
    },
    usePagination
  );

  return (
    <div className="bg-white shadow-md  overflow-auto">
      {/* Table */}
      <table
        {...getTableProps()}
        className="text-sm text-left text-gray-950 border-collapse"
      >
        <thead className="bg-blue-500 text-white uppercase text-sm">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-4 border-r border-gray-300 text-center"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
          {page.map((row : any) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="hover:bg-gray-50 transition duration-150"
              >
                {row.cells.map((cell : any) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-3 text-center border-r border-gray-200"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-6 px-4 py-2 bg-gray-100 rounded-lg border-t">
        <div className="flex items-center mb-2 md:mb-0 space-x-2">
          <label htmlFor="rowsPerPage" className="text-sm font-medium">
            Rows per page:
          </label>
          <select
            id="rowsPerPage"
            value={currentPageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="block w-20 px-2 py-1 text-sm border rounded bg-white focus:ring focus:ring-blue-200 focus:outline-none"
          >
            {[5, 10, 15, 20, 25, 30].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className={`px-3 py-1 rounded ${
              canPreviousPage
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            &laquo; First
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className={`px-3 py-1 rounded ${
              canPreviousPage
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Previous
          </button>
          <span className="text-sm font-medium">
            Page <span className="text-blue-500">{pageIndex + 1}</span> of{" "}
            <span className="text-blue-500">{pageOptions.length}</span>
          </span>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className={`px-3 py-1 rounded ${
              canNextPage
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Next
          </button>
          <button
            onClick={() => gotoPage(pageOptions.length - 1)}
            disabled={!canNextPage}
            className={`px-3 py-1 rounded ${
              canNextPage
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
          >
            Last &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CentralizedTable;
