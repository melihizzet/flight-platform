"use client";

export default function HotelsPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">

      {/* HEADER */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-14 w-auto rounded-xl"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="/" className="text-white hover:text-blue-300">
              Uçuşlar
            </a>

            <a
              href="/hotels"
              className="font-semibold text-blue-300"
            >
              Oteller
            </a>

            <a
              href="/cars"
              className="text-white hover:text-blue-300"
            >
              Araç Kiralama
            </a>

            <a
              href="/discover"
              className="text-white hover:text-blue-300"
            >
              Keşfet
            </a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        className="relative min-h-[620px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=85')",
        }}
      >

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 pt-20">

          <div className="max-w-2xl text-slate-900">

            <div className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🏨 Otel fiyatlarını karşılaştır
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Hayalindeki
              <span className="text-blue-600"> oteli </span>
              UçGit ile bul.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Dünyanın dört bir yanındaki otelleri keşfet,
              fiyatları karşılaştır ve seyahatin için en uygun
              konaklamayı bul.
            </p>

            {/* OTEL ARAMA ALANI */}
            <div className="mt-10 rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-slate-200">

              <div className="mb-4 text-lg font-bold text-slate-900">
                Otel Ara
              </div>

              <div className="grid gap-3 md:grid-cols-3">

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="text-xs text-slate-500">
                    Nereye?
                  </div>
                  <div className="mt-1 font-semibold text-slate-800">
                    Şehir veya otel
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="text-xs text-slate-500">
                    Giriş
                  </div>
                  <div className="mt-1 font-semibold text-slate-800">
                    Tarih seç
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="text-xs text-slate-500">
                    Çıkış
                  </div>
                  <div className="mt-1 font-semibold text-slate-800">
                    Tarih seç
                  </div>
                </div>

              </div>

              <button
                disabled
                className="mt-4 w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white opacity-70"
              >
                Otel Ara
              </button>

              <p className="mt-3 text-center text-xs text-slate-400">
                Otel arama sistemi yakında aktif olacak.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="bg-white py-20 text-slate-900">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-3xl font-black">
              UçGit ile konaklamanı kolaylaştır
            </h2>

            <p className="mt-3 text-slate-500">
              Seyahatin için ihtiyacın olan oteli kolayca bul.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <div className="text-4xl">🔎</div>

              <h3 className="mt-5 text-xl font-bold">
                Fiyatları karşılaştır
              </h3>

              <p className="mt-3 text-slate-500">
                Farklı seçenekleri karşılaştırarak sana uygun
                konaklamayı bul.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <div className="text-4xl">🌍</div>

              <h3 className="mt-5 text-xl font-bold">
                Dünyayı keşfet
              </h3>

              <p className="mt-3 text-slate-500">
                Dünyanın farklı şehirlerindeki konaklama
                seçeneklerini keşfet.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8 shadow-sm">
              <div className="text-4xl">✈️</div>

              <h3 className="mt-5 text-xl font-bold">
                Seyahatini tamamla
              </h3>

              <p className="mt-3 text-slate-500">
                Uçuş, otel ve araç kiralama seçeneklerini
                tek yerde bul.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#020817] py-10 text-center text-sm text-slate-400">
        © 2026 UçGit. Tüm hakları saklıdır.
      </footer>

    </main>
  );
}
