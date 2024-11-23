import { useState } from "react";

export default function Billing() {
  const [formData, setFormData] = useState({
    patientName: "",
    services: [],
    medications: [],
    totalAmount: 0,
    amountPaid: 0,
    balanceDue: 0,
    paymentMethod: "Cash",
  });

  const [services, setServices] = useState([
    { id: 1, name: "Consultation", price: 500 },
    { id: 2, name: "Laboratory Test", price: 200 },
    { id: 3, name: "X-Ray", price: 1000 },
  ]);

  const [medications, setMedications] = useState([
    { id: 1, name: "Aspirin", price: 50 },
    { id: 2, name: "Paracetamol", price: 100 },
  ]);

  const handleServiceChange = (e) => {
    const selectedService = services.find(
      (service) => service.id === parseInt(e.target.value)
    );
    if (e.target.checked) {
      setFormData({
        ...formData,
        services: [...formData.services, selectedService],
      });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter(
          (service) => service.id !== selectedService.id
        ),
      });
    }
  };

  const handleMedicationChange = (e) => {
    const selectedMedication = medications.find(
      (medication) => medication.id === parseInt(e.target.value)
    );
    if (e.target.checked) {
      setFormData({
        ...formData,
        medications: [...formData.medications, selectedMedication],
      });
    } else {
      setFormData({
        ...formData,
        medications: formData.medications.filter(
          (medication) => medication.id !== selectedMedication.id
        ),
      });
    }
  };

  const handlePaymentChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      balanceDue: formData.totalAmount - e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Billing Information Submitted");
    setFormData({
      patientName: "",
      services: [],
      medications: [],
      totalAmount: 0,
      amountPaid: 0,
      balanceDue: 0,
      paymentMethod: "Cash",
    });
  };

  const calculateTotal = () => {
    const servicesTotal = formData.services.reduce(
      (total, service) => total + service.price,
      0
    );
    const medicationsTotal = formData.medications.reduce(
      (total, medication) => total + medication.price,
      0
    );
    const total = servicesTotal + medicationsTotal;
    setFormData({
      ...formData,
      totalAmount: total,
      balanceDue: total - formData.amountPaid,
    });
  };

  const printInvoice = () => {
    const printContent = document.getElementById("invoice");
    const printWindow = window.open("", "_blank", "width=800,height=600");
    printWindow.document.write("<html><head><title>Invoice</title></head><body>");
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Patient Billing</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Patient Information */}
        <div>
          <label className="block text-sm font-semibold">Patient Name</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Services Section */}
        <div>
          <label className="block text-sm font-semibold">Select Services</label>
          {services.map((service) => (
            <div key={service.id}>
              <input
                type="checkbox"
                value={service.id}
                onChange={handleServiceChange}
                className="mr-2"
              />
              <label className="text-sm">{service.name} - Ksh. {service.price}</label>
            </div>
          ))}
        </div>

        {/* Medications Section */}
        <div>
          <label className="block text-sm font-semibold">Select Medications</label>
          {medications.map((medication) => (
            <div key={medication.id}>
              <input
                type="checkbox"
                value={medication.id}
                onChange={handleMedicationChange}
                className="mr-2"
              />
              <label className="text-sm">{medication.name} - Ksh. {medication.price}</label>
            </div>
          ))}
        </div>

        {/* Total and Payment Information */}
        <div>
          <label className="block text-sm font-semibold">Total Amount</label>
          <input
            type="number"
            name="totalAmount"
            value={formData.totalAmount}
            readOnly
            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Amount Paid</label>
          <input
            type="number"
            name="amountPaid"
            value={formData.amountPaid}
            onChange={handlePaymentChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Balance Due</label>
          <input
            type="number"
            name="balanceDue"
            value={formData.balanceDue}
            readOnly
            className="w-full p-2 border border-gray-300 rounded bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handlePaymentChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Cash">Cash</option>
            <option value="Credit">M-pesa</option>
            <option value="Insurance">Insurance</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Generate Invoice
        </button>
      </form>

      {/* Invoice Display */}
      {formData.totalAmount > 0 && (
        <div
          id="invoice"
          className="mt-6 p-4 border border-gray-300 rounded bg-gray-50"
        >
          <h3 className="text-lg font-bold mb-2">Invoice</h3>
          <p><strong>Patient Name:</strong> {formData.patientName}</p>
          <p><strong>Total Amount:</strong> Rs. {formData.totalAmount}</p>
          <p><strong>Amount Paid:</strong> Rs. {formData.amountPaid}</p>
          <p><strong>Balance Due:</strong> Rs. {formData.balanceDue}</p>
          <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
          <button
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={printInvoice}
          >
            Print Invoice
          </button>
        </div>
      )}
    </div>
  );
}
