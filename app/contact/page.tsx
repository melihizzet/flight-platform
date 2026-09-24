import Link from "next/link";

export default function ContactPage() {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 px-5 py-16 md:py-20">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-4 text-3xl">
            <span className="inline-block animate-plane-fly">
              💬
            </span>
          </div>

          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600">
            DESTEK
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            Bizimle iletişime geçin.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            UçGit hakkında sorularınız, önerileriniz veya geri
            bildirimleriniz için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-5xl px-5 py-14">
        {/* İLETİŞİM KARTLARI */}
        <div className="grid gap-5 md:grid-cols-3">
          {/* SUPPORT */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl">
              💬
            </div>

            <h2 className="mt-4 text-xl font-black text-slate-900">
              Destek
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              UçGit kullanımı ve genel sorularınız için bize
              ulaşabilirsiniz.
            </p>

            <a
              href="mailto:support@ucgit.com"
              className="mt-4 block text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              support@ucgit.com
            </a>
          </div>

          {/* GENERAL */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl">
              ✉️
            </div>

            <h2 className="mt-4 text-xl font-black text-slate-900">
              Genel İletişim
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              İş birlikleri ve genel iletişim talepleriniz için
              bizimle iletişime geçebilirsiniz.
            </p>

            <a
              href="mailto:info@ucgit.com"
              className="mt-4 block text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              info@ucgit.com
            </a>
          </div>

          {/* LOCATION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-xl">
              📍
            </div>

            <h2 className="mt-4 text-xl font-black text-slate-900">
              Konum
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              UçGit
              <br />
              İstanbul, Türkiye
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
          <div className="mb-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
              BİZE YAZIN
            </p>

            <h2 className="mt-2 text-2xl font-black text-slate-900">
              Mesaj Gönder
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Sorularınızı veya önerilerinizi aşağıdaki form
              üzerinden bize iletebilirsiniz.
            </p>
          </div>

          <form
            action="https://formsubmit.co/melihizzetzorluoglu.com"
            method="POST"
            className="space-y-5"
          >
            <input
              type="hidden"
              name="_subject"
              value="UçGit İletişim Formu"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <input
              type="hidden"
              name="_next"
              value="https://www.ucgit.com/contact"
            />

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Ad Soyad
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="Adınız ve soyadınız"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                E-posta
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="ornek@email.com"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Konu
              </label>

              <input
                type="text"
                name="subject"
                required
                placeholder="Mesajınızın konusu"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-slate-700">
                Mesaj
              </label>

              <textarea
                name="message"
                required
                rows={6}
                placeholder="Mesajınızı yazın..."
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Mesajı Gönder →
            </button>
          </form>
        </div>

        {/* ALT CTA */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-[#020817] p-7 text-white shadow-lg">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                UÇGİT
              </p>

              <h2 className="mt-2 text-xl font-black">
                Seyahatinizi planlamaya hazır mısınız?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Uçuş seçeneklerini keşfetmek için uçuş aramayı
                başlatabilirsiniz.
              </p>
            </div>

            <Link
              href="/#tpwl-search"
              className="shrink-0 rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-blue-700"
            >
              <span className="mr-2 inline-block animate-plane-fly">
                ✈️
              </span>
              Uçuş Ara
            </Link>
          </div>
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
              className="transition hover:text-blue-600"
            >
              Hakkımızda
            </Link>

            <Link
              href="/contact"
              className="font-semibold text-blue-600"
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
