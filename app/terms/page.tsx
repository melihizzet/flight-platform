export default function TermsPage() {
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

        <div className="relative mx-auto max-w-4xl px-5 py-14 text-center">

          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-blue-600">
            YASAL
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">
            Kullanım Şartları
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            UçGit internet sitesini ve sunduğu hizmetleri kullanırken
            geçerli olan temel kullanım koşulları aşağıda açıklanmıştır.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-5 py-12">

        <div className="space-y-4">

          {/* 1 - HİZMET KULLANIMI */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

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

          {/* 2 - UÇUŞ VE FİYAT BİLGİLERİ */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

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
                  kampanya bilgileri üçüncü taraf sağlayıcılardan
                  alınabilir.
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

          {/* 3 - ÜÇÜNCÜ TARAF SİTELER */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                🌐
              </div>

              <div>

                <h2 className="text-base font-black text-slate-900">
                  3. Üçüncü Taraf Siteler
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  UçGit, kullanıcıları rezervasyon, uçuş, otel veya araç
                  kiralama işlemlerinin gerçekleştirilebildiği üçüncü
                  taraf internet sitelerine yönlendirebilir.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Bu sitelerin kendi kullanım koşulları, gizlilik
                  politikaları ve işlem şartları bulunabilir. Kullanıcı,
                  yönlendirildiği platformun koşullarını kabul ederek
                  işlem gerçekleştirmiş olur.
                </p>

              </div>

            </div>

          </div>

          {/* 4 - REZERVASYON VE SATIN ALMA */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-lg">
                🎫
              </div>

              <div>

                <h2 className="text-base font-black text-slate-900">
                  4. Rezervasyon ve Satın Alma
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  UçGit, kullanıcı ile hava yolu, otel, araç kiralama
                  şirketi veya diğer seyahat sağlayıcıları arasında
                  doğrudan bir rezervasyon sözleşmesinin tarafı
                  olmayabilir.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Rezervasyon, ödeme, iptal, değişiklik ve iade
                  koşulları ilgili hizmet sağlayıcısının kurallarına
                  tabidir.
                </p>

              </div>

            </div>

          </div>

          {/* 5 - KULLANICI SORUMLULUĞU */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                👤
              </div>

              <div>

                <h2 className="text-base font-black text-slate-900">
                  5. Kullanıcı Sorumluluğu
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Kullanıcılar, UçGit'i hukuka uygun şekilde kullanmayı
                  ve siteyi diğer kullanıcıların veya hizmetin
                  güvenliğini olumsuz etkileyecek biçimde kullanmamayı
                  kabul eder.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Yanlış, yanıltıcı veya yetkisiz bilgiler kullanılması
                  nedeniyle oluşabilecek sonuçlardan kullanıcı
                  sorumludur.
                </p>

              </div>

            </div>

          </div>

          {/* 6 - HİZMET DEĞİŞİKLİKLERİ */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-lg">
                🔄
              </div>

              <div>

                <h2 className="text-base font-black text-slate-900">
                  6. Hizmet Değişiklikleri
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  UçGit, internet sitesinin içeriğini, özelliklerini
                  veya sunduğu hizmetleri önceden bildirimde bulunmadan
                  değiştirebilir, güncelleyebilir veya geçici olarak
                  kullanıma kapatabilir.
                </p>

              </div>

            </div>

          </div>

          {/* 7 - SORUMLULUK SINIRI */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

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
                  fiyatı, müsaitliği, içeriği veya işlem koşulları
                  UçGit'in doğrudan kontrolünde değildir.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Kullanıcıların işlem öncesinde ilgili sağlayıcı
                  tarafından sunulan güncel bilgileri kontrol etmesi
                  gerekir.
                </p>

              </div>

            </div>

          </div>

          {/* 8 - ŞARTLARIN GÜNCELLENMESİ */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

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
                  gelen değişikliklere bağlı olarak bu Kullanım
                  Şartları'nı güncelleyebilir.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Güncel şartlar bu sayfa üzerinden yayımlandığı
                  tarihten itibaren geçerli olur.
                </p>

              </div>

            </div>

          </div>

          {/* 9 - İLETİŞİM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

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

          {/* NOTICE */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">

            <p className="text-[11px] leading-5 text-slate-500">
              <strong className="text-slate-700">
                Önemli:
              </strong>{" "}
              Bu Kullanım Şartları genel bilgilendirme amacıyla
              hazırlanmıştır. UçGit'in gerçek hizmet modeli, şirket
              yapısı, sözleşmeleri ve yürürlükteki mevzuat dikkate
              alınarak hukuki açıdan ayrıca incelenmesi ve gerektiğinde
              profesyonel hukuk danışmanlığıyla güncellenmesi önerilir.
            </p>

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
              className="font-semibold text-blue-600"
            >
              Kullanım Şartları
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}
