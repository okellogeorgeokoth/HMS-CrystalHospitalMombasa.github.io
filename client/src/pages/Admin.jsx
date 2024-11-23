import { useState } from "react";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "User", // Default role
    otherRole: "", // For the 'Other' role
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [emailError, setEmailError] = useState("");

  // Validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Checks for @ and valid domain
    return emailRegex.test(email);
  };

  // Handle adding a new user
  const handleAddUser = () => {
    if (!validateEmail(newUser.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (newUser.username && newUser.email && newUser.password) {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
      setNewUser({
        username: "",
        email: "",
        password: "",
        role: "User",
        otherRole: "",
      }); // Reset form
      setEmailError(""); // Clear error
    } else {
      alert("Please provide valid details for the user.");
    }
  };

  // Handle editing an existing user's role
  const handleEditUser = (index) => {
    const user = users[index];
    setNewUser(user);
    setEditingIndex(index);
  };

  // Handle updating a user's information
  const handleUpdateUser = () => {
    if (!validateEmail(newUser.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (newUser.username && newUser.email && newUser.password) {
      const updatedUsers = users.map((user, index) =>
        index === editingIndex ? { ...user, ...newUser } : user
      );
      setUsers(updatedUsers);
      setNewUser({
        username: "",
        email: "",
        password: "",
        role: "User",
        otherRole: "",
      });
      setEditingIndex(null);
      setEmailError(""); // Clear error
    } else {
      alert("Please provide valid details for the user.");
    }
  };

  // Handle deleting a user
  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {/* New User Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold">Username</label>
        <input
          type="text"
          value={newUser.username}
          onChange={(e) =>
            setNewUser({ ...newUser, username: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold">Email</label>
        <input
          type="email"
          value={newUser.email}
          onChange={(e) =>
            setNewUser({ ...newUser, email: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold">Password</label>
        <input
          type="password"
          value={newUser.password}
          onChange={(e) =>
            setNewUser({ ...newUser, password: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold">Role</label>
        <select
          value={newUser.role}
          onChange={(e) =>
            setNewUser({ ...newUser, role: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded mb-2"
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Receptionist">Receptionist</option>
          <option value="Nurse">Nurse</option>
          <option value="Clinical Officer">Clinical Officer</option>
          <option value="Dentist">Dentist</option>
          <option value="Other">Other - Specify</option>
        </select>
      </div>

      {newUser.role === "Other" && (
        <div className="mb-6">
          <label className="block text-sm font-semibold">Specify Role</label>
          <input
            type="text"
            value={newUser.otherRole}
            onChange={(e) =>
              setNewUser({ ...newUser, otherRole: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
        </div>
      )}

      <div>
        {editingIndex === null ? (
          <button
            onClick={handleAddUser}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add User
          </button>
        ) : (
          <button
            onClick={handleUpdateUser}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Update User
          </button>
        )}
      </div>

      {/* User Table */}
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-center">Username</th>
              <th className="px-4 py-2 border-b text-center">Email</th>
              <th className="px-4 py-2 border-b text-center">Role</th>
              <th className="px-4 py-2 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b text-center">
                  {user.username}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {user.email}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {user.role === "Other" ? user.otherRole : user.role}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  <button
                    onClick={() => handleEditUser(index)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(index)}
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
    </div>
  );
}
