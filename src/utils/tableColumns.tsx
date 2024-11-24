import { Column } from 'react-table';

interface SchemeData {
  id: string;
  Scheme: string;
  SchemeType: string;
  SchemeCode: string;
  FundName: string;
  FundType: string;
  FundRatio: string;
  OrderNumber: string;
  SantionDate: string;
  Action: any;
}

export const candidateColumns: Column<SchemeData>[] = [
  { Header: "Scheme", accessor: "Scheme" },
  { Header: "Scheme Type", accessor: "SchemeType" },
  { Header: "Scheme Code", accessor: "SchemeCode" },
  { Header: "Fund Name", accessor: "FundName" },
  { Header: "Fund Type", accessor: "FundType" },
  { Header: "Fund Ratio", accessor: "FundRatio" },
  { Header: "Order Number", accessor: "OrderNumber" },
  { Header: "Santion Date", accessor: "SantionDate" },
  { Header: "Action", accessor: "Action" },
];