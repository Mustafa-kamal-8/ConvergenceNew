import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavItems } from "../../utils/NavItems";
import { ChevronDown, ChevronUp } from "lucide-react";
import logo from "../../assets/asdm_logo_w.png";
import '../../custom.css'

const Sidebar = ({
  isCollapsed,
  toggleSidebar,
}: {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [subMenuPosition, setSubMenuPosition] = useState<{ top: number; left: number } | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]); // Ref array for menu items
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

  const handleMenuClick = (item: typeof NavItems[0], index: number) => {
    if (item.subItems) {
      setActiveMenu(activeMenu === item.name ? null : item.name);
      // calculateSubMenuPosition(index); // Recalculate position when menu is clicked
    } else if (item.link) {
      navigate(item.link);
    }
  };

  const handleSubMenuClick = (subItem: { name?: string; link?: string }) => {
    if (subItem.link) {
      navigate(subItem.link);
    }
  };

  const calculateSubMenuPosition = (index: number) => {
    // Check if the menuRef for the current item is available
    if (menuRefs.current[index]) {
      const { top, left } = menuRefs.current[index]!.getBoundingClientRect();
      setSubMenuPosition({
        top: top + window.scrollY, // Position at the top of the parent item
        left: left + window.scrollX + (isCollapsed ? 60 : 0) , // Adjusting left for submenu
      });
    }
  };



  // useEffect(() => {
  //   if (subMenuPosition && isCollapsed) {
  //     // This ensures that the submenu position is recalculated whenever `isCollapsed` changes
  //     setSubMenuPosition({
  //       top: subMenuPosition.top,
  //       left: subMenuPosition.left + (isCollapsed ? 64 : 0), // Adjust position based on collapsed state
  //     });
  //   }
  // }, [isCollapsed, subMenuPosition]); // Recalculate when collapsed state or submenu position changes


  useEffect(() => {
    const activeItem = NavItems.find(
      (item) =>
        item.subItems &&
        item.subItems.some((subItem) => subItem.link === location.pathname)
    );

    if (activeItem) {
      setActiveMenu(activeItem.name!);
    } else {
      setActiveMenu(null);
    }
  }, [location.pathname]);

  console.log("iscollapsed", isCollapsed);
  console.log("sub menu pos", subMenuPosition);


  return (
    <div
      className={ `flex flex-col h-screen bg-gradient-to-br bg-theme-primary text-white shadow-xl border-xlg-blue-400 ${isCollapsed ? "w-20" : "w-64"} transition-all duration-300` }
    >
      <div className="flex items-center justify flex-shrink-0 py-3 px-2">
        <img className="h-10 w-10 flex-shrink-0" src={ logo } alt="" />
      </div>

      <div
        ref={ sidebarRef }
        className="relative flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 border-t border-b border-blue-300"
      >
        { NavItems.map((item, index) => (
          <div key={ index } className={ `relative ${isCollapsed ? "group" : ""}` }>
            {/* Main Menu Item */ }
            <div
              ref={ (el) => (menuRefs.current[index] = el) } // Assigning the ref
              onMouseEnter={ () => calculateSubMenuPosition(index) }
              className={ `flex items-center p-4 cursor-pointer hover:bg-theme-primary-hover ${(
                item.link === location.pathname ||
                (item.subItems && item.subItems.some((subItem) => subItem.link === location.pathname))
              ) && "bg-theme-primary-active"}` }
              onClick={ () => handleMenuClick(item, index) } // Pass index to calculate position
            >
              <div className="h-6 w-6 overflow-hidden">
              <item.icon className="w-6 h-6" />
              </div>
              { !isCollapsed && <span className="ml-4 text-sm font-medium">{ item.name }</span> }
              { item.subItems && !isCollapsed && (
                <span className="ml-auto">
                  { activeMenu === item.name ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  ) }
                </span>
              ) }
            </div>

            { item.subItems && isCollapsed && (
              <div
                style={
                  subMenuPosition
                    ? {
                      top: `${subMenuPosition.top}px`, // Dynamically calculated top
                      left: `${subMenuPosition.left}px`, // Adjusted left for submenu
                    }
                    : {}
                }
                className="fixed hidden group-hover:block bg-theme-primary shadow-lg z-10"
              >
                { item.subItems.map((subItem, subIndex) => (
                  <div
                    key={ subIndex }
                    className="p-2 whitespace-nowrap text-sm cursor-pointer hover:bg-theme-primary-hover"
                    onClick={ () => handleSubMenuClick(subItem) }
                  >
                    { subItem.name }
                  </div>
                )) }
              </div>
            ) }


            {/* Sub-Menu for Expanded Sidebar */ }
            { item.subItems && !isCollapsed && activeMenu === item.name && (
              <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-60">
                { item.subItems.map((subItem, subIndex) => (
                  <div
                    key={ subIndex }
                    className="p-2 pl-14 whitespace-nowrap text-sm cursor-pointer hover:bg-theme-primary-hover"
                    onClick={ () => handleSubMenuClick(subItem) }
                  >
                    { subItem.name }
                  </div>
                )) }
              </div>
            ) }
          </div>
        )) }
      </div>

      <div className="flex justify-end p-2">
        <button
          className="p-1 bg-theme-primary-active rounded-full hover:bg-theme-primary-hover"
          onClick={ () => scrollSidebar("down") }
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
