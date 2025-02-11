// @ts-nocheck

import { Column } from "react-table";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import StatusToggleButton from "../pages/department-creation/components/StatusToggleButton";
import { Trash2 } from "lucide-react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

interface SchemeData {
  pklSchemeId: string;
  vsSchemeName: string;
  vsSchemeType: string;
  vsSchemeCode: string;
  vsFundName: string;
  vsSchemeFundingType: string;
  vsSchemeFUndingRatio: string;
  sanctionOrderNo: string;
  dtSanctionDate: string;
  count: string;
  Action?: unknown;
}

export const schemeColumns: (
  navigate: ReturnType<typeof useNavigate>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
) => Column<SchemeData>[] = (_navigate) => [
  { Header: "sl no", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Scheme", accessor: "vsSchemeName" },
  {
    Header: "Targets",
    accessor: "count",
  },
  { Header: "Scheme Type", accessor: "vsSchemeType" },
  { Header: "Scheme Code", accessor: "vsSchemeCode" },
  { Header: "Fund Name", accessor: "vsFundName" },
  { Header: "Fund Type", accessor: "vsSchemeFundingType" },
  { Header: "Fund Ratio", accessor: "vsSchemeFUndingRatio" },
  { Header: "Sanction Order Number", accessor: "sanctionOrderNo" },
  {
    Header: "Sanction Date",
    accessor: "dtSanctionDate",
    Cell: ({ value }: { value: string }) => moment(value).format("YYYY-MM-DD"),
  },
];

export const schemeDuplicateColumns: (
  navigate: ReturnType<typeof useNavigate>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
) => Column<SchemeData>[] = (_navigate) => [
  { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Scheme", accessor: "vsSchemeName" },
  {
    Header: "Targets",
    accessor: "count",
  },
  { Header: "Scheme Type", accessor: "vsSchemeType" },
  { Header: "Scheme Code", accessor: "vsSchemeCode" },
  { Header: "Fund Name", accessor: "vsFundName" },
  { Header: "Fund Type", accessor: "vsSchemeFundingType" },
  { Header: "Fund Ratio", accessor: "vsSchemeFUndingRatio" },
  { Header: "Sanction Order Number", accessor: "sanctionOrderNo" },
  { Header: "Departments", accessor: "department_names" },
  // {
  //   Header: "Action",
  //   accessor: "Action",
  //   Cell: ({ row }) => {
  //     const [open, setOpen] = useState(false);

  //     const handleDelete = () => {
  //       console.log("Deleting scheme:", row.original);
  //       setOpen(false);
  //     };

  //     return (
  //       <>
  //         <button className="text-red-500" onClick={() => setOpen(true)}>
  //           <Trash2 className="w-5 h-5" />
  //         </button>

  //         {/* MUI Confirm Dialog */}
  //         <Dialog open={open} onClose={() => setOpen(false)}>
  //           <DialogTitle>Confirm Deletion</DialogTitle>
  //           <DialogContent>Are you sure to delete this scheme?</DialogContent>
  //           <DialogActions>
  //             <Button onClick={() => setOpen(false)} color="primary">
  //               Cancel
  //             </Button>
  //             <Button onClick={handleDelete} color="error">
  //               Yes, Delete
  //             </Button>
  //           </DialogActions>
  //         </Dialog>
  //       </>
  //     );
  //   },
  // },
];

interface TargetData {
  pklTargetId: number;
  vsSchemeCode: string;
  iTotalTarget: string;
  dtSanctionDate: string;
  vsTargetNo: number;
  TotalTarget: string;
  vsTargetType: string;
  Action: unknown;
}

export const targetColumns = (
  navigate: (path: string) => void
): Column<TargetData>[] => [
  { Header: "sl no", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Scheme Code", accessor: "vsSchemeCode" },
  { Header: "Target Order Number", accessor: "vsTargetNo" },
  { Header: "Target Type", accessor: "vsTargetType" },
  {
    Header: "Date Of Target",
    accessor: "dtSanctionDate",
    Cell: ({ value }: { value: string }) => moment(value).format("YYYY-MM-DD"),
  },
  { Header: "Total Target", accessor: "iTotalTarget" },
  // {
  //   Header: "Action",
  //   accessor: "Action",
  //   Cell: ({ row }) => (
  //     <button
  //       onClick={() => navigate(`/target/${row.original.pklTargetId}`)}
  //       className="text-blue-500 hover:underline"
  //     >
  //       View
  //     </button>
  //   ),
  // },
];

interface CourseData {
  id: string;
  vsCourseName: string;
  vsCourseCode: string;
  dtFromDate: string;
  dtToDate: string;
  JobRoleName: string;
  iTheoryDurationInHours: string;
  iPracticalDurationInHours: string;

  vsSectorName: string;
  Action: unknown;
}

export const courseColumns = (
  navigate: (path: string) => void
): Column<CourseData>[] => [
  { Header: "sl no", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Sector Name", accessor: "vsSectorName" },
  { Header: "Job Role Name", accessor: "vsCourseName" },
  { Header: "QPNOS Code", accessor: "vsCourseCode" },
  {
    Header: "From Date",
    accessor: "dtFromDate",
    Cell: ({ value }: { value: string }) => moment(value).format("YYYY-MM-DD"),
  },
  {
    Header: "To Date",
    accessor: "dtToDate",
    Cell: ({ value }: { value: string }) => moment(value).format("YYYY-MM-DD"),
  },

  { Header: "Total Theory Hours", accessor: "iTheoryDurationInHours" },
  { Header: "Total Practical Hours", accessor: "iPracticalDurationInHours" },

  // {
  //   Header: "Action",
  //   accessor: "Action",
  //   Cell: ({ row }) => (
  //     <button
  //       onClick={() => navigate(`/target/${row.original.id}`)}
  //       className="text-blue-500 hover:underline"
  //     >
  //       View
  //     </button>
  //   ),
  // },
];

interface TrainingPartnerData {
  id: string;
  vsTpName: string;
 
  iSpocContactNum: string;
  department_names: string;
  vsSpocName: string;
  vsState: number;
  vsDistrict: number;
  vsBlock: number;
  vsPAN: string
  vsVillage: string;
  vsAddress: string;
  vsSmartId: string;
  isVillageCity: string;
  vsCity: string;
  vsULB: number;
  pklTpId: string;
  count: number;
  Action: unknown;
}

export const trainingColumns: (
  navigate: ReturnType<typeof useNavigate>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
) => Column<TrainingPartnerData>[] = (_navigate) => [
  { Header: "sl no", accessor: (_row, rowIndex) => rowIndex + 1 },

  { Header: "Partner Name", accessor: "vsTpName" },
  { Header: "PAN", accessor: "vsPAN" },
  { Header: "SPOC Name", accessor: "vsSpocName" },
 
  { Header: "SPOC Contact", accessor: "iSpocContactNum" },
  { Header: "Address", accessor: "vsAddress" },
  { Header: "State", accessor: "vsState" },
  { Header: "District", accessor: "vsDistrict" },

];

export const DuplicateTrainingColumns = (
  navigate: (path: string) => void,
  isCrossDepartmentDuplicate: boolean = false
): Column<TrainingPartnerData>[] => {
  const columns: Column<TrainingPartnerData>[] = [
    { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
    // {
    //   Header: "Centers",
    //   accessor: "count",
    // },
    { Header: "Partner Name", accessor: "vsTpName" },
    { Header: "PAN", accessor: "vsPan" },
    { Header: "Department Names", accessor: "departmentNames" },
   
  ];
  if (!isCrossDepartmentDuplicate) {
    columns.push(
      {
        Header: "Action",
        accessor: "Action",
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Cell: ({ row }) => {
          const [open, setOpen] = useState(false);

        const handleDelete = () => {
          setOpen(false);
        };

        return (
          <>
            <button className="text-red-500" onClick={() => setOpen(true)}>
              <Trash2 className="w-5 h-5" />
            </button>

            {/* MUI Confirm Dialog */}
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogContent>Are you sure to delete the TP?</DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} color="error">
                  Yes, Delete
                </Button>
              </DialogActions>
            </Dialog>
          </>
        );
      },
    });
  }
  return columns;
};

interface TrainingCenterData {
  pklTcId: number;
  vsTcName: string;
  vsTcCode: string;
  vsSpocName: string;
  iPartnerCode: string;
  Action: unknown;
}

export const centerColumns = (
  navigate: (path: string) => void
): Column<TrainingCenterData>[] => [
  { Header: "sl no", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Name", accessor: "vsTcName" },
  { Header: "TC Code", accessor: "vsTcCode" },
  { Header: "SPOC Name", accessor: "vsSpocName" },
  { Header: "Partner Code", accessor: "iPartnerCode" },
  // {
  //   Header: "Action",
  //   accessor: "Action",
  //   Cell: ({ row }) => (
  //     <button
  //       onClick={() => navigate(`/target/${row.original.pklTcId}`)}
  //       className="text-blue-500 hover:underline"
  //     >
  //       View
  //     </button>
  //   ),
  // },
];

interface BatchData {
  pklBatchId: string;
  SDMSid: string;
  iBatchNumber: string;
  Action: unknown;
}

export const batchColumns = (
  navigate: (path: string) => void
): Column<BatchData>[] => [
  { Header: "sl no", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Batch ID", accessor: "pklBatchId" },
  { Header: "SDMS  ID", accessor: "SDMSid" },
  { Header: "Batch Name", accessor: "iBatchNumber" },
  // {
  //   Header: "Action",
  //   accessor: "Action",
  //   Cell: ({ row }) => (
  //     <button
  //       onClick={() => navigate(`/batch/${row.original.pklBatchId}`)}
  //       className="text-blue-500 hover:underline"
  //     >
  //       View
  //     </button>
  //   ),
  // },
];

interface AssessorsData {
  id: number;
  vsAssosserName: string;
  vsEmail: string;
  Mobile: string;
  vsMobile: string;
  vsAssesmentAgency: string;
  dtValidUpTo: string;
  Action: unknown;
}

export const assessorsColumns = (
  navigate: (path: string) => void
): Column<AssessorsData>[] => [
  { Header: "sl no", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Assessor Name", accessor: "vsAssosserName" },
  { Header: "Name", accessor: "vsEmail" },

  { Header: "Mobile", accessor: "vsMobile" },
  { Header: "Assessor Agency", accessor: "vsAssesmentAgency" },
  {
    Header: "Valid Upto",
    accessor: "dtValidUpTo",
    Cell: ({ value }: { value: string }) => moment(value).format("YYYY-MM-DD"),
  },
  // {
  //   Header: "Action",
  //   accessor: "Action",
  //   Cell: ({ row }) => (
  //     <button
  //       onClick={() => navigate(`/assessors/${row.original.id}`)}
  //       className="text-blue-500 hover:underline"
  //     >
  //       View
  //     </button>
  //   ),
  // },
];

interface TrainerData {
  pklConvTrainerId: number;
  // trainerId: string;
  vsTrainerName: string;
  vsEmail: string;
  vsMobile: string;
  vsPAN: string;
  Action: unknown;
}

export const trainerColumns = (
  navigate: (path: string) => void
): Column<TrainerData>[] => [
  { Header: "sl no", accessor: (_row, rowIndex) => rowIndex + 1 },
  // { Header: "Trainer ID", accessor: "trainerId" },
  { Header: "Trainer Name", accessor: "vsTrainerName" },
  { Header: "Mobile", accessor: "vsMobile" },
  { Header: "Email", accessor: "vsEmail" },
  { Header: "IDCard", accessor: "vsPAN" },
  // {
  //   Header: "Action",
  //   accessor: "Action",
  //   Cell: ({ row }) => (
  //     <button
  //       onClick={() => navigate(`/trainer/${row.original.pklConvTrainerId}`)}
  //       className="text-blue-500 hover:underline"
  //     >
  //       View
  //     </button>
  //   ),
  // },
];

interface AssessmentData {
  pklConvAssessmentId: string;
  batchId: string;
  SDMSBatchId: string;
  candidateId: string;
  dtAssessmentDate: string;
  vsAgency: string;
  vsTotalMarks: string;
  vsObtainedMarks: string;
  vsMarksheetUrl: string;
  vsCertificateUrl: string;
  vsAccessorName: string;
  vsResult: string;
  dtResultDate: string;
  Action: unknown;
}

export const assessmentColumns = (
  navigate: (path: string) => void
): Column<AssessmentData>[] => [
  { Header: "SlNo.", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Batch ID", accessor: "batchId" },
  { Header: "SDMS Batch ID", accessor: "SDMSBatchId" },
  { Header: "Candidate ID", accessor: "candidateId" },
  {
    Header: "Assessment Date",
    accessor: "dtAssessmentDate",
    Cell: ({ value }) => moment(value).format("YYYY-MM-DD") ?? "N/A",
  },
  { Header: "Agency", accessor: "vsAgency" },

  { Header: "Accessor Name", accessor: "vsAccessorName" },
  { Header: "Result", accessor: "vsResult" },
  {
    Header: "Result Date",
    accessor: "dtResultDate",
    Cell: ({ value }) => moment(value).format("YYYY-MM-DD") ?? "N/A",
  },

  {
    Header: "Marksheet",
    accessor: "vsMarksheetUrl",
    Cell: ({ row }) => (
      <a
        href={row.original.vsMarksheetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View
      </a>
    ),
  },
  {
    Header: "Certificate",
    accessor: "vsCertificateUrl",
    Cell: ({ row }) => (
      <a
        href={row.original.vsCertificateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View
      </a>
    ),
  },
  // {
  //   Header: "Action",
  //   accessor: "Action",
  //   Cell: ({ row }) => (
  //     <button
  //       onClick={() =>
  //         navigate(`/assessment/${row.original.pklConvAssessmentId}`)
  //       }
  //       className="text-blue-500 hover:underline"
  //     >
  //       View
  //     </button>
  //   ),
  // },
];

interface PlacementData {
  pklConvPlacementId: string;
  batchId: string;
  candidateId: string;
  bIsCandidatePlaced: string;
  vsEmployeerName: string;
  vsPlacementType: string;
  vsCandidateName: string;
  Action: unknown;
}

export const placementColumns = (
  navigate: (path: string) => void
): Column<PlacementData>[] => [
  { Header: "SlNo.", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Batch ID", accessor: "batchId" },
  { Header: "Candidate ID", accessor: "candidateId" },
  { Header: "Candidate Name", accessor: "vsCandidateName" },
  { Header: "Is Placed", accessor: "bIsCandidatePlaced" },
  { Header: "Placement Type", accessor: "vsPlacementType" },
  { Header: "Employer Name", accessor: "vsEmployeerName" },

  // {
  //   Header: "Action",
  //   accessor: "Action",
  //   Cell: ({ row }) => (
  //     <button
  //       onClick={() =>
  //         navigate(`/placement/${row.original.pklConvPlacementId}`)
  //       }
  //       className="text-blue-500 hover:underline"
  //     >
  //       View
  //     </button>
  //   ),
  // },
];

interface DepartmentListData {
  id: string;
  BatchId: string;
  departmentName: string;
  adminName: string;
  phoneNumber: string;
  createdDate: string;
  userName: string;
  bEnable: number;
  password: string;
  Action: unknown;
  pklDepartmentId: number;
}

// eslint-disable-next-line react-refresh/only-export-components
export const departmentListColumns: Column<DepartmentListData>[] = [
  {
    Header: "Sl. No.",
    accessor: (_, index) => index + 1,
    id: "sl_no",
  },
  {
    Header: "Department Name",
    accessor: "departmentName",
    Cell: ({ value }) => <span className="capitalize">{value ?? "N/A"}</span>,
  },
  {
    Header: "User Name",
    accessor: "userName",
    Cell: ({ value }) => value ?? "N/A",
  },
  {
    Header: "Password",
    accessor: "password",
    Cell: ({ value }) => value ?? "N/A",
  },
  {
    Header: "Created Time",
    accessor: "createdDate",
    Cell: ({ value }) => moment(value).format("YYYY-MM-DD") ?? "N/A",
  },
  {
    Header: "Created By",
    accessor: "adminName",
    Cell: ({ value }) => value ?? "N/A",
  },
  {
    Header: "Status",
    accessor: "bEnable",
    Cell: ({ value }) => (
      <span style={{ color: value === 0 ? "red" : "green" }}>
        {value === 0 ? "Inactive" : value === 1 ? "Active" : "N/A"}
      </span>
    ),
  },
  {
    Header: "Action",
    accessor: "Action",
    Cell: ({ row }) => {
      const { bEnable, pklDepartmentId } = row.original;
      return (
        <StatusToggleButton
          initialStatus={bEnable}
          pklTargetId={pklDepartmentId}
        />
      );
    },
  },
];

interface InvoiceData {
  pklConvInvoiceId: string;
  vsInvoiceTranche: string;
  vsInvoiceDate: string;
  vsInvoiceNo: string;
  fAmount: string;
  fRate: string;
  iTotalCandidate: string;

  Action: unknown;
}

export const invoiceColumns = (
  navigate: (path: string) => void
): Column<InvoiceData>[] => [
  { Header: "sl no", accessor: (_row, rowIndex) => rowIndex + 1 },
  { Header: "Invoice Tranche", accessor: "vsInvoiceTranche" },
  {
    Header: "Date",
    accessor: "vsInvoiceDate",
    Cell: ({ value }) => moment(value).format("YYYY-MM-DD") ?? "N/A",
  },
  { Header: "Invoice Number", accessor: "vsInvoiceNo" },
  { Header: "Amount", accessor: "fAmount" },
  { Header: "Rate", accessor: "fRate" },
  { Header: "Total Candidate", accessor: "iTotalCandidate" },
  {
    Header: "Action",
    accessor: "Action",
    Cell: ({ row }) => (
      <button
        onClick={() => navigate(`/invoice/${row.original.pklConvInvoiceId}`)}
        className="text-blue-500 hover:underline"
      >
        View
      </button>
    ),
  },
];

interface CandidateData {
  candidateId: string;
  iBatchNumber: string;
  vsCandidateName: string;
  department_names?: string;
  duplicate_count?: string;
  vsDOB: string;
  iAge: string;
  pklGenderId: string;
  vsMobile: string;
  pklQualificationId: string;
  Action: unknown;
}

export const candidateColumns = (
  navigate: (path: string) => void
): Column<CandidateData>[] => [
  { Header: "SL No", accessor: (_row, rowIndex) => rowIndex + 1 },
  {
    Header: "Candidate Name",
    accessor: "vsCandidateName",
    Cell: ({ value }) => <span className="capitalize">{value}</span>,
  },
  {
    Header: "Date Of Birth",
    accessor: "vsDOB",
    Cell: ({ value }: { value: string }) => moment(value).format("DD-MM-YYYY"),
  },
  { Header: "Age", accessor: "iAge" },
  { Header: "Gender", accessor: "pklGenderId" },
  { Header: "Mobile", accessor: "vsMobile" },
  { Header: "Qualification", accessor: "pklQualificationId" },
  // {
  //   Header: "Action",
  //   accessor: "Action",
  //   Cell: ({ row }) => (
  //     <button
  //       onClick={() => navigate(`/candidate/${row.original.candidateId}`)}
  //       className="text-blue-500 hover:underline"
  //     >
  //       View
  //     </button>
  //   ),
  // },
];

interface DepartmentData {
  Id: number;
  vsDepartmentName: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const departmentColumns = (): Column<DepartmentData>[] => [
  {
    Header: "ID",
    accessor: (_row: DepartmentData, rowIndex: number) => rowIndex + 1,
  },
  { Header: "Department Name", accessor: "vsDepartmentName" },
];


export const CrossCandidateColumns = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigate: (path: string) => void
): Column<CandidateData>[] => [
  { Header: "Sl No", accessor: (_row, rowIndex) => rowIndex + 1 },
  {
    Header: "Candidate Name",
    accessor: "vsCandidateName",
    Cell: ({ value }) => <span className="capitalize">{value}</span>,
  },
  {
    Header: "Date Of Birth",
    accessor: "vsDOB",
    Cell: ({ value }: { value: string }) => moment(value).format("DD-MM-YYYY"),
  },
  { Header: "Departments", accessor: "departmentNames" },
];

export const DuplicateCandidateColumns = (
  navigate: (path: string) => void,
  isCrossDepartmentDuplicate: boolean = false
): Column<CandidateData>[] => {
  const columns: Column<CandidateData>[] = [
    { Header: "ID", accessor: (_row, rowIndex) => rowIndex + 1 },
    {
      Header: "Candidate Name",
      accessor: "vsCandidateName",
      Cell: ({ value }) => <span className="capitalize">{value}</span>,
    },
    {
      Header: "Date Of Birth",
      accessor: "vsDOB",
      Cell: ({ value }: { value: string }) =>
        moment(value).format("DD-MM-YYYY"),
    },
    { Header: "Age", accessor: "iAge" },
    { Header: "Gender", accessor: "pklGenderId" },
    { Header: "Mobile", accessor: "vsMobile" },
    { Header: "Qualification", accessor: "pklQualificationId" },
    {
      Header: "Department",
      accessor: "department_names",
      Cell: ({ value }) => {
        return value ? value : "N/A";
      },
    },
  ];
  if (!isCrossDepartmentDuplicate) {
    columns.push({
      Header: "Action",
      accessor: "Action",
      Cell: ({ row }) => {
        const [open, setOpen] = useState(false);

        const handleDelete = () => {
          console.log("Deleting scheme:", row.original);
          setOpen(false);
        };

        return (
          <>
            <button className="text-red-500" onClick={() => setOpen(true)}>
              <Trash2 className="w-5 h-5" />
            </button>

            {/* MUI Confirm Dialog */}
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogContent>
                Are you sure to delete the candidate?
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} color="error">
                  Yes, Delete
                </Button>
              </DialogActions>
            </Dialog>
          </>
        );
      },
    });
  }
  return columns;
};

interface SectorData {
  Id: number;
  vsSectorName: string;
}

export const sectorColumns = (): Column<SectorData>[] => [
  {
    Header: "ID",
    accessor: (_row: SectorData, rowIndex: number) => rowIndex + 1,
  },
  { Header: "Sector Name", accessor: "vsSectorName" },
];
