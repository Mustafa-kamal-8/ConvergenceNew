import {
  Home,
  ClipboardList,
  Target,
  BookOpen,
  Users,
  Building,
  Layers,
  User,

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
    name: "Scheme",
    link: "/Scheme",
    icon: ClipboardList,
    // subItems: [
    //   { name: "Manual", link: "/SchemeForm" },
    //   { name: "Bulk Upload", link: "/SchemeExcel" },
    // ],
  },
  {
    name: "Courses",
    link: "/goals",
    icon: Target,
    // subItems: [
    //   { name: "View Goals", link: "/view-goals" },
    //   { name: "Add Goals", link: "/add-goals" },
    // ],
  },
  {
    name: "Training Partners",
    link: "/library",
    icon: BookOpen,
    // subItems: [
    //   { name: "E-books", link: "/ebooks" },
    //   { name: "Documents", link: "/documents" },
    // ],
  },
  {
    name: "Training Centeres",
    link: "/users",
    icon: Users,
    // subItems: [
    //   { name: "Manage Users", link: "/manage-users" },
    //   { name: "User Roles", link: "/user-roles" },
    // ],
  },
  {
    name: "Batches",
    link: "/users",
    icon: Users,
    // subItems: [
    //   { name: "Manage Users", link: "/manage-users" },
    //   { name: "User Roles", link: "/user-roles" },
    // ],
  },
  {
    name: "Candidates",
    link: "/users",
    icon: Users,
    // subItems: [
    //   { name: "Manage Users", link: "/manage-users" },
    //   { name: "User Roles", link: "/user-roles" },
    // ],
  },
  {
    name: "Assessment",
    link: "/users",
    icon: Users,
    // subItems: [
    //   { name: "Manage Users", link: "/manage-users" },
    //   { name: "User Roles", link: "/user-roles" },
    // ],
  },
  {
    name: "Placement",
    link: "/users",
    icon: Users,
    // subItems: [
    //   { name: "Manage Users", link: "/manage-users" },
    //   { name: "User Roles", link: "/user-roles" },
    // ],
  },
  {
    name: "Users",
    link: "/buildings",
    icon: Building,
    subItems: [
      { name: "Trainers", link: "/list-buildings" },
      { name: "Assessors", link: "/add-building" },
      { name: "Others", link: "/add-building" },
    ],
  },
  {
    name: "Masters",
    link: "/buildings",
    icon: Building,
    subItems: [
      { name: "Sectors", link: "/list-buildings" },
      { name: "Departments", link: "/add-building" },
      // { name: "Others", link: "/add-building" },
    ],
  },
  {
    name: "Reports",
    link: "/buildings",
    icon: Building,
    subItems: [
      { name: "Invoice", link: "/list-buildings" },
      { name: "Overall Report", link: "/add-building" },
     
    ],
  },
];
