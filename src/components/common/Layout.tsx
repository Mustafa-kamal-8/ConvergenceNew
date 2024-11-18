import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="flex overflow-hidden  ">
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <div className=" w-full h-screen overflow-auto ">
      <Header isSidebarCollapsed={isSidebarCollapsed} />
        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
