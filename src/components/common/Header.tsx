import logo from "../../assets/ASDMLOGO.png";
const Header = ({ isSidebarCollapsed }: { isSidebarCollapsed: boolean }) => {
  return (
    <div
      className={`bg-white  transition-all duration-300 w-full border ${
        isSidebarCollapsed ? "" : ""
      }`}
    >
      <div className="">
        <div className="font-bold text-white text-lg flex ">
          <img className="h-24 w-28" src={logo} alt="" />
          <div className=" flex flex-col">
          <span className=" text-blue-600 font-bold justify-center mt-2 text-lg">
            ASSAM SKILL DEVELOPMENT MISSION
          </span>
      
          <span className=" text-gray-700 justify-center text-sm">
            GOVERNMENT OF ASSAM
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
