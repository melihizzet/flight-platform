export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden relative">

      {/* BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[160px] rounded-full"></div>

      {/* HEADER */}
      <header className="relative z-20 border-b border-white/10 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">

          <a
            href="/"
            className="flex items-center gap-3"
          >

            <div className="w-9 h-9 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">

              <span className="text-blue-400 text-lg rotate-[-25deg]">
                ✈️
              </span>

            </div>

            <h1 className="text-xl font-black tracking-tight">
              Uç<span className="text-blue-500">Git</span>
            </h1>

          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-10 pb-8 text-center">

        <p className="text-blue-400 font-semibold text-xs uppercase tracking-wider">
          İletişim
        </p>

        <h1 className="text-2xl md:text-3xl font-black mt-3">
          Bizimle iletişime geç
        </h1>

        <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
          Sorularınız, önerileriniz veya iş birlikleri için bize ulaşabilirsiniz.
        </p>

      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 pb-14">

        <div className="grid md:grid-cols-2 gap-5 items-start">

          {/* LEFT */}
          <div className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur-xl h-fit">

            <h2 className="text-xl md:text-2xl font-black mb-6">
              İletişim Bilgileri
            </h2>

            <div className="space-y-5">

              <div>
                <p className="text-slate-400 text-xs mb-1">
                  E-posta
                </p>

                <h3 className="text-base font-bold">
                  support@ucgit.com
                </h3>
              </div>

              <div>
                <p className="text-slate-400 text-xs mb-1">
                  Telefon
                </p>

                <h3 className="text-base font-bold">
                  +90 850 000 00 00
                </h3>
              </div>

              <div>
                <p className="text-slate-400 text-xs mb-1">
                  Adres
                </p>

                <h3 className="text-base font-bold">
                  İstanbul, Türkiye
                </h3>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white/10 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <h2 className="text-xl md:text-2xl font-black mb-6">
              Mesaj Gönder
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Ad Soyad"
                className="w-full bg-[#0b1736] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition"
              />

              <input
                type="email"
                placeholder="E-posta"
                className="w-full bg-[#0b1736] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition"
              />

              <textarea
                placeholder="Mesajınız"
                rows={5}
                className="w-full bg-[#0b1736] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none resize-none focus:border-blue-400 transition"
              />

              <button className="w-full bg-blue-500 hover:bg-blue-600 transition py-3 rounded-xl text-sm font-semibold">
                Gönder
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}