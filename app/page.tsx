"use client";

import { useState } from "react";

export default function Home() {

  const [tripType, setTripType] = useState("Tek Yön");

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* BG GLOW */}
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
          <div className="hidden md:flex items-center gap-6 lg:gap-10 text-sm lg:text-base font-medium text-slate-300">

            <a
              href="/campaigns"
              className="hover:text-blue-400 transition"
            >
              Kampanyalar
            </a>

            <a
              href="/blog"
              className="hover:text-blue-400 transition"
            >
              Blog
            </a>

            <a
              href="/contact"
              className="hover:text-blue-400 transition"
            >
              İletişim
            </a>

            <a
              href="/about"
              className="hover:text-blue-400 transition"
            >
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
      <section className="relative max-w-[1700px] mx-auto px-6 lg:px-8 pt-20 lg:pt-24 pb-16 text-center">

        <p className="text-blue-400 font-medium text-base md:text-lg">
          En uygun uçuşları saniyeler içinde bul
        </p>

        <h1 className="text-[52px] leading-[58px] md:text-[70px] md:leading-[76px] lg:text-[80px] lg:leading-[90px] font-black mt-8 tracking-tight">

          Ucuza uçmanın{" "}

          <span className="text-blue-500">
            en kolay yolu
          </span>

        </h1>

        <p className="text-slate-400 text-lg md:text-xl mt-8 max-w-[900px] mx-auto leading-relaxed">
          Tüm havayollarını karşılaştır, en iyi fiyatları bul ve direkt havayoluna git.
        </p>

      </section>

      {/* SEARCH BOX */}
      <section className="relative max-w-[1700px] mx-auto px-6 lg:px-8">

        <div className="bg-white/10 border border-white/10 rounded-[40px] p-6 lg:p-8 backdrop-blur-2xl shadow-2xl shadow-black/30">

          {/* TOP FILTERS */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">

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

            <button className="bg-white/10 border border-white/10 px-5 py-3 rounded-2xl font-bold">
              1 Yolcu
            </button>

            <button className="bg-white/10 border border-white/10 px-5 py-3 rounded-2xl font-bold">
              Economy
            </button>

          </div>

          {/* SEARCH FORM */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">

            <input
              defaultValue="SAW - Sabiha Gökçen"
              className="bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-5 lg:py-6 text-base lg:text-lg outline-none"
            />

            <input
              defaultValue="AMS - Amsterdam"
              className="bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-5 lg:py-6 text-base lg:text-lg outline-none"
            />

            <input
              type="date"
              className="bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-5 lg:py-6 text-base lg:text-lg outline-none"
            />

            <input
              type="date"
              className="bg-slate-700/80 border border-white/10 rounded-3xl px-6 py-5 lg:py-6 text-base lg:text-lg outline-none"
            />

            <a
              href="/flights"
              className="bg-blue-500 hover:bg-blue-600 transition rounded-3xl text-lg lg:text-xl font-black flex items-center justify-center min-h-[64px]"
            >
              Uçuş Ara
            </a>

          </div>

        </div>

      </section>

      {/* AIRLINES */}
      <section className="relative max-w-[1700px] mx-auto px-6 lg:px-8 pt-20">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            Popüler Havayolları
          </h2>

          <a
            href="/flights"
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
              className="bg-white/10 border border-white/10 rounded-[30px] p-6 lg:p-8 hover:border-blue-400/30 hover:scale-[1.02] transition text-center"
            >

              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-2xl mx-auto mb-5"></div>

              <h3 className="font-bold text-base lg:text-lg">
                {airline}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* ROUTES */}
      <section className="relative max-w-[1700px] mx-auto px-6 lg:px-8 pt-24 pb-24">

        <div className="flex items-center justify-between mb-10">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
            En Popüler Rotalar
          </h2>

          <a
            href="/flights"
            className="text-blue-400"
          >
            Tümünü Gör
          </a>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              city: "Amsterdam",
              airline: "Pegasus",
              price: "2490₺",
            },

            {
              city: "Dubai",
              airline: "Emirates",
              price: "6490₺",
            },

            {
              city: "Paris",
              airline: "Air France",
              price: "3190₺",
            },

            {
              city: "Londra",
              airline: "THY",
              price: "3890₺",
            },
          ].map((route, index) => (

            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-[35px] overflow-hidden hover:border-blue-400/30 transition"
            >

              <div className="h-[220px] bg-gradient-to-br from-slate-600 to-slate-800"></div>

              <div className="p-6 lg:p-8">

                <div className="flex items-center justify-between mb-5">

                  <div>

                    <h3 className="text-3xl lg:text-4xl font-black">
                      {route.city}
                    </h3>

                    <p className="text-slate-400 mt-2">
                      İstanbul → {route.city}
                    </p>

                  </div>

                  <p className="text-blue-400 text-sm">
                    {route.airline}
                  </p>

                </div>

                <div className="flex items-end justify-between">

                  <div>

                    <p className="text-slate-400 text-sm">
                      Başlayan fiyat
                    </p>

                    <h4 className="text-4xl lg:text-5xl font-black mt-2">
                      {route.price}
                    </h4>

                  </div>

                  <a
                    href="/flights"
                    className="bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-2xl font-bold"
                  >
                    Gör
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12">

        <div className="max-w-[1700px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>

            <h3 className="text-3xl font-black">
              ✈️ UçGit
            </h3>

            <p className="text-slate-400 mt-3">
              Uygun uçuşları saniyeler içinde bul.
            </p>

          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400">

            <a href="/about">
              Hakkımızda
            </a>

            <a href="/contact">
              İletişim
            </a>

            <a href="/login">
              Giriş
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}