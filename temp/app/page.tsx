export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-5xl">
        
        <h1 className="text-5xl font-bold text-center mb-3">
          Ucuz Uçuş Bul
        </h1>

        <p className="text-center text-gray-500 mb-10">
          En uygun uçuşları karşılaştır ve havayoluna yönlen.
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          
          <input
            type="text"
            placeholder="Nereden?"
            className="border rounded-2xl p-4 text-lg"
          />

          <input
            type="text"
            placeholder="Nereye?"
            className="border rounded-2xl p-4 text-lg"
          />

          <input
            type="date"
            className="border rounded-2xl p-4 text-lg"
          />

          <button className="bg-black text-white rounded-2xl p-4 text-lg font-semibold hover:opacity-80 transition">
            Uçuş Ara
          </button>
        </div>

        <div className="mt-12 space-y-4">

          <div className="border rounded-2xl p-5 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-xl">Pegasus</h2>
              <p className="text-gray-500">
                İstanbul → Berlin
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold text-2xl">2.490₺</p>

              <button className="mt-2 bg-blue-600 text-white px-5 py-2 rounded-xl">
                Siteye Git
              </button>
            </div>
          </div>

          <div className="border rounded-2xl p-5 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-xl">THY</h2>
              <p className="text-gray-500">
                İstanbul → Berlin
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold text-2xl">3.120₺</p>

              <button className="mt-2 bg-blue-600 text-white px-5 py-2 rounded-xl">
                Siteye Git
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}