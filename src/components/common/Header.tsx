import { Menu, Bell } from "lucide-react";
import logo from "../../assets/ASDMLOGO.png";

const Header = ({
  isSidebarCollapsed,
  toggleSidebar,
  isSysAdmin,
}: {
  isSidebarCollapsed: boolean;
  toggleSidebar: React.MouseEventHandler<HTMLButtonElement>;
  isSysAdmin?: boolean;
}) => {
  return (
    <div
    className={`bg-white transition-all duration-300 w-full border ${
      isSidebarCollapsed ? "" : ""
    } sticky top-0 z-50`}
  >
      <div className="flex items-center justify-between p-4 sticky">
        <div className="flex-grow flex gap-4 items-center">
          {isSysAdmin ? (
            <img src={logo} className="w-16 h-16" />
          ) : (
            <>
              <button onClick={toggleSidebar}>
                <Menu />
              </button>
              <div>
                <input placeholder="search" />
              </div>
            </>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button>
            <Bell />
          </button>
          <img
            className="rounded-full w-8 h-8 object-center object-cover"
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        {/* <div className="font-bold text-white text-lg flex ">
       
          <img className="h-24 w-28" src={logo} alt="" />
          <div className=" flex flex-col">
        
          <span className=" text-blue-600 font-bold justify-center mt-2 text-lg">
            ASSAM SKILL DEVELOPMENT MISSION
          </span>
      
          <span className=" text-gray-700 justify-center text-sm">
            GOVERNMENT OF ASSAM
          </span>
          </div> */}
      </div>
    </div>
  );
};

export default Header;
