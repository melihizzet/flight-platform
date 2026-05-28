export default function FlightsPage() {

  const flights = [
    {
      airline: "Pegasus",
      logo: "/airlines/pegasus.png",
      departure: "08:30",
      arrival: "11:20",
      from: "SAW",
      to: "AMS",
      duration: "3s 50dk",
      price: "2490₺",
      baggage: "15 KG Kabin Bagajı",
    },

    {
      airline: "THY",
      logo: "/airlines/thy.png",
      departure: "10:15",
      arrival: "13:50",
      from: "IST",
      to: "LHR",
      duration: "4s 35dk",
      price: "3890₺",
      baggage: "20 KG Bagaj Dahil",
    },

    {
      airline: "Lufthansa",
      logo: "/airlines/lufthansa.png",
      departure: "07:10",
      arrival: "11:40",
      from: "IST",
      to: "CDG",
      duration: "5s 30dk",
      price: "2990₺",
      baggage: "8 KG Kabin Bagajı",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* TOP SEARCH BAR */}
      <section className="border-b border-white/5 bg-[#06112b] sticky top-0 z-50 backdrop-blur-xl">

        <div className="max-w-[1800px] mx-auto px-8 py-6">

          <div className="flex items-center justify-between mb-5">

            <a
              href="/"
              className="text-4xl font-black flex items-center gap-3"
            >
              ✈️ UçGit
            </a>

            <div className="flex items-center gap-4">

              <button className="text-slate-300 hover:text-white">
                Giriş Yap
              </button>

              <button className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-2xl font-bold transition">
                Kayıt Ol
              </button>

            </div>

          </div>

          {/* SEARCH FORM */}
          <div className="bg-white/10 border border-white/10 rounded-[35px] p-5">

            <div className="grid lg:grid-cols-5 gap-4">

              <input
                defaultValue="SAW - Sabiha Gökçen"
                className="bg-slate-700/70 border border-white/10 rounded-2xl px-5 py-5 text-lg outline-none"
              />

              <input
                defaultValue="AMS - Amsterdam"
                className="bg-slate-700/70 border border-white/10 rounded-2xl px-5 py-5 text-lg outline-none"
              />

              <input
                type="date"
                className="bg-slate-700/70 border border-white/10 rounded-2xl px-5 py-5 text-lg outline-none"
              />

              <div className="bg-slate-700/70 border border-white/10 rounded-2xl px-5 py-5">

                <p className="text-sm text-slate-400">
                  Yolcu
                </p>

                <p className="text-lg font-bold mt-1">
                  1 Yetişkin
                </p>

              </div>

              <button className="bg-blue-500 hover:bg-blue-600 transition rounded-2xl font-black text-xl">
                Ara
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="max-w-[1800px] mx-auto px-8 py-10">

        <div className="grid lg:grid-cols-[340px_1fr] gap-8">

          {/* FILTERS */}
          <aside className="space-y-5 sticky top-[170px] h-fit">

            {/* FILTER HEADER */}
            <div className="bg-white/10 border border-white/10 rounded-[30px] p-6">

              <div className="flex items-center justify-between mb-5">

                <h2 className="text-3xl font-black">
                  Filtreler
                </h2>

                <button className="text-blue-400 text-sm">
                  Temizle
                </button>

              </div>

              {/* PRICE */}
              <div className="mb-8">

                <div className="flex items-center justify-between mb-4">

                  <p className="font-bold">
                    Fiyat
                  </p>

                  <p className="text-blue-400">
                    7000₺
                  </p>

                </div>

                <input
                  type="range"
                  className="w-full accent-blue-500"
                />

              </div>

              {/* CHECKBOX */}
              <div className="space-y-4">

                <label className="flex items-center gap-3">

                  <input type="checkbox" />

                  Direkt Uçuş

                </label>

                <label className="flex items-center gap-3">

                  <input type="checkbox" />

                  Bagaj Dahil

                </label>

              </div>

            </div>

            {/* AIRLINES */}
            <div className="bg-white/10 border border-white/10 rounded-[30px] p-6">

              <h3 className="text-2xl font-black mb-6">
                Havayolları
              </h3>

              <div className="space-y-5">

                <label className="flex items-center gap-3">

                  <input type="checkbox" />

                  Pegasus

                </label>

                <label className="flex items-center gap-3">

                  <input type="checkbox" />

                  THY

                </label>

                <label className="flex items-center gap-3">

                  <input type="checkbox" />

                  Lufthansa

                </label>

              </div>

            </div>

            {/* HOURS */}
            <div className="bg-white/10 border border-white/10 rounded-[30px] p-6">

              <h3 className="text-2xl font-black mb-6">
                Kalkış Saati
              </h3>

              <div className="space-y-4">

                <label className="flex items-center gap-3">

                  <input type="checkbox" />

                  Sabah

                </label>

                <label className="flex items-center gap-3">

                  <input type="checkbox" />

                  Öğlen

                </label>

                <label className="flex items-center gap-3">

                  <input type="checkbox" />

                  Akşam

                </label>

              </div>

            </div>

          </aside>

          {/* RESULTS */}
          <div>

            {/* TOP */}
            <div className="flex items-center justify-between mb-10">

              <div>

                <p className="text-blue-400 text-lg">
                  SAW → AMS
                </p>

                <h1 className="text-6xl font-black mt-2">
                  Uçuş Sonuçları
                </h1>

              </div>

              <div className="flex gap-4">

                <button className="bg-blue-500 px-6 py-4 rounded-2xl font-bold">
                  En Ucuz
                </button>

                <button className="bg-white/10 border border-white/10 px-6 py-4 rounded-2xl font-bold">
                  En Hızlı
                </button>

                <button className="bg-white/10 border border-white/10 px-6 py-4 rounded-2xl font-bold">
                  Direkt
                </button>

              </div>

            </div>

            {/* RESULT COUNT */}
            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 mb-8 flex items-center justify-between">

              <p className="text-slate-300">
                248 uçuş bulundu
              </p>

              <p className="text-slate-400 text-sm">
                En düşük fiyatlara göre sıralandı
              </p>

            </div>

            {/* FLIGHT CARDS */}
            <div className="space-y-6">

              {flights.map((flight, index) => (

                <div
                  key={index}
                  className="bg-white/10 border border-white/10 rounded-[35px] p-8 hover:border-blue-400/30 transition"
                >

                  <div className="grid lg:grid-cols-[220px_1fr_260px] gap-8 items-center">

                    {/* AIRLINE */}
                    <div className="flex items-center gap-5">

                      <img
                        src={flight.logo}
                        alt={flight.airline}
                        className="w-16 h-16 bg-white rounded-2xl p-2 object-contain"
                      />

                      <div>

                        <h2 className="text-3xl font-black">
                          {flight.airline}
                        </h2>

                        <p className="text-slate-400 text-sm mt-2">
                          {flight.baggage}
                        </p>

                      </div>

                    </div>

                    {/* TIMES */}
                    <div className="flex items-center justify-center gap-12">

                      {/* DEPARTURE */}
                      <div>

                        <p className="text-5xl font-black">
                          {flight.departure}
                        </p>

                        <p className="text-slate-400 mt-2 text-lg">
                          {flight.from}
                        </p>

                      </div>

                      {/* DURATION */}
                      <div className="text-center min-w-[220px]">

                        <p className="text-slate-400 text-sm">
                          {flight.duration}
                        </p>

                        <div className="w-full h-[2px] bg-white/20 my-4 relative">

                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400"></div>

                        </div>

                        <p className="text-blue-400 font-bold text-sm">
                          Direkt Uçuş
                        </p>

                      </div>

                      {/* ARRIVAL */}
                      <div>

                        <p className="text-5xl font-black">
                          {flight.arrival}
                        </p>

                        <p className="text-slate-400 mt-2 text-lg">
                          {flight.to}
                        </p>

                      </div>

                    </div>

                    {/* PRICE */}
                    <div className="bg-[#0b1736] border border-white/10 rounded-[30px] p-6 text-center">

                      <p className="text-slate-400 text-sm">
                        Kişi başı
                      </p>

                      <h3 className="text-5xl font-black mt-3">
                        {flight.price}
                      </h3>

                      <p className="text-red-400 text-sm mt-3">
                        Son 2 koltuk
                      </p>

                      <button className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl mt-6 font-bold w-full">
                        Seç
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