import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-green-50 font-sans">
        <nav className="bg-green-600 text-white px-6 py-4 shadow">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/img4.jpeg"
                alt="Safaai Setu Logo"
                className="h-10 w-10 rounded-full shadow"
              />
              <h1 className="text-2xl font-bold">Safaai Setu</h1>
            </div>

            {/* Hamburger Icon */}
            <button
              className="md:hidden block text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {menuOpen ? (
                  // Close Icon (X)
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger Icon (3 lines)
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6">
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
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="md:hidden mt-4 space-y-2">
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/request" onClick={toggleMenu}>
                  Request Pickup
                </Link>
              </li>
              <li>
                <Link to="/waste-info" onClick={toggleMenu}>
                  Waste Info
                </Link>
              </li>
              <li>
                <Link to="/admin" onClick={toggleMenu}>
                  Admin
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
            </ul>
          )}
        </nav>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/request" element={<RequestPickup />} />
            <Route path="/waste-info" element={<WasteInfo />} />
            <Route path="/about" element={<About />} />
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
