import PropTypes from 'prop-types'; // Import PropTypes
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa'; // Importing the icons for open/close menu and search

export default function Header({ toggleSidebar, isSidebarOpen }) {
  return (
    <header className="bg-blue-600 fixed top-0 left-0 w-full p-2 z-50 shadow-lg m-0">
      <div className="flex justify-between items-center container mx-auto">
        {/* Left Section (Sidebar Toggle Button + Title) */}
        <div className="flex items-center space-x-2 p-2 text-center">
          {/* Toggle Button before Title */}
          <button
            onClick={toggleSidebar}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          <h1 className="text-white font-bold text-xl">Crystal Hospital Mombasa</h1>
        </div>

        {/* Center Section (Search Bar) */}
        <div className="flex items-center w-full max-w-xs mx-2">
          <input
            type="text"
            placeholder="Search for a patient..."
            className="w-full p-2 rounded-l-full text-sm border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white p-2 rounded-r-full">
            <FaSearch size={18} />
          </button>
        </div>

        {/* Right Section (Buttons) */}
        <div className="flex space-x-2">
          <button className="bg-green-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300 text-sm">
            Patients: 120
          </button>
          <button className="bg-yellow-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 text-sm">
            Queue: 15
          </button>
          <button className="bg-blue-700 text-white py-1 px-3 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 text-sm">
            Active Patients: 60
          </button>
        </div>
      </div>
    </header>
  );
}

// Prop validation
Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired, // Validate that toggleSidebar is a function
  isSidebarOpen: PropTypes.bool.isRequired, // Validate that isSidebarOpen is a boolean
};
