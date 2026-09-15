export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* LOGO */}
          <a href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-14 w-auto rounded-xl"
            />
          </a>

          {/* MENU */}
          <nav className="hidden items-center gap-8 md:flex">

            <a
              href="/"
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              ✈️ Uçuşlar
            </a>

            <a
              href="/hotels"
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              🏨 Otel
            </a>

            <a
              href="/cars"
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              <span className="inline-block animate-bounce">
                🚗
              </span>
              Araç Kiralama
            </a>

            <a
              href="/discover"
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              ⚙️ Keşfet
            </a>

            <a
              href="/contact"
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              ♧ Destek
            </a>

          </nav>

          {/* SAĞ TARAF */}
          <div className="hidden items-center gap-3 md:flex">

            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
              TR 🇹🇷
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-600">
              ♟
            </div>

          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            YASAL
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            Gizlilik Politikası
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            UçGit olarak kullanıcı bilgilerinin güvenliğini ve
            gizliliğini korumaya önem veriyoruz.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-6 py-16">

        <div className="space-y-4">

          {/* TOPLANAN BİLGİLER */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                🔐
              </div>

              <div>
                <h2 className="text-base font-black text-slate-900">
                  Toplanan Bilgiler
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  UçGit, kullanıcı deneyimini geliştirmek amacıyla
                  temel kullanım verilerini ve analiz bilgilerini
                  toplayabilir.
                </p>
              </div>

            </div>

          </div>

          {/* ÇEREZLER */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-lg">
                🍪
              </div>

              <div>
                <h2 className="text-base font-black text-slate-900">
                  Çerezler
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Web sitemiz, performansı artırmak ve kullanıcı
                  tercihlerini hatırlamak için çerezler kullanabilir.
                </p>
              </div>

            </div>

          </div>

          {/* ÜÇÜNCÜ TARAF */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                🌐
              </div>

              <div>
                <h2 className="text-base font-black text-slate-900">
                  Üçüncü Taraf Hizmetler
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  UçGit, uçuş sonuçlarını göstermek için üçüncü
                  taraf iş ortakları ve seyahat sağlayıcılarıyla
                  çalışabilir.
                </p>
              </div>

            </div>

          </div>

          {/* VERİ GÜVENLİĞİ */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-lg">
                🛡️
              </div>

              <div>
                <h2 className="text-base font-black text-slate-900">
                  Veri Güvenliği
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Kullanıcı bilgilerinin korunması için gerekli
                  teknik ve güvenlik önlemleri uygulanmaktadır.
                </p>
              </div>

            </div>

          </div>

          {/* İLETİŞİM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                ✉️
              </div>

              <div>
                <h2 className="text-base font-black text-slate-900">
                  İletişim
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Gizlilik politikasıyla ilgili sorularınız için
                  support@ucgit.com adresinden bize ulaşabilirsiniz.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-8">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <img
            src="/logo.jpg"
            alt="UçGit"
            className="mx-auto h-11 w-auto rounded-lg"
          />

          <p className="mt-3 text-xs text-slate-500">
            © 2026 UçGit. Tüm hakları saklıdır.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-5 text-xs text-slate-500">

            <a href="/about" className="hover:text-blue-600">
              Hakkımızda
            </a>

            <a href="/blog" className="hover:text-blue-600">
              Blog
            </a>

            <a href="/contact" className="hover:text-blue-600">
              İletişim
            </a>

            <a href="/faq" className="hover:text-blue-600">
              SSS
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
