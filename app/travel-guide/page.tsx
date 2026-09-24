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
              className="text-xs font-medium text-slate-600 hover:text-blue-600"
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
            🌍
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Seyahat Rehberi
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Yeni rotalar keşfedin, şehirleri tanıyın ve seyahatinizi
            planlamadan önce ihtiyacınız olan bilgileri UçGit rehberlerinde
            bulun.
          </p>

        </div>
      </section>

      {/* GUIDES */}
      <section className="mx-auto max-w-6xl px-5 py-14">

        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            UçGit Rehberleri
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
            Popüler Seyahat Rehberleri
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Gitmek istediğiniz şehir ve rotalar hakkında pratik bilgiler
            keşfedin.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {guides.map((guide) => (
            <article
              key={guide.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="relative h-48 overflow-hidden">

                <img
                  src={guide.image}
                  alt={guide.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-blue-600">
                  {guide.tag}
                </div>

              </div>

              <div className="p-5">

                <h3 className="text-lg font-bold text-slate-900">
                  {guide.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {guide.description}
                </p>

                <Link
                  href={guide.href}
                  className="mt-5 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Rehberi Oku →
                </Link>

              </div>

            </article>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-14">

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-10 text-center text-white md:px-12">

          <div className="text-3xl">
            ✈️
          </div>

          <h2 className="mt-3 text-2xl font-bold">
            Seyahatinizi planlamaya başlayın
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/80">
            Rehberinizi seçin, rotanızı belirleyin ve UçGit ile uçuş
            seçeneklerini keşfedin.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
          >
            ✈ Uçuş Ara
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
