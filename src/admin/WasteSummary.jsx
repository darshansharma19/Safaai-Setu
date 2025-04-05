import React from "react";
import AdminLayout from "./AdminLayout";

const WasteSummary = () => {
  const wasteData = [
    { type: "Plastic", quantity: 125, color: "bg-blue-100", text: "text-blue-700" },
    { type: "Organic", quantity: 90, color: "bg-green-100", text: "text-green-700" },
    { type: "E-Waste", quantity: 42, color: "bg-yellow-100", text: "text-yellow-700" },
    { type: "Glass", quantity: 30, color: "bg-purple-100", text: "text-purple-700" },
    { type: "Metal", quantity: 15, color: "bg-red-100", text: "text-red-700" },
  ];

  const totalWaste = wasteData.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Waste Summary ♻️</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wasteData.map((waste, index) => (
            <div
              key={index}
              className={`p-4 rounded shadow ${waste.color} ${waste.text}`}
            >
              <h3 className="text-xl font-semibold">{waste.type}</h3>
              <p className="text-3xl font-bold">{waste.quantity} kg</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded shadow bg-gray-100 text-gray-800">
          <h3 className="text-xl font-semibold">Total Waste Collected</h3>
          <p className="text-3xl font-bold">{totalWaste} kg</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default WasteSummary;
