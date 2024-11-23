import { useState } from 'react';
import Sidebar from './components/sidebar.jsx';
import Header from './components/header.jsx';
import MainContent from './components/maincontent.jsx';
 // Import your Header component

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative h-screen">
      {/* Header with Sidebar Toggle Button */}
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <MainContent isSidebarOpen={isSidebarOpen} />
    </div>
  );
}
