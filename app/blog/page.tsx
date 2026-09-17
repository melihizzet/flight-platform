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
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

          {/* LOGO */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-11 w-auto rounded-lg"
            />
          </a>

          {/* MENU */}
          <nav className="hidden items-center gap-6 md:flex">

            <a
              href="/"
              className="text-xs font-semibold text-slate-700 transition hover:text-blue-600"
            >
              ✈️ Uçuşlar
            </a>

            <a
              href="/hotels"
              className="text-xs font-semibold text-slate-700 transition hover:text-blue-600"
            >
              🏨 Otel
            </a>

            <a
              href="/cars"
              className="flex items-center gap-1 text-xs font-semibold text-slate-700 transition hover:text-blue-600"
            >
              <span className="inline-block text-sm">
                🚗
              </span>
              Araç Kiralama
            </a>

            <a
              href="/discover"
              className="text-xs font-semibold text-slate-700 transition hover:text-blue-600"
            >
              ⚙️ Keşfet
            </a>

            <a
              href="/contact"
              className="text-xs font-semibold text-slate-700 transition hover:text-blue-600"
            >
              ♧ Destek
            </a>

          </nav>

          {/* SAĞ TARAF */}
          <div className="hidden items-center gap-2 md:flex">

            <button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm">
              TR 🇹🇷
            </button>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-600">
              ♟
            </div>

          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 py-14 text-center">

          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600">
            UÇGİT BLOG
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
            Seyahat dünyasını{" "}
            <span className="text-blue-600">
              keşfet
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            Uçuş ipuçları, kampanyalar, vize bilgileri ve
            seyahat rehberleri.
          </p>

        </div>

      </section>

      {/* POSTS */}
      <section className="mx-auto max-w-6xl px-5 py-12">

        <div className="grid gap-5 md:grid-cols-2">

          {posts.map((post, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* IMAGE / VISUAL */}
              <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100">

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-400/10 blur-2xl" />

                <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-purple-400/10 blur-2xl" />

                <span className="relative text-5xl transition duration-300 group-hover:scale-110">
                  {post.icon}
                </span>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <div className="mb-3 flex items-center gap-3">

                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-600">
                    {post.category}
                  </span>

                  <span className="text-[11px] text-slate-400">
                    {post.read}
                  </span>

                </div>

                <h2 className="text-lg font-black leading-snug text-slate-900">
                  {post.title}
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Uçuş fırsatları, seyahat ipuçları ve yeni rotalar
                  hakkında detaylı içerikleri keşfet.
                </p>

                <button className="mt-4 rounded-lg bg-[#020817] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-600">
                  Devamını Oku →
                </button>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-6">

        <div className="mx-auto max-w-7xl px-5 text-center">

          <img
            src="/logo.jpg"
            alt="UçGit"
            className="mx-auto h-9 w-auto rounded-lg"
          />

          <p className="mt-2 text-[11px] text-slate-500">
            © 2026 UçGit. Tüm hakları saklıdır.
          </p>

          <div className="mt-3 flex flex-wrap justify-center gap-4 text-[11px] text-slate-500">

            <a
              href="/about"
              className="transition hover:text-blue-600"
            >
              Hakkımızda
            </a>

            <a
              href="/contact"
              className="transition hover:text-blue-600"
            >
              İletişim
            </a>

            <a
              href="/faq"
              className="transition hover:text-blue-600"
            >
              SSS
            </a>

            <a
              href="/privacy-policy"
              className="transition hover:text-blue-600"
            >
              Gizlilik
            </a>

            <a
              href="/terms"
              className="transition hover:text-blue-600"
            >
              Kullanım Şartları
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}
