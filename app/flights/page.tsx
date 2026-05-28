"use client";

import { useSearchParams } from "next/navigation";

export default function FlightsPage() {

  const searchParams = useSearchParams();

  const from = searchParams.get("from") || "SAW";

  const to = searchParams.get("to") || "AMS";

  const flights = [
    {
      airline: "Pegasus",
      logo: "/airlines/pegasus.png",
      departure: "08:30",
      arrival: "11:20",
      duration: "3s 50dk",
      fromCode: "SAW",
      toCode: "AMS",
      price: "2490₺",
      badge: "En Ucuz",
    },

    {
      airline: "THY",
      logo: "/airlines/thy.png",
      departure: "10:15",
      arrival: "13:50",
      duration: "4s 35dk",
      fromCode: "SAW",
      toCode: "AMS",
      price: "3890₺",
      badge: "Önerilen",
    },

    {
      airline: "Lufthansa",
      logo: "/airlines/lufthansa.png",
      departure: "07:10",
      arrival: "11:40",
      duration: "5s 30dk",
      fromCode: "SAW",
      toCode: "AMS",
      price: "2990₺",
      badge: "En Hızlı",
    },

    {
      airline: "Qatar",
      logo: "/airlines/qatar.png",
      departure: "13:40",
      arrival: "19:10",
      duration: "4s 30dk",
      fromCode: "IST",
      toCode: "DOH",
      price: "6490₺",
      badge: "Premium",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#071132] to-[#0f172a] text-white">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/5">

        <div className="max-w-[1920px] mx-auto px-10 py-7 flex items-center justify-between">

          <a
            href="/"
            className="text-6xl font-black tracking-tight"
          >
            ✈️ UçGit
          </a>

          <div className="flex items-center gap-5">

            <button className="text-lg hover:text-blue-400 transition">
              Giriş Yap
            </button>

            <button className="bg-gradient-to-r from-blue-500 to-blue-400 px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition">
              Kayıt Ol
            </button>

          </div>

        </div>

      </nav>

      {/* SEARCH */}
      <section className="relative max-w-[1920px] mx-auto px-10 pt-16">

        <div className="bg-white/10 border border-white/10 rounded-[42px] p-10 backdrop-blur-2xl shadow-2xl shadow-black/30">

          <div className="grid lg:grid-cols-5 gap-6">

            <input
              defaultValue={from}
              className="bg-slate-700/80 border border-white/10 rounded-3xl p-7 text-2xl outline-none"
            />

            <input
              defaultValue={to}
              className="bg-slate-700/80 border border-white/10 rounded-3xl p-7 text-2xl outline-none"
            />

            <input
              type="date"
              className="bg-slate-700/80 border border-white/10 rounded-3xl p-7 text-2xl outline-none"
            />

            <div className="bg-slate-700/80 border border-white/10 rounded-3xl p-7 flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-400">
                  Yolcu
                </p>

                <p className="text-2xl font-bold">
                  1 Yetişkin
                </p>
              </div>

              <p className="text-3xl">
                👤
              </p>

            </div>

            <button className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-3xl text-2xl font-black shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition">
              Uçuş Ara
            </button>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="relative max-w-[1920px] mx-auto px-10 py-20">

        <div className="grid lg:grid-cols-[380px_1fr] gap-12">

          {/* FILTERS */}
          <div className="bg-white/10 border border-white/10 rounded-[42px] p-10 h-fit backdrop-blur-2xl shadow-2xl shadow-black/20 sticky top-32">

            <div className="flex items-center justify-between mb-10">

              <h2 className="text-5xl font-black">
                Filtreler
              </h2>

              <button className="text-blue-400 hover:text-blue-300">
                Temizle
              </button>

            </div>

            <div className="mb-12">

              <div className="flex items-center justify-between mb-5">

                <p className="text-2xl font-bold">
                  Fiyat
                </p>

                <p className="text-blue-400 font-bold">
                  7000₺
                </p>

              </div>

              <input
                type="range"
                className="w-full accent-blue-500"
              />

            </div>

            <div className="space-y-6">

              <label className="flex items-center gap-4 text-2xl">

                <input type="checkbox" />

                Direkt Uçuş

              </label>

              <label className="flex items-center gap-4 text-2xl">

                <input type="checkbox" />

                Bagaj Dahil

              </label>

            </div>

          </div>

          {/* RESULTS */}
          <div>

            <div className="flex items-center justify-between mb-14">

              <div>

                <p className="text-slate-400 text-2xl">
                  {from} → {to}
                </p>

                <h1 className="text-8xl font-black tracking-tight mt-3">
                  Uçuş Sonuçları
                </h1>

              </div>

            </div>

            <div className="space-y-8">

              {flights.map((flight, index) => (

                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-700/40 to-slate-800/40 border border-white/10 rounded-[42px] p-12 hover:scale-[1.01] hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/10 transition duration-300 backdrop-blur-xl"
                >

                  <div className="mb-7">

                    <span className="bg-blue-500/20 border border-blue-400/20 text-blue-300 px-5 py-2 rounded-full text-sm font-bold">
                      {flight.badge}
                    </span>

                  </div>

                  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-12">

                    {/* AIRLINE */}
                    <div className="min-w-[220px]">

                      <p className="text-slate-400 text-lg">
                        Havayolu
                      </p>

                      <div className="flex items-center gap-5 mt-4">

                        <img
                          src={flight.logo}
                          alt={flight.airline}
                          className="w-16 h-16 object-contain bg-white rounded-2xl p-2"
                        />

                        <div>

                          <h2 className="text-4xl font-black tracking-tight">
                            {flight.airline}
                          </h2>

                          <p className="text-slate-400 text-sm mt-1">
                            Cabin Bag Dahil
                          </p>

                        </div>

                      </div>

                    </div>

                    {/* TIMES */}
                    <div className="flex items-center gap-10">

                      <div>

                        <p className="text-5xl font-black tracking-tight">
                          {flight.departure}
                        </p>

                        <p className="text-slate-400 mt-3 text-2xl">
                          {flight.fromCode}
                        </p>

                      </div>

                      <div className="text-center min-w-[200px]">

                        <p className="text-slate-400">
                          {flight.duration}
                        </p>

                        <div className="w-full h-[2px] bg-white/20 my-5 relative">

                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-blue-400"></div>

                        </div>

                        <p className="text-blue-400 font-bold">
                          Direkt Uçuş
                        </p>

                      </div>

                      <div>

                        <p className="text-5xl font-black tracking-tight">
                          {flight.arrival}
                        </p>

                        <p className="text-slate-400 mt-3 text-2xl">
                          {flight.toCode}
                        </p>

                      </div>

                    </div>

                    {/* PRICE */}
                    <div className="text-right min-w-[260px]">

                      <p className="text-slate-400 text-lg">
                        Kişi başı
                      </p>

                      <h3 className="text-6xl font-black mt-3 tracking-tight">
                        {flight.price}
                      </h3>

                      <button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:scale-105 transition duration-300 px-10 py-5 rounded-3xl mt-7 font-black text-xl w-full shadow-lg shadow-blue-500/20">
                        Siteye Git
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}