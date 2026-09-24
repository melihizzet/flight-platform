import Link from "next/link";

const posts = [
  {
    slug: "2026da-en-uygun-avrupa-rotalari",
    title: "2026'da En Uygun Avrupa Rotaları",
    category: "Avrupa",
    read: "5 dk",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
    text: "Avrupa seyahati planlayanlar için popüler şehirler ve uygun uçuş arama önerileri.",
  },
  {
    slug: "paris-gezi-rehberi",
    title: "Paris Gezi Rehberi: İlk Kez Gideceklere Öneriler",
    category: "Şehir Rehberi",
    read: "7 dk",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
    text: "Paris'te görülmesi gereken yerler, ulaşım ve kısa gezi planı önerileri.",
  },
  {
    slug: "roma-gezi-rehberi",
    title: "Roma Gezi Rehberi: Tarih ve Lezzet Rotası",
    category: "Şehir Rehberi",
    read: "7 dk",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1400&q=80",
    text: "Kolezyum, Trevi Çeşmesi ve Roma'nın önemli noktaları için gezi rehberi.",
  },
  {
    slug: "balkanlar-seyahat-rehberi",
    title: "Balkanlar Seyahat Rehberi",
    category: "Balkanlar",
    read: "7 dk",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=80",
    text: "Balkan şehirleri arasında rota oluşturmak isteyenler için seyahat önerileri.",
  },
  {
    slug: "sehir-kacamaklari",
    title: "Kısa Şehir Kaçamakları İçin Öneriler",
    category: "Şehir Kaçamakları",
    read: "5 dk",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1400&q=80",
    text: "Hafta sonu ve birkaç günlük şehir gezileri için pratik planlama önerileri.",
  },
  {
    slug: "ucak-bileti-alirken-dikkat-edilecekler",
    title: "Uçak Bileti Alırken Dikkat Edilecekler",
    category: "Seyahat İpuçları",
    read: "4 dk",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80",
    text: "Bilet fiyatı, bagaj, aktarma ve seyahat süresini birlikte değerlendirme rehberi.",
  },
];

export default function BlogPage() {
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
          <Link href="/" className="flex items-center shrink-0">
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
              className="text-sm font-semibold text-blue-600"
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
        {/* BACKGROUND BLUR */}
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold text-blue-600 shadow-sm">
            <span className="animate-plane-fly">✈️</span>
            UçGit Blog
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Seyahat için ilham ve rehberler
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
            Uçuşlar, şehirler, seyahat rotaları ve uçak bileti hakkında
            faydalı içerikler.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Son Yazılar
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Seyahat planını kolaylaştıracak rehberleri keşfet.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-semibold text-blue-600">
                        {post.category}
                      </span>

                      <span className="text-xs text-slate-400">
                        {post.read}
                      </span>
                    </div>

                    <h2 className="mt-5 text-lg font-bold leading-snug text-slate-900 transition group-hover:text-blue-600">
                      {post.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {post.text}
                    </p>

                    <div className="mt-5 flex items-center text-sm font-semibold text-blue-600">
                      Yazıyı Oku
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
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
