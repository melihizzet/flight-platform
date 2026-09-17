export default function PrivacyPolicyPage() {
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
            Gizlilik Politikası
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            UçGit olarak kullanıcılarımızın gizliliğine ve kişisel
            verilerinin korunmasına önem veriyoruz.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-5 py-12">

        <div className="space-y-4">

          {/* 1 - GENEL */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                🔐
              </div>

              <div>

                <h2 className="text-base font-black text-slate-900">
                  1. Genel Bilgilendirme
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Bu Gizlilik Politikası, UçGit internet sitesini
                  kullanan ziyaretçilerin bilgilerinin nasıl
                  toplanabileceğini, kullanılabileceğini ve
                  korunabileceğini açıklamaktadır.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  UçGit, kullanıcı deneyimini geliştirmek, hizmetlerini
                  sunmak ve internet sitesinin güvenliğini sağlamak
                  amacıyla belirli bilgileri işleyebilir.
                </p>

              </div>

            </div>

          </div>

          {/* 2 - TOPLANAN BİLGİLER */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-lg">
                📋
              </div>

              <div>

                <h2 className="text-base font-black text-slate-900">
                  2. Toplanan Bilgiler
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Site kullanımı sırasında aşağıdaki bilgi türleri
                  teknik olarak işlenebilir:
                </p>

                <ul className="mt-3 space-y-2 text-xs leading-5 text-slate-500">

                  <li>• IP adresi ve teknik bağlantı bilgileri</li>

                  <li>• Tarayıcı ve cihaz bilgileri</li>

                  <li>• Ziyaret edilen sayfalar ve kullanım bilgileri</li>

                  <li>• Arama ve etkileşim bilgileri</li>

                  <li>• Kullanıcının gönüllü olarak ilettiği iletişim bilgileri</li>

                </ul>

              </div>

            </div>

          </div>

          {/* 3 - KULLANIM AMAÇLARI */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                ⚙️
              </div>

              <div>

                <h2 className="text-base font-black text-slate-900">
                  3. Bilgilerin Kullanım Amaçları
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Toplanan bilgiler; internet sitesinin çalıştırılması,
                  hizmetlerin geliştirilmesi, kullanıcı taleplerinin
                  yanıtlanması, güvenliğin sağlanması ve teknik
                  performansın analiz edilmesi gibi amaçlarla
                  kullanılabilir.
                </p>

              </div>

            </div>

          </div>

          {/* 4 - ÇEREZLER */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-lg">
                🍪
              </div>

              <div>

                <h2 className="text-base font-black text-slate-900">
                  4. Çerezler
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  UçGit, internet sitesinin düzgün çalışmasını,
                  performansını ölçmeyi ve kullanıcı tercihlerini
                  hatırlamayı kolaylaştırmak amacıyla çerezler veya
                  benzer teknolojiler kullanabilir.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Tarayıcı ayarlarınız üzerinden çerezleri
                  sınırlandırabilir veya devre dışı bırakabilirsiniz.
                  Ancak bazı site özellikleri bu durumda düzgün
                  çalışmayabilir.
                </p>

              </div>

            </div>

          </div>

          {/* 5 - ÜÇÜNCÜ TARAF */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                🌐
              </div>

              <div>

                <h2 className="text-base font-black text-slate-900">
                  5. Üçüncü Taraf Hizmetler
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  UçGit, uçuş arama ve seyahat hizmetleri kapsamında
                  üçüncü taraf hizmet sağlayıcıları ve iş ortaklarının
                  teknolojilerini kullanabilir.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Bu hizmet sağlayıcılar, kendi gizlilik politikaları
                  kapsamında farklı veri işleme uygulamalarına sahip
                  olabilir. Kullanıcıların ilgili hizmet sağlayıcıların
                  koşullarını ve gizlilik politikalarını incelemesi
                  önerilir.
                </p>

              </div>

            </div>

          </div>

          {/* 6 - VERİ GÜVENLİĞİ */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-lg">
                🛡️
              </div>

              <div>

                <h2 className="text-base font-black text-slate-900">
                  6. Veri Güvenliği
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  UçGit, sahip olduğu veya kontrol ettiği sistemlerde
                  bulunan bilgilerin yetkisiz erişim, kayıp veya
                  kötüye kullanıma karşı korunması için uygun teknik
                  ve idari önlemler almaya çalışır.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Bununla birlikte internet üzerinden gerçekleştirilen
                  hiçbir veri aktarımının tamamen risksiz olduğu garanti
                  edilemez.
                </p>

              </div>

            </div>

          </div>

          {/* 7 - VERİ SAKLAMA */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                🗂️
              </div>

              <div>

                <h2 className="text-base font-black text-slate-900">
                  7. Verilerin Saklanması
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Kişisel bilgiler, yalnızca ilgili hizmetin
                  gerçekleştirilmesi veya yasal yükümlülüklerin
                  yerine getirilmesi için gerekli olduğu sürece
                  saklanabilir.
                </p>

              </div>

            </div>

          </div>

          {/* 8 - KULLANICI HAKLARI */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-lg">
                👤
              </div>

              <div>

                <h2 className="text-base font-black text-slate-900">
                  8. Kullanıcı Talepleri
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Kişisel verilerinizle ilgili bilgi veya talepleriniz
                  için bizimle iletişime geçebilirsiniz. Talepler,
                  yürürlükteki mevzuat ve uygulanabilir yasal
                  yükümlülükler çerçevesinde değerlendirilir.
                </p>

              </div>

            </div>

          </div>

          {/* 9 - GÜNCELLEMELER */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg">
                🔄
              </div>

              <div>

                <h2 className="text-base font-black text-slate-900">
                  9. Politika Güncellemeleri
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  UçGit, hizmetlerinde veya yasal gerekliliklerde
                  meydana gelen değişikliklere bağlı olarak bu
                  Gizlilik Politikası'nı güncelleyebilir.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Güncel politika bu sayfa üzerinden yayımlanır.
                </p>

              </div>

            </div>

          </div>

          {/* 10 - İLETİŞİM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-lg">
                ✉️
              </div>

              <div>

                <h2 className="text-base font-black text-slate-900">
                  10. İletişim
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Gizlilik Politikası veya kişisel verilerinizle ilgili
                  sorularınız için aşağıdaki e-posta adresinden
                  bizimle iletişime geçebilirsiniz.
                </p>

                <a
                  href="mailto:support@ucgit.com"
                  className="mt-3 inline-block text-xs font-bold text-blue-600 hover:text-blue-700"
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
              Bu sayfa genel bilgilendirme amacıyla hazırlanmıştır.
              UçGit'in gerçek veri işleme faaliyetleri, şirket yapısı,
              kullanılan hizmetler ve yürürlükteki mevzuat dikkate
              alınarak hukuki gerekliliklere uygun şekilde
              güncellenmelidir.
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
              className="font-semibold text-blue-600"
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
