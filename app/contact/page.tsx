export default function ContactPage() {

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden relative">

      {/* BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[160px] rounded-full"></div>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-14 text-center">

        <p className="text-blue-400 font-semibold text-base">
          İletişim
        </p>

        <h1 className="text-2xl md:text-4xl font-black mt-6">
          Bizimle iletişime geç
        </h1>

        <p className="text-slate-400 text-base md:text-lg mt-6 max-w-2xl mx-auto">
          Sorularınız, önerileriniz veya iş birlikleri için bize ulaşabilirsiniz.
        </p>

      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT */}
          <div className="bg-white/10 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl">

            <h2 className="text-2xl md:text-3xl font-black mb-8">
              İletişim Bilgileri
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-slate-400 text-xs">E-posta</p>
                <h3 className="text-lg md:text-xl font-bold mt-1">
                  support@ucgit.com
                </h3>
              </div>

              <div>
                <p className="text-slate-400 text-xs">Telefon</p>
                <h3 className="text-lg md:text-xl font-bold mt-1">
                  +90 850 000 00 00
                </h3>
              </div>

              <div>
                <p className="text-slate-400 text-xs">Adres</p>
                <h3 className="text-lg md:text-xl font-bold mt-1">
                  İstanbul, Türkiye
                </h3>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white/10 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl">

            <h2 className="text-2xl md:text-3xl font-black mb-8">
              Mesaj Gönder
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Ad Soyad"
                className="w-full bg-[#0b1736] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-400 transition"
              />

              <input
                type="email"
                placeholder="E-posta"
                className="w-full bg-[#0b1736] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-400 transition"
              />

              <textarea
                placeholder="Mesajınız"
                rows={5}
                className="w-full bg-[#0b1736] border border-white/10 rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-400 transition"
              />

              <button className="w-full bg-blue-500 hover:bg-blue-600 transition py-3 rounded-xl font-semibold">
                Gönder
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}