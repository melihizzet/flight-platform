import Link from "next/link";

export default function FAQPage() {
  const faqs = [
    {
      question: "UçGit nasıl çalışır?",
      answer:
        "UçGit, farklı havayolları ve seyahat sağlayıcılarının uçuş seçeneklerini karşılaştırmanıza yardımcı olur ve uygun seçenekleri tek bir yerde keşfetmenizi sağlar.",
    },
    {
      question: "UçGit üzerinden bilet satın alabilir miyim?",
      answer:
        "UçGit üzerinden uçuş seçeneklerini arayabilir ve karşılaştırabilirsiniz. Satın alma işlemi, seçtiğiniz seyahat sağlayıcısının yönlendirme sayfasında tamamlanır.",
    },
    {
      question: "Fiyatlar gerçek zamanlı mı güncelleniyor?",
      answer:
        "Uçuş fiyatları ve müsaitlik bilgileri seyahat sağlayıcılarından alınan verilere göre gösterilir. Fiyatlar ve müsaitlik seyahat sağlayıcısına göre değişebilir.",
    },
    {
      question: "UçGit ücretsiz mi?",
      answer:
        "Evet. UçGit üzerinden uçuş seçeneklerini aramak ve karşılaştırmak ücretsizdir.",
    },
    {
      question: "UçGit'te rezervasyon yaptığımda kiminle iletişime geçmeliyim?",
      answer:
        "Rezervasyon işlemi yönlendirildiğiniz seyahat sağlayıcısının sayfasında tamamlandığı için rezervasyon, ödeme veya bilet değişikliği gibi konularda ilgili sağlayıcının destek kanallarını kullanmanız gerekir.",
    },
    {
      question: "Uçuş fiyatları neden değişebilir?",
      answer:
        "Uçuş fiyatları havayolu, seyahat tarihi, müsaitlik ve talep gibi farklı etkenlere bağlı olarak değişebilir. Bu nedenle arama sırasında görünen fiyat ile daha sonraki fiyat arasında farklılık olabilir.",
    },
    {
      question: "UçGit'te hangi uçuşları arayabilirim?",
      answer:
        "UçGit üzerinden farklı destinasyonlar ve seyahat tarihleri için mevcut uçuş seçeneklerini arayabilirsiniz.",
    },
  ];

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

        <div className="relative mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
          <div className="mb-4 text-3xl">
            <span className="inline-block animate-plane-fly">
              💬
            </span>
          </div>

          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-600">
            DESTEK
          </p>

          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            Sık Sorulan Sorular
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            UçGit hakkında merak ettiğiniz soruların cevaplarını
            burada bulabilirsiniz.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-14">
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md md:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-600">
                  {index + 1}
                </div>

                <div className="min-w-0">
                  <h2 className="text-sm font-black text-slate-900 md:text-base">
                    {faq.question}
                  </h2>

                  <p className="mt-2 text-xs leading-6 text-slate-500 md:text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-5 pb-14">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-[#020817] p-7 text-center text-white shadow-lg md:p-9">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20 text-xl">
            💬
          </div>

          <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
            UÇGİT DESTEK
          </p>

          <h2 className="mt-2 text-xl font-black md:text-2xl">
            Sorunuzun cevabını bulamadınız mı?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
            Aradığınız cevabı bulamadıysanız bizimle iletişime
            geçebilirsiniz. Size yardımcı olmaktan memnuniyet duyarız.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-6 py-3 text-xs font-semibold text-white transition hover:bg-blue-700"
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
              className="font-semibold text-blue-600"
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
