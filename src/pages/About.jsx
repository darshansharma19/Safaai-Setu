import React from "react";

const About = () => {
  return (
    <div className="p-6 text-gray-800 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">About Waste Collection System ♻️</h1>

      <p className="mb-4">
        Our Waste Collection System is designed to help cities manage and monitor waste collection
        efficiently. With a streamlined dashboard and user-friendly features, it ensures smooth
        coordination between citizens, waste collectors, and supervisors.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Key Features:</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Track total waste collected by type (Plastic, Organic, etc.)</li>
        <li>Submit pickup requests easily</li>
        <li>Assign and monitor collection tasks</li>
        <li>Real-time status updates</li>
        <li>Supports eco-friendly waste management practices</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission 🌍</h2>
      <p>
        To promote sustainability and cleanliness through smart waste handling, citizen engagement,
        and environmentally conscious practices.
      </p>
    </div>
  );
};

export default About;
