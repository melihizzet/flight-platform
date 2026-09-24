import Link from "next/link";

export default function TermsPage() {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
          <div className="mb-4 text-3xl">
            <span className="inline-block animate-plane-fly">
              📄
            </span>
          </div>

          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600">
            YASAL
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            Kullanım Şartları
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            UçGit internet sitesini ve sunduğu hizmetleri kullanırken
            geçerli olan temel kullanım koşulları aşağıda açıklanmıştır.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-5 py-14">
        <div className="space-y-4">
          {/* 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                ✈️
              </div>

              <div>
                <h2 className="text-base font-black text-slate-900">
                  1. Hizmet Kullanımı
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  UçGit, kullanıcıların uçuş seçeneklerini karşılaştırmasına,
                  seyahat fırsatlarını keşfetmesine ve ilgili seyahat
                  hizmetlerine ulaşmasına yardımcı olan bir platformdur.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Kullanıcılar UçGit'i yürürlükteki mevzuata ve bu Kullanım
                  Şartları'na uygun şekilde kullanmayı kabul eder.
                </p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-lg">
                💳
              </div>

              <div>
                <h2 className="text-base font-black text-slate-900">
                  2. Uçuş ve Fiyat Bilgileri
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  UçGit üzerinde gösterilen uçuş, fiyat, müsaitlik ve
                  kampanya bilgileri üçüncü taraf sağlayıcılardan alınabilir.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Fiyatlar ve müsaitlik bilgileri zaman içerisinde
                  değişebilir. Rezervasyon veya satın alma işlemi,
                  kullanıcının yönlendirildiği ilgili sağlayıcının
                  platformunda gerçekleştirilir.
                </p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                🌐
              </div>

              <div>
                <h2 className="text-base font-black text-slate-900">
                  3. Üçüncü Taraf Siteler
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  UçGit, kullanıcıları uçuş veya diğer seyahat işlemlerinin
                  gerçekleştirilebildiği üçüncü taraf internet sitelerine
                  yönlendirebilir.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Bu sitelerin kendi kullanım koşulları, gizlilik
                  politikaları ve işlem şartları bulunabilir. Kullanıcı,
                  işlem yapmadan önce yönlendirildiği platformun koşullarını
                  incelemekten sorumludur.
                </p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-lg">
                🎫
              </div>

              <div>
                <h2 className="text-base font-black text-slate-900">
                  4. Rezervasyon ve Satın Alma
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  UçGit, kullanıcı ile hava yolu veya diğer seyahat
                  sağlayıcıları arasında doğrudan bir rezervasyon
                  sözleşmesinin tarafı olmayabilir.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Rezervasyon, ödeme, iptal, değişiklik ve iade koşulları
                  ilgili hizmet sağlayıcısının kurallarına tabidir.
                </p>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                👤
              </div>

              <div>
                <h2 className="text-base font-black text-slate-900">
                  5. Kullanıcı Sorumluluğu
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Kullanıcılar, UçGit'i hukuka uygun şekilde kullanmayı ve
                  siteyi diğer kullanıcıların veya hizmetin güvenliğini
                  olumsuz etkileyecek biçimde kullanmamayı kabul eder.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Yanlış, yanıltıcı veya yetkisiz bilgiler kullanılması
                  nedeniyle oluşabilecek sonuçlardan kullanıcı sorumludur.
                </p>
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-lg">
                🔄
              </div>

              <div>
                <h2 className="text-base font-black text-slate-900">
                  6. Hizmet Değişiklikleri
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  UçGit, internet sitesinin içeriğini, özelliklerini veya
                  sunduğu hizmetleri önceden bildirimde bulunmadan
                  değiştirebilir, güncelleyebilir veya geçici olarak
                  kullanıma kapatabilir.
                </p>
              </div>
            </div>
          </div>

          {/* 7 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                🛡️
              </div>

              <div>
                <h2 className="text-base font-black text-slate-900">
                  7. Sorumluluk Sınırı
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Üçüncü taraf sağlayıcılar tarafından sunulan hizmetlerin
                  fiyatı, müsaitliği, içeriği veya işlem koşulları UçGit'in
                  doğrudan kontrolünde değildir.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Kullanıcıların işlem öncesinde ilgili sağlayıcı tarafından
                  sunulan güncel bilgileri kontrol etmesi gerekir.
                </p>
              </div>
            </div>
          </div>

          {/* 8 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-lg">
                📝
              </div>

              <div>
                <h2 className="text-base font-black text-slate-900">
                  8. Kullanım Şartlarının Güncellenmesi
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  UçGit, hizmetlerinde veya yasal gerekliliklerde meydana
                  gelen değişikliklere bağlı olarak bu Kullanım Şartları'nı
                  güncelleyebilir.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Güncel şartlar bu sayfa üzerinden yayımlandığı tarihten
                  itibaren geçerli olur.
                </p>
              </div>
            </div>
          </div>

          {/* 9 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                ✉️
              </div>

              <div>
                <h2 className="text-base font-black text-slate-900">
                  9. İletişim
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Kullanım Şartları hakkında sorularınız için bizimle
                  iletişime geçebilirsiniz.
                </p>

                <a
                  href="mailto:support@ucgit.com"
                  className="mt-3 inline-block text-xs font-bold text-blue-600 transition hover:text-blue-700"
                >
                  support@ucgit.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* NOTICE */}
        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
          <p className="text-[11px] leading-5 text-slate-500">
            <strong className="text-slate-700">Önemli:</strong> Bu Kullanım
            Şartları genel bilgilendirme amacıyla hazırlanmıştır. UçGit'in
            gerçek hizmet modeli, şirket yapısı, sözleşmeleri ve yürürlükteki
            mevzuat dikkate alınarak hukuki açıdan ayrıca incelenmesi ve
            gerektiğinde profesyonel hukuk danışmanlığıyla güncellenmesi
            önerilir.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-[#020817] p-7 text-white shadow-lg">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
            UÇGİT
          </p>

          <h2 className="mt-2 text-xl font-black">
            Kullanım şartları hakkında sorunuz mu var?
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            Sorularınız için bizimle iletişime geçebilirsiniz.
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
              className="transition hover:text-blue-600"
            >
              Gizlilik
            </Link>

            <Link
              href="/terms"
              className="font-semibold text-blue-600"
            >
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
