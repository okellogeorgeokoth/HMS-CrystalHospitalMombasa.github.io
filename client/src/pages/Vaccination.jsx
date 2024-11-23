import { useState } from "react";

export default function Vaccination() {
  const [vaccinations, setVaccinations] = useState([
    { id: 1, vaccineName: "Polio", patientName: "John Doe", date: "2024-11-01" },
    { id: 2, vaccineName: "Measles", patientName: "Jane Smith", date: "2024-11-02" },
    { id: 3, vaccineName: "Hepatitis B", patientName: "Alice Johnson", date: "2024-11-05" },
  ]);
  const [newVaccination, setNewVaccination] = useState({
    vaccineName: "",
    patientName: "",
    date: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Handle adding a new vaccination
  const handleAddVaccination = () => {
    if (newVaccination.vaccineName && newVaccination.patientName && newVaccination.date) {
      setVaccinations([
        ...vaccinations,
        { ...newVaccination, id: vaccinations.length + 1 }, // Simple id assignment
      ]);
      setNewVaccination({ vaccineName: "", patientName: "", date: "" });
    } else {
      alert("Please provide valid details for the vaccination.");
    }
  };

  // Handle editing an existing vaccination
  const handleEditVaccination = (index) => {
    const vaccination = vaccinations[index];
    setNewVaccination(vaccination);
    setEditingIndex(index);
  };

  // Handle updating the vaccination after editing
  const handleUpdateVaccination = () => {
    if (newVaccination.vaccineName && newVaccination.patientName && newVaccination.date) {
      const updatedVaccinations = vaccinations.map((vaccination, index) =>
        index === editingIndex ? { ...vaccination, ...newVaccination } : vaccination
      );
      setVaccinations(updatedVaccinations);
      setNewVaccination({ vaccineName: "", patientName: "", date: "" });
      setEditingIndex(null);
    } else {
      alert("Please provide valid details for the vaccination.");
    }
  };

  // Handle deleting a vaccination
  const handleDeleteVaccination = (index) => {
    const updatedVaccinations = vaccinations.filter((_, i) => i !== index);
    setVaccinations(updatedVaccinations);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to page 1 on new search
  };

  // Filter vaccinations based on search query
  const filteredVaccinations = vaccinations.filter((vaccination) =>
    vaccination.vaccineName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vaccination.patientName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredVaccinations.slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredVaccinations.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Vaccination Management</h1>

      {/* New Vaccination Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold">Vaccine Name</label>
        <input
          type="text"
          value={newVaccination.vaccineName}
          onChange={(e) =>
            setNewVaccination({ ...newVaccination, vaccineName: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold">Patient Name</label>
        <input
          type="text"
          value={newVaccination.patientName}
          onChange={(e) =>
            setNewVaccination({ ...newVaccination, patientName: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold">Date of Vaccination</label>
        <input
          type="date"
          value={newVaccination.date}
          onChange={(e) =>
            setNewVaccination({ ...newVaccination, date: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
      </div>

      <div>
        {editingIndex === null ? (
          <button
            onClick={handleAddVaccination}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Vaccination
          </button>
        ) : (
          <button
            onClick={handleUpdateVaccination}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Update Vaccination
          </button>
        )}
      </div>

      {/* Search Box */}
      <div className="mt-6 mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by vaccine or patient name"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Vaccination Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-center">Vaccine Name</th>
              <th className="px-4 py-2 border-b text-center">Patient Name</th>
              <th className="px-4 py-2 border-b text-center">Date</th>
              <th className="px-4 py-2 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((vaccination, index) => (
              <tr key={vaccination.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b text-center">{vaccination.vaccineName}</td>
                <td className="px-4 py-2 border-b text-center">{vaccination.patientName}</td>
                <td className="px-4 py-2 border-b text-center">{vaccination.date}</td>
                <td className="px-4 py-2 border-b text-center">
                  <button
                    onClick={() => handleEditVaccination(index)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteVaccination(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center space-x-2">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageClick(number)}
            className={`px-4 py-2 border rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
