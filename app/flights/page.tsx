export default function FlightsPage() {

  const flights = [
    {
      airline: "Pegasus",
      departure: "08:30",
      arrival: "11:20",
      from: "SAW",
      to: "AMS",
      duration: "3s 50dk",
      price: "2490₺",
    },

    {
      airline: "THY",
      departure: "10:15",
      arrival: "13:50",
      from: "IST",
      to: "LHR",
      duration: "4s 35dk",
      price: "3890₺",
    },

    {
      airline: "Lufthansa",
      departure: "07:10",
      arrival: "11:40",
      from: "IST",
      to: "CDG",
      duration: "5s 30dk",
      price: "2990₺",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white p-10">

      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-center justify-between mb-16">

          <div>

            <p className="text-blue-400 text-lg">
              SAW → AMS
            </p>

            <h1 className="text-7xl font-black mt-3">
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

          </div>

        </div>

        <div className="space-y-8">

          {flights.map((flight, index) => (

            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-[40px] p-10"
            >

              <div className="flex items-center justify-between">

                {/* AIRLINE */}
                <div className="w-[220px]">

                  <p className="text-slate-400 text-sm">
                    Havayolu
                  </p>

                  <h2 className="text-4xl font-black mt-3">
                    {flight.airline}
                  </h2>

                </div>

                {/* TIMES */}
                <div className="flex items-center gap-12">

                  <div>

                    <p className="text-6xl font-black">
                      {flight.departure}
                    </p>

                    <p className="text-slate-400 mt-2">
                      {flight.from}
                    </p>

                  </div>

                  <div className="text-center min-w-[180px]">

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

                  <div>

                    <p className="text-6xl font-black">
                      {flight.arrival}
                    </p>

                    <p className="text-slate-400 mt-2">
                      {flight.to}
                    </p>

                  </div>

                </div>

                {/* PRICE */}
                <div className="text-right w-[220px]">

                  <p className="text-slate-400 text-sm">
                    Kişi başı
                  </p>

                  <h3 className="text-5xl font-black mt-2">
                    {flight.price}
                  </h3>

                  <button className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl mt-6 font-bold w-full">
                    Siteye Git
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}