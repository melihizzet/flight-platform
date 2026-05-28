export default function FlightsPage() {

  const flights = [
    {
      airline: "Pegasus",
      from: "SAW",
      to: "AMS",
      departure: "08:30",
      arrival: "11:20",
      duration: "3s 50dk",
      direct: true,
      price: "2.490₺",
    },
    {
      airline: "THY",
      from: "IST",
      to: "LHR",
      departure: "10:15",
      arrival: "13:50",
      duration: "4s 35dk",
      direct: true,
      price: "3.890₺",
    },
    {
      airline: "Lufthansa",
      from: "IST",
      to: "CDG",
      departure: "07:10",
      arrival: "11:40",
      duration: "5s 30dk",
      direct: false,
      price: "2.990₺",
    },
    {
      airline: "Emirates",
      from: "IST",
      to: "DXB",
      departure: "13:40",
      arrival: "19:10",
      duration: "4s 30dk",
      direct: true,
      price: "6.490₺",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-8 max-w-[1600px] mx-auto">

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

      {/* Search Top */}
      <section className="max-w-[1600px] mx-auto px-8 pt-10">

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

            <select className="bg-slate-700 border border-white/10 rounded-3xl p-6 text-xl outline-none">

              <option>1 Yolcu</option>
              <option>2 Yolcu</option>
              <option>3 Yolcu</option>

            </select>

            <button className="bg-blue-500 hover:bg-blue-600 transition rounded-3xl text-xl font-black">
              Güncelle
            </button>

          </div>

        </div>

      </section>

      {/* Results */}
      <section className="max-w-[1600px] mx-auto px-8 py-20">

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

          {/* Filters */}
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

        {/* Flight Cards */}
        <div className="space-y-8">

          {flights.map((flight, index) => (

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
                    Cabin Bag Dahil
                  </p>

                </div>

                {/* Times */}
                <div className="flex items-center gap-10">

                  {/* Departure */}
                  <div>

                    <p className="text-6xl font-black">
                      {flight.departure}
                    </p>

                    <p className="text-slate-400 mt-2 text-xl">
                      {flight.from}
                    </p>

                  </div>

                  {/* Line */}
                  <div className="text-center min-w-[180px]">

                    <p className="text-slate-400 text-lg">
                      {flight.duration}
                    </p>

                    <div className="w-full h-[2px] bg-white/20 my-5 relative">

                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-400"></div>

                    </div>

                    <p className="text-blue-400 font-bold">
                      {flight.direct ? "Direkt Uçuş" : "1 Aktarma"}
                    </p>

                  </div>

                  {/* Arrival */}
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
                    {flight.price}
                  </h3>

                  <button className="bg-blue-500 hover:bg-blue-600 transition px-10 py-5 rounded-3xl mt-6 font-black text-xl w-full">
                    Siteye Git
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