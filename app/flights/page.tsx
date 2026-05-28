# `app/flights/page.tsx`

```tsx
"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function FlightsPage() {

  const searchParams = useSearchParams();

  const from = searchParams.get("from") || "SAW";

  const to = searchParams.get("to") || "AMS";

  const allFlights = [
    {
      airline: "Pegasus",
      from: "SAW",
      to: "AMS",
      departure: "08:30",
      arrival: "11:20",
      duration: "3s 50dk",
      durationNumber: 230,
      stops: 0,
      baggage: true,
      price: 2490,
      badge: "En Ucuz",
    },
    {
      airline: "THY",
      from: "SAW",
      to: "AMS",
      departure: "10:15",
      arrival: "13:50",
      duration: "4s 35dk",
      durationNumber: 275,
      stops: 0,
      baggage: true,
      price: 3890,
      badge: "Önerilen",
    },
    {
      airline: "Lufthansa",
      from: "SAW",
      to: "AMS",
      departure: "07:10",
      arrival: "11:40",
      duration: "5s 30dk",
      durationNumber: 330,
      stops: 1,
      baggage: false,
      price: 2990,
      badge: "En Hızlı",
    },
    {
      airline: "Emirates",
      from: "IST",
      to: "DXB",
      departure: "13:40",
      arrival: "19:10",
      duration: "4s 30dk",
      durationNumber: 270,
      stops: 0,
      baggage: true,
      price: 6490,
      badge: "Premium",
    },
  ];

  const [maxPrice, setMaxPrice] = useState(7000);

  const [directOnly, setDirectOnly] = useState(false);

  const [bagOnly, setBagOnly] = useState(false);

  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);

  const [sortType, setSortType] = useState("cheap");

  const [adult, setAdult] = useState(1);

  const [child, setChild] = useState(0);

  const [infant, setInfant] = useState(0);

  const airlines = [
    "Pegasus",
    "THY",
    "Lufthansa",
    "Emirates",
  ];

  const toggleAirline = (airline: string) => {

    if (selectedAirlines.includes(airline)) {

      setSelectedAirlines(
        selectedAirlines.filter((a) => a !== airline)
      );

    } else {

      setSelectedAirlines([
        ...selectedAirlines,
        airline,
      ]);

    }

  };

  const clearFilters = () => {

    setMaxPrice(7000);

    setDirectOnly(false);

    setBagOnly(false);

    setSelectedAirlines([]);

  };

  let filteredFlights = allFlights.filter((flight) => {

    const matchesRoute =
      flight.from === from &&
      flight.to === to;

    const matchesPrice =
      flight.price <= maxPrice;

    const matchesDirect =
      directOnly
        ? flight.stops === 0
        : true;

    const matchesBag =
      bagOnly
        ? flight.baggage
        : true;

    const matchesAirline =
      selectedAirlines.length === 0
        ? true
        : selectedAirlines.includes(
            flight.airline
          );

    return (
      matchesRoute &&
      matchesPrice &&
      matchesDirect &&
      matchesBag &&
      matchesAirline
    );

  });

  if (sortType === "cheap") {

    filteredFlights.sort(
      (a, b) => a.price - b.price
    );

  }

  if (sortType === "fast") {

    filteredFlights.sort(
      (a, b) =>
        a.durationNumber -
        b.durationNumber
    );

  }

  if (sortType === "direct") {

    filteredFlights = filteredFlights.filter(
      (flight) => flight.stops === 0
    );

  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#071132] to-[#0f172a] text-white overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/5">

        <div className="max-w-[1920px] mx-auto px-8 py-6 flex items-center justify-between">

          <a
            href="/"
            className="text-5xl font-black tracking-tight hover:scale-105 transition"
          >
            ✈️ UçGit
          </a>

          <div className="flex items-center gap-4">

            <button className="text-lg hover:text-blue-400 transition">
              Giriş Yap
            </button>

            <button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:scale-105 transition px-7 py-3 rounded-2xl font-bold shadow-lg shadow-blue-500/20">
              Kayıt Ol
            </button>

          </div>

        </div>

      </nav>

      <section className="relative max-w-[1920px] mx-auto px-8 pt-16">

        <div className="bg-white/10 border border-white/10 rounded-[40px] p-8 backdrop-blur-2xl shadow-2xl shadow-black/30">

          <div className="grid lg:grid-cols-5 gap-5">

            <input
              defaultValue={from}
              className="bg-slate-700/80 border border-white/10 rounded-3xl p-6 text-xl outline-none focus:border-blue-400 transition"
            />

            <input
              defaultValue={to}
              className="bg-slate-700/80 border border-white/10 rounded-3xl p-6 text-xl outline-none focus:border-blue-400 transition"
            />

            <input
              type="date"
              className="bg-slate-700/80 border border-white/10 rounded-3xl p-6 text-xl outline-none focus:border-blue-400 transition"
            />

            <div className="bg-slate-700/80 border border-white/10 rounded-3xl p-6">

              <div className="space-y-4">

                <div className="flex items-center justify-between">

                  <span>Yetişkin</span>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() =>
                        setAdult(Math.max(1, adult - 1))
                      }
                      className="bg-slate-600 hover:bg-slate-500 w-8 h-8 rounded-full transition"
                    >
                      -
                    </button>

                    <span>{adult}</span>

                    <button
                      onClick={() =>
                        setAdult(adult + 1)
                      }
                      className="bg-slate-600 hover:bg-slate-500 w-8 h-8 rounded-full transition"
                    >
                      +
                    </button>

                  </div>

                </div>

                <div className="flex items-center justify-between">

                  <span>Çocuk</span>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() =>
                        setChild(Math.max(0, child - 1))
                      }
                      className="bg-slate-600 hover:bg-slate-500 w-8 h-8 rounded-full transition"
                    >
                      -
                    </button>

                    <span>{child}</span>

                    <button
                      onClick={() =>
                        setChild(child + 1)
                      }
                      className="bg-slate-600 hover:bg-slate-500 w-8 h-8 rounded-full transition"
                    >
                      +
                    </button>

                  </div>

                </div>

                <div className="flex items-center justify-between">

                  <span>Bebek</span>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() =>
                        setInfant(Math.max(0, infant - 1))
                      }
                      className="bg-slate-600 hover:bg-slate-500 w-8 h-8 rounded-full transition"
                    >
                      -
                    </button>

                    <span>{infant}</span>

                    <button
                      onClick={() =>
                        setInfant(infant + 1)
                      }
                      className="bg-slate-600 hover:bg-slate-500 w-8 h-8 rounded-full transition"
                    >
                      +
                    </button>

                  </div>

                </div>

              </div>

            </div>

            <button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:scale-[1.02] transition rounded-3xl text-xl font-black shadow-xl shadow-blue-500/20">
              Güncelle
            </button>

          </div>

        </div>

      </section>

      <section className="relative max-w-[1920px] mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-[380px_1fr] gap-10">

          <div className="bg-white/10 border border-white/10 rounded-[40px] p-8 h-fit sticky top-32 backdrop-blur-2xl shadow-2xl shadow-black/20">

            <div className="flex items-center justify-between mb-10">

              <h2 className="text-4xl font-black">
                Filtreler
              </h2>

              <button
                onClick={clearFilters}
                className="text-blue-400 hover:text-blue-300 transition"
              >
                Temizle
              </button>

            </div>

            <div className="mb-10">

              <div className="flex items-center justify-between mb-4">

                <p className="text-2xl font-bold">
                  Fiyat
                </p>

                <p className="text-blue-400 font-bold">
                  {maxPrice}₺
                </p>

              </div>

              <input
                type="range"
                min="1000"
                max="7000"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Number(e.target.value))
                }
                className="w-full accent-blue-500"
              />

            </div>

          </div>

          <div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-14">

              <div>

                <p className="text-slate-400 text-xl">
                  {from} → {to}
                </p>

                <h1 className="text-8xl font-black tracking-tight mt-2">
                  Uçuş Sonuçları
                </h1>

              </div>

            </div>

            <div className="space-y-8">

              {filteredFlights.map((flight, index) => (

                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-700/40 to-slate-800/40 border border-white/10 rounded-[40px] p-10 hover:scale-[1.01] hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/10 transition duration-300 backdrop-blur-xl"
                >

                  <div className="mb-6">

                    <span className="bg-blue-500/20 border border-blue-400/20 text-blue-300 px-5 py-2 rounded-full text-sm font-bold">
                      {flight.badge}
                    </span>

                  </div>

                  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">

                    <div className="min-w-[180px]">

                      <p className="text-slate-400">
                        Havayolu
                      </p>

                      <h2 className="text-4xl font-black mt-3 tracking-tight">
                        {flight.airline}
                      </h2>

                    </div>

                    <div className="flex items-center gap-8">

                      <div>

                        <p className="text-7xl font-black tracking-tight">
                          {flight.departure}
                        </p>

                        <p className="text-slate-400 mt-2 text-xl">
                          {flight.from}
                        </p>

                      </div>

                      <div className="text-center min-w-[160px]">

                        <p className="text-slate-400 text-sm">
                          {flight.duration}
                        </p>

                        <div className="w-full h-[2px] bg-white/20 my-5 relative">

                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400"></div>

                        </div>

                      </div>

                      <div>

                        <p className="text-7xl font-black tracking-tight">
                          {flight.arrival}
                        </p>

                        <p className="text-slate-400 mt-2 text-xl">
                          {flight.to}
                        </p>

                      </div>

                    </div>

                    <div className="text-right min-w-[220px]">

                      <p className="text-slate-400">
                        Kişi başı
                      </p>

                      <h3 className="text-6xl font-black mt-3 tracking-tight">
                        {flight.price}₺
                      </h3>

                      <button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:scale-105 transition duration-300 px-10 py-4 rounded-3xl mt-6 font-black text-lg w-full shadow-lg shadow-blue-500/20">
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
```
