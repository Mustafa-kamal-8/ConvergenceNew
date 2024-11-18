import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div
      className={`flex flex-col h-screen bg-gradient-to-br from-blue-600 via-blue-600 to-blue-500 text-white shadow-xl   border-xlg-blue-400 ${
        isCollapsed ? "w-16  " : "w-64"
      } transition-all duration-300`}
    >
  
      <div className="flex items-center justify-end">
        <div className="mx-10 font-bold text-center mt-6 text-xl">CONVERGENCE</div>
        <button
          className="flex items-center justify-center p-2 bg-blue-500 rounded-full hover:bg-blue-700"
          onClick={toggleSidebar}
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      <div className="flex justify-end p-2">
        <button
          className="p-1 bg-blue-500 rounded-full hover:bg-blue-700"
          onClick={() => scrollSidebar("up")}
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>

      <div
        ref={sidebarRef}
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 border-t border-b border-blue-300"
      >
        {NavItems.map((item, index) => (
          <div key={index}>
            <div
              className={`flex items-center p-4 cursor-pointer hover:bg-blue-700 ${
                activeMenu === item.name ? "bg-blue-700" : ""
              }`}
              onClick={() => handleMenuClick(item)}
            >
              <item.icon className="w-6 h-6" />
              {!isCollapsed && (
                <span className="ml-4 text-sm font-medium">{item.name}</span>
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

      
            {item.subItems && activeMenu === item.name && (
              <div className="ml-8">
                {item.subItems.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="p-2 pl-6 text-sm cursor-pointer hover:bg-blue-700"
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
          className="p-1 bg-blue-500 rounded-full hover:bg-blue-700"
          onClick={() => scrollSidebar("down")}
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
