import Link from "next/link";

export default function ContactPage() {
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

          <Link
            href="/login"
            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            Giriş
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 px-5 py-14">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-3 text-3xl">
            💬
          </div>

          <h1 className="text-3xl font-bold md:text-4xl">
            İletişim
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            UçGit hakkında sorularınız, önerileriniz veya geri bildirimleriniz
            için bizimle iletişime geçebilirsiniz.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-5xl px-5 py-12">

        <div className="grid gap-6 md:grid-cols-3">

          {/* SUPPORT */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
              💬
            </div>

            <h2 className="mt-4 text-lg font-bold">
              Destek
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              UçGit kullanımı ve genel sorularınız için bize ulaşabilirsiniz.
            </p>

            <a
              href="mailto:support@ucgit.com"
              className="mt-4 block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              support@ucgit.com
            </a>

          </div>

          {/* GENERAL */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-xl">
              ✉️
            </div>

            <h2 className="mt-4 text-lg font-bold">
              Genel İletişim
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              İş birlikleri ve genel iletişim talepleriniz için:
            </p>

            <a
              href="mailto:info@ucgit.com"
              className="mt-4 block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              info@ucgit.com
            </a>

          </div>

          {/* LOCATION */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-xl">
              📍
            </div>

            <h2 className="mt-4 text-lg font-bold">
              Konum
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              UçGit
              <br />
              İstanbul, Türkiye
            </p>

          </div>

        </div>

        {/* FORM */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

          <div className="mb-6">

            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Bize Yazın
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Mesaj Gönder
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Sorularınızı veya önerilerinizi aşağıdaki form üzerinden
              iletebilirsiniz.
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
              href="/privacy-policy"
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
