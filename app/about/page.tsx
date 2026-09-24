import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
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
              className="text-sm font-semibold text-blue-600"
            >
              ♧ Destek
            </Link>
          </nav>

          {/* SAĞ TARAF */}
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 py-16 text-center md:py-20">
          <div className="mb-4 text-3xl">
            <span className="inline-block animate-plane-fly">
              ✈️
            </span>
          </div>

          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600">
            HAKKIMIZDA
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            Seyahati daha
            <span className="text-blue-600"> kolay </span>
            hale getiriyoruz.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            UçGit, uçuş seçeneklerini daha kolay keşfetmenizi ve seyahat
            planınızı sade bir şekilde oluşturmanızı amaçlayan modern bir
            seyahat platformudur.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-5xl px-5 py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {/* KART 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
              ✈️
            </div>

            <h2 className="text-xl font-black text-slate-900">
              UçGit nedir?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              UçGit, seyahat planlamasını daha hızlı ve kolay hale getirmek
              amacıyla geliştirilen bir platformdur. Kullanıcıların farklı
              uçuş seçeneklerini sade ve anlaşılır bir şekilde keşfetmesine
              yardımcı olmayı hedefliyoruz.
            </p>
          </div>

          {/* KART 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl">
              🌍
            </div>

            <h2 className="text-xl font-black text-slate-900">
              Amacımız
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Amacımız, uçuş araştırmasını karmaşık olmaktan çıkararak
              kullanıcılar için daha sade, hızlı ve anlaşılır bir deneyim
              sunmaktır.
            </p>
          </div>
        </div>

        {/* NASIL ÇALIŞIYOR */}
        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
            UÇGİT
          </p>

          <h2 className="mt-2 text-xl font-black text-slate-900 md:text-2xl">
            Seyahat planınızı daha kolay oluşturun.
          </h2>

          <div className="mt-7 grid gap-6 md:grid-cols-3">
            <div>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-sm">
                1
              </div>

              <h3 className="text-sm font-bold text-slate-900">
                Uçuşunuzu arayın
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                Gideceğiniz şehirleri ve seyahat tarihlerinizi belirleyerek
                uçuş seçeneklerini inceleyin.
              </p>
            </div>

            <div>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-sm">
                2
              </div>

              <h3 className="text-sm font-bold text-slate-900">
                Seçenekleri karşılaştırın
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                Farklı uçuş seçeneklerini inceleyerek seyahatinize uygun
                alternatifi keşfedin.
              </p>
            </div>

            <div>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-sm">
                3
              </div>

              <h3 className="text-sm font-bold text-slate-900">
                Seyahatinizi planlayın
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                Seyahatiniz için uygun uçuşu belirleyerek planınızı
                tamamlayın.
              </p>
            </div>
          </div>
        </div>

        {/* MİSYON */}
        <div className="mt-5 overflow-hidden rounded-2xl bg-[#020817] p-7 text-white shadow-lg">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
            UÇGİT
          </p>

          <h2 className="mt-2 text-xl font-black md:text-2xl">
            Daha kolay keşfet. Daha özgür seyahat et.
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            Platformumuzu sürekli geliştirerek uçuş araştırma ve seyahat
            planlama deneyimini daha anlaşılır, hızlı ve kullanıcı dostu
            hale getirmek için çalışıyoruz.
          </p>

          <Link
            href="/#tpwl-search"
            className="mt-6 inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-blue-700"
          >
            <span className="mr-2 inline-block animate-plane-fly">
              ✈️
            </span>
            Uçuş Ara
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50 px-5 py-8">
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
              className="font-semibold text-blue-600"
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
