import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function ClinicianNotes() {
  const [formData, setFormData] = useState({
    clinicalNotes: "",
    diagnosis: "",
    treatmentPlan: "",
    medications: [{ name: "", dosage: "", frequency: "", duration: "" }],
    followUpInstructions: "",
    additionalComments: "",
    nextAppointment: null,
  });

  const [clinicalData, setClinicalData] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMedicationChange = (index, e) => {
    const updatedMedications = [...formData.medications];
    updatedMedications[index][e.target.name] = e.target.value;
    setFormData({ ...formData, medications: updatedMedications });
  };

  const addMedication = () => {
    setFormData({
      ...formData,
      medications: [...formData.medications, { name: "", dosage: "", frequency: "", duration: "" }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add clinical notes data to table
    setClinicalData([...clinicalData, { ...formData, id: clinicalData.length + 1 }]);

    // Schedule the next appointment if provided
    if (formData.nextAppointment) {
      setAppointments([
        ...appointments,
        { title: "Follow-Up Appointment", start: new Date(formData.nextAppointment), end: new Date(formData.nextAppointment) },
      ]);
    }

    // Reset form
    setFormData({
      clinicalNotes: "",
      diagnosis: "",
      treatmentPlan: "",
      medications: [{ name: "", dosage: "", frequency: "", duration: "" }],
      followUpInstructions: "",
      additionalComments: "",
      nextAppointment: null,
    });
  };

  const handleEdit = (id) => {
    const record = clinicalData.find((data) => data.id === id);
    setFormData(record);
    setClinicalData(clinicalData.filter((data) => data.id !== id));
  };

  const handleDelete = (id) => {
    setClinicalData(clinicalData.filter((data) => data.id !== id));
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Clinician Notes and Treatment</h1>
      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Clinical Notes */}
        <div>
          <label className="block text-sm font-semibold">Clinical Notes</label>
          <textarea
            name="clinicalNotes"
            value={formData.clinicalNotes}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter clinical observations and findings."
          />
        </div>

        {/* Diagnosis */}
        <div>
          <label className="block text-sm font-semibold">Diagnosis</label>
          <textarea
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter the patient's diagnosis."
          />
        </div>

        {/* Treatment Plan */}
        <div>
          <label className="block text-sm font-semibold">Treatment Plan</label>
          <textarea
            name="treatmentPlan"
            value={formData.treatmentPlan}
            onChange={handleChange}
            rows="3"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Describe the treatment plan."
          />
        </div>

        {/* Medications */}
        <div>
          <label className="block text-sm font-semibold">Medications</label>
          {formData.medications.map((medication, index) => (
            <div key={index} className="space-y-2 mb-4 border p-4 rounded bg-gray-50">
              <input
                type="text"
                name="name"
                value={medication.name}
                onChange={(e) => handleMedicationChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Medication Name"
              />
              <input
                type="text"
                name="dosage"
                value={medication.dosage}
                onChange={(e) => handleMedicationChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Dosage"
              />
              <input
                type="text"
                name="frequency"
                value={medication.frequency}
                onChange={(e) => handleMedicationChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Frequency"
              />
              <input
                type="text"
                name="duration"
                value={medication.duration}
                onChange={(e) => handleMedicationChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Duration"
              />
            </div>
          ))}
          <button type="button" onClick={addMedication} className="text-blue-500 text-sm underline">
            + Add Medication
          </button>
        </div>

        {/* Next Appointment */}
        <div>
          <label className="block text-sm font-semibold">Next Appointment</label>
          <input
            type="datetime-local"
            name="nextAppointment"
            value={formData.nextAppointment || ""}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Submit */}
        <button type="submit" className="bg-blue-500 text-white p-3 rounded">
          Submit Notes
        </button>
      </form>

      {/* Clinical Notes Table */}
      <h2 className="text-xl font-bold">Clinical Notes History</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Clinical Notes</th>
            <th className="p-2 border">Diagnosis</th>
            <th className="p-2 border">Treatment Plan</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clinicalData.map((data) => (
            <tr key={data.id}>
              <td className="p-2 border">{data.id}</td>
              <td className="p-2 border">{data.clinicalNotes}</td>
              <td className="p-2 border">{data.diagnosis}</td>
              <td className="p-2 border">{data.treatmentPlan}</td>
              <td className="p-2 border">
                <button onClick={() => handleEdit(data.id)} className="text-blue-500 mr-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(data.id)} className="text-red-500">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Calendar */}
      <h2 className="text-xl font-bold mt-6">Appointments Calendar</h2>
      <Calendar
        localizer={localizer}
        events={appointments}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectEvent={(event) => alert(`Appointment: ${event.title}`)}
      />
    </div>
  );
}
