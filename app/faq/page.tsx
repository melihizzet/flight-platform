export default function FAQPage() {
  const faqs = [
    {
      question: "UçGit nasıl çalışır?",
      answer:
        "UçGit, farklı havayolları ve seyahat sağlayıcılarının fiyatlarını karşılaştırarak size uygun uçuş seçeneklerini gösterir.",
    },
    {
      question: "UçGit üzerinden bilet satın alabilir miyim?",
      answer:
        "UçGit sizi ilgili seyahat sağlayıcısının rezervasyon sayfasına yönlendirir. Satın alma işlemini bu sayfada tamamlarsınız.",
    },
    {
      question: "Fiyatlar gerçek zamanlı mı güncelleniyor?",
      answer:
        "Uçuş fiyatları seyahat sağlayıcılarından alınan güncel verilere göre gösterilir. Fiyat ve müsaitlik değişebilir.",
    },
    {
      question: "UçGit ücretsiz mi?",
      answer:
        "Evet. UçGit üzerinden uçuş seçeneklerini aramak ve karşılaştırmak ücretsizdir.",
    },
    {
      question: "Otel ve araç kiralama hizmetleri de olacak mı?",
      answer:
        "Evet. UçGit, uçuşların yanında otel ve araç kiralama seçeneklerini de tek bir platform üzerinden sunmayı hedeflemektedir.",
    },
    {
      question: "UçGit'te rezervasyon yaptığımda kiminle iletişime geçmeliyim?",
      answer:
        "Rezervasyon işlemi yönlendirildiğiniz seyahat sağlayıcısı üzerinden tamamlandığı için rezervasyonla ilgili işlemlerde ilgili sağlayıcının destek kanallarını kullanmanız gerekir.",
    },
  ];

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
              className="text-sm font-semibold text-blue-600"
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
            DESTEK
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            Sık Sorulan Sorular
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            UçGit hakkında merak ettiğiniz soruların cevaplarını
            burada bulabilirsiniz.
          </p>

        </div>

      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-16">

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                  {index + 1}
                </div>

                <div>

                  <h2 className="text-base font-black text-slate-900">
                    {faq.question}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {faq.answer}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* CONTACT CTA */}
      <section className="bg-slate-50 py-14">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl">
            💬
          </div>

          <h2 className="mt-4 text-2xl font-black text-slate-900">
            Sorunuzun cevabını bulamadınız mı?
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            Bize ulaşın, size yardımcı olmaktan memnuniyet duyarız.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-block rounded-xl bg-[#020817] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Bize Ulaşın →
          </a>

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

            <a href="/privacy-policy" className="hover:text-blue-600">
              Gizlilik
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
