import logo from "../../assets/Untitled.jpg";
const Header = ({ isSidebarCollapsed }: { isSidebarCollapsed: boolean }) => {
  return (
    <div
      className={`bg-white shadow-xl transition-all duration-300 w-full fixed top-0  ${
        isSidebarCollapsed ? "ml-20" : "ml-64"
      }`}
    >
      <div className="p-4">
        <div className="font-bold text-white text-lg flex ">
          <img className="h-16 w-16" src={logo} alt="" />
          <span className="ml-4 text-blue-600 font-bold">
            ASSAM SKILL DEVELOPMENT MISSION
          </span>
        </div>
      
      </div>
     
    </div>
  );
};

export default Header;
