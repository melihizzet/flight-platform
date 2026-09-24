import Link from "next/link";

export default function PrivacyPolicyPage() {
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
            🔒
          </div>

          <h1 className="text-3xl font-bold md:text-4xl">
            Gizlilik Politikası
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            UçGit kullanıcılarının gizliliğine önem verir.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-5 py-12">

        <div className="space-y-6">

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">
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

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">
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

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">
              3. Bilgilerin Kullanım Amaçları
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Bilgiler; hizmetlerin sunulması, kullanıcı taleplerine cevap
              verilmesi, site performansının geliştirilmesi, güvenliğin
              sağlanması ve kullanıcı deneyiminin iyileştirilmesi gibi
              amaçlarla kullanılabilir.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">
              4. Çerezler
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              UçGit ve hizmet sağlayıcıları, sitenin düzgün çalışması,
              performansın ölçülmesi ve kullanıcı deneyiminin geliştirilmesi
              amacıyla çerezler veya benzeri teknolojiler kullanabilir.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">
              5. Üçüncü Taraf Hizmetler
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              UçGit, uçuş ve seyahat seçeneklerini sunmak amacıyla üçüncü
              taraf seyahat ve teknoloji sağlayıcılarıyla entegre olabilir.
              Kullanıcı, satın alma veya rezervasyon aşamasında ilgili
              üçüncü taraf sağlayıcının internet sitesine yönlendirilebilir.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">
              6. Veri Güvenliği
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              UçGit, kullanıcı bilgilerinin yetkisiz erişime, kayba veya
              kötüye kullanıma karşı korunması için makul teknik ve
              organizasyonel önlemler almaya çalışır.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">
              7. Verilerin Saklanması
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Kişisel bilgiler, ilgili hizmetin sağlanması veya yasal
              yükümlülüklerin yerine getirilmesi için gerekli olduğu sürece
              saklanabilir.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">
              8. Kullanıcı Talepleri
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Gizlilik veya kişisel verilerle ilgili talepleriniz için
              UçGit ile iletişime geçebilirsiniz.
            </p>

            <a
              href="mailto:support@ucgit.com"
              className="mt-4 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              support@ucgit.com
            </a>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">
              9. Politika Güncellemeleri
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Bu Gizlilik Politikası, hizmetlerdeki veya yasal
              gerekliliklerdeki değişikliklere bağlı olarak güncellenebilir.
              Güncel sürüm bu sayfada yayımlanır.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold">
              10. İletişim
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Gizlilik politikası hakkında sorularınız için bizimle
              iletişime geçebilirsiniz.
            </p>

            <a
              href="mailto:support@ucgit.com"
              className="mt-4 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
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
