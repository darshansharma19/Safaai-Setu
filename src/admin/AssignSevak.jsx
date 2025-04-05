import React, { useState } from "react";
import AdminLayout from "./AdminLayout";

const AssignSevak = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Ritika Verma",
      address: "12 Rajwada Chowk, Indore",
      wasteType: "Plastic",
      assignedSevak: "",
    },
    {
      id: 2,
      name: "Anuj Mehta",
      address: "88 MG Road, Indore",
      wasteType: "Organic",
      assignedSevak: "",
    },
    {
      id: 3,
      name: "Divya Chauhan",
      address: "S-45, Palasia, Indore",
      wasteType: "E-Waste",
      assignedSevak: "",
    },
  ]);

  const [sevaks] = useState([
    "Ramesh Patel",
    "Sita Yadav",
    "Mohit Sharma",
    "Preeti Meena",
  ]);

  const assignSevakToRequest = (requestId, sevakName) => {
    const updatedRequests = requests.map((req) =>
      req.id === requestId ? { ...req, assignedSevak: sevakName } : req
    );
    setRequests(updatedRequests);
  };

  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        Assign Sevak to Pickup Requests 🙋‍♂️
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead className="bg-green-100 text-green-900">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Address</th>
              <th className="py-2 px-4 text-left">Waste Type</th>
              <th className="py-2 px-4 text-left">Assign Sevak</th>
              <th className="py-2 px-4 text-left">Assigned Sevak</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-t hover:bg-gray-50">
                <td className="py-2 px-4">{req.name}</td>
                <td className="py-2 px-4">{req.address}</td>
                <td className="py-2 px-4">{req.wasteType}</td>
                <td className="py-2 px-4">
                  <select
                    className="border rounded px-2 py-1"
                    value={req.assignedSevak}
                    onChange={(e) =>
                      assignSevakToRequest(req.id, e.target.value)
                    }
                  >
                    <option value="">Select Sevak</option>
                    {sevaks.map((sevak, i) => (
                      <option key={i} value={sevak}>
                        {sevak}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="py-2 px-4 font-medium text-green-600">
                  {req.assignedSevak || "-"}
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No requests available for assignment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default AssignSevak;
