// MainLayout.jsx
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Failed to fetch events:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-white">
        <div className="text-xl font-bold">StAug.ai</div>
        <div className="space-x-4">
          <a href="#explore" className="hover:underline">Explore</a>
          <a href="#events" className="hover:underline">Events</a>
          <a href="#map" className="hover:underline">Map</a>
          <input
            type="text"
            placeholder="Search..."
            className="border p-1 rounded"
          />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="p-8 text-center bg-white">
        <h1 className="text-4xl font-bold mb-2">What's Happening in St. Augustine</h1>
        <p className="text-lg text-gray-600">Bars, Restaurants, Music & More</p>
      </header>

      {/* Featured Tonight */}
      <section className="px-4 py-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">🎶 Featured Tonight</h2>
        <div className="flex space-x-4 overflow-x-scroll pb-2">
          {events.length > 0 ? (
            events.map((event, idx) => (
              <Card key={idx} className="min-w-[250px] p-4 bg-white shadow-md">
                <h3 className="text-lg font-bold">{event.venue}</h3>
                <p className="text-sm text-gray-500">{event.type} • {event.time}</p>
                <p className="text-sm">Artist: {event.artist}</p>
              </Card>
            ))
          ) : (
            <p className="text-sm text-gray-500">Loading events...</p>
          )}
        </div>
      </section>

      {/* Category Filters */}
      <section className="px-4 py-4">
        <h2 className="text-xl font-semibold mb-2">Filter by Vibe</h2>
        <div className="flex flex-wrap gap-2">
          {['Music', 'Food', 'Drinks', 'Kid-Friendly', 'Dog-Friendly'].map(tag => (
            <button
              key={tag}
              className="px-3 py-1 border border-gray-400 rounded-full text-sm hover:bg-gray-200"
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} StAug.ai – Made with ❤️ in Florida
      </footer>
    </div>
  );
}
