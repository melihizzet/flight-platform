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

const destinations = [
  {
    city: "Amsterdam",
    country: "Netherlands",
    price: "2.490₺",
  },
  {
    city: "Dubai",
    country: "UAE",
    price: "4.120₺",
  },
  {
    city: "London",
    country: "United Kingdom",
    price: "3.890₺",
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

  const swapAirports = () => {
    const temp = fromAirport;
    setFromAirport(toAirport);
    setToAirport(temp);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 lg:px-8 py-6 max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold tracking-tight">
          ✈️ UçGit
        </h1>

        <div className="flex items-center gap-4">

          <button className="text-sm hover:text-blue-400 transition">
            Giriş Yap
          </button>

          <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-xl font-semibold shadow-lg shadow-blue-500/20">
            Kayıt Ol
          </button>

        </div>

      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-24">

        <div className="text-center">

          <p className="text-blue-400 font-semibold mb-4">
            En uygun uçuşları saniyeler içinde bul
          </p>

          <h2 className="text-5xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto">
            Ucuza uçmanın
            <span className="text-blue-400"> en kolay yolu</span>
          </h2>

          <p className="text-slate-300 mt-6 text-lg lg:text-xl max-w-2xl mx-auto">
            Tüm uçuşları karşılaştır, en iyi fiyatı bul ve direkt havayoluna git.
          </p>

        </div>

        {/* Search */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 mt-14 shadow-2xl">

          {/* Controls */}
          <div className="flex flex-wrap gap-4 mb-6">

            <select
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
              className="bg-slate-700 border border-white/10 rounded-xl px-4 py-3 outline-none text-white"
            >
              <option value="roundtrip">Gidiş - Dönüş</option>
              <option value="oneway">Tek Yön</option>
            </select>

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
          <div className="grid lg:grid-cols-5 gap-4 items-center">

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
                <div className="absolute top-20 left-0 w-full bg-slate-800 border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl">

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

            {/* Swap */}
            <button
              onClick={swapAirports}
              className="hidden lg:flex items-center justify-center bg-slate-700 hover:bg-slate-600 border border-white/10 rounded-2xl h-[60px] text-2xl transition"
            >
              ↔
            </button>

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
                <div className="absolute top-20 left-0 w-full bg-slate-800 border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl">

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

          </div>

          {/* Button */}
          <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 transition rounded-2xl p-5 text-lg font-bold shadow-lg shadow-blue-500/30">
            Uçuş Ara
          </button>

        </div>

        {/* Airline Logos */}
        <div className="mt-16">

          <p className="text-slate-400 text-sm mb-6 text-center">
            Popüler Havayolları
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">

            {["THY", "Pegasus", "Lufthansa", "Emirates", "KLM"].map((airline) => (
              <div
                key={airline}
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg font-semibold text-slate-300 hover:bg-white/10 transition"
              >
                {airline}
              </div>
            ))}

          </div>

        </div>

        {/* Popular Destinations */}
        <div className="mt-24">

          <div className="flex items-center justify-between mb-8">

            <h3 className="text-3xl font-bold">
              Popüler Rotalar
            </h3>

            <button className="text-blue-400 hover:text-blue-300">
              Tümünü Gör
            </button>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {destinations.map((destination) => (

              <div
                key={destination.city}
                className="bg-white/10 border border-white/10 rounded-3xl p-6 hover:bg-white/15 transition cursor-pointer"
              >

                <div className="h-44 rounded-2xl bg-gradient-to-br from-blue-500/30 to-slate-700 mb-5"></div>

                <h4 className="text-2xl font-bold">
                  {destination.city}
                </h4>

                <p className="text-slate-400 mt-1">
                  {destination.country}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-400">
                      Başlayan fiyat
                    </p>

                    <p className="text-2xl font-bold">
                      {destination.price}
                    </p>

                  </div>

                  <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-xl font-semibold">
                    İncele
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-24">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="text-2xl font-bold">
              ✈️ UçGit
            </h3>

            <p className="text-slate-400 mt-2">
              Uygun uçuşları saniyeler içinde bul.
            </p>

          </div>

          <div className="flex items-center gap-6 text-slate-400">

            <button className="hover:text-white transition">
              Hakkımızda
            </button>

            <button className="hover:text-white transition">
              İletişim
            </button>

            <button className="hover:text-white transition">
              Gizlilik
            </button>

          </div>

        </div>

      </footer>

    </main>
  );
}