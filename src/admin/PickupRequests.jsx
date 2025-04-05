import React, { useState } from "react";
import AdminLayout from "./AdminLayout";

const PickupRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Ritika Verma",
      address: "12 Rajwada Chowk, Indore",
      phone: "9321678420",
      wasteType: "Plastic",
      status: "Unassigned",
    },
    {
      id: 2,
      name: "Anuj Mehta",
      address: "88 MG Road, Indore",
      phone: "9426338891",
      wasteType: "Organic",
      status: "Assigned",
    },
    {
      id: 3,
      name: "Priya Jain",
      address: "B-14, Vijay Nagar, Indore",
      phone: "9812745332",
      wasteType: "E-Waste",
      status: "Unassigned",
    },
    {
      id: 4,
      name: "Aman Yadav",
      address: "3/4 Tilak Nagar, Indore",
      phone: "9876554321",
      wasteType: "Hazardous",
      status: "Assigned",
    },
    {
      id: 5,
      name: "Sneha Dubey",
      address: "21 Sudama Nagar, Indore",
      phone: "9001122334",
      wasteType: "Metal",
      status: "Unassigned",
    },
    {
      id: 6,
      name: "Rajesh Patidar",
      address: "G-8, Annapurna Road, Indore",
      phone: "7889900112",
      wasteType: "Organic",
      status: "Assigned",
    },
    {
      id: 7,
      name: "Divya Chauhan",
      address: "S-45, Palasia, Indore",
      phone: "7988776655",
      wasteType: "Plastic",
      status: "Unassigned",
    },
    {
      id: 8,
      name: "Vikram Solanki",
      address: "56 Residency Area, Indore",
      phone: "9823668899",
      wasteType: "E-Waste",
      status: "Assigned",
    },
    {
      id: 9,
      name: "Neha Bhatt",
      address: "D-22, Bengali Square, Indore",
      phone: "9012345678",
      wasteType: "Glass",
      status: "Unassigned",
    },
    {
      id: 10,
      name: "Saurabh Joshi",
      address: "101, Bhanwarkuan, Indore",
      phone: "9090901234",
      wasteType: "Organic",
      status: "Assigned",
    },
  ]);

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          Pickup Requests 📋
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead className="bg-green-100 text-green-900">
              <tr>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Address</th>
                <th className="py-2 px-4 text-left">Phone</th>
                <th className="py-2 px-4 text-left">Waste Type</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr
                  key={req.id}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-2 px-4">{req.name}</td>
                  <td className="py-2 px-4">{req.address}</td>
                  <td className="py-2 px-4">{req.phone}</td>
                  <td className="py-2 px-4">{req.wasteType}</td>
                  <td
                    className={`py-2 px-4 font-semibold ${
                      req.status === "Assigned"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {req.status}
                  </td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                      onClick={() =>
                        alert(`Assigning Sevak to: ${req.name}`)
                      }
                    >
                      Assign
                    </button>
                  </td>
                </tr>
              ))}
              {requests.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No pickup requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PickupRequests;
