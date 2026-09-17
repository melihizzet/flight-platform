export default function BlogPage() {
  const posts = [
    {
      slug: "2026da-en-uygun-avrupa-rotalari",
      title: "2026’da En Uygun Avrupa Rotaları",
      category: "Seyahat",
      read: "5 dk",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
      description:
        "Avrupa seyahati planlayanlar için popüler şehirleri, seyahat planlamasını ve bilet ararken dikkat edilmesi gereken noktaları keşfet.",
    },
    {
      slug: "ucak-bileti-alirken-en-iyi-saatler",
      title: "Uçak Bileti Alırken En İyi Saatler",
      category: "İpuçları",
      read: "4 dk",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
      description:
        "Uçak bileti ararken tarihleri esnek değerlendirmek, farklı uçuşları karşılaştırmak ve toplam seyahat maliyetini kontrol etmek için pratik öneriler.",
    },
    {
      slug: "business-class-mi-economy-mi",
      title: "Business Class mı Economy mi?",
      category: "Karşılaştırma",
      read: "6 dk",
      image:
        "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1200&q=85",
      description:
        "Business Class ve Economy Class arasındaki koltuk, bagaj, yemek, havalimanı hizmetleri ve konfor farklarını karşılaştır.",
    },
    {
      slug: "schengen-vizesi-nasil-alinir",
      title: "Schengen Vizesi Nasıl Alınır?",
      category: "Vize",
      read: "8 dk",
      image:
        "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1200&q=85",
      description:
        "Schengen bölgesine seyahat planlayanlar için başvuru süreci, temel belgeler ve seyahat öncesinde dikkat edilmesi gereken noktalar.",
    },
    {
      slug: "paris-gezi-rehberi",
      title: "Paris Gezi Rehberi: İlk Kez Gideceklere Öneriler",
      category: "Şehir Rehberi",
      read: "7 dk",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
      description:
        "Paris’te görülecek önemli noktalar, şehir içi ulaşım ve kısa süreli bir gezi planı için kullanabileceğin öneriler.",
    },
    {
      slug: "roma-gezi-rehberi",
      title: "Roma Gezi Rehberi: Tarih ve Lezzet Rotası",
      category: "Şehir Rehberi",
      read: "7 dk",
      image:
        "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=85",
      description:
        "Kolezyum’dan Trevi Çeşmesi’ne Roma’nın önemli noktalarını ve şehir gezisini planlarken dikkat edilebilecek detayları keşfet.",
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
              <span className="text-sm">🚗</span>
              Araç Kiralama
            </a>

            <a
              href="/discover"
              className="text-xs font-semibold text-slate-700 transition hover:text-blue-600"
            >
              🌍 Keşfet
            </a>

            <a
              href="/blog"
              className="text-xs font-semibold text-blue-600"
            >
              📝 Blog
            </a>

          </nav>

          {/* SAĞ TARAF */}
          <div className="hidden items-center gap-2 md:flex">

            <button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm">
              TR 🇹🇷
            </button>

            <a
              href="/login"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              ♟
            </a>

          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 py-16 text-center">

          <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
            📝
          </div>

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
            Uçuş ipuçları, şehir rehberleri, vize bilgileri ve seyahat
            planlamanı kolaylaştıracak pratik bilgiler.
          </p>

        </div>

      </section>

      {/* BLOG */}
      <section className="mx-auto max-w-6xl px-5 py-14">

        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
            SEYAHAT REHBERLERİ
          </p>

          <h2 className="mt-1 text-2xl font-black">
            Yeni seyahat fikirleri
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Bir sonraki seyahatini planlamana yardımcı olacak yazıları keşfet.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {posts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden">

                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-blue-600 shadow-sm">
                  {post.category}
                </span>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <div className="flex items-center gap-3 text-[11px] text-slate-400">
                  <span>UçGit Blog</span>
                  <span>•</span>
                  <span>{post.read}</span>
                </div>

                <h2 className="mt-3 text-xl font-black leading-snug text-slate-900">
                  {post.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {post.description}
                </p>

                <a
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex rounded-xl bg-[#020817] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-600"
                >
                  Yazıyı oku →
                </a>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* UÇUŞ CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">

        <div className="mx-auto max-w-4xl px-5 text-center text-white">

          <div className="text-3xl">
            ✈️
          </div>

          <h2 className="mt-3 text-2xl font-black">
            Seyahatini planlamaya hazır mısın?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/80">
            Gideceğin rotayı seç ve uçuş seçeneklerini UçGit üzerinden
            karşılaştır.
          </p>

          <a
            href="/"
            className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-xs font-bold text-blue-600 shadow-sm transition hover:bg-slate-50"
          >
            Uçuş ara →
          </a>

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
              href="/discover"
              className="transition hover:text-blue-600"
            >
              Keşfet
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
