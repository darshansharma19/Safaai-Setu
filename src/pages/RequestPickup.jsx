import { useState, useEffect } from "react";

function RequestPickup() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    wasteType: "",
  });

  const [showTimer, setShowTimer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  const wasteOptions = [
    "Dry Waste",
    "Wet Waste",
    "Plastic Waste",
    "E-Waste",
    "Hazardous Waste",
    "Bio-medical Waste",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", address: "", phone: "", wasteType: "" });
    setShowTimer(true);
    setTimeLeft(600); // Reset to 10 minutes
  };

  // Countdown logic
  useEffect(() => {
    let timer;
    if (showTimer && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setShowTimer(false);
    }

    return () => clearInterval(timer);
  }, [showTimer, timeLeft]);

  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-green-700 text-center">
        Waste Pickup Request 🧹
      </h1>

      {showTimer && (
        <div className="mb-8 bg-green-100 border border-green-300 p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            ✅ Your request has been submitted!
          </h2>
          <p className="text-green-700">
            A Zonal Sevak will be assigned to you in:
          </p>
          <div className="text-4xl font-bold text-green-900 mt-2 tracking-wider">
            {formatTime(timeLeft)}
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side Image */}
        <div className="hidden md:block">
          <img
            src="/img2.jpeg"
            alt="Waste Collection"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-green-50 p-6 rounded-lg shadow-md space-y-4"
        >
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-green-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Address</label>
            <textarea
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-green-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-green-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Type of Waste</label>
            <select
              name="wasteType"
              required
              value={formData.wasteType}
              onChange={handleChange}
              className="w-full border border-green-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">-- Select Waste Type --</option>
              {wasteOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full font-semibold transition-all"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestPickup;
