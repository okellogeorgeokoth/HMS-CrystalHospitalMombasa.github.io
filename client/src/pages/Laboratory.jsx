import { useState } from 'react';

export default function Laboratory() {
  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    testType: '',
    testDate: '',
    testResult: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Laboratory Test Data:', formData);
    // Handle form submission logic (e.g., send to API or save to database)
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Laboratory</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Patient Name */}
        <div>
          <label htmlFor="patientName" className="block text-sm font-semibold">
            Patient Name
          </label>
          <input
            id="patientName"
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter patient name"
          />
        </div>

        {/* Patient ID */}
        <div>
          <label htmlFor="patientId" className="block text-sm font-semibold">
            Patient ID
          </label>
          <input
            id="patientId"
            type="text"
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter patient ID"
          />
        </div>

        {/* Test Type */}
        <div>
          <label htmlFor="testType" className="block text-sm font-semibold">
            Test Type
          </label>
          <input
            id="testType"
            type="text"
            name="testType"
            value={formData.testType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter the type of test (e.g., Blood, X-ray)"
          />
        </div>

        {/* Test Date */}
        <div>
          <label htmlFor="testDate" className="block text-sm font-semibold">
            Test Date
          </label>
          <input
            id="testDate"
            type="date"
            name="testDate"
            value={formData.testDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Test Result */}
        <div>
          <label htmlFor="testResult" className="block text-sm font-semibold">
            Test Result
          </label>
          <textarea
            id="testResult"
            name="testResult"
            value={formData.testResult}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter test results"
          />
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="additionalNotes" className="block text-sm font-semibold">
            Additional Notes
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter any additional notes or observations"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none"
          >
            Submit Laboratory Data
          </button>
        </div>
      </form>
    </div>
  );
}
