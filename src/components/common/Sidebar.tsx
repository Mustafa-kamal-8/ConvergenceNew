import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavItems } from "../../utils/NavItems";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";

const Sidebar = ({
  isCollapsed,
  toggleSidebar,
}: {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); 
  const location = useLocation();
  
  const routeTitles: { [key: string]: string } = {
    "/Dashboard": "Dashboard",
    "/Scheme": "Scheme",
    "/SchemeExcel": "SchemeExcel",
  };

  const currentPageTitle = routeTitles[location.pathname] || "Default Title"; 
  console.log("current page is", currentPageTitle);

  const scrollSidebar = (direction: "up" | "down") => {
    if (sidebarRef.current) {
      sidebarRef.current.scrollBy({
        top: direction === "up" ? -100 : 100,
        behavior: "smooth",
      });
    }
  };
  

  const handleMenuClick = (item: typeof NavItems[0]) => {
    if (item.subItems) {
      
      setActiveMenu(activeMenu === item.name ? null : item.name!);
    } else if (item.link) {
      navigate(item.link); 
    }
  };

  const handleSubMenuClick = (subItem: { name?: string; link?: string }) => {
    if (subItem.link) {
      navigate(subItem.link);
    }
  };
  

  useEffect(()=>{
    
console.log(NavItems);


  },[])



  console.log("iscollapsed", isCollapsed);

  return (
    <div
      className={`flex flex-col h-screen bg-gradient-to-br  bg-theme-primary text-white shadow-xl   border-xlg-blue-400 ${isCollapsed ? "w-16" : "w-64"} transition-all duration-300`}
    >
      <div className="flex items-center justify-end">
        <div className="mx-10 font-bold text-center mt-6 text-xl">CONVERGENCE</div>
        <button
          className="flex items-center justify-center p-2 bg-theme-primary-active rounded-full hover:bg-theme-primary-hover"
          onClick={toggleSidebar}
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      <div className="flex justify-end p-2">
        <button
          className="p-1 bg-theme-primary-active rounded-full hover:bg-theme-primary-hover"
          onClick={() => scrollSidebar("up")}
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>

      <div
        ref={sidebarRef}
        className={`${isCollapsed ? '' : 'overflow-y-auto overflow-x-hidden'} relative flex-1 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 border-t border-b border-blue-300`}
      >
        {NavItems.map((item, index) => (
          <div
            key={index}
            className={`relative ${isCollapsed ? 'group' : ''} ${
              activeMenu === item.name && !isCollapsed ? 'bg-theme-primary-active' : ''
            }`}
          >
            {/* Main Menu Item */}
            <div
              className={`flex items-center p-4 cursor-pointer hover:bg-theme-primary-hover ${
                (item.link === location.pathname ||
                  (item.subItems &&
                    item.subItems.some((subItem) => subItem.link === location.pathname))) &&
                "bg-theme-primary-active"
              }`}
              onClick={() => handleMenuClick(item)}
            >
              <item.icon className="w-6 h-6" />
              {!isCollapsed && (
                <span className="ml-4 text-sm font-medium">{item.name} {activeMenu === item.name?'true':'false'}</span>
              )}
              {item.subItems && !isCollapsed && (
                <span className="ml-auto">
                  {activeMenu === item.name ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </span>
              )}
            </div>

            {/* Submenu for Collapsed Sidebar (Hover functionality) */}
            {item.subItems && isCollapsed && (
              <div
                className="absolute left-full top-0 hidden group-hover:block bg-theme-primary shadow-lg z-10"
              >
                {item.subItems.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="p-2 whitespace-nowrap text-sm cursor-pointer hover:bg-theme-primary-hover"
                    onClick={() => handleSubMenuClick(subItem)}
                  >
                    {subItem.name}
                  </div>
                ))}
              </div>
            )}

            {/* Submenu for Expanded Sidebar */}
            {item.subItems && !isCollapsed && activeMenu === item.name && (
              <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-60">
                {item.subItems.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="p-2 pl-14 whitespace-nowrap text-sm cursor-pointer hover:bg-theme-primary-hover"
                    onClick={() => handleSubMenuClick(subItem)}
                  >
                    {subItem.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end p-2">
        <button
          className="p-1 bg-theme-primary-active rounded-full hover:bg-theme-primary-hover"
          onClick={() => scrollSidebar("down")}
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
