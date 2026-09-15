export default function BlogPage() {
  const posts = [
    {
      title: "2026’da En Ucuz Avrupa Rotaları",
      category: "Seyahat",
      read: "5 dk",
      icon: "✈️",
    },
    {
      title: "Uçak Bileti Alırken En İyi Saatler",
      category: "İpuçları",
      read: "4 dk",
      icon: "🕐",
    },
    {
      title: "Business Class mı Economy mi?",
      category: "Karşılaştırma",
      read: "6 dk",
      icon: "💺",
    },
    {
      title: "Schengen Vizesi Nasıl Alınır?",
      category: "Vize",
      read: "8 dk",
      icon: "🌍",
    },
  ];

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
            UÇGİT BLOG
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            Seyahat dünyasını{" "}
            <span className="text-blue-600">
              keşfet
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Uçuş ipuçları, kampanyalar, vize bilgileri ve
            seyahat rehberleri.
          </p>

        </div>

      </section>

      {/* POSTS */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-6 md:grid-cols-2">

          {posts.map((post, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* IMAGE / VISUAL */}
              <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100">

                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/10 blur-2xl" />

                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-400/10 blur-2xl" />

                <span className="relative text-6xl transition duration-300 group-hover:scale-110">
                  {post.icon}
                </span>

              </div>

              {/* CONTENT */}
              <div className="p-7">

                <div className="mb-4 flex items-center gap-3">

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                    {post.category}
                  </span>

                  <span className="text-xs text-slate-400">
                    {post.read}
                  </span>

                </div>

                <h2 className="text-xl font-black leading-snug text-slate-900">
                  {post.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Uçuş fırsatları, seyahat ipuçları ve yeni rotalar
                  hakkında detaylı içerikleri keşfet.
                </p>

                <button className="mt-5 rounded-xl bg-[#020817] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
                  Devamını Oku →
                </button>

              </div>

            </article>
          ))}

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
