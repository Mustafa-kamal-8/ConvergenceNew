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
    link: "",
    icon: ClipboardList,
    subItems: [
      { name: "Manual", link: "/SchemeForm" },
      { name: "Bulk Upload", link: "/SchemeExcel" },
    ],
  },
  {
    name: "Goals",
    link: "/goals",
    icon: Target,
    subItems: [
      { name: "View Goals", link: "/view-goals" },
      { name: "Add Goals", link: "/add-goals" },
    ],
  },
  {
    name: "Library",
    link: "/library",
    icon: BookOpen,
    subItems: [
      { name: "E-books", link: "/ebooks" },
      { name: "Documents", link: "/documents" },
    ],
  },
  {
    name: "Users",
    link: "/users",
    icon: Users,
    subItems: [
      { name: "Manage Users", link: "/manage-users" },
      { name: "User Roles", link: "/user-roles" },
    ],
  },
  {
    name: "Buildings",
    link: "/buildings",
    icon: Building,
    subItems: [
      { name: "List Buildings", link: "/list-buildings" },
      { name: "Add Building", link: "/add-building" },
    ],
  },
  {
    name: "Layers",
    link: "/layers",
    icon: Layers,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: User,
  },
];
