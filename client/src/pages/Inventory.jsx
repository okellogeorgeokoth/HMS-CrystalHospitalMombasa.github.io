import { useState } from "react";

export default function Inventory() {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Aspirin", quantity: 50, price: 200 },
    { id: 2, name: "Paracetamol", quantity: 100, price: 150 },
    { id: 3, name: "Cough Syrup", quantity: 200, price: 300 },
    { id: 4, name: "Bandages", quantity: 150, price: 50 },
    { id: 5, name: "Syringes", quantity: 500, price: 20 },
    { id: 6, name: "Gloves", quantity: 100, price: 80 },
    { id: 7, name: "Masks", quantity: 300, price: 50 },
    { id: 8, name: "Disinfectant", quantity: 50, price: 150 },
  ]);
  const [newItem, setNewItem] = useState({ name: "", quantity: 0, price: 0 });
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Handle adding a new item to the inventory
  const handleAddItem = () => {
    if (newItem.name && newItem.quantity > 0 && newItem.price > 0) {
      setInventory([
        ...inventory,
        { ...newItem, id: inventory.length + 1 }, // Simple id assignment
      ]);
      setNewItem({ name: "", quantity: 0, price: 0 });
    } else {
      alert("Please provide valid details for the item.");
    }
  };

  // Handle editing an existing item
  const handleEditItem = (index) => {
    const item = inventory[index];
    setNewItem(item);
    setEditingIndex(index);
  };

  // Handle updating the item after editing
  const handleUpdateItem = () => {
    if (newItem.name && newItem.quantity > 0 && newItem.price > 0) {
      const updatedInventory = inventory.map((item, index) =>
        index === editingIndex ? { ...item, ...newItem } : item
      );
      setInventory(updatedInventory);
      setNewItem({ name: "", quantity: 0, price: 0 });
      setEditingIndex(null);
    } else {
      alert("Please provide valid details for the item.");
    }
  };

  // Handle deleting an item
  const handleDeleteItem = (index) => {
    const updatedInventory = inventory.filter((_, i) => i !== index);
    setInventory(updatedInventory);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to page 1 on new search
  };

  // Filter items based on search query
  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredInventory.slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredInventory.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>

      {/* New Item Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold">Item Name</label>
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold">Quantity</label>
        <input
          type="number"
          value={newItem.quantity}
          onChange={(e) =>
            setNewItem({ ...newItem, quantity: parseInt(e.target.value) })
          }
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold">Price</label>
        <input
          type="number"
          value={newItem.price}
          onChange={(e) =>
            setNewItem({ ...newItem, price: parseFloat(e.target.value) })
          }
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
      </div>

      <div>
        {editingIndex === null ? (
          <button
            onClick={handleAddItem}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Item
          </button>
        ) : (
          <button
            onClick={handleUpdateItem}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Update Item
          </button>
        )}
      </div>

      {/* Search Box */}
      <div className="mt-6 mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by item name"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Inventory Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-center">Item Name</th>
              <th className="px-4 py-2 border-b text-center">Quantity</th>
              <th className="px-4 py-2 border-b text-center">Price</th>
              <th className="px-4 py-2 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b text-center">{item.name}</td>
                <td className="px-4 py-2 border-b text-center">{item.quantity}</td>
                <td className="px-4 py-2 border-b text-center">{item.price}</td>
                <td className="px-4 py-2 border-b text-center">
                  <button
                    onClick={() => handleEditItem(index)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteItem(index)}
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
