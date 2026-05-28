export default function ContactPage() {

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-8 pt-24 pb-20 text-center">

        <p className="text-blue-400 font-semibold text-lg">
          İletişim
        </p>

        <h1 className="text-7xl font-black mt-6">
          Bizimle iletişime geç
        </h1>

        <p className="text-slate-400 text-2xl mt-8 max-w-[800px] mx-auto">
          Sorularınız, önerileriniz veya iş birlikleri için bize ulaşabilirsiniz.
        </p>

      </section>

      {/* CONTENT */}
      <section className="max-w-[1400px] mx-auto px-8 pb-32">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="bg-white/10 border border-white/10 rounded-[40px] p-10">

            <h2 className="text-4xl font-black mb-10">
              İletişim Bilgileri
            </h2>

            <div className="space-y-8">

              <div>

                <p className="text-slate-400 text-sm">
                  E-posta
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  support@ucgit.com
                </h3>

              </div>

              <div>

                <p className="text-slate-400 text-sm">
                  Telefon
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  +90 850 000 00 00
                </h3>

              </div>

              <div>

                <p className="text-slate-400 text-sm">
                  Adres
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  İstanbul, Türkiye
                </h3>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white/10 border border-white/10 rounded-[40px] p-10">

            <h2 className="text-4xl font-black mb-10">
              Mesaj Gönder
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Ad Soyad"
                className="w-full bg-slate-800 border border-white/10 rounded-2xl px-5 py-5 outline-none"
              />

              <input
                type="email"
                placeholder="E-posta"
                className="w-full bg-slate-800 border border-white/10 rounded-2xl px-5 py-5 outline-none"
              />

              <textarea
                placeholder="Mesajınız"
                rows={6}
                className="w-full bg-slate-800 border border-white/10 rounded-2xl px-5 py-5 outline-none resize-none"
              />

              <button className="w-full bg-blue-500 hover:bg-blue-600 transition py-5 rounded-2xl font-black text-xl">
                Gönder
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}