"use client";

import { useSearchParams } from "next/navigation";

const posts = [
  {
    slug: "2026da-en-uygun-avrupa-rotalari",
    title: "2026’da En Uygun Avrupa Rotaları",
    category: "avrupa",
    categoryName: "Avrupa",
    read: "5 dk",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=85",
    description:
      "Avrupa'da seyahat planlayanlar için popüler şehirleri ve rota fikirlerini keşfet.",
  },
  {
    slug: "paris-gezi-rehberi",
    title: "Paris Gezi Rehberi",
    category: "avrupa",
    categoryName: "Avrupa",
    read: "7 dk",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    description:
      "Eyfel Kulesi'nden Louvre'a Paris'te görülmesi gereken önemli noktaları keşfet.",
  },
  {
    slug: "roma-gezi-rehberi",
    title: "Roma Gezi Rehberi",
    category: "avrupa",
    categoryName: "Avrupa",
    read: "7 dk",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=85",
    description:
      "Kolezyum, Trevi Çeşmesi ve Vatikan ile Roma seyahatini planla.",
  },
  {
    slug: "balkanlar-seyahat-rehberi",
    title: "Balkanlar Seyahat Rehberi",
    category: "balkanlar",
    categoryName: "Balkanlar",
    read: "6 dk",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    description:
      "Yakın coğrafyada farklı şehirleri ve kültürleri keşfetmek için Balkan rotalarına göz at.",
  },
  {
    slug: "sehir-kacamaklari",
    title: "2–4 Günlük Şehir Kaçamakları",
    category: "sehir",
    categoryName: "Şehir Kaçamağı",
    read: "5 dk",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=85",
    description:
      "Kısa süreli seyahatler için şehir merkezli gezi fikirlerini keşfet.",
  },
  {
    slug: "ucak-bileti-alirken-dikkat-edilecekler",
    title: "Uçak Bileti Alırken Nelere Dikkat Edilmeli?",
    category: "ipuclari",
    categoryName: "İpuçları",
    read: "4 dk",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    description:
      "Bagaj, aktarma, havalimanı ve bilet koşullarını kontrol etmek için pratik öneriler.",
  },
];

export default function BlogPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredPosts = category
    ? posts.filter((post) => post.category === category)
    : posts;

  const categoryTitle =
    category === "avrupa"
      ? "Avrupa Rotaları"
      : category === "balkanlar"
        ? "Balkanlar"
        : category === "sehir"
          ? "Şehir Kaçamakları"
          : "Seyahat Dünyasını Keşfet";

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">

          <a href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-9 w-auto rounded-lg"
            />
          </a>

          <nav className="hidden items-center gap-5 md:flex">

            <a
              href="/"
              className="text-[11px] font-semibold text-slate-700 hover:text-blue-600"
            >
              ✈️ Uçuşlar
            </a>

            <a
              href="/hotels"
              className="text-[11px] font-semibold text-slate-700 hover:text-blue-600"
            >
              🏨 Otel
            </a>

            <a
              href="/cars"
              className="text-[11px] font-semibold text-slate-700 hover:text-blue-600"
            >
              🚗 Araç Kiralama
            </a>

            <a
              href="/discover"
              className="text-[11px] font-semibold text-slate-700 hover:text-blue-600"
            >
              🌍 Keşfet
            </a>

            <a
              href="/blog"
              className="text-[11px] font-bold text-blue-600"
            >
              📝 Blog
            </a>

          </nav>

          <div className="hidden items-center gap-2 md:flex">

            <button className="rounded-full border border-slate-200 px-2.5 py-1 text-[10px] font-semibold">
              TR 🇹🇷
            </button>

            <a
              href="/login"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[10px]"
            >
              ♟
            </a>

          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50">

        <div className="mx-auto max-w-6xl px-5 py-11">

          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-blue-600">
            UÇGİT BLOG
          </p>

          <h1 className="mt-2 text-3xl font-black md:text-4xl">
            {category ? categoryTitle : "Seyahat dünyasını keşfet"}
          </h1>

          <p className="mt-3 max-w-2xl text-xs leading-6 text-slate-600">
            {category
              ? `${categoryTitle} hakkında seyahat rehberleri ve pratik bilgiler.`
              : "Uçuş ipuçları, şehir rehberleri, seyahat fikirleri ve pratik bilgiler."}
          </p>

        </div>

      </section>

      {/* CATEGORY BAR */}
      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-5 py-4">

          <a
            href="/blog"
            className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${
              !category
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Tümü
          </a>

          <a
            href="/blog?category=avrupa"
            className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${
              category === "avrupa"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Avrupa
          </a>

          <a
            href="/blog?category=balkanlar"
            className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${
              category === "balkanlar"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Balkanlar
          </a>

          <a
            href="/blog?category=sehir"
            className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${
              category === "sehir"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Şehir Kaçamakları
          </a>

          <a
            href="/blog?category=ipuclari"
            className={`rounded-full px-3 py-1.5 text-[10px] font-bold ${
              category === "ipuclari"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            İpuçları
          </a>

        </div>

      </section>

      {/* POSTS */}
      <section className="mx-auto max-w-6xl px-5 py-10">

        {filteredPosts.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
            <div className="text-3xl">🌍</div>

            <h2 className="mt-3 text-lg font-black">
              Bu kategoride henüz yazı yok.
            </h2>

            <p className="mt-2 text-xs text-slate-500">
              Diğer seyahat rehberlerine göz atabilirsin.
            </p>

            <a
              href="/blog"
              className="mt-4 inline-flex rounded-lg bg-blue-600 px-4 py-2 text-[10px] font-bold text-white"
            >
              Tüm yazıları göster
            </a>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">

            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="relative h-44 overflow-hidden">

                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-blue-600">
                    {post.categoryName}
                  </span>

                </div>

                <div className="p-5">

                  <div className="flex gap-2 text-[10px] text-slate-400">
                    <span>UçGit Blog</span>
                    <span>•</span>
                    <span>{post.read}</span>
                  </div>

                  <h2 className="mt-2 text-lg font-black leading-snug">
                    {post.title}
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {post.description}
                  </p>

                  <a
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex rounded-lg bg-[#020817] px-4 py-2.5 text-[10px] font-bold text-white transition hover:bg-blue-600"
                  >
                    Yazıyı oku →
                  </a>

                </div>

              </article>
            ))}

          </div>
        )}

      </section>

      {/* UÇUŞ CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-9">

        <div className="mx-auto max-w-4xl px-5 text-center text-white">

          <div className="text-2xl">
            ✈️
          </div>

          <h2 className="mt-2 text-2xl font-black">
            Seyahatini planlamaya hazır mısın?
          </h2>

          <p className="mt-2 text-xs text-white/80">
            Gideceğin rotayı seç ve uçuş seçeneklerini UçGit ile karşılaştır.
          </p>

          <a
            href="/"
            className="mt-4 inline-flex rounded-lg bg-white px-5 py-2.5 text-[10px] font-bold text-blue-600"
          >
            Uçuş ara →
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-5">

        <div className="mx-auto max-w-7xl px-5 text-center">

          <img
            src="/logo.jpg"
            alt="UçGit"
            className="mx-auto h-8 w-auto rounded-lg"
          />

          <p className="mt-1.5 text-[10px] text-slate-500">
            © 2026 UçGit. Tüm hakları saklıdır.
          </p>

          <div className="mt-2.5 flex flex-wrap justify-center gap-3 text-[10px] text-slate-500">

            <a href="/about" className="hover:text-blue-600">
              Hakkımızda
            </a>

            <a href="/discover" className="hover:text-blue-600">
              Keşfet
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
