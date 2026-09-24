import Link from "next/link";

const routes = [
  {
    from: "İstanbul",
    to: "Paris",
    code: "IST → PAR",
    country: "Fransa 🇫🇷",
    description:
      "Romantik sokakları, müzeleri ve dünyaca ünlü yapılarıyla Paris'i keşfedin.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
  },
  {
    from: "İstanbul",
    to: "Roma",
    code: "IST → ROM",
    country: "İtalya 🇮🇹",
    description:
      "Antik Roma'nın izlerini, tarihi meydanları ve İtalyan mutfağını keşfedin.",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    from: "İstanbul",
    to: "Londra",
    code: "IST → LON",
    country: "İngiltere 🇬🇧",
    description:
      "Londra'nın tarihi, kültürü, alışveriş noktaları ve ikonik bölgelerini keşfedin.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
  },
  {
    from: "İstanbul",
    to: "Amsterdam",
    code: "IST → AMS",
    country: "Hollanda 🇳🇱",
    description:
      "Kanalları, bisiklet yolları ve renkli şehir hayatıyla Amsterdam'ı keşfedin.",
    image:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1200&q=80",
  },
  {
    from: "İstanbul",
    to: "Dubai",
    code: "IST → DXB",
    country: "Birleşik Arap Emirlikleri 🇦🇪",
    description:
      "Modern mimariyi, alışveriş merkezlerini ve çöl deneyimini keşfedin.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    from: "İstanbul",
    to: "Barselona",
    code: "IST → BCN",
    country: "İspanya 🇪🇸",
    description:
      "Akdeniz atmosferi, Gaudi eserleri ve hareketli şehir yaşamını keşfedin.",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function FlightsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">

          <Link href="/">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-11 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">

            <Link
              href="/"
              className="text-xs font-semibold text-blue-600"
            >
              ✈ Uçuşlar
            </Link>

            <Link
              href="/hotel"
              className="text-xs font-medium text-slate-600 hover:text-blue-600"
            >
              🏨 Otel
            </Link>

            <Link
              href="/cars"
              className="text-xs font-medium text-slate-600 hover:text-blue-600"
            >
              🚗 Araç Kiralama
            </Link>

            <Link
              href="/discover"
              className="text-xs font-medium text-slate-600 hover:text-blue-600"
            >
              🌍 Keşfet
            </Link>

            <Link
              href="/blog"
              className="text-xs font-medium text-slate-600 hover:text-blue-600"
            >
              📝 Blog
            </Link>

          </nav>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-600">
              TR
            </span>

            <Link
              href="/login"
              className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600"
            >
              Giriş
            </Link>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 px-5 py-16">
        <div className="mx-auto max-w-5xl text-center">

          <div className="mb-4 text-4xl">
            🔥
          </div>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Popüler Rotalar
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Türkiye'den dünyanın popüler şehirlerine uzanan rotaları
            keşfedin ve seyahatinizi planlamaya başlayın.
          </p>

        </div>
      </section>

      {/* ROUTES */}
      <section className="mx-auto max-w-6xl px-5 py-14">

        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Popüler Destinasyonlar
          </p>

          <h2 className="mt-2 text-2xl font-bold md:text-3xl">
            İstanbul'dan Popüler Rotalar
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            En çok ilgi gören şehir rotalarına göz atın.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {routes.map((route) => (
            <article
              key={route.code}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">

                <img
                  src={route.image}
                  alt={`${route.from} ${route.to} uçuşları`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-blue-600">
                  {route.country}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-5">

                <p className="text-xs font-semibold text-slate-400">
                  {route.code}
                </p>

                <h3 className="mt-1 text-xl font-bold">
                  {route.from} → {route.to}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {route.description}
                </p>

                <Link
                  href="/"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  ✈ Uçuş Ara
                </Link>

              </div>

            </article>
          ))}

        </div>
      </section>

      {/* INFO */}
      <section className="mx-auto max-w-6xl px-5 pb-14">

        <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 p-7 text-center">

          <div className="text-3xl">
            🌍
          </div>

          <h2 className="mt-3 text-2xl font-bold">
            Daha fazla rota keşfedin
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            UçGit üzerinden farklı şehirler arasındaki uçuş seçeneklerini
            karşılaştırabilir ve seyahatiniz için uygun rotayı keşfedebilirsiniz.
          </p>

          <Link
            href="/"
            className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Tüm Uçuşları Ara →
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50 py-6">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 md:flex-row">

          <img
            src="/logo.jpg"
            alt="UçGit"
            className="h-9 w-auto object-contain"
          />

          <p className="text-[11px] text-slate-500">
            © 2026 UçGit. Tüm hakları saklıdır.
          </p>

          <div className="flex gap-4 text-[11px] text-slate-500">

            <Link
              href="/privacy"
              className="hover:text-blue-600"
            >
              Gizlilik
            </Link>

            <Link
              href="/terms"
              className="hover:text-blue-600"
            >
              Kullanım Şartları
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-600"
            >
              İletişim
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}
