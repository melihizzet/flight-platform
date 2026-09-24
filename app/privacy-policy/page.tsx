import Link from "next/link";

export default function PrivacyPolicyPage() {
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
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
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
            <span className="inline-block">🔒</span>
          </div>

          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600">
            GİZLİLİK
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            Gizlilik Politikası
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            UçGit kullanıcılarının gizliliğine önem verir. Bu sayfada
            bilgilerinizin kullanımı hakkında genel bilgilere
            ulaşabilirsiniz.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-5 py-14">
        <div className="space-y-4">
          {/* 1 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-black text-slate-900">
              1. Genel Bilgilendirme
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              UçGit, kullanıcıların uçuş ve seyahat seçeneklerini
              karşılaştırmasına yardımcı olan bir seyahat platformudur.
              Bu Gizlilik Politikası, UçGit üzerinden gerçekleştirilen
              ziyaretler sırasında oluşabilecek bilgi ve veri süreçleri
              hakkında genel bilgilendirme amacı taşır.
            </p>
          </section>

          {/* 2 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-black text-slate-900">
              2. Toplanan Bilgiler
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              UçGit'i kullanırken kullanıcı tarafından doğrudan sağlanan
              bilgiler ile teknik kullanım bilgileri işlenebilir.
              Bunlara iletişim bilgileri, kullanıcı tarafından gönderilen
              mesajlar ve internet tarayıcısı ile ilgili teknik bilgiler
              dahil olabilir.
            </p>
          </section>

          {/* 3 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-black text-slate-900">
              3. Bilgilerin Kullanım Amaçları
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Bilgiler; hizmetlerin sunulması, kullanıcı taleplerine cevap
              verilmesi, site performansının geliştirilmesi, güvenliğin
              sağlanması ve kullanıcı deneyiminin iyileştirilmesi gibi
              amaçlarla kullanılabilir.
            </p>
          </section>

          {/* 4 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-black text-slate-900">
              4. Çerezler
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              UçGit ve hizmet sağlayıcıları, sitenin düzgün çalışması,
              performansın ölçülmesi ve kullanıcı deneyiminin geliştirilmesi
              amacıyla çerezler veya benzeri teknolojiler kullanabilir.
            </p>
          </section>

          {/* 5 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-black text-slate-900">
              5. Üçüncü Taraf Hizmetler
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              UçGit, uçuş seçeneklerini sunmak amacıyla üçüncü taraf seyahat
              ve teknoloji sağlayıcılarıyla entegre olabilir. Kullanıcı,
              satın alma veya rezervasyon aşamasında ilgili üçüncü taraf
              sağlayıcının internet sitesine yönlendirilebilir.
            </p>
          </section>

          {/* 6 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-black text-slate-900">
              6. Veri Güvenliği
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              UçGit, kullanıcı bilgilerinin yetkisiz erişime, kayba veya
              kötüye kullanıma karşı korunması için makul teknik ve
              organizasyonel önlemler almaya çalışır.
            </p>
          </section>

          {/* 7 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-black text-slate-900">
              7. Verilerin Saklanması
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Kişisel bilgiler, ilgili hizmetin sağlanması veya yasal
              yükümlülüklerin yerine getirilmesi için gerekli olduğu sürece
              saklanabilir.
            </p>
          </section>

          {/* 8 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-black text-slate-900">
              8. Kullanıcı Talepleri
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Gizlilik veya kişisel verilerle ilgili talepleriniz için
              UçGit ile iletişime geçebilirsiniz.
            </p>

            <a
              href="mailto:support@ucgit.com"
              className="mt-4 inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              support@ucgit.com
            </a>
          </section>

          {/* 9 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-black text-slate-900">
              9. Politika Güncellemeleri
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Bu Gizlilik Politikası, hizmetlerdeki veya yasal
              gerekliliklerdeki değişikliklere bağlı olarak güncellenebilir.
              Güncel sürüm bu sayfada yayımlanır.
            </p>
          </section>

          {/* 10 */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <h2 className="text-xl font-black text-slate-900">
              10. İletişim
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Gizlilik politikası hakkında sorularınız için bizimle
              iletişime geçebilirsiniz.
            </p>

            <a
              href="mailto:support@ucgit.com"
              className="mt-4 inline-flex text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              support@ucgit.com
            </a>
          </section>
        </div>

        {/* NOTICE */}
        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-xs leading-6 text-amber-800">
            <strong>Bilgilendirme:</strong> Bu metin genel bilgilendirme
            amacıyla hazırlanmıştır. UçGit'in faaliyet kapsamı ve kullanılan
            üçüncü taraf hizmetler kesinleştiğinde metnin hukuki açıdan
            uzman tarafından gözden geçirilmesi önerilir.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-[#020817] p-7 text-white shadow-lg">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
            UÇGİT
          </p>

          <h2 className="mt-2 text-xl font-black">
            Gizlilik hakkında sorunuz mu var?
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            Gizlilik veya kişisel verilerle ilgili sorularınız için
            bizimle iletişime geçebilirsiniz.
          </p>

          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-blue-700"
          >
            Bize Ulaşın →
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
              className="transition hover:text-blue-600"
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
              className="font-semibold text-blue-600"
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
