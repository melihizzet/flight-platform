"use client";

export default function CarsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">

      {/* ARABA ANİMASYONU */}
      <style jsx>{`
        @keyframes drive {
          0% {
            transform: translateX(0) rotate(0deg);
          }
          20% {
            transform: translateX(3px) rotate(-1deg);
          }
          40% {
            transform: translateX(7px) rotate(1deg);
          }
          60% {
            transform: translateX(10px) rotate(0deg);
          }
          80% {
            transform: translateX(5px) rotate(-1deg);
          }
          100% {
            transform: translateX(0) rotate(0deg);
          }
        }

        @keyframes roadLine {
          0% {
            opacity: 0;
            transform: translateX(0);
          }
          30% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-8px);
          }
        }
      `}</style>

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
              className="flex items-center gap-1 text-xs font-semibold text-blue-600"
            >
              {/* HAREKETLİ ARABA */}
              <span className="relative inline-flex items-center">
                <span className="absolute -left-2 top-1/2 h-[2px] w-2 -translate-y-1/2 rounded-full bg-blue-300 animate-[roadLine_0.9s_ease-out_infinite]" />
                <span className="inline-block text-sm animate-[drive_1.8s_ease-in-out_infinite]">
                  🚗
                </span>
              </span>

              Araç Kiralama
            </a>

            <a
              href="/discover"
              className="text-xs font-semibold text-slate-700 transition hover:text-blue-600"
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

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-600">
              ♟
            </div>

          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-14">

          <div className="grid items-center gap-8 md:grid-cols-2">

            {/* SOL */}
            <div>

              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-[11px] font-semibold text-blue-700">

                <span className="inline-block animate-[drive_1.8s_ease-in-out_infinite]">
                  🚗
                </span>

                Araç kiralama

              </div>

              <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
                Özgürce keşfet,
                <span className="text-blue-600"> yola UçGit </span>
                ile çık.
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
                Seyahatin için ihtiyacın olan kiralık aracı bul,
                seçenekleri karşılaştır ve yolculuğuna özgürce devam et.
              </p>

            </div>

            {/* ARAÇ ARAMA */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">

              <div className="mb-4 flex items-center gap-2 text-base font-bold text-slate-900">

                <span className="inline-block animate-[drive_1.8s_ease-in-out_infinite]">
                  🚗
                </span>

                Araç Ara

              </div>

              <div className="grid gap-3 md:grid-cols-2">

                <div className="rounded-xl border border-slate-200 p-3.5">

                  <div className="text-[11px] text-slate-500">
                    Araç teslim noktası
                  </div>

                  <div className="mt-1 text-sm font-semibold text-slate-800">
                    Şehir veya havalimanı
                  </div>

                </div>

                <div className="rounded-xl border border-slate-200 p-3.5">

                  <div className="text-[11px] text-slate-500">
                    Teslim tarihi
                  </div>

                  <div className="mt-1 text-sm font-semibold text-slate-800">
                    Tarih seç
                  </div>

                </div>

              </div>

              <button
                disabled
                className="mt-3 w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white opacity-70"
              >
                Araç Ara
              </button>

              <p className="mt-2 text-center text-[11px] text-slate-400">
                Araç arama sistemi yakında aktif olacak.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="bg-white py-12 text-slate-900">

        <div className="mx-auto max-w-6xl px-5">

          <div className="text-center">

            <h2 className="text-2xl font-black">
              UçGit ile yola çık
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Seyahatin için doğru aracı kolayca bul.
            </p>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {/* KART 1 */}
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">

              <div className="inline-block text-3xl animate-[drive_1.8s_ease-in-out_infinite]">
                🚗
              </div>

              <h3 className="mt-4 text-base font-bold">
                Aracını seç
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                Seyahatine uygun araç seçeneklerini keşfet.
              </p>

            </div>

            {/* KART 2 */}
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">

              <div className="text-3xl">
                💰
              </div>

              <h3 className="mt-4 text-base font-bold">
                Fiyatları karşılaştır
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                Farklı araç seçeneklerini ve fiyatlarını karşılaştır.
              </p>

            </div>

            {/* KART 3 */}
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">

              <div className="text-3xl">
                🗺️
              </div>

              <h3 className="mt-4 text-base font-bold">
                Özgürce keşfet
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                Aracını kirala ve seyahatini özgürce planla.
              </p>

            </div>

          </div>

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
