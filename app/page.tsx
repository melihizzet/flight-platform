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
  {
    code: "DXB",
    name: "Dubai International",
    city: "Dubai",
    country: "UAE",
  },
];

const airlines = [
  "THY",
  "Pegasus",
  "Lufthansa",
  "Emirates",
  "KLM",
  "Air France",
  "British Airways",
];

const destinations = [
  {
    from: "Istanbul",
    to: "Amsterdam",
    price: "2.490₺",
    airline: "Pegasus",
  },
  {
    from: "Istanbul",
    to: "Dubai",
    price: "4.120₺",
    airline: "THY",
  },
  {
    from: "Istanbul",
    to: "London",
    price: "3.890₺",
    airline: "British Airways",
  },
  {
    from: "Istanbul",
    to: "Paris",
    price: "2.990₺",
    airline: "Air France",
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

      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-blue-500/20 blur-[220px] rounded-full"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-8 max-w-[1600px] mx-auto">

        <h1 className="text-5xl font-black tracking-tight">
          ✈️ UçGit
        </h1>

        <div className="flex items-center gap-5">

          <button className="text-lg hover:text-blue-400 transition">
            Giriş Yap
          </button>

          <button className="bg-blue-500 hover:bg-blue-600 transition px-7 py-3 rounded-2xl font-bold shadow-lg shadow-blue-500/30 text-lg">
            Kayıt Ol
          </button>

        </div>

      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-[1600px] mx-auto px-8 pt-24 pb-32">

        <div className="text-center">

          <p className="text-blue-400 font-bold mb-6 text-2xl">
            En uygun uçuşları saniyeler içinde bul
          </p>

          <h2 className="text-7xl lg:text-8xl font-black leading-tight max-w-6xl mx-auto">
            Ucuza uçmanın
            <span className="text-blue-400"> en kolay yolu</span>
          </h2>

          <p className="text-slate-300 mt-10 text-3xl max-w-4xl mx-auto leading-relaxed">
            Tüm uçuşları karşılaştır, en iyi fiyatı bul ve direkt havayoluna git.
          </p>

        </div>

        {/* Search */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 mt-20 shadow-2xl max-w-7xl mx-auto">

          {/* Controls */}
          <div className="flex flex-wrap gap-5 mb-8">

            <select
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
              className="bg-slate-700 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white text-xl"
            >
              <option value="roundtrip">Gidiş - Dönüş</option>
              <option value="oneway">Tek Yön</option>
            </select>

            <select
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              className="bg-slate-700 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white text-xl"
            >
              <option value={1}>1 Yolcu</option>
              <option value={2}>2 Yolcu</option>
              <option value={3}>3 Yolcu</option>
              <option value={4}>4 Yolcu</option>
            </select>

            <select
              value={cabin}
              onChange={(e) => setCabin(e.target.value)}
              className="bg-slate-700 border border-white/10 rounded-2xl px-6 py-4 outline-none text-white text-xl"
            >
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>

          </div>

          {/* Main Search */}
          <div className="grid lg:grid-cols-5 gap-5 items-center">

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
                className="bg-slate-700 border border-white/10 rounded-3xl p-6 text-2xl outline-none w-full text-white"
              />

              {fromOpen && fromAirport.length > 0 && (
                <div className="absolute top-28 left-0 w-full bg-slate-800 border border-white/10 rounded-3xl overflow-hidden z-50 shadow-2xl">

                  {filteredFrom.map((airport) => (
                    <div
                      key={airport.code}
                      onClick={() => {
                        setFromAirport(
                          airport.code
                        );
                        setFromOpen(false);
                      }}
                      className="p-6 hover:bg-slate-700 cursor-pointer border-b border-white/5"
                    >

                      <div className="font-bold text-xl">
                        {airport.code} - {airport.name}
                      </div>

                      <div className="text-base text-slate-400 mt-1">
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
              className="hidden lg:flex items-center justify-center bg-slate-700 hover:bg-slate-600 border border-white/10 rounded-3xl h-[88px] text-4xl transition"
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
                className="bg-slate-700 border border-white/10 rounded-3xl p-6 text-2xl outline-none w-full text-white"
              />

              {toOpen && toAirport.length > 0 && (
                <div className="absolute top-28 left-0 w-full bg-slate-800 border border-white/10 rounded-3xl overflow-hidden z-50 shadow-2xl">

                  {filteredTo.map((airport) => (
                    <div
                      key={airport.code}
                      onClick={() => {
                        setToAirport(
                          airport.code
                        );
                        setToOpen(false);
                      }}
                      className="p-6 hover:bg-slate-700 cursor-pointer border-b border-white/5"
                    >

                      <div className="font-bold text-xl">
                        {airport.code} - {airport.name}
                      </div>

                      <div className="text-base text-slate-400 mt-1">
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
              className="bg-slate-700 border border-white/10 rounded-3xl p-6 text-2xl outline-none text-white"
            />

            {/* Return */}
            {tripType === "roundtrip" ? (
              <input
                type="date"
                className="bg-slate-700 border border-white/10 rounded-3xl p-6 text-2xl outline-none text-white"
              />
            ) : (
              <div className="bg-slate-700 border border-white/10 rounded-3xl p-6 flex items-center text-slate-400 text-2xl">
                Dönüş yok
              </div>
            )}

          </div>

          {/* SEARCH BUTTON */}
          <a
            href="/flights?from=SAW&to=AMS"
            className="w-full mt-8 bg-blue-500 hover:bg-blue-600 transition rounded-3xl p-7 text-2xl font-black shadow-lg shadow-blue-500/30 flex items-center justify-center"
          >
            Uçuş Ara
          </a>

        </div>

        {/* Airlines */}
        <div className="mt-24">

          <p className="text-slate-400 text-xl mb-8 text-center">
            En Çok Kullanılan Havayolları
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">

            {airlines.map((airline) => (
              <div
                key={airline}
                className="bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-2xl font-bold text-slate-300 hover:bg-white/10 transition"
              >
                {airline}
              </div>
            ))}

          </div>

        </div>

        {/* Popular Routes */}
        <div className="mt-32">

          <div className="flex items-center justify-between mb-10">

            <h3 className="text-5xl font-black">
              En Popüler Rotalar
            </h3>

            <button className="text-blue-400 hover:text-blue-300 text-2xl">
              Tümünü Gör
            </button>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {destinations.map((destination) => (

              <div
                key={destination.to}
                className="bg-white/10 border border-white/10 rounded-[36px] p-7 hover:bg-white/15 transition cursor-pointer"
              >

                <div className="h-64 rounded-3xl bg-gradient-to-br from-blue-500/30 to-slate-700 mb-6"></div>

                <div className="flex items-center justify-between">

                  <div>

                    <h4 className="text-3xl font-black">
                      {destination.to}
                    </h4>

                    <p className="text-slate-400 text-lg mt-1">
                      {destination.from} → {destination.to}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-base text-slate-400">
                      {destination.airline}
                    </p>

                    <p className="text-3xl font-black">
                      {destination.price}
                    </p>

                  </div>

                </div>

                <button className="w-full mt-7 bg-blue-500 hover:bg-blue-600 transition py-5 rounded-2xl font-bold text-xl">
                  Uçuşları Gör
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-32">

        <div className="max-w-[1600px] mx-auto px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>

            <h3 className="text-4xl font-black">
              ✈️ UçGit
            </h3>

            <p className="text-slate-400 mt-3 text-xl">
              Uygun uçuşları saniyeler içinde bul.
            </p>

          </div>

          <div className="flex items-center gap-8 text-slate-400 text-xl">

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