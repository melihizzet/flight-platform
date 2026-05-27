"use client";

import { useState } from "react";
import { airports } from "./data/airports";

export default function Home() {

  const [search, setSearch] = useState("");

  const filteredAirports = airports.filter((airport) =>
    airport.code.toLowerCase().includes(search.toLowerCase()) ||
    airport.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">

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

          <h2 className="text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Ucuza uçmanın
            <span className="text-blue-400"> en kolay yolu</span>
          </h2>

          <p className="text-slate-300 mt-6 text-xl max-w-2xl mx-auto">
            Tüm uçuşları karşılaştır, en iyi fiyatı bul ve direkt havayoluna git.
          </p>

        </div>

        {/* Search Box */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 mt-14 shadow-2xl overflow-visible">

          <div className="grid md:grid-cols-4 gap-4 relative">

            {/* Nereden */}
            <div className="relative">

              <input
                type="text"
                placeholder="Nereden?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white/10 border border-white/10 rounded-2xl p-4 text-lg outline-none w-full"
              />

              {search.length > 0 && (
                <div className="absolute top-20 left-0 w-full bg-slate-800 border border-white/10 rounded-2xl overflow-hidden z-50">

                  {filteredAirports.map((airport) => (
                    <div
                      key={airport.code}
                      className="p-4 hover:bg-slate-700 cursor-pointer border-b border-white/5"
                    >
                      {airport.code} - {airport.name}
                    </div>
                  ))}

                </div>
              )}

            </div>

            {/* Nereye */}
            <input
              type="text"
              placeholder="Nereye?"
              className="bg-white/10 border border-white/10 rounded-2xl p-4 text-lg outline-none"
            />

            {/* Tarih */}
            <input
              type="date"
              className="bg-white/10 border border-white/10 rounded-2xl p-4 text-lg outline-none"
            />

            {/* Buton */}
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

            {/* Card 1 */}
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