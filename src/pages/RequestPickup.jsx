import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RequestPickup() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    wasteType: "",
    pickupTime: "",
    notes: "",
    agree: false,
  });

  const [status, setStatus] = useState("idle"); // idle | finding | assigned
  const [assignedSevak, setAssignedSevak] = useState(null);

  const navigate = useNavigate();

  const wasteOptions = [
    "Dry Waste",
    "Wet Waste",
    "Plastic Waste",
    "E-Waste",
    "Hazardous Waste",
    "Bio-medical Waste",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please accept the terms and conditions.");
      return;
    }

    // Start finding sevak
    setStatus("finding");

    setTimeout(() => {
      const sevaks = ["Aman Sahu", "Deepak Verma", "Karan Singh"];
      const randomSevak = sevaks[Math.floor(Math.random() * sevaks.length)];
      setAssignedSevak(randomSevak);
      setStatus("assigned");

      // Simulate small delay before redirecting
      setTimeout(() => {
        // Clear form
        setFormData({
          name: "",
          address: "",
          phone: "",
          email: "",
          wasteType: "",
          pickupTime: "",
          notes: "",
          agree: false,
        });

        navigate("/pickup-status");
      }, 5000);
    }, 10000); // simulate 10 seconds of searching
  };

  return (
    <div className="max-w-6xl mx-auto p-6 lg:p-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-2 text-green-700 text-center">
        Waste Pickup Request 🧹
      </h1>
      <p className="text-center text-gray-600 mb-10 text-sm">
        Schedule your waste pickup in just a few clicks.
      </p>

      {status === "finding" && (
        <div className="flex justify-center items-center flex-col space-y-4 py-12">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 animate-ping bg-green-300 rounded-full"></div>
            <div className="absolute inset-4 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              🚛
            </div>
          </div>
          <p className="text-green-700 font-semibold">Finding nearest Zonal Sevak...</p>
        </div>
      )}

      {status === "assigned" && assignedSevak && (
        <div className="text-center mb-10">
          <p className="text-lg text-green-700 font-semibold">
            Zonal Sevak <span className="font-bold">{assignedSevak}</span> has been assigned and is on the way! 🛺
          </p>
          <p className="text-sm text-gray-600">Redirecting to pickup status...</p>
        </div>
      )}

      {status === "idle" && (
        <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Image */}
          <div className="lg:w-1/2 hidden lg:block">
            <img
              src="/img2.jpeg"
              alt="Pickup"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/2 p-6 lg:p-10 bg-green-50">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* All your form inputs here, unchanged... */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Darshan Sharma"
                  className="w-full border border-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Address
                </label>
                <textarea
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your pickup address"
                  className="w-full border border-green-300 px-4 py-2 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  className="w-full border border-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Type of Waste
                </label>
                <select
                  name="wasteType"
                  required
                  value={formData.wasteType}
                  onChange={handleChange}
                  className="w-full border border-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">-- Select Waste Type --</option>
                  {wasteOptions.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Preferred Pickup Time
                </label>
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className="w-full border border-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Additional Notes (optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Landmark, building access info, etc."
                  className="w-full border border-green-300 px-4 py-2 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="accent-green-600"
                />
                <label className="text-sm text-gray-700">
                  I agree to the{" "}
                  <span className="text-green-600 font-medium cursor-pointer">
                    Terms & Conditions
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full font-semibold transition-all duration-300"
              >
                🚛 Submit Pickup Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestPickup;
