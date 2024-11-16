
import Sidebar from './Sidebar'
import Header from './Header'
import { useState } from 'react';

const Layout = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    };
  
    return (
      <div className="flex-1">
        
        <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
        <Header isSidebarCollapsed={isSidebarCollapsed} />
       
         
        
        
      </div>
    );
  };

export default Layout
