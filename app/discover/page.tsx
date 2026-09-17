export default function DiscoverPage() {
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
              className="text-xs font-semibold text-blue-600"
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

        <div className="relative mx-auto max-w-6xl px-5 py-14 text-center">

          <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-lg">
            🌍
          </div>

          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-blue-600">
            UÇGİT KEŞFET
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
            Bir sonraki seyahatini
            <span className="text-blue-600"> keşfet.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            Popüler destinasyonları keşfet, seyahat fikirlerine göz at
            ve bir sonraki yolculuğun için ilham al.
          </p>

        </div>

      </section>

      {/* DESTINATIONS */}
      <section className="bg-white py-12">

        <div className="mx-auto max-w-6xl px-5">

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
              POPÜLER DESTİNASYONLAR
            </p>

            <h2 className="mt-1 text-2xl font-black text-slate-900">
              Dünyayı keşfet
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Seyahat planına ilham verecek popüler şehirleri keşfet.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 md:grid-cols-3">

            {/* PARİS */}
            <a
              href="/"
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  🗼
                </div>

                <span className="text-xs text-slate-400 transition group-hover:text-blue-600">
                  →
                </span>

              </div>

              <h3 className="mt-4 text-base font-black">
                Paris
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Fransa
              </p>

            </a>

            {/* LONDRA */}
            <a
              href="/"
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-2xl">
                  🇬🇧
                </div>

                <span className="text-xs text-slate-400 transition group-hover:text-blue-600">
                  →
                </span>

              </div>

              <h3 className="mt-4 text-base font-black">
                Londra
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Birleşik Krallık
              </p>

            </a>

            {/* ROMA */}
            <a
              href="/"
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  🏛️
                </div>

                <span className="text-xs text-slate-400 transition group-hover:text-blue-600">
                  →
                </span>

              </div>

              <h3 className="mt-4 text-base font-black">
                Roma
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                İtalya
              </p>

            </a>

            {/* AMSTERDAM */}
            <a
              href="/"
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-2xl">
                  🚲
                </div>

                <span className="text-xs text-slate-400 transition group-hover:text-blue-600">
                  →
                </span>

              </div>

              <h3 className="mt-4 text-base font-black">
                Amsterdam
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Hollanda
              </p>

            </a>

            {/* DUBAİ */}
            <a
              href="/"
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  🌆
                </div>

                <span className="text-xs text-slate-400 transition group-hover:text-blue-600">
                  →
                </span>

              </div>

              <h3 className="mt-4 text-base font-black">
                Dubai
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Birleşik Arap Emirlikleri
              </p>

            </a>

            {/* İSTANBUL */}
            <a
              href="/"
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-2xl">
                  🕌
                </div>

                <span className="text-xs text-slate-400 transition group-hover:text-blue-600">
                  →
                </span>

              </div>

              <h3 className="mt-4 text-base font-black">
                İstanbul
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Türkiye
              </p>

            </a>

          </div>

        </div>

      </section>

      {/* TRAVEL IDEAS */}
      <section className="bg-slate-50 py-12">

        <div className="mx-auto max-w-6xl px-5">

          <div className="text-center">

            <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
              SEYAHAT FİKİRLERİ
            </p>

            <h2 className="mt-1 text-2xl font-black">
              Seyahatini planlamaya başla
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
              Farklı seyahat tarzlarına uygun fikirlerle bir sonraki
              rotanı belirle.
            </p>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {/* AVRUPA */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                🇪🇺
              </div>

              <h3 className="mt-4 text-base font-black">
                Avrupa Rotaları
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                Avrupa şehirlerini keşfetmek isteyenler için yeni
                seyahat fikirleri ve rota önerileri.
              </p>

              <a
                href="/blog"
                className="mt-4 inline-block text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                Rehberleri incele →
              </a>

            </div>

            {/* BALKANLAR */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-2xl">
                🏔️
              </div>

              <h3 className="mt-4 text-base font-black">
                Balkanlar
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                Yakın coğrafyalarda yeni şehirler keşfetmek ve farklı
                kültürleri deneyimlemek için seyahat fikirleri.
              </p>

              <a
                href="/blog"
                className="mt-4 inline-block text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                Rehberleri incele →
              </a>

            </div>

            {/* ŞEHİR KAÇAMAĞI */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                🧳
              </div>

              <h3 className="mt-4 text-base font-black">
                Şehir Kaçamakları
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                Kısa süreli seyahatler için şehir merkezli rota ve
                gezi fikirlerini keşfet.
              </p>

              <a
                href="/blog"
                className="mt-4 inline-block text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                Rehberleri incele →
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* TRAVEL GUIDES */}
      <section className="bg-white py-12">

        <div className="mx-auto max-w-6xl px-5">

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

            <div>

              <p className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                SEYAHAT REHBERİ
              </p>

              <h2 className="mt-1 text-2xl font-black">
                Seyahat hakkında daha fazlasını keşfet
              </h2>

            </div>

            <a
              href="/blog"
              className="text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              Tüm yazılar →
            </a>

          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">

            <a
              href="/blog"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:shadow-sm"
            >

              <div className="text-2xl">
                ✈️
              </div>

              <h3 className="mt-3 text-sm font-black">
                Uçak bileti alırken nelere dikkat edilmeli?
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Uçuş seçimi ve seyahat planlaması hakkında temel
                bilgileri keşfet.
              </p>

            </a>

            <a
              href="/blog"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:shadow-sm"
            >

              <div className="text-2xl">
                🌍
              </div>

              <h3 className="mt-3 text-sm font-black">
                Avrupa seyahati için pratik öneriler
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Seyahat öncesinde planlamanı kolaylaştıracak
                önerileri incele.
              </p>

            </a>

            <a
              href="/blog"
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:shadow-sm"
            >

              <div className="text-2xl">
                🧳
              </div>

              <h3 className="mt-3 text-sm font-black">
                Seyahat öncesi kontrol listesi
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Yolculuk öncesinde hazırlaman gerekenleri
                adım adım gözden geçir.
              </p>

            </a>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-10">

        <div className="mx-auto max-w-4xl px-5 text-center text-white">

          <div className="text-3xl">
            ✈️
          </div>

          <h2 className="mt-3 text-2xl font-black">
            Bir sonraki seyahatini UçGit ile planla.
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/80">
            Uçuş seçeneklerini karşılaştır ve seyahat planına
            uygun rotanı keşfet.
          </p>

          <a
            href="/"
            className="mt-5 inline-flex rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-blue-600 shadow-sm transition hover:bg-slate-50"
          >
            Uçuşları keşfet →
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
              href="/blog"
              className="transition hover:text-blue-600"
            >
              Blog
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
