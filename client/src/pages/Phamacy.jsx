import { useState } from "react";

export default function Pharmacy() {
  const [activeSection, setActiveSection] = useState("AddStock");

  const renderSection = () => {
    switch (activeSection) {
      case "AddStock":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Add Stock</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold">Medicine Name</label>
                <input
                  type="text"
                  placeholder="Enter medicine name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Quantity</label>
                <input
                  type="number"
                  placeholder="Enter quantity"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Expiry Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Supplier</label>
                <input
                  type="text"
                  placeholder="Enter supplier name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Stock
              </button>
            </form>
          </div>
        );

      case "Dispensing":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Dispensing</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold">Patient Name</label>
                <input
                  type="text"
                  placeholder="Enter patient name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Medicine</label>
                <input
                  type="text"
                  placeholder="Enter medicine name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Quantity</label>
                <input
                  type="number"
                  placeholder="Enter quantity"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Dispense
              </button>
            </form>
          </div>
        );

      case "SupplierManagement":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Supplier Management</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold">Supplier Name</label>
                <input
                  type="text"
                  placeholder="Enter supplier name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Contact Details</label>
                <input
                  type="text"
                  placeholder="Enter contact information"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">Address</label>
                <input
                  type="text"
                  placeholder="Enter address"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
              >
                Add Supplier
              </button>
            </form>
          </div>
        );

      case "Inventory":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Inventory Management</h2>
            <div>
              <p>Total Stock: Rs. 259,864.3 (819 Units)</p>
              <p>Near Expiry: -125 Units</p>
              <p>Expired: 0 Units</p>
            </div>
          </div>
        );

      case "Reports":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Reports</h2>
            <p>Generate detailed sales and stock reports by date.</p>
          </div>
        );

      case "Settings":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Settings</h2>
            <p>Configure pharmacy settings, like tax rates and user permissions.</p>
          </div>
        );

      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Pharmacy</h1>
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded ${
            activeSection === "AddStock" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveSection("AddStock")}
        >
          Add Stock
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeSection === "Dispensing" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveSection("Dispensing")}
        >
          Dispensing
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeSection === "SupplierManagement"
              ? "bg-purple-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveSection("SupplierManagement")}
        >
          Supplier Management
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeSection === "Inventory" ? "bg-yellow-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveSection("Inventory")}
        >
          Inventory
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeSection === "Reports" ? "bg-pink-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveSection("Reports")}
        >
          Reports
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeSection === "Settings" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveSection("Settings")}
        >
          Settings
        </button>
      </div>
      <div>{renderSection()}</div>
    </div>
  );
}
