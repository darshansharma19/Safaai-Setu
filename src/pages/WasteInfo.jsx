import React from "react";

const earnWaste = [
  {
    type: "Paper Waste",
    description: "Newspapers, notebooks, and cartons. Can be sold at approx ₹10–₹15/kg.",
    icon: "📰",
    bg: "bg-yellow-100",
  },
  {
    type: "Metal Waste (Iron & Steel)",
    description: "Includes rods, utensils, and scrap metal. Rates vary, usually ₹25–₹40/kg.",
    icon: "🔩",
    bg: "bg-gray-200",
  },
  {
    type: "Plastic Waste",
    description: "Bottles, wrappers, containers. Clean & sorted plastic sells for ₹5–₹15/kg.",
    icon: "🧴",
    bg: "bg-blue-100",
  },
  {
    type: "E-Waste",
    description: "Mobiles, chargers, laptops. Recyclers offer ₹10–₹100+ depending on type.",
    icon: "💻",
    bg: "bg-gray-100",
  },
  {
    type: "Glass Waste",
    description: "Bottles, jars, and broken glass. Recyclable at around ₹2–₹5/kg.",
    icon: "🍾",
    bg: "bg-green-100",
  },
];

const payWaste = [
  {
    type: "Wet Waste",
    description: "Food scraps, vegetable peels, and garden waste. Requires composting.",
    icon: "🍎",
    bg: "bg-green-100",
  },
  {
    type: "Hazardous Waste",
    description: "Batteries, paint cans, chemical containers. Needs expert disposal services.",
    icon: "☠️",
    bg: "bg-red-100",
  },
  {
    type: "Bio-medical Waste",
    description: "Syringes, masks, bandages. High-risk waste handled only by professionals.",
    icon: "🩺",
    bg: "bg-pink-100",
  },
];

function WasteInfo() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-extrabold text-center text-green-700 mb-12 tracking-tight">
        ♻️ Know Your Waste
      </h1>

      {/* Earn from Waste Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
          💰 Earn from Waste
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {earnWaste.map((item, idx) => (
            <div
              key={idx}
              className={`group ${item.bg} p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                {item.type}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pay for Waste Section */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-2">
          💸 Pay for Waste
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {payWaste.map((item, idx) => (
            <div
              key={idx}
              className={`group ${item.bg} p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-red-900 mb-2">
                {item.type}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <div className="mt-20 bg-green-50 p-8 rounded-2xl shadow-inner text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          🌿 Why Waste Segregation Matters?
        </h2>
        <p className="text-gray-700 text-base leading-relaxed max-w-3xl mx-auto">
          Waste segregation is essential for recycling, earning back value, and
          ensuring hazardous waste is safely handled. Be a part of a cleaner,
          greener future—segregate wisely and help build a sustainable society.
        </p>
      </div>
    </div>
  );
}

export default WasteInfo;
