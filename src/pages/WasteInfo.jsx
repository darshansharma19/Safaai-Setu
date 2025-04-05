import React from "react";

const earnWaste = [
  {
    type: "Dry Waste",
    description: "Includes paper, cardboard, metal, and glass. Recyclable and can earn credits or cash.",
    icon: "📦",
    bg: "bg-yellow-100",
  },
  {
    type: "Plastic Waste",
    description: "Bottles, wrappers, containers. Sellable if segregated properly.",
    icon: "🧴",
    bg: "bg-blue-100",
  },
  {
    type: "E-Waste",
    description: "Phones, wires, gadgets. Recyclers pay for proper disposal.",
    icon: "💻",
    bg: "bg-gray-100",
  },
];

const payWaste = [
  {
    type: "Wet Waste",
    description: "Food and garden waste. Needs composting or municipal processing.",
    icon: "🍎",
    bg: "bg-green-100",
  },
  {
    type: "Hazardous Waste",
    description: "Chemicals, paint, and harmful items. Requires expert handling.",
    icon: "☠️",
    bg: "bg-red-100",
  },
  {
    type: "Bio-medical Waste",
    description: "From hospitals like syringes and bandages. Highly sensitive disposal.",
    icon: "🩺",
    bg: "bg-pink-100",
  },
];

function WasteInfo() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-10">
        Know Your Waste ♻️
      </h1>

      {/* Earn from Waste */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          💰 Earn from Waste
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {earnWaste.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bg} p-6 rounded-xl shadow-md hover:shadow-lg transition-all`}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-green-900 mb-1">
                {item.type}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pay for Waste */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 mb-6">
          💸 Pay for Waste
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {payWaste.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bg} p-6 rounded-xl shadow-md hover:shadow-lg transition-all`}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-red-900 mb-1">
                {item.type}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Info */}
      <div className="mt-14 bg-green-50 p-6 rounded-lg shadow-inner text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-2">
          Why Waste Segregation Matters?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Proper segregation ensures safe disposal and supports recycling efforts. Be a part of a greener tomorrow 🌍🌱.
        </p>
      </div>
    </div>
  );
}

export default WasteInfo;
