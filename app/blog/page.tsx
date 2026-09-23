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
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-9 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            <Link
              href="/"
              className="text-xs font-medium text-slate-600 hover:text-blue-600"
            >
              ✈️ Uçuşlar
            </Link>

            <Link
              href="/hotels"
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
              className="text-xs font-semibold text-blue-600"
            >
              Blog
            </Link>
          </nav>

          <Link
            href="/login"
            className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            Giriş
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-14">
        <div className="mx-auto max-w-6xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            UçGit Blog
          </span>

          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Seyahat için ilham ve rehberler
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500">
            Uçuşlar, şehirler, seyahat rotaları ve uçak bileti hakkında
            faydalı içerikler.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <Link href={`/blog/${post.slug}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-600">
                        {post.category}
                      </span>

                      <span className="text-[11px] text-slate-400">
                        {post.read}
                      </span>
                    </div>

                    <h2 className="mt-4 text-lg font-bold leading-snug text-slate-900">
                      {post.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {post.text}
                    </p>

                    <div className="mt-4 text-xs font-bold text-blue-600">
                      Yazıyı Oku →
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50 px-4 py-7">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-8 w-auto object-contain"
            />
            <span className="text-[11px] text-slate-400">
              © 2026 UçGit
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-[11px] text-slate-500">
            <Link href="/about" className="hover:text-blue-600">
              Hakkımızda
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              İletişim
            </Link>
            <Link href="/faq" className="hover:text-blue-600">
              SSS
            </Link>
            <Link href="/privacy" className="hover:text-blue-600">
              Gizlilik
            </Link>
            <Link href="/terms" className="hover:text-blue-600">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
