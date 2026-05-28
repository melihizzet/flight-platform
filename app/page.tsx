"use client";

import { useState } from "react";

const airports = [
  {
    code: "SAW",
    name: "Sabiha Gokcen Airport",
    city: "Istanbul",
    country: "Turkey",
  },
  {
    code: "IST",
    name: "Istanbul Airport",
    city: "Istanbul",
    country: "Turkey",
  },
  {
    code: "AMS",
    name: "Amsterdam Schiphol",
    city: "Amsterdam",
    country: "Netherlands",
  },
  {
    code: "CDG",
    name: "Charles de Gaulle",
    city: "Paris",
    country: "France",
  },
  {
    code: "LHR",
    name: "Heathrow",
    city: "London",
    country: "United Kingdom",
  },
];

export default function Home() {

  const [tripType, setTripType] = useState("roundtrip");

  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");

  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);

  const [passengers, setPassengers] = useState(1);

  const [cabin, setCabin] = useState("Economy");

  const filteredFrom = airports.filter((airport) =>
    airport.code.toLowerCase().includes(fromAirport.toLowerCase()) ||
    airport.name.toLowerCase().includes(fromAirport.toLowerCase()) ||
    airport.city.toLowerCase().includes(fromAirport.toLowerCase())
  );

  const filteredTo = airports.filter((airport) =>
    airport.code.toLowerCase().includes(toAirport.toLowerCase()) ||
    airport.name.toLowerCase().includes(toAirport.toLowerCase()) ||
    airport.city.toLowerCase().includes(toAirport.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold tracking-tight">
          ✈️ UçGit
        </h1>

        <div className="flex items-center gap-4">

          <button className="text-sm hover:text-blue-400 transition">
            Giriş Yap
          </button>

          <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-xl font-semibold">
            Kayıt Ol
          </button>

        </div>

      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24">

        <div className="text-center">

          <p className="text-blue-400 font-semibold mb-4">
            En uygun uçuşları saniyeler içinde bul
          </p>

          <h2 className="text-6xl font-bold leading-tight max-w-5xl mx-auto">
            Ucuza uçmanın
            <span className="text-blue-400"> en kolay yolu</span>
          </h2>

          <p className="text-slate-300 mt-6 text-xl max-w-2xl mx-auto">
            Tüm uçuşları karşılaştır, en iyi fiyatı bul ve direkt havayoluna git.
          </p>

        </div>

        {/* Search */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 mt-14 shadow-2xl">

          {/* Top Controls */}
          <div className="flex flex-wrap gap-4 mb-6">

            {/* Trip Type */}
            <select
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
              className="bg-slate-700 border border-white/10 rounded-xl px-4 py-3 outline-none text-white"
            >
              <option value="roundtrip">Gidiş - Dönüş</option>
              <option value="oneway">Tek Yön</option>
            </select>

            {/* Passenger */}
            <select
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              className="bg-slate-700 border border-white/10 rounded-xl px-4 py-3 outline-none text-white"
            >
              <option value={1}>1 Yolcu</option>
              <option value={2}>2 Yolcu</option>
              <option value={3}>3 Yolcu</option>
              <option value={4}>4 Yolcu</option>
            </select>

            {/* Cabin */}
            <select
              value={cabin}
              onChange={(e) => setCabin(e.target.value)}
              className="bg-slate-700 border border-white/10 rounded-xl px-4 py-3 outline-none text-white"
            >
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>

          </div>

          {/* Main Search */}
          <div className="grid lg:grid-cols-5 gap-4">

            {/* From */}
            <div className="relative">

              <input
                type="text"
                value={fromAirport}
                placeholder="Nereden?"
                onFocus={() => setFromOpen(true)}
                onChange={(e) => {
                  setFromAirport(e.target.value);
                  setFromOpen(true);
                }}
                className="bg-slate-700 border border-white/10 rounded-2xl p-4 text-lg outline-none w-full text-white"
              />

              {fromOpen && fromAirport.length > 0 && (
                <div className="absolute top-20 left-0 w-full bg-slate-800 border border-white/10 rounded-2xl overflow-hidden z-50">

                  {filteredFrom.map((airport) => (
                    <div
                      key={airport.code}
                      onClick={() => {
                        setFromAirport(
                          `${airport.code} - ${airport.name}`
                        );

                        setFromOpen(false);
                      }}
                      className="p-4 hover:bg-slate-700 cursor-pointer border-b border-white/5"
                    >

                      <div className="font-semibold">
                        {airport.code} - {airport.name}
                      </div>

                      <div className="text-sm text-slate-400">
                        {airport.city}, {airport.country}
                      </div>

                    </div>
                  ))}

                </div>
              )}

            </div>

            {/* To */}
            <div className="relative">

              <input
                type="text"
                value={toAirport}
                placeholder="Nereye?"
                onFocus={() => setToOpen(true)}
                onChange={(e) => {
                  setToAirport(e.target.value);
                  setToOpen(true);
                }}
                className="bg-slate-700 border border-white/10 rounded-2xl p-4 text-lg outline-none w-full text-white"
              />

              {toOpen && toAirport.length > 0 && (
                <div className="absolute top-20 left-0 w-full bg-slate-800 border border-white/10 rounded-2xl overflow-hidden z-50">

                  {filteredTo.map((airport) => (
                    <div
                      key={airport.code}
                      onClick={() => {
                        setToAirport(
                          `${airport.code} - ${airport.name}`
                        );

                        setToOpen(false);
                      }}
                      className="p-4 hover:bg-slate-700 cursor-pointer border-b border-white/5"
                    >

                      <div className="font-semibold">
                        {airport.code} - {airport.name}
                      </div>

                      <div className="text-sm text-slate-400">
                        {airport.city}, {airport.country}
                      </div>

                    </div>
                  ))}

                </div>
              )}

            </div>

            {/* Departure */}
            <input
              type="date"
              className="bg-slate-700 border border-white/10 rounded-2xl p-4 text-lg outline-none text-white"
            />

            {/* Return */}
            {tripType === "roundtrip" ? (
              <input
                type="date"
                className="bg-slate-700 border border-white/10 rounded-2xl p-4 text-lg outline-none text-white"
              />
            ) : (
              <div className="bg-slate-700 border border-white/10 rounded-2xl p-4 flex items-center text-slate-400">
                Dönüş yok
              </div>
            )}

            {/* Button */}
            <button className="bg-blue-500 hover:bg-blue-600 transition rounded-2xl p-4 text-lg font-bold">
              Uçuş Ara
            </button>

          </div>

        </div>

        {/* Popular Flights */}
        <div className="mt-16">

          <div className="flex items-center justify-between mb-6">

            <h3 className="text-2xl font-bold">
              Popüler Uçuşlar
            </h3>

            <button className="text-blue-400 hover:text-blue-300">
              Tümünü Gör
            </button>

          </div>

          <div className="space-y-4">

            {/* Card */}
            <div className="bg-white/10 border border-white/10 rounded-3xl p-6 flex items-center justify-between hover:bg-white/15 transition">

              <div>

                <h4 className="text-2xl font-bold">
                  Pegasus
                </h4>

                <p className="text-slate-300 mt-1">
                  İstanbul → Berlin
                </p>

                <p className="text-sm text-slate-400 mt-2">
                  Direkt Uçuş • 2s 45dk
                </p>

              </div>

              <div className="text-right">

                <p className="text-3xl font-bold">
                  2.490₺
                </p>

                <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-xl mt-3 font-semibold">
                  Siteye Git
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}