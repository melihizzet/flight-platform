export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* LOGO */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-14 w-auto rounded-xl"
            />
          </a>

          {/* MENU */}
          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="/"
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              ✈️ Uçuşlar
            </a>

            <a
              href="/hotels"
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              🏨 Otel
            </a>

            <a
              href="/cars"
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              <span className="inline-block animate-bounce">
                🚗
              </span>
              Araç Kiralama
            </a>

            <a
              href="/discover"
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              ⚙️ Keşfet
            </a>

            <a
              href="/contact"
              className="text-sm font-semibold text-blue-600"
            >
              ♧ Destek
            </a>

          </nav>

          {/* SAĞ TARAF */}
          <div className="hidden items-center gap-3 md:flex">

            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
              TR 🇹🇷
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-600">
              ♟
            </div>

          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            DESTEK
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            Bizimle iletişime geç
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Sorularınız, önerileriniz veya iş birlikleri için
            bizimle iletişime geçebilirsiniz.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <div className="grid gap-6 md:grid-cols-2">

          {/* İLETİŞİM BİLGİLERİ */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-xl">
              💬
            </div>

            <h2 className="text-xl font-black text-slate-900">
              İletişim Bilgileri
            </h2>

            <div className="mt-6 space-y-6">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  E-posta
                </p>

                <div className="mt-2 space-y-2 text-sm">

                  <a
                    href="mailto:support@ucgit.com"
                    className="block font-medium text-slate-700 transition hover:text-blue-600"
                  >
                    support@ucgit.com
                  </a>

                  <a
                    href="mailto:info@ucgit.com"
                    className="block font-medium text-slate-700 transition hover:text-blue-600"
                  >
                    info@ucgit.com
                  </a>

                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Telefon
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-700">
                  +90 850 000 00 00
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Adres
                </p>

                <p className="mt-2 text-sm font-semibold text-slate-700">
                  İstanbul, Türkiye
                </p>
              </div>

            </div>

          </div>

          {/* MESAJ FORMU */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100 text-xl">
              ✉️
            </div>

            <h2 className="text-xl font-black text-slate-900">
              Mesaj Gönder
            </h2>

            <form
              action="https://formsubmit.co/melihizzetzorluoglu.com"
              method="POST"
              className="mt-6 space-y-4"
            >

              <input
                type="text"
                name="name"
                placeholder="Ad Soyad"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white"
              />

              <input
                type="email"
                name="email"
                placeholder="E-posta adresiniz"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white"
              />

              <textarea
                name="message"
                placeholder="Mesajınız"
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#020817] py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Mesajı Gönder →
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* QUICK LINKS */}
      <section className="bg-slate-50 py-14">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-2xl font-black text-slate-900">
            Yardıma mı ihtiyacın var?
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            UçGit hakkında daha fazla bilgiye ulaşabilirsin.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <a
              href="/about"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
            >
              Hakkımızda
            </a>

            <a
              href="/faq"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
            >
              SSS
            </a>

            <a
              href="/blog"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
            >
              Blog
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-8">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <img
            src="/logo.jpg"
            alt="UçGit"
            className="mx-auto h-11 w-auto rounded-lg"
          />

          <p className="mt-3 text-xs text-slate-500">
            © 2026 UçGit. Tüm hakları saklıdır.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-5 text-xs text-slate-500">

            <a href="/about" className="hover:text-blue-600">
              Hakkımızda
            </a>

            <a href="/blog" className="hover:text-blue-600">
              Blog
            </a>

            <a href="/faq" className="hover:text-blue-600">
              SSS
            </a>

            <a href="/privacy-policy" className="hover:text-blue-600">
              Gizlilik
            </a>

            <a href="/terms" className="hover:text-blue-600">
              Kullanım Şartları
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}
