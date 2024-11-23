import { useState } from 'react';

export default function ClinicalTriage() {
  const [formData, setFormData] = useState({
    temperature: '',
    heartRate: '',
    bloodPressure: '',
    respiratoryRate: '',
    oxygenSaturation: '',
    symptoms: '',
    medicalHistory: '',
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
    console.log('Triage Data:', formData);
    // Add logic to handle form submission (e.g., API call)
  };

  const inputFields = [
    { label: 'Temperature (°C)', name: 'temperature', type: 'number' },
    { label: 'Heart Rate (bpm)', name: 'heartRate', type: 'number' },
    { label: 'Blood Pressure (mmHg)', name: 'bloodPressure', type: 'text', placeholder: 'e.g., 120/80' },
    { label: 'Respiratory Rate (breaths/min)', name: 'respiratoryRate', type: 'number' },
    { label: 'Oxygen Saturation (%)', name: 'oxygenSaturation', type: 'number' },
  ];

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Clinical Triage</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Dynamic Input Fields */}
        {inputFields.map(({ label, name, type, placeholder }) => (
          <div key={name}>
            <label htmlFor={name} className="block text-sm font-semibold">
              {label}
            </label>
            <input
              id={name}
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder={placeholder || ''}
            />
          </div>
        ))}

        {/* Symptoms Input */}
        <div>
          <label htmlFor="symptoms" className="block text-sm font-semibold">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="List any symptoms the patient is experiencing."
          />
        </div>

        {/* Medical History Input */}
        <div>
          <label htmlFor="medicalHistory" className="block text-sm font-semibold">
            Medical History
          </label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Provide any relevant medical history."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none"
          >
            Submit Triage
          </button>
        </div>
      </form>
    </div>
  );
}
