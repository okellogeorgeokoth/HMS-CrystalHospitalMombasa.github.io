import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router, Routes, and Route
import Header from './components/header.jsx';
import Layout from './Layout.jsx';  // Assuming Layout contains the Sidebar
import Laboratory from './pages/Laboratory.jsx';
import Pharmacy from './pages/Phamacy.jsx';
import Billing from './pages/Billing.jsx';
import Inventory from './pages/Inventory.jsx';
import QueueManagement from './pages/QueueManagement.jsx';
import Vaccination from './pages/Vaccination.jsx';
import Reports from './pages/Reports.jsx';
import Admin from './pages/Admin.jsx';
import ClinicianNotes from './pages/ClinicianNotes.jsx';
import Triage from './pages/Triage.jsx';
import PatientRegistration from './pages/PatientRegistration.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Layout />
        <Routes>
          <Route path="/patient-registration" element={<PatientRegistration />} />
          <Route path="/triage" element={<Triage />} />
          <Route path="/clinician-notes" element={<ClinicianNotes />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/queue-management" element={<QueueManagement />} />
          <Route path="/vaccination" element={<Vaccination />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/admin" element={<Admin />} />
          {/* Add any additional routes here */}
        </Routes>
      </div>
    </Router>
  );
}
