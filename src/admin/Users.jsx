import React from "react";
import AdminLayout from "./AdminLayout";

const Users = () => {
  const users = [
    { name: "Ritika Verma", role: "Waste Collector", email: "ritika.verma@greencity.in" },
    { name: "Anuj Mehta", role: "Recycling Officer", email: "anuj.mehta@greencity.in" },
    { name: "Priya Jain", role: "Sorting Manager", email: "priya.jain@greencity.in" },
    { name: "Aman Yadav", role: "Admin", email: "aman.yadav@greencity.in" },
    { name: "Sneha Dubey", role: "Collection Supervisor", email: "sneha.dubey@greencity.in" },
    { name: "Rajesh Patidar", role: "City Coordinator", email: "rajesh.patidar@greencity.in" },
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Waste Collection Team 👷‍♀️👷‍♂️</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Role</th>
                <th className="py-2 px-4 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.role}</td>
                  <td className="py-2 px-4">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Users;
