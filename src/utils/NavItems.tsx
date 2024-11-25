import {
  Home,

  Target,

  Table2, Book, Building2, User2, Users2, Group, FileSignature, Spline, Receipt,Settings2


} from "lucide-react";

interface NavSubItems {
  name?: string;
  link?: string;
}

interface NavItem {
  name?: string;
  link?: string;
  icon?: any ; // Ensure this matches LucideIcon type
  subItems?: NavSubItems[];
}

export const NavItems: NavItem[] = [
  {
    name: "Dashboard",
    link: "/Dashboard",
    icon: Home,
  },
  {
    name: "Schemes",
    link: "/Scheme",
    icon: Table2,
    // subItems: [
    //   { name: "Manual", link: "/SchemeForm" },
    //   { name: "Bulk Upload", link: "/SchemeExcel" },
    // ],
  },
  {
    name: "Target",
    link: "/Target",
    icon: Target,
    // subItems: [
    //   { name: "View Goals", link: "/view-goals" },
    //   { name: "Add Goals", link: "/add-goals" },
    // ],
  },
  {
    name: "Courses",
    link: "/Course",
    icon: Book,
    // subItems: [
    //   { name: "E-books", link: "/ebooks" },
    //   { name: "Documents", link: "/documents" },
    // ],
  },
  {
    name: "Partners & Centeres",
    link: "/TrainingPartner",
    icon: Building2,
    // subItems: [
    //   { name: "Manage Users", link: "/manage-users" },
    //   { name: "User Roles", link: "/user-roles" },
    // ],
  },
  {
    name: "Batches",
    link: "/Batch",
    icon: Group,
    // subItems: [
    //   { name: "Manage Users", link: "/manage-users" },
    //   { name: "User Roles", link: "/user-roles" },
    // ],
  },
  {
    name: "Cnadidates",
    link: "/Cnadidates",
    icon: User2,
    // subItems: [
    //   { name: "Manage Users", link: "/manage-users" },
    //   { name: "User Roles", link: "/user-roles" },
    // ],
  },
  {
    name: "Users",
    link: "",
    icon: Users2,
    subItems: [
      { name: "Trainers", link: "/list-buildings" },
      { name: "Assessors", link: "/add-building" },
      // { name: "Others", link: "/add-building" },
    ],
  },
  {
    name: "Assessment",
    link: "/users",
    icon: FileSignature,
    // subItems: [
    //   { name: "Manage Users", link: "/manage-users" },
    //   { name: "User Roles", link: "/user-roles" },
    // ],
  },
  {
    name: "Placement",
    link: "/users",
    icon: Spline,
    // subItems: [
    //   { name: "Manage Users", link: "/manage-users" },
    //   { name: "User Roles", link: "/user-roles" },
    // ],
  },
  {
    name: "Masters",
    link: "",
    icon: Settings2,
    subItems: [
      { name: "Departments", link: "/list-buildings" },
      { name: "Sectors", link: "/add-building" },
      { name: "States & Districts", link: "/add-building" },
     
    ],
  },
 
  {
    name: "Reports",
    link: "",
    icon: Receipt,
    subItems: [
      { name: "Invoice", link: "/list-buildings" },
      { name: "Overall Report", link: "/add-building" },
     
    ],
  },
 
 
];
