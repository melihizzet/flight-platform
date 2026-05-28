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

  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [baby, setBaby] = useState(0);

  const [showPassengerBox, setShowPassengerBox] = useState(false);

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
      `/flights?from=${fromAirport}&to=${toAirport}&departure=${departureDate}&return=${returnDate}&adult=${adult}&child=${child}&baby=${baby}`
    );
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="relative z-50 border-b border-white/5 backdrop-blur-xl">

        <div className="max-w-[1700px] mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="/"
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight flex items-center gap-3"
          >
            ✈️ UçGit
          </a>

          {/* MENU */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm lg:text-base font-medium text-slate-300">

            <a href="/campaigns" className="hover:text-blue-400 transition">
              Kampanyalar
            </a>

            <a href="/blog" className="hover:text-blue-400 transition">
              Blog
            </a>

            <a href="/contact" className="hover:text-blue-400 transition">
              İletişim
            </a>

            <a href="/about" className="hover:text-blue-400 transition">
              Hakkımızda
            </a>

          </div>

          {/* AUTH */}
          <div className="flex items-center gap-3">

            <a
              href="/login"
              className="hover:text-blue-400 transition text-sm md:text-base"
            >
              Giriş Yap
            </a>

            <a
              href="/register"
              className="bg-blue-500 hover:bg-blue-600 transition px-4 lg:px-5 py-2 lg:py-3 rounded-2xl font-bold text-sm lg:text-base"
            >
              Kayıt Ol
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative max-w-[1700px] mx-auto px-6 lg:px-8 pt-24 lg:pt-28 pb-20 text-center">

        <p className="text-blue-400 font-medium text-base md:text-lg">
          En uygun uçuşları saniyeler içinde bul
        </p>

        <h1 className="text-[55px] leading-[60px] md:text-[80px] md:leading-[85px] lg:text-[110px] lg:leading-[115px] font-black mt-8 tracking-tight">

          Ucuza uçmanın{" "}

          <span className="text-blue-500">
            en kolay yolu
          </span>

        </h1>

        <p className="text-slate-400 text-lg md:text-2xl mt-10 max-w-[900px] mx-auto leading-relaxed">
          Tüm havayollarını karşılaştır, en iyi fiyatları bul ve direkt havayoluna git.
        </p>

      </section>

      {/* SEARCH */}
      <section className="relative max-w-[1700px] mx-auto px-6 lg:px-8">

        <div className="bg-white/10 border border-white/10 rounded-[45px] p-7 lg:p-8 backdrop-blur-2xl shadow-2xl shadow-black/30">

          {/* TOP FILTERS */}
          <div className="flex flex-wrap gap-4 mb-8">

            <button
              onClick={() => setTripType("Tek Yön")}
              className={`px-5 py-3 rounded-2xl font-bold transition ${
                tripType === "Tek Yön"
                  ? "bg-blue-500"
                  : "bg-white/10 border border-white/10"
              }`}
            >
              Tek Yön
            </button>

            <button
              onClick={() => setTripType("Gidiş - Dönüş")}
              className={`px-5 py-3 rounded-2xl font-bold transition ${
                tripType === "Gidiş - Dönüş"
                  ? "bg-blue-500"
                  : "bg-white/10 border border-white/10"
              }`}
            >
              Gidiş - Dönüş
            </button>

          </div>

          {/* FORM */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">

            {/* FROM */}
            <div className="relative">

              <input
                value={fromSearch}
                onChange={(e) => setFromSearch(e.target.value)}
                placeholder="Nereden?"
                className="w-full bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-6 text-lg outline-none"
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
                className="w-full bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-6 text-lg outline-none"
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
              className="bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-6 text-lg outline-none"
            />

            {/* PASSENGERS */}
            <div className="relative">

              <button
                onClick={() => setShowPassengerBox(!showPassengerBox)}
                className="w-full bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-5 text-left"
              >

                <p className="text-slate-400 text-sm">
                  Yolcu
                </p>

                <p className="text-xl font-bold mt-1">
                  {adult} Yetişkin
                  {child > 0 && `, ${child} Çocuk`}
                  {baby > 0 && `, ${baby} Bebek`}
                </p>

              </button>

              {showPassengerBox && (

                <div className="absolute top-full left-0 mt-3 w-full bg-[#111827] border border-white/10 rounded-3xl p-5 z-50">

                  {/* ADULT */}
                  <div className="flex items-center justify-between mb-5">

                    <div>

                      <p className="font-bold">
                        Yetişkin
                      </p>

                    </div>

                    <div className="flex items-center gap-3">

                      <button
                        onClick={() =>
                          setAdult((prev) =>
                            Math.max(1, prev - 1)
                          )
                        }
                        className="w-9 h-9 rounded-full bg-white/10"
                      >
                        -
                      </button>

                      <span>{adult}</span>

                      <button
                        onClick={() =>
                          setAdult((prev) => prev + 1)
                        }
                        className="w-9 h-9 rounded-full bg-white/10"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* CHILD */}
                  <div className="flex items-center justify-between mb-5">

                    <div>

                      <p className="font-bold">
                        Çocuk
                      </p>

                    </div>

                    <div className="flex items-center gap-3">

                      <button
                        onClick={() =>
                          setChild((prev) =>
                            Math.max(0, prev - 1)
                          )
                        }
                        className="w-9 h-9 rounded-full bg-white/10"
                      >
                        -
                      </button>

                      <span>{child}</span>

                      <button
                        onClick={() =>
                          setChild((prev) => prev + 1)
                        }
                        className="w-9 h-9 rounded-full bg-white/10"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* BABY */}
                  <div className="flex items-center justify-between">

                    <div>

                      <p className="font-bold">
                        Bebek
                      </p>

                    </div>

                    <div className="flex items-center gap-3">

                      <button
                        onClick={() =>
                          setBaby((prev) =>
                            Math.max(0, prev - 1)
                          )
                        }
                        className="w-9 h-9 rounded-full bg-white/10"
                      >
                        -
                      </button>

                      <span>{baby}</span>

                      <button
                        onClick={() =>
                          setBaby((prev) => prev + 1)
                        }
                        className="w-9 h-9 rounded-full bg-white/10"
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>

              )}

            </div>

            {/* SEARCH */}
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-600 transition rounded-3xl text-xl font-black"
            >
              Ara
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}