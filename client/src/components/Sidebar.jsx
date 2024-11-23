import PropTypes from 'prop-types'; // Import PropTypes for validation
import { FaUser, FaHeartbeat, FaNotesMedical, FaFlask, FaPills, FaFileInvoice, FaBox, FaListAlt, FaSyringe, FaFileAlt, FaCog } from 'react-icons/fa'; // Import React Icons
import { Link } from 'react-router-dom'; // Import Link for routing

export default function Sidebar({ isOpen }) {
  return (
    <div
      className={`bg-blue-500 fixed top-0 left-0 h-full transition-all duration-300  ${isOpen ? 'w-[30%]' : 'w-0'}`}
    >
      {/* Only show the sidebar content if the sidebar is open */}
      {isOpen && (
        <>
          <ul className="text-white p-4 space-y-4 mt-24">
            {/* Menu Items with Links and Icons */}
            <li className="flex items-center space-x-4">
              <Link to="/patient-registration" className="flex items-center space-x-2">
                <FaUser />
                <span className="ml-2">Patient Registration</span>
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Link to="/triage" className="flex items-center space-x-2">
                <FaHeartbeat />
                <span className="ml-2">Triage</span>
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Link to="/clinician-notes" className="flex items-center space-x-2">
                <FaNotesMedical />
                <span className="ml-2">Clinician Notes</span>
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Link to="/laboratory" className="flex items-center space-x-2">
                <FaFlask />
                <span className="ml-2">Laboratory</span>
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Link to="/pharmacy" className="flex items-center space-x-2">
                <FaPills />
                <span className="ml-2">Pharmacy</span>
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Link to="/billing" className="flex items-center space-x-2">
                <FaFileInvoice />
                <span className="ml-2">Billing</span>
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Link to="/inventory" className="flex items-center space-x-2">
                <FaBox />
                <span className="ml-2">Inventory</span>
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Link to="/queue-management" className="flex items-center space-x-2">
                <FaListAlt />
                <span className="ml-2">Queue Management</span>
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Link to="/vaccination" className="flex items-center space-x-2">
                <FaSyringe />
                <span className="ml-2">Vaccination</span>
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Link to="/reports" className="flex items-center space-x-2">
                <FaFileAlt />
                <span className="ml-2">Reports</span>
              </Link>
            </li>
            <li className="flex items-center space-x-4 mb-8"> {/* Added margin to create a gap */}
              <Link to="/admin" className="flex items-center space-x-2">
                <FaCog />
                <span className="ml-2">Admin</span>
              </Link>
            </li>
          </ul>
        </>
      )}

      {/* When Sidebar is closed, only show icons with tooltips on hover */}
      {!isOpen && (
        <ul className="text-green-400 p-6 space-y-5 mt-24">
          <li className="relative group">
            <Link to="/patient-registration">
              <FaUser />
            </Link>
            <span className="hidden group-hover:inline-block text-xs text-black">Patient Registration</span>
          </li>
          <li className="relative group">
            <Link to="/triage">
              <FaHeartbeat />
            </Link>
            <span className="hidden group-hover:inline-block text-xs text-black">Triage</span>
          </li>
          <li className="relative group">
            <Link to="/clinician-notes">
              <FaNotesMedical />
            </Link>
            <span className="hidden group-hover:inline-block text-xs text-black">Clinician Notes</span>
          </li>
          <li className="relative group">
            <Link to="/laboratory">
              <FaFlask />
            </Link>
            <span className="hidden group-hover:inline-block text-xs text-black">Laboratory</span>
          </li>
          <li className="relative group">
            <Link to="/pharmacy">
              <FaPills />
            </Link>
            <span className="hidden group-hover:inline-block text-xs text-black">Pharmacy</span>
          </li>
          <li className="relative group">
            <Link to="/billing">
              <FaFileInvoice />
            </Link>
            <span className="hidden group-hover:inline-block text-xs text-black">Billing</span>
          </li>
          <li className="relative group">
            <Link to="/inventory">
              <FaBox />
            </Link>
            <span className="hidden group-hover:inline-block text-xs text-black">Inventory</span>
          </li>
          <li className="relative group">
            <Link to="/queue-management">
              <FaListAlt />
            </Link>
            <span className="hidden group-hover:inline-block text-xs text-black">Queue Management</span>
          </li>
          <li className="relative group">
            <Link to="/vaccination">
              <FaSyringe />
            </Link>
            <span className="hidden group-hover:inline-block text-xs text-black">Vaccination</span>
          </li>
          <li className="relative group">
            <Link to="/reports">
              <FaFileAlt />
            </Link>
            <span className="hidden group-hover:inline-block text-xs text-black">Reports</span>
          </li>
          <li className="relative group">
            <Link to="/admin">
              <FaCog />
            </Link>
            <span className="hidden group-hover:inline-block text-xs text-black">Admin</span>
          </li>
        </ul>
      )}
    </div>
  );
}

// Prop validation
Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Validate that isOpen is a boolean
};
