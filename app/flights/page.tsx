"use client";

import { useState } from "react";

export default function FlightsPage() {

  const flights = [
    {
      airline: "Pegasus",
      from: "SAW",
      to: "AMS",
      departure: "08:30",
      arrival: "11:20",
      duration: "3s 50dk",
      stops: 0,
      baggage: true,
      price: 2490,
    },
    {
      airline: "THY",
      from: "IST",
      to: "LHR",
      departure: "10:15",
      arrival: "13:50",
      duration: "4s 35dk",
      stops: 0,
      baggage: true,
      price: 3890,
    },
    {
      airline: "Lufthansa",
      from: "IST",
      to: "CDG",
      departure: "07:10",
      arrival: "11:40",
      duration: "5s 30dk",
      stops: 1,
      baggage: false,
      price: 2990,
    },
    {
      airline: "Emirates",
      from: "IST",
      to: "DXB",
      departure: "13:40",
      arrival: "19:10",
      duration: "4s 30dk",
      stops: 0,
      baggage: true,
      price: 6490,
    },
  ];

  const [maxPrice, setMaxPrice] = useState(7000);

  const [directOnly, setDirectOnly] = useState(false);

  const [bagOnly, setBagOnly] = useState(false);

  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);

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

  const filteredFlights = flights.filter((flight) => {

    const matchesPrice = flight.price <= maxPrice;

    const matchesDirect = directOnly
      ? flight.stops === 0
      : true;

    const matchesBag = bagOnly
      ? flight.baggage
      : true;

    const matchesAirline =
      selectedAirlines.length === 0
        ? true
        : selectedAirlines.includes(flight.airline);

    return (
      matchesPrice &&
      matchesDirect &&
      matchesBag &&
      matchesAirline
    );

  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-8 max-w-[1700px] mx-auto">

        <a
          href="/"
          className="text-5xl font-black"
        >
          ✈️ UçGit
        </a>

        <div className="flex items-center gap-4">

          <button className="text-lg hover:text-blue-400 transition">
            Giriş Yap
          </button>

          <button className="bg-blue-500 hover:bg-blue-600 transition px-7 py-3 rounded-2xl font-bold">
            Kayıt Ol
          </button>

        </div>

      </nav>

      {/* SEARCH TOP */}
      <section className="max-w-[1700px] mx-auto px-8 pt-10">

        <div className="bg-white/10 border border-white/10 rounded-[36px] p-8 backdrop-blur-xl">

          <div className="grid lg:grid-cols-5 gap-5">

            <input
              defaultValue="SAW - Sabiha Gokcen"
              className="bg-slate-700 border border-white/10 rounded-3xl p-6 text-xl outline-none"
            />

            <input
              defaultValue="AMS - Amsterdam"
              className="bg-slate-700 border border-white/10 rounded-3xl p-6 text-xl outline-none"
            />

            <input
              type="date"
              className="bg-slate-700 border border-white/10 rounded-3xl p-6 text-xl outline-none"
            />

            <div className="bg-slate-700 border border-white/10 rounded-3xl p-6 text-xl">

              <div className="space-y-4">

                <div className="flex items-center justify-between">

                  <span>Yetişkin</span>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() =>
                        setAdult(Math.max(1, adult - 1))
                      }
                      className="bg-slate-600 w-8 h-8 rounded-full"
                    >
                      -
                    </button>

                    <span>{adult}</span>

                    <button
                      onClick={() =>
                        setAdult(adult + 1)
                      }
                      className="bg-slate-600 w-8 h-8 rounded-full"
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
                      className="bg-slate-600 w-8 h-8 rounded-full"
                    >
                      -
                    </button>

                    <span>{child}</span>

                    <button
                      onClick={() =>
                        setChild(child + 1)
                      }
                      className="bg-slate-600 w-8 h-8 rounded-full"
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
                      className="bg-slate-600 w-8 h-8 rounded-full"
                    >
                      -
                    </button>

                    <span>{infant}</span>

                    <button
                      onClick={() =>
                        setInfant(infant + 1)
                      }
                      className="bg-slate-600 w-8 h-8 rounded-full"
                    >
                      +
                    </button>

                  </div>

                </div>

              </div>

            </div>

            <button className="bg-blue-500 hover:bg-blue-600 transition rounded-3xl text-xl font-black">
              Güncelle
            </button>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-[1700px] mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-[350px_1fr] gap-10">

          {/* FILTERS */}
          <div className="bg-white/10 border border-white/10 rounded-[36px] p-8 h-fit sticky top-10">

            <h2 className="text-4xl font-black mb-10">
              Filtreler
            </h2>

            {/* Price */}
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
                className="w-full"
              />

            </div>

            {/* Checkboxes */}
            <div className="space-y-5 mb-10">

              <label className="flex items-center gap-4 text-xl">

                <input
                  type="checkbox"
                  checked={directOnly}
                  onChange={() =>
                    setDirectOnly(!directOnly)
                  }
                />

                Direkt Uçuş

              </label>

              <label className="flex items-center gap-4 text-xl">

                <input
                  type="checkbox"
                  checked={bagOnly}
                  onChange={() =>
                    setBagOnly(!bagOnly)
                  }
                />

                Bagaj Dahil

              </label>

            </div>

            {/* Airlines */}
            <div>

              <p className="text-2xl font-bold mb-6">
                Havayolları
              </p>

              <div className="space-y-4">

                {airlines.map((airline) => (

                  <label
                    key={airline}
                    className="flex items-center gap-4 text-xl"
                  >

                    <input
                      type="checkbox"
                      checked={selectedAirlines.includes(
                        airline
                      )}
                      onChange={() =>
                        toggleAirline(airline)
                      }
                    />

                    {airline}

                  </label>

                ))}

              </div>

            </div>

          </div>

          {/* RESULTS */}
          <div>

            {/* Top */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-14">

              <div>

                <p className="text-slate-400 text-xl">
                  SAW → AMS
                </p>

                <h1 className="text-6xl font-black mt-2">
                  Uçuş Sonuçları
                </h1>

              </div>

              <div className="flex flex-wrap gap-4">

                <button className="bg-blue-500 px-6 py-4 rounded-2xl font-bold text-lg">
                  En Ucuz
                </button>

                <button className="bg-white/10 border border-white/10 px-6 py-4 rounded-2xl font-bold text-lg">
                  En Hızlı
                </button>

                <button className="bg-white/10 border border-white/10 px-6 py-4 rounded-2xl font-bold text-lg">
                  Direkt Uçuş
                </button>

              </div>

            </div>

            {/* FLIGHTS */}
            <div className="space-y-8">

              {filteredFlights.map((flight, index) => (

                <div
                  key={index}
                  className="bg-white/10 border border-white/10 rounded-[40px] p-10 hover:bg-white/15 transition"
                >

                  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">

                    {/* Airline */}
                    <div className="min-w-[220px]">

                      <p className="text-slate-400 text-lg">
                        Havayolu
                      </p>

                      <h2 className="text-4xl font-black mt-3">
                        {flight.airline}
                      </h2>

                      <p className="text-slate-400 mt-3">
                        {flight.baggage
                          ? "Cabin Bag Dahil"
                          : "Bagaj Yok"}
                      </p>

                    </div>

                    {/* Times */}
                    <div className="flex items-center gap-10">

                      <div>

                        <p className="text-6xl font-black">
                          {flight.departure}
                        </p>

                        <p className="text-slate-400 mt-2 text-xl">
                          {flight.from}
                        </p>

                      </div>

                      <div className="text-center min-w-[180px]">

                        <p className="text-slate-400 text-lg">
                          {flight.duration}
                        </p>

                        <div className="w-full h-[2px] bg-white/20 my-5 relative">

                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400"></div>

                        </div>

                        <p className="text-blue-400 font-bold">

                          {flight.stops === 0
                            ? "Direkt Uçuş"
                            : "1 Aktarma"}

                        </p>

                      </div>

                      <div>

                        <p className="text-6xl font-black">
                          {flight.arrival}
                        </p>

                        <p className="text-slate-400 mt-2 text-xl">
                          {flight.to}
                        </p>

                      </div>

                    </div>

                    {/* Price */}
                    <div className="text-right min-w-[220px]">

                      <p className="text-slate-400 text-lg">
                        Kişi başı
                      </p>

                      <h3 className="text-6xl font-black mt-3">
                        {flight.price}₺
                      </h3>

                      <button className="bg-blue-500 hover:bg-blue-600 transition px-10 py-5 rounded-3xl mt-6 font-black text-xl w-full">
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