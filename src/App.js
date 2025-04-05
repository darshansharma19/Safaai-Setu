import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RequestPickup from "./pages/RequestPickup";
import WasteInfo from "./pages/WasteInfo";
import About from "./pages/About";

import Dashboard from "./admin/Dashboard";
import PickupRequests from "./admin/PickupRequests";
import AssignSevak from "./admin/AssignSevak";
import WasteSummary from "./admin/WasteSummary";
import Users from "./admin/Users";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-50 font-sans">
        <nav className="flex items-center justify-between bg-green-600 text-white px-6 py-4 shadow">
          <div className="flex items-center gap-2">
            <img
              src="/img4.jpeg"
              alt="Safaai Setu Logo"
              className="h-10 w-10 rounded-full shadow"
            />
            <h1 className="text-2xl font-bold">Safaai Setu</h1>
          </div>

          <ul className="flex gap-6">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/request" className="hover:underline">
                Request Pickup
              </Link>
            </li>
            <li>
              <Link to="/waste-info" className="hover:underline">
                Waste Info
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:underline">
                Admin
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <main className="p-6">
          <Routes>
            {/* General Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/request" element={<RequestPickup />} />
            <Route path="/waste-info" element={<WasteInfo />} />
            <Route path="/about" element={<About />} />

            {/* Admin Panel Routes */}
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/requests" element={<PickupRequests />} />
            <Route path="/admin/assign" element={<AssignSevak />} />
            <Route path="/admin/waste-summary" element={<WasteSummary />} />
            <Route path="/admin/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
