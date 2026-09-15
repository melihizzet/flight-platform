export default function AboutPage() {
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
              <span className="inline-block animate-bounce text-base">
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
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
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
            HAKKIMIZDA
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            Seyahati daha
            <span className="text-blue-600"> kolay </span>
            hale getiriyoruz.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            UçGit, uçuş, otel ve araç kiralama seçeneklerini
            tek bir yerde keşfetmenizi sağlayan modern bir seyahat
            platformudur.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <div className="grid gap-6 md:grid-cols-2">

          {/* KART 1 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-xl">
              ✈️
            </div>

            <h2 className="text-xl font-black text-slate-900">
              UçGit nedir?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              UçGit, seyahat planlamasını daha hızlı ve kolay
              hale getirmek amacıyla geliştirilen bir platformdur.
              Kullanıcıların ihtiyaç duyduğu seyahat seçeneklerine
              sade ve anlaşılır bir şekilde ulaşmasını hedefliyoruz.
            </p>

          </div>

          {/* KART 2 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100 text-xl">
              🌍
            </div>

            <h2 className="text-xl font-black text-slate-900">
              Amacımız
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Amacımız, seyahat araştırmasını karmaşık olmaktan
              çıkararak kullanıcılar için daha sade, hızlı ve
              anlaşılır bir deneyim sunmaktır.
            </p>

          </div>

        </div>

        {/* MİSYON */}
        <div className="mt-6 rounded-3xl bg-[#020817] p-8 text-white shadow-xl">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            UÇGİT
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Daha kolay keşfet. Daha özgür seyahat et.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
            Platformumuzu sürekli geliştirerek seyahat deneyimini
            daha anlaşılır, hızlı ve kullanıcı dostu hale getirmek
            için çalışıyoruz.
          </p>

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

            <a href="/contact" className="hover:text-blue-600">
              İletişim
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
