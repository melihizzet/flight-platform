export default function Home() {
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
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 mt-14 shadow-2xl">

          <div className="grid md:grid-cols-4 gap-4">

            <input
              type="text"
              placeholder="Nereden?"
              className="bg-white/10 border border-white/10 rounded-2xl p-4 text-lg outline-none"
            />

            <input
              type="text"
              placeholder="Nereye?"
              className="bg-white/10 border border-white/10 rounded-2xl p-4 text-lg outline-none"
            />

            <input
              type="date"
              className="bg-white/10 border border-white/10 rounded-2xl p-4 text-lg outline-none"
            />

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

            {/* Card */}
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

            {/* Card */}
            <div className="bg-white/10 border border-white/10 rounded-3xl p-6 flex items-center justify-between hover:bg-white/15 transition">

              <div>
                <h4 className="text-2xl font-bold">
                  THY
                </h4>

                <p className="text-slate-300 mt-1">
                  İstanbul → Paris
                </p>

                <p className="text-sm text-slate-400 mt-2">
                  Direkt Uçuş • 3s 20dk
                </p>
              </div>

              <div className="text-right">

                <p className="text-3xl font-bold">
                  3.120₺
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