import { useState } from 'react';

export default function PatientRegistration() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    age: 0,
    phoneNumber: '',
    landlineNumber: '',
    country: 'Kenya',
    passportNumber: '',
    county: 'Juja sub county',
    address: '',
    bloodGroup: '',
    gender: '',
    religion: '',
    maritalStatus: 'Married',
    employerInfo: '',
    previousLastName: '',
    occupation: '',
    email: '',
    race: '',
    kraPin: '',
    dialysisPatient: 'No'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log(formData);
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Patient Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <div className="w-1/3">
            <label className="block text-sm font-semibold">First Name*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Last Name*</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Date Of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Age*</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Phone Number*</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Country*</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Passport Number</label>
            <input
              type="text"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-semibold">County*</label>
            <input
              type="text"
              name="county"
              value={formData.county}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Blood Group</label>
            <input
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Gender*</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">--select--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Religion</label>
            <input
              type="text"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Marital Status</label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </select>
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Employer Info</label>
            <input
              type="text"
              name="employerInfo"
              value={formData.employerInfo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Occupation</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Race</label>
            <input
              type="text"
              name="race"
              value={formData.race}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="w-1/3">
            <label className="block text-sm font-semibold">KRA PIN</label>
            <input
              type="text"
              name="kraPin"
              value={formData.kraPin}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-1/3">
            <label className="block text-sm font-semibold">Dialysis Patient</label>
            <select
              name="dialysisPatient"
              value={formData.dialysisPatient}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
        </div>

        <div className="mt-4 text-center">
          <button type="submit" className="bg-blue-500 text-white p-3 rounded">Submit</button>
        </div>
      </form>
    </div>
  );
}
