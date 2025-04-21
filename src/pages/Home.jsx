import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-100 py-10 px-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-4 text-center">
          स्वच्छ इंदौर, स्मार्ट इंदौर 🚮
        </h1>
        <p className="text-center text-lg max-w-2xl mx-auto">
          Welcome to{" "}
          <span className="font-semibold text-green-800">Safaai Setu Indore</span> – a doorstep waste collection service by Indore Municipal Corporation. Your waste will be collected within <span className="font-bold">10 minutes</span> of request by our zonal warriors.
        </p>
        <div className="flex justify-center mt-6">
          <Link to="/request">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-full transition-all">
              Request Pickup Now
            </button>
          </Link>
          
        </div>
      </section>

      {/* Info Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 p-8 md:p-14 rounded-3xl shadow-2xl my-14 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center z-10 relative">
          {/* Indore Image */}
          <div className="relative">
            <img
              src="/Indore_india.jpg"
              alt="Clean Indore"
              className="rounded-xl shadow-xl border-4 border-green-300 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -top-6 -left-6 bg-white px-4 py-2 text-green-700 font-bold rounded-xl shadow-md text-sm">
              📍 Indore - No.1 Swachh City
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-extrabold text-green-700 mb-4 animate-pulse">
              Why Safaai Setu Rocks? 🤘
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed font-medium">
              Indore ne dikhaya hai kya hoti hai asli safaai! Let’s level up with Safaai Setu – your fastest and smartest cleanliness buddy!
            </p>
            <ul className="space-y-4 text-green-900 font-semibold text-base">
              <li className="flex items-start gap-3 hover:translate-x-2 transition-all">
                <span className="text-2xl">⏱️</span>
                <span>Pickup in just <span className="text-green-700 font-bold">10 minutes @ 49 Rs</span> after request – lightning fast!</span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition-all">
                <span className="text-2xl">♻️</span>
                <span>6-way segregation – dry, wet, sanitary, e-waste, plastic, and metal. All sorted!</span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition-all">
                <span className="text-2xl">💰</span>
                <span>Turn trash into <span className="text-green-600">cash or points</span> with our kabadiwala rewards program!</span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition-all">
                <span className="text-2xl">🏆</span>
                <span>Inspired by <span className="text-green-700 font-bold">Swachh Bharat Champion – Indore</span> 💚</span>
              </li>
            </ul>

            <div className="mt-8">
              <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold animate-bounce">
                Join the Safaai Squad Now 🚛
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-300 rounded-full blur-2xl opacity-40"></div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-yellow-50 p-8 rounded-xl shadow-lg my-10">
        <h2 className="text-3xl font-bold text-yellow-700 mb-4 text-center">🌟 Upcoming Swachta Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">🧠 Swachta Quiz</h3>
            <p className="text-gray-600">Test your knowledge about cleanliness, recycling, and the Swachh Bharat mission. Win exciting rewards!</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">🧹 Cleanliness Challenges</h3>
            <p className="text-gray-600">Take part in monthly zone-wise challenges and earn coins for every kg of waste collected or segregated.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">👛 Rewards Wallet</h3>
            <p className="text-gray-600">Track your coins, redeem coupons, and level up in our eco-leaderboard. Clean streets = more coins!</p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link to="/events">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-5 rounded-full">
              View All Events
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-center text-sm text-gray-500">
        <p>“जो इंदौर बोले वो सफाई बोले!” 🇮🇳</p>
        <p className="mt-1">
          © {new Date().getFullYear()} Safaai Setu | Indore Municipal Corporation
        </p>
      </footer>
    </div>
  );
}

export default Home;
