import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RequestPickup({ user }) {
  const [formData, setFormData] = useState({
    addressZone: "",
    addressWard: "",
    addressArea: "",
    wasteType: "",
    pickupSlot: "",
    weight: "",
    estimatedCost: 49,
    notes: "",
    agree: false,
    image: null,
  });

  const [status, setStatus] = useState("idle");
  const [assignedSevak, setAssignedSevak] = useState(null);
  const navigate = useNavigate();

  const wasteOptions = ["Dry", "Wet", "Mixed"];
  const pickupSlots = [
    "6 AM - 9 AM",
    "9 AM - 12 PM",
    "12 PM - 3 PM",
    "3 PM - 6 PM",
    "6 PM - 9 PM",
  ];
  const zones = ["Zone 1", "Zone 2", "Zone 3", "Zone 4"];
  const wards = ["Ward 1", "Ward 2", "Ward 3", "Ward 4"];
  const areas = ["Rajwada", "Vijay Nagar", "Palasia", "Bhavarkuan"];

  const calculateCost = (weight) => {
    const parsed = parseFloat(weight);
    if (isNaN(parsed)) return 49;
    const cost = Math.max(49, Math.min(5000, parsed * 10));
    return cost;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, image: files[0] });
    } else if (name === "weight") {
      const newCost = calculateCost(value);
      setFormData({ ...formData, weight: value, estimatedCost: newCost });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please accept the terms and conditions.");
      return;
    }

    setStatus("finding");

    setTimeout(() => {
      const sevaks = ["Aman Sahu", "Deepak Verma", "Karan Singh"];
      const randomSevak = sevaks[Math.floor(Math.random() * sevaks.length)];
      setAssignedSevak(randomSevak);
      setStatus("assigned");

      setTimeout(() => {
        setFormData({
          addressZone: "",
          addressWard: "",
          addressArea: "",
          wasteType: "",
          pickupSlot: "",
          weight: "",
          estimatedCost: 49,
          notes: "",
          agree: false,
          image: null,
        });
        navigate("/pickup-status");
      }, 5000);
    }, 6000);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 lg:p-12 text-gray-800">
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
          <p className="text-green-700 font-semibold">
            Finding nearest Zonal Sevak...
          </p>
        </div>
      )}

      {status === "assigned" && assignedSevak && (
        <div className="text-center mb-10">
          <p className="text-lg text-green-700 font-semibold">
            Zonal Sevak <span className="font-bold">{assignedSevak}</span> has
            been assigned and is on the way! 🛺
          </p>
          <p className="text-sm text-gray-600">
            Redirecting to pickup status...
          </p>
        </div>
      )}

      {status === "idle" && (
        <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="lg:w-1/2 hidden lg:block">
            <img
              src="/img2.jpeg"
              alt="Pickup"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 p-6 lg:p-10 bg-green-50">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Zone, Ward, Area */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "Zone", field: "addressZone", options: zones },
                  { name: "Ward", field: "addressWard", options: wards },
                  { name: "Area", field: "addressArea", options: areas },
                ].map(({ name, field, options }) => (
                  <div key={field}>
                    <label className="block text-sm font-semibold mb-1">
                      {name}
                    </label>
                    <select
                      name={field}
                      required
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full border border-green-300 px-3 py-2 rounded-lg"
                    >
                      <option value="">Select {name}</option>
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              {/* Waste Type */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Type of Waste
                </label>
                <div className="flex gap-3 flex-wrap">
                  {wasteOptions.map((type) => (
                    <div
                      key={type}
                      onClick={() =>
                        setFormData({ ...formData, wasteType: type })
                      }
                      className={`cursor-pointer px-4 py-2 rounded-lg border-2 ${
                        formData.wasteType === type
                          ? "border-green-600 bg-green-100 font-semibold"
                          : "border-green-300 bg-white"
                      }`}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </div>

              {/* Time Slot */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Pickup Time Slot
                </label>
                <select
                  name="pickupSlot"
                  required
                  value={formData.pickupSlot}
                  onChange={handleChange}
                  className="w-full border border-green-300 px-4 py-2 rounded-lg"
                >
                  <option value="">-- Select Slot --</option>
                  {pickupSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Waste Weight & Estimated Cost */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Estimated Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    min={0}
                    className="w-full border border-green-300 px-3 py-2 rounded-lg"
                    placeholder="e.g. 10"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Estimated Cost (₹)
                  </label>
                  <input
                    type="text"
                    value={`₹${formData.estimatedCost}`}
                    readOnly
                    className="w-full border border-green-300 px-3 py-2 rounded-lg bg-gray-100"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Upload Waste Photo
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full border border-green-300 px-3 py-2 rounded-lg"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Additional Notes (optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Landmark, building access info, etc."
                  className="w-full border border-green-300 px-4 py-2 rounded-lg resize-none"
                />
              </div>

              {/* Terms */}
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

              {/* Submit */}
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
