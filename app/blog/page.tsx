"use client";

import { Suspense, useSearchParams } from "react";
import Link from "next/link";

const posts = [
  {
    slug: "2026da-en-uygun-avrupa-rotalari",
    title: "2026'da En Uygun Avrupa Rotaları",
    category: "avrupa",
    categoryName: "Avrupa",
    read: "5 dk",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    description:
      "Avrupa'da uygun fiyatlı bir seyahat planlamak isteyenler için popüler rotalar, şehirler ve bütçe önerileri.",
  },
  {
    slug: "paris-gezi-rehberi",
    title: "Paris Gezi Rehberi",
    category: "avrupa",
    categoryName: "Avrupa",
    read: "6 dk",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    description:
      "Paris'te görülmesi gereken yerler, ulaşım, konaklama ve seyahat planı hakkında pratik bilgiler.",
  },
  {
    slug: "roma-gezi-rehberi",
    title: "Roma Gezi Rehberi",
    category: "avrupa",
    categoryName: "Avrupa",
    read: "6 dk",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=80",
    description:
      "Roma seyahatinizi planlarken tarihi noktalar, şehir içi ulaşım ve bütçe konusunda bilmeniz gerekenler.",
  },
  {
    slug: "balkanlar-seyahat-rehberi",
    title: "Balkanlar Seyahat Rehberi",
    category: "balkanlar",
    categoryName: "Balkanlar",
    read: "7 dk",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Balkan şehirlerini keşfetmek isteyenler için rota önerileri ve seyahat planlama ipuçları.",
  },
  {
    slug: "sehir-kacamaklari",
    title: "Kısa Şehir Kaçamakları İçin Öneriler",
    category: "sehir",
    categoryName: "Şehir Kaçamakları",
    read: "5 dk",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
    description:
      "Hafta sonu veya birkaç günlük kısa tatiller için şehir seçimi ve planlama önerileri.",
  },
  {
    slug: "ucak-bileti-alirken-dikkat-edilecekler",
    title: "Uçak Bileti Alırken Dikkat Edilecekler",
    category: "ipuclari",
    categoryName: "Seyahat İpuçları",
    read: "4 dk",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    description:
      "Uçak bileti ararken fiyatları karşılaştırmak ve seyahat planınızı daha doğru yapmak için önemli noktalar.",
  },
];

function BlogPageContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredPosts = category
    ? posts.filter((post) => post.category === category)
    : posts;

  const activeCategoryName =
    category === "avrupa"
      ? "Avrupa"
      : category === "balkanlar"
      ? "Balkanlar"
      : category === "sehir"
      ? "Şehir Kaçamakları"
      : category === "ipuclari"
      ? "Seyahat İpuçları"
      : "Tüm Yazılar";

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
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
              className="text-xs font-medium text-slate-600 transition hover:text-blue-600"
            >
              ✈️ Uçuşlar
            </Link>

            <Link
              href="/hotels"
              className="text-xs font-medium text-slate-600 transition hover:text-blue-600"
            >
              🏨 Otel
            </Link>

            <Link
              href="/cars"
              className="text-xs font-medium text-slate-600 transition hover:text-blue-600"
            >
              🚗 Araç Kiralama
            </Link>

            <Link
              href="/discover"
              className="text-xs font-medium text-slate-600 transition hover:text-blue-600"
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

          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-slate-500">TR</span>

            <Link
              href="/login"
              className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
            >
              Giriş
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-11">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-3 inline-flex rounded-full border border-blue-100 bg-white px-3 py-1 text-[11px] font-semibold text-blue-600 shadow-sm">
            UçGit Seyahat Rehberi
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Seyahat ve Uçuş Rehberi
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Uçuş fırsatları, şehir rehberleri ve seyahat planlama önerileriyle
            yolculuğunuzu daha kolay planlayın.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="border-b border-slate-100 bg-white px-4 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2">
          <Link
            href="/blog"
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              !category
                ? "bg-blue-600 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            Tüm Yazılar
          </Link>

          <Link
            href="/blog?category=avrupa"
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              category === "avrupa"
                ? "bg-blue-600 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            Avrupa
          </Link>

          <Link
            href="/blog?category=balkanlar"
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              category === "balkanlar"
                ? "bg-blue-600 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            Balkanlar
          </Link>

          <Link
            href="/blog?category=sehir"
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              category === "sehir"
                ? "bg-blue-600 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            Şehir Kaçamakları
          </Link>

          <Link
            href="/blog?category=ipuclari"
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              category === "ipuclari"
                ? "bg-blue-600 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            Seyahat İpuçları
          </Link>
        </div>
      </section>

      {/* POSTS */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-600">
                Blog
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900">
                {activeCategoryName}
              </h2>
            </div>

            <span className="text-xs text-slate-400">
              {filteredPosts.length} yazı
            </span>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-blue-600 shadow-sm">
                        {post.categoryName}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="mb-2 flex items-center gap-2 text-[10px] text-slate-400">
                        <span>UçGit Blog</span>
                        <span>•</span>
                        <span>{post.read}</span>
                      </div>

                      <h3 className="text-base font-bold leading-6 text-slate-900 transition group-hover:text-blue-600">
                        {post.title}
                      </h3>

                      <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-500">
                        {post.description}
                      </p>

                      <div className="mt-4 text-xs font-semibold text-blue-600">
                        Yazıyı oku →
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
              <div className="text-3xl">📝</div>

              <h3 className="mt-3 text-base font-bold text-slate-900">
                Bu kategoride henüz yazı yok
              </h3>

              <p className="mt-2 text-xs text-slate-500">
                Diğer seyahat yazılarımıza göz atabilirsiniz.
              </p>

              <Link
                href="/blog"
                className="mt-5 inline-flex rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700"
              >
                Tüm yazıları göster
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8 text-center text-white">
          <h2 className="text-xl font-bold">
            Uçuşunuzu şimdi arayın
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-blue-50">
            Farklı uçuş seçeneklerini karşılaştırın ve seyahatiniz için uygun
            bileti bulun.
          </p>

          <Link
            href="/"
            className="mt-5 inline-flex rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-blue-600 shadow-sm transition hover:bg-slate-50"
          >
            Uçuş Ara →
          </Link>
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

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white" />
      }
    >
      <BlogPageContent />
    </Suspense>
  );
}
