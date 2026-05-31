export default function FAQPage() {

  const faqs = [
    {
      question: "UçGit nasıl çalışır?",
      answer:
        "UçGit, farklı havayolları ve seyahat sağlayıcılarının fiyatlarını karşılaştırarak size en uygun uçuşları gösterir.",
    },
    {
      question: "UçGit üzerinden bilet satın alabilir miyim?",
      answer:
        "UçGit sizi güvenilir iş ortaklarının rezervasyon sayfasına yönlendirir ve satın alma işlemini orada tamamlarsınız.",
    },
    {
      question: "Fiyatlar gerçek zamanlı mı güncelleniyor?",
      answer:
        "Evet. Uçuş fiyatları anlık olarak güncellenir ve en güncel teklifler gösterilir.",
    },
    {
      question: "UçGit ücretsiz mi?",
      answer:
        "Evet. UçGit tamamen ücretsiz bir uçuş arama ve karşılaştırma platformudur.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020817] text-white px-6 py-14">

      {/* LOGO */}
      <a
        href="/"
        className="flex items-center gap-3 mb-12"
      >

        <div className="w-9 h-9 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">

          <span className="text-blue-400 text-lg rotate-[-25deg]">
            ✈️
          </span>

        </div>

        <h1 className="text-2xl font-black tracking-tight">
          Uç<span className="text-blue-500">Git</span>
        </h1>

      </a>

      <div className="max-w-3xl mx-auto">

        <p className="text-blue-400 text-[11px] tracking-[0.25em] uppercase mb-3">
          Destek
        </p>

        <h1 className="text-2xl md:text-4xl font-black leading-tight mb-8">
          Sık Sorulan Sorular
        </h1>

        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl"
            >

              <h2 className="text-base md:text-lg font-black mb-3">
                {faq.question}
              </h2>

              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

        {/* FOOT */}
        <div className="mt-12 pt-6 border-t border-white/10 text-white/40 text-sm">
          ✈️ UçGit.com
        </div>

      </div>

    </main>
  );
}