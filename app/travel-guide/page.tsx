import Link from "next/link";

const guides = [
  {
    title: "Paris Gezi Rehberi",
    description:
      "Paris'e ilk kez gidecekler için görülmesi gereken yerler, ulaşım ve seyahat önerileri.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    href: "/blog/paris-gezi-rehberi",
    tag: "Fransa",
  },
  {
    title: "Roma Gezi Rehberi",
    description:
      "Roma'nın tarihi noktalarını, şehir rotasını ve İtalyan mutfağını keşfedin.",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    href: "/blog/roma-gezi-rehberi",
    tag: "İtalya",
  },
  {
    title: "Balkanlar Seyahat Rehberi",
    description:
      "Balkan şehirlerini keşfetmek ve birden fazla destinasyonu aynı seyahatte planlamak için öneriler.",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    href: "/blog/balkanlar-seyahat-rehberi",
    tag: "Balkanlar",
  },
  {
    title: "Avrupa Rotaları",
    description:
      "Avrupa'da uygun fiyatlı seyahat planlamak isteyenler için popüler rota önerileri.",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    href: "/blog/2026da-en-uygun-avrupa-rotalari",
    tag: "Avrupa",
  },
  {
    title: "Kısa Şehir Kaçamakları",
    description:
      "Birkaç günlük tatiller için değerlendirebileceğiniz şehir rotalarını keşfedin.",
    image:
      "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=1200&q=80",
    href: "/blog/sehir-kacamaklari",
    tag: "Şehir Kaçamağı",
  },
  {
    title: "Uçak Bileti Rehberi",
    description:
      "Uçak bileti alırken bagaj, aktarma, havalimanı ve toplam fiyat konusunda dikkat edilmesi gerekenler.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    href: "/blog/ucak-bileti-alirken-dikkat-edilecekler",
    tag: "Uçuş",
  },
];

export default function TravelGuidePage() {
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
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
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
            <span className="inline-block animate-plane-fly">✈️</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Seyahat Rehberi
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
            Yeni rotalar keşfedin, şehirleri tanıyın ve seyahatinizi
            planlamadan önce ihtiyacınız olan bilgileri UçGit rehberlerinde
            bulun.
          </p>
        </div>
      </section>

      {/* GUIDES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              UçGit Rehberleri
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Popüler Seyahat Rehberleri
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Gitmek istediğiniz şehir ve rotalar hakkında pratik bilgiler
              keşfedin.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <article
                key={guide.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-blue-600 shadow-sm">
                    {guide.tag}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-blue-600">
                    {guide.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {guide.description}
                  </p>

                  <Link
                    href={guide.href}
                    className="mt-5 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                  >
                    Rehberi Oku
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-12 text-center text-white md:px-12">
            <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <div className="text-3xl">
                <span className="inline-block animate-plane-fly">✈️</span>
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight">
                Seyahatinizi planlamaya başlayın
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/80">
                Rehberinizi seçin, rotanızı belirleyin ve UçGit ile uçuş
                seçeneklerini keşfedin.
              </p>

              <Link
                href="/#tpwl-search"
                className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                ✈️ Uçuş Ara
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
