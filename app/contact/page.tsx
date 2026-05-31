export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden relative">

      {/* BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[160px] rounded-full"></div>

      {/* HEADER */}
      <header className="relative z-20 border-b border-white/10 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">

          <a
            href="/"
            className="flex items-center gap-3"
          >

            <div className="w-10 h-10 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">

              <span className="text-blue-400 text-xl rotate-[-25deg]">
                ✈️
              </span>

            </div>

            <h1 className="text-2xl font-black tracking-tight">
              Uç<span className="text-blue-500">Git</span>
            </h1>

          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10 text-center relative z-10">

        <p className="text-blue-400 font-semibold text-[11px] tracking-[0.25em] uppercase">
          İLETİŞİM
        </p>

        <h1 className="text-3xl md:text-5xl font-black mt-4 leading-tight">
          Bizimle iletişime geç
        </h1>

        <p className="text-slate-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
          Sorularınız, önerileriniz veya iş birlikleri için bize ulaşabilirsiniz.
        </p>

      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 pb-24 relative z-10">

        <div className="grid md:grid-cols-2 gap-6 items-start">

          {/* LEFT */}
          <div className="bg-white/10 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl h-fit">

            <h2 className="text-2xl font-black mb-8">
              İletişim Bilgileri
            </h2>

            <div className="space-y-6">

              {/* MAIL */}
              <div>

                <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">
                  E-posta
                </p>

                <div className="flex flex-col gap-3 text-sm">

                  <a
                    href="mailto:support@ucgit.com"
                    className="hover:text-blue-400 transition font-semibold"
                  >
                    support@ucgit.com
                  </a>

                  <a
                    href="mailto:info@ucgit.com"
                    className="hover:text-blue-400 transition font-semibold"
                  >
                    info@ucgit.com
                  </a>

                </div>

              </div>

              {/* PHONE */}
              <div>

                <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">
                  Telefon
                </p>

                <h3 className="text-lg font-bold">
                  +90 850 000 00 00
                </h3>

              </div>

              {/* ADDRESS */}
              <div>

                <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">
                  Adres
                </p>

                <h3 className="text-lg font-bold">
                  İstanbul, Türkiye
                </h3>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white/10 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl h-fit">

            <h2 className="text-2xl md:text-3xl font-black mb-8">
              Mesaj Gönder
            </h2>

            <form
              action="https://formsubmit.co/melihizzetzorluoglu@gmail.com"
              method="POST"
              className="space-y-5"
            >

              {/* HIDDEN */}
              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_subject"
                value="UcGit Yeni Mesaj"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Ad Soyad"
                required
                className="w-full bg-[#0b1736] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-400 transition text-sm"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="E-posta adresiniz"
                required
                className="w-full bg-[#0b1736] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-400 transition text-sm"
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Mesajınız"
                rows={6}
                required
                className="w-full bg-[#0b1736] border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none focus:border-blue-400 transition text-sm"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 py-4 rounded-2xl font-bold text-sm shadow-lg shadow-blue-500/20"
              >
                Gönder
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}