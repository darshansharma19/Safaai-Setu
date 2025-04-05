import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { path: "/admin", label: "Dashboard" },
    { path: "/admin/requests", label: "Pickup Requests" },
    { path: "/admin/assign", label: "Assign Sevak" },
    { path: "/admin/waste-summary", label: "Waste Summary" },
    { path: "/admin/users", label: "Users" },
  ];

  return (
    <aside className="w-64 h-screen bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6 text-green-600">Admin Panel</h2>
      <nav className="space-y-2">
        {links.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-green-500 text-white"
                  : "text-gray-700 hover:bg-green-100"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
