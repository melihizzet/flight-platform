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
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="relative z-50 border-b border-white/5 backdrop-blur-xl">

        <div className="max-w-[1700px] mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="/"
            className="text-4xl lg:text-5xl font-black flex items-center gap-3"
          >
            ✈️ UçGit
          </a>

          {/* MENU */}
          <div className="hidden md:flex items-center gap-10 text-slate-300 font-medium">

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
          <div className="flex items-center gap-4">

            <a
              href="/login"
              className="hover:text-blue-400 transition"
            >
              Giriş Yap
            </a>

            <a
              href="/register"
              className="bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-2xl font-bold"
            >
              Kayıt Ol
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative max-w-[1700px] mx-auto px-6 lg:px-8 pt-20 lg:pt-28 text-center">

        <p className="text-blue-400 text-lg font-medium">
          En uygun uçuşları saniyeler içinde bul
        </p>

        <h1 className="text-[60px] leading-[65px] md:text-[90px] md:leading-[95px] lg:text-[120px] lg:leading-[120px] font-black mt-8 tracking-tight">

          Ucuza uçmanın{" "}

          <span className="text-blue-500">
            en kolay yolu
          </span>

        </h1>

        <p className="text-slate-400 text-xl lg:text-2xl mt-8 max-w-[900px] mx-auto leading-relaxed">
          Tüm havayollarını karşılaştır, en iyi fiyatları bul ve direkt havayoluna git.
        </p>

      </section>

      {/* SEARCH */}
      <section className="relative max-w-[1700px] mx-auto px-6 lg:px-8 mt-16">

        <div className="bg-white/10 border border-white/10 rounded-[45px] p-7 lg:p-8 backdrop-blur-2xl shadow-2xl shadow-black/40">

          {/* TOP */}
          <div className="flex flex-wrap gap-4 mb-8">

            <button
              onClick={() => setTripType("Tek Yön")}
              className={`px-6 py-3 rounded-2xl font-bold transition ${
                tripType === "Tek Yön"
                  ? "bg-blue-500"
                  : "bg-white/10 border border-white/10"
              }`}
            >
              Tek Yön
            </button>

            <button
              onClick={() => setTripType("Gidiş - Dönüş")}
              className={`px-6 py-3 rounded-2xl font-bold transition ${
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

                <p className="text-lg font-bold mt-1">
                  {adult} Yetişkin
                  {child > 0 && `, ${child} Çocuk`}
                  {baby > 0 && `, ${baby} Bebek`}
                </p>

              </button>

              {showPassengerBox && (

                <div className="absolute top-full left-0 mt-3 w-full bg-[#111827] border border-white/10 rounded-3xl p-5 z-50">

                  {/* ADULT */}
                  <div className="flex items-center justify-between mb-5">

                    <p className="font-bold">
                      Yetişkin
                    </p>

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

                    <p className="font-bold">
                      Çocuk
                    </p>

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

                    <p className="font-bold">
                      Bebek
                    </p>

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

      {/* AIRLINES */}
      <section className="relative max-w-[1700px] mx-auto px-6 lg:px-8 mt-24">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-4xl lg:text-5xl font-black">
            Popüler Havayolları
          </h2>

          <a
            href="#"
            className="text-blue-400"
          >
            Tümünü Gör
          </a>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {[
            "THY",
            "Pegasus",
            "Lufthansa",
            "Qatar",
            "Emirates",
            "British Airways",
          ].map((airline, index) => (

            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 transition cursor-pointer"
            >

              <div className="w-16 h-16 rounded-2xl bg-white mx-auto mb-5"></div>

              <p className="text-center font-bold">
                {airline}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ROUTES */}
      <section className="relative max-w-[1700px] mx-auto px-6 lg:px-8 mt-24 pb-32">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-4xl lg:text-5xl font-black">
            En Popüler Rotalar
          </h2>

          <a
            href="#"
            className="text-blue-400"
          >
            Tümünü Gör
          </a>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">

          {[
            {
              city: "Amsterdam",
              price: "2490₺",
              airline: "Pegasus",
            },

            {
              city: "Dubai",
              price: "6490₺",
              airline: "Emirates",
            },

            {
              city: "Paris",
              price: "3190₺",
              airline: "Air France",
            },

            {
              city: "Londra",
              price: "3890₺",
              airline: "THY",
            },

          ].map((route, index) => (

            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-[35px] overflow-hidden hover:border-blue-500/40 transition"
            >

              <div className="h-[220px] bg-gradient-to-br from-slate-600 to-slate-800"></div>

              <div className="p-7">

                <div className="flex items-center justify-between">

                  <h3 className="text-4xl font-black">
                    {route.city}
                  </h3>

                  <span className="text-blue-400 text-sm">
                    {route.airline}
                  </span>

                </div>

                <p className="text-slate-400 mt-3">
                  İstanbul → {route.city}
                </p>

                <div className="mt-7 flex items-end justify-between">

                  <div>

                    <p className="text-slate-500 text-sm">
                      Başlayan fiyat
                    </p>

                    <p className="text-5xl font-black mt-2">
                      {route.price}
                    </p>

                  </div>

                  <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-2xl font-bold">
                    Uçuşları Gör
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}