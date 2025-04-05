import React from "react";
import AdminLayout from "./AdminLayout";

function Dashboard() {
  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Admin Dashboard 🛠️
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "Total Requests", value: 128, color: "bg-green-200" },
            { label: "Assigned Sevaks", value: 92, color: "bg-blue-200" },
            { label: "Unassigned", value: 36, color: "bg-red-200" },
          ].map((stat, idx) => (
            <div key={idx} className={`p-6 rounded-lg shadow ${stat.color}`}>
              <p className="text-gray-700 text-lg">{stat.label}</p>
              <h2 className="text-3xl font-bold">{stat.value}</h2>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
