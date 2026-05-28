"use client";

import { useState } from "react";

export default function Home() {

  const [tripType, setTripType] = useState("Tek Yön");

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* BG GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="relative z-50 border-b border-white/5 backdrop-blur-xl bg-[#020617]/70">

        <div className="max-w-[1700px] mx-auto px-8 py-6 flex items-center justify-between">

          <a
            href="/"
            className="text-5xl font-black tracking-tight flex items-center gap-3"
          >
            ✈️ UçGit
          </a>

          <div className="hidden lg:flex items-center gap-10 text-lg text-slate-300">

            <a href="#" className="hover:text-white transition">
              Uçuşlar
            </a>

            <a href="#" className="hover:text-white transition">
              Kampanyalar
            </a>

            <a href="#" className="hover:text-white transition">
              Blog
            </a>

            <a href="#" className="hover:text-white transition">
              İletişim
            </a>

          </div>

          <div className="flex items-center gap-4">

            <button className="text-lg hover:text-blue-400 transition">
              Giriş Yap
            </button>

            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-2xl font-bold">
              Kayıt Ol
            </button>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative max-w-[1700px] mx-auto px-8 pt-24 pb-24">

        <div className="text-center">

          <p className="text-blue-400 text-xl font-semibold mb-6">
            En uygun uçuşları saniyeler içinde bul
          </p>

          <h1 className="text-7xl lg:text-8xl font-black leading-tight tracking-tight max-w-[1200px] mx-auto">

            Ucuza uçmanın
            <span className="text-blue-500"> en kolay yolu</span>

          </h1>

          <p className="text-slate-400 text-2xl mt-8 max-w-[900px] mx-auto leading-relaxed">
            Tüm havayollarını karşılaştır, en iyi fiyatları bul ve direkt havayoluna git.
          </p>

        </div>

        {/* SEARCH BOX */}
        <div className="mt-20 bg-white/10 border border-white/10 rounded-[40px] p-8 backdrop-blur-2xl shadow-2xl shadow-black/30 max-w-[1500px] mx-auto">

          {/* TOP OPTIONS */}
          <div className="flex flex-wrap gap-4 mb-8">

            <button
              onClick={() => setTripType("Tek Yön")}
              className={`px-6 py-4 rounded-2xl font-bold transition ${
                tripType === "Tek Yön"
                  ? "bg-blue-500"
                  : "bg-white/10 border border-white/10"
              }`}
            >
              Tek Yön
            </button>

            <button
              onClick={() => setTripType("Gidiş - Dönüş")}
              className={`px-6 py-4 rounded-2xl font-bold transition ${
                tripType === "Gidiş - Dönüş"
                  ? "bg-blue-500"
                  : "bg-white/10 border border-white/10"
              }`}
            >
              Gidiş - Dönüş
            </button>

            <button className="bg-white/10 border border-white/10 px-6 py-4 rounded-2xl font-bold">
              1 Yolcu
            </button>

            <button className="bg-white/10 border border-white/10 px-6 py-4 rounded-2xl font-bold">
              Economy
            </button>

          </div>

          {/* INPUTS */}
          <div className="grid lg:grid-cols-5 gap-5">

            <input
              defaultValue="SAW - Sabiha Gökçen"
              className="bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-7 text-xl outline-none"
            />

            <input
              defaultValue="AMS - Amsterdam"
              className="bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-7 text-xl outline-none"
            />

            <input
              type="date"
              className="bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-7 text-xl outline-none"
            />

            <input
              type="date"
              className="bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-7 text-xl outline-none"
            />

            <a
              href="/flights?from=SAW&to=AMS"
              className="bg-gradient-to-r from-blue-500 to-blue-400 hover:scale-[1.02] transition rounded-3xl text-2xl font-black flex items-center justify-center shadow-xl shadow-blue-500/20"
            >
              Uçuş Ara
            </a>

          </div>

        </div>

      </section>

      {/* POPULAR AIRLINES */}
      <section className="relative max-w-[1700px] mx-auto px-8 pb-24">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-5xl font-black">
            Popüler Havayolları
          </h2>

          <a href="#" className="text-blue-400 hover:text-blue-300">
            Tümünü Gör
          </a>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">

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
              className="bg-white/10 border border-white/10 rounded-3xl p-8 text-center hover:border-blue-400/30 hover:bg-white/15 transition cursor-pointer"
            >

              <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-5"></div>

              <h3 className="text-xl font-bold">
                {airline}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* POPULAR ROUTES */}
      <section className="relative max-w-[1700px] mx-auto px-8 pb-32">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-5xl font-black">
            En Popüler Rotalar
          </h2>

          <a href="#" className="text-blue-400 hover:text-blue-300">
            Tümünü Gör
          </a>

        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          {[
            {
              city: "Amsterdam",
              route: "İstanbul → Amsterdam",
              airline: "Pegasus",
              price: "2490₺",
            },

            {
              city: "Dubai",
              route: "İstanbul → Dubai",
              airline: "Emirates",
              price: "6490₺",
            },

            {
              city: "Paris",
              route: "İstanbul → Paris",
              airline: "Air France",
              price: "3190₺",
            },

            {
              city: "Londra",
              route: "İstanbul → Londra",
              airline: "THY",
              price: "3890₺",
            },
          ].map((route, index) => (

            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-[40px] overflow-hidden hover:border-blue-400/30 hover:scale-[1.01] transition"
            >

              <div className="h-[240px] bg-gradient-to-br from-blue-500/30 to-slate-700"></div>

              <div className="p-8">

                <div className="flex items-center justify-between mb-5">

                  <h3 className="text-4xl font-black">
                    {route.city}
                  </h3>

                  <p className="text-blue-400 text-sm">
                    {route.airline}
                  </p>

                </div>

                <p className="text-slate-400 text-lg mb-6">
                  {route.route}
                </p>

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-slate-400 text-sm">
                      Başlayan fiyat
                    </p>

                    <p className="text-4xl font-black mt-1">
                      {route.price}
                    </p>

                  </div>

                  <a
                    href="/flights?from=SAW&to=AMS"
                    className="bg-blue-500 hover:bg-blue-600 transition px-6 py-4 rounded-2xl font-bold"
                  >
                    Uçuşları Gör
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12">

        <div className="max-w-[1700px] mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>

            <h2 className="text-4xl font-black">
              ✈️ UçGit
            </h2>

            <p className="text-slate-400 mt-3">
              Uygun uçuşları saniyeler içinde bul.
            </p>

          </div>

          <div className="flex items-center gap-10 text-slate-400">

            <a href="#" className="hover:text-white transition">
              Hakkımızda
            </a>

            <a href="#" className="hover:text-white transition">
              İletişim
            </a>

            <a href="#" className="hover:text-white transition">
              Gizlilik
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}