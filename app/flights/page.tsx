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
      <style>{`
        @keyframes planeFly {
          0% {
            transform: translate3d(-2px, 2px, 0) rotate(-5deg);
          }

          25% {
            transform: translate3d(2px, -2px, 0) rotate(-2deg);
          }

          50% {
            transform: translate3d(5px, -5px, 0) rotate(2deg);
          }

          75% {
            transform: translate3d(2px, -2px, 0) rotate(-1deg);
          }

          100% {
            transform: translate3d(-2px, 2px, 0) rotate(-5deg);
          }
        }

        .animate-plane-fly {
          display: inline-block;
          animation: planeFly 2.8s ease-in-out infinite;
          transform-origin: center;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-plane-fly {
            animation: none;
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* LOGO */}
          <Link href="/" className="flex shrink-0 items-center">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* MENU */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-semibold text-blue-600"
            >
              <span className="mr-1 inline-block animate-plane-fly">
                ✈️
              </span>
              Uçuşlar
            </Link>

            <Link
              href="/discover"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              🌍 Keşfet
            </Link>

            <Link
              href="/blog"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              📝 Blog
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              ♧ Destek
            </Link>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-300 hover:text-blue-600 sm:block"
            >
              TR ▾
            </button>

            <Link
              href="/login"
              className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
            >
              Giriş
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-20">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">
          <div className="mb-5 text-4xl">
            <span className="animate-plane-fly inline-block">✈️</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Popüler Rotalar
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
            Türkiye'den dünyanın popüler şehirlerine uzanan rotaları
            keşfedin ve seyahatinizi planlamaya başlayın.
          </p>
        </div>
      </section>

      {/* ROUTES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Popüler Destinasyonlar
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              İstanbul'dan Popüler Rotalar
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              En çok ilgi gören şehir rotalarına göz atın.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {routes.map((route) => (
              <article
                key={route.code}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={route.image}
                    alt={`${route.from} ${route.to} uçuşları`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-blue-600 shadow-sm">
                    {route.country}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-wide text-slate-400">
                    {route.code}
                  </p>

                  <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
                    {route.from} → {route.to}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {route.description}
                  </p>

                  <Link
                    href="/#tpwl-search"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    <span className="mr-2">✈️</span>
                    Uçuş Ara
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 p-8 text-center md:p-10">
            <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-purple-400/10 blur-3xl" />

            <div className="relative">
              <div className="text-3xl">
                🌍
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                Daha fazla rota keşfedin
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                UçGit üzerinden farklı şehirler arasındaki uçuş seçeneklerini
                karşılaştırabilir ve seyahatiniz için uygun rotayı
                keşfedebilirsiniz.
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Tüm Uçuşları Ara →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-9 w-auto object-contain"
            />

            <span className="text-xs text-slate-400">
              © 2026 UçGit
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            <Link
              href="/about"
              className="transition hover:text-blue-600"
            >
              Hakkımızda
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-blue-600"
            >
              İletişim
            </Link>

            <Link
              href="/faq"
              className="transition hover:text-blue-600"
            >
              SSS
            </Link>

            <Link
              href="/privacy-policy"
              className="transition hover:text-blue-600"
            >
              Gizlilik
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-blue-600"
            >
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
