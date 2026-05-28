"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { airports } from "./data/airports";

export default function Home() {

  const router = useRouter();

  const [tripType, setTripType] = useState("Tek Yön");

  const [fromAirport, setFromAirport] = useState("SAW");
  const [toAirport, setToAirport] = useState("AMS");

  const [fromSearch, setFromSearch] = useState("");
  const [toSearch, setToSearch] = useState("");

  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [passengers, setPassengers] = useState(1);

  const filteredFromAirports = airports.filter((airport) =>
    airport.code.toLowerCase().includes(fromSearch.toLowerCase()) ||
    airport.city.toLowerCase().includes(fromSearch.toLowerCase()) ||
    airport.name.toLowerCase().includes(fromSearch.toLowerCase())
  );

  const filteredToAirports = airports.filter((airport) =>
    airport.code.toLowerCase().includes(toSearch.toLowerCase()) ||
    airport.city.toLowerCase().includes(toSearch.toLowerCase()) ||
    airport.name.toLowerCase().includes(toSearch.toLowerCase())
  );

  const handleSearch = () => {

    router.push(
      `/flights?from=${fromAirport}&to=${toAirport}&departure=${departureDate}&return=${returnDate}&passengers=${passengers}`
    );
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="border-b border-white/5">

        <div className="max-w-[1700px] mx-auto px-6 py-5 flex items-center justify-between">

          <a
            href="/"
            className="text-5xl font-black flex items-center gap-3"
          >
            ✈️ UçGit
          </a>

          <div className="hidden md:flex items-center gap-10 text-slate-300">

            <a href="/campaigns">Kampanyalar</a>
            <a href="/blog">Blog</a>
            <a href="/contact">İletişim</a>
            <a href="/about">Hakkımızda</a>

          </div>

          <div className="flex items-center gap-4">

            <a href="/login">
              Giriş Yap
            </a>

            <a
              href="/register"
              className="bg-blue-500 px-5 py-3 rounded-2xl font-bold"
            >
              Kayıt Ol
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="max-w-[1700px] mx-auto px-6 pt-24 pb-20 text-center">

        <p className="text-blue-400 text-lg">
          En uygun uçuşları saniyeler içinde bul
        </p>

        <h1 className="text-[90px] leading-[95px] font-black mt-8">

          Ucuza uçmanın{" "}

          <span className="text-blue-500">
            en kolay yolu
          </span>

        </h1>

        <p className="text-slate-400 text-2xl mt-8">
          Tüm havayollarını karşılaştır, en iyi fiyatları bul.
        </p>

      </section>

      {/* SEARCH */}
      <section className="max-w-[1700px] mx-auto px-6">

        <div className="bg-white/10 border border-white/10 rounded-[40px] p-8">

          {/* TOP */}
          <div className="flex gap-4 mb-8">

            <button
              onClick={() => setTripType("Tek Yön")}
              className={`px-6 py-4 rounded-2xl font-bold ${
                tripType === "Tek Yön"
                  ? "bg-blue-500"
                  : "bg-white/10"
              }`}
            >
              Tek Yön
            </button>

            <button
              onClick={() => setTripType("Gidiş - Dönüş")}
              className={`px-6 py-4 rounded-2xl font-bold ${
                tripType === "Gidiş - Dönüş"
                  ? "bg-blue-500"
                  : "bg-white/10"
              }`}
            >
              Gidiş - Dönüş
            </button>

          </div>

          {/* FORM */}
          <div className="grid lg:grid-cols-5 gap-5">

            {/* FROM */}
            <div className="relative">

              <input
                value={fromSearch}
                onChange={(e) => setFromSearch(e.target.value)}
                placeholder="Nereden?"
                className="w-full bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-6 text-xl outline-none"
              />

              {fromSearch.length > 0 && (

                <div className="absolute top-full left-0 w-full mt-3 bg-[#111827] border border-white/10 rounded-3xl overflow-hidden z-50 max-h-[320px] overflow-y-auto">

                  {filteredFromAirports.map((airport, index) => (

                    <button
                      key={index}
                      onClick={() => {
                        setFromAirport(airport.code);
                        setFromSearch(
                          `${airport.code} - ${airport.city} - ${airport.name}`
                        );
                      }}
                      className="w-full text-left px-5 py-4 hover:bg-blue-500/20 transition border-b border-white/5"
                    >

                      <p className="font-bold">
                        {airport.code} - {airport.city}
                      </p>

                      <p className="text-slate-400 text-sm mt-1">
                        {airport.name}
                      </p>

                    </button>

                  ))}

                </div>

              )}

            </div>

            {/* TO */}
            <div className="relative">

              <input
                value={toSearch}
                onChange={(e) => setToSearch(e.target.value)}
                placeholder="Nereye?"
                className="w-full bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-6 text-xl outline-none"
              />

              {toSearch.length > 0 && (

                <div className="absolute top-full left-0 w-full mt-3 bg-[#111827] border border-white/10 rounded-3xl overflow-hidden z-50 max-h-[320px] overflow-y-auto">

                  {filteredToAirports.map((airport, index) => (

                    <button
                      key={index}
                      onClick={() => {
                        setToAirport(airport.code);
                        setToSearch(
                          `${airport.code} - ${airport.city} - ${airport.name}`
                        );
                      }}
                      className="w-full text-left px-5 py-4 hover:bg-blue-500/20 transition border-b border-white/5"
                    >

                      <p className="font-bold">
                        {airport.code} - {airport.city}
                      </p>

                      <p className="text-slate-400 text-sm mt-1">
                        {airport.name}
                      </p>

                    </button>

                  ))}

                </div>

              )}

            </div>

            {/* DATE */}
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-6 text-xl outline-none"
            />

            {/* PASSENGERS */}
            <div className="bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-6 flex items-center justify-between">

              <div>

                <p className="text-slate-400">
                  Yolcu
                </p>

                <p className="text-2xl font-bold">
                  {passengers} Yetişkin
                </p>

              </div>

              <div className="flex gap-3">

                <button
                  onClick={() =>
                    setPassengers((prev) =>
                      Math.max(1, prev - 1)
                    )
                  }
                  className="w-10 h-10 rounded-full bg-white/10"
                >
                  -
                </button>

                <button
                  onClick={() =>
                    setPassengers((prev) => prev + 1)
                  }
                  className="w-10 h-10 rounded-full bg-white/10"
                >
                  +
                </button>

              </div>

            </div>

            {/* SEARCH */}
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-600 transition rounded-3xl text-2xl font-black"
            >
              Ara
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}