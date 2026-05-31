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
    <main className="min-h-screen bg-[#020817] text-white px-6 py-10">

      {/* LOGO */}
      <a
        href="/"
        className="flex items-center gap-3 mb-10"
      >

        <div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">

          <span className="text-blue-400 text-sm rotate-[-25deg]">
            ✈️
          </span>

        </div>

        <h1 className="text-xl font-black tracking-tight">
          Uç<span className="text-blue-500">Git</span>
        </h1>

      </a>

      <div className="max-w-2xl mx-auto">

        <p className="text-blue-400 text-[10px] tracking-[0.25em] uppercase mb-2">
          Destek
        </p>

        <h1 className="text-xl md:text-3xl font-black leading-tight mb-6">
          Sık Sorulan Sorular
        </h1>

        <div className="space-y-3">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl"
            >

              <h2 className="text-sm md:text-base font-black mb-2">
                {faq.question}
              </h2>

              <p className="text-white/60 leading-relaxed text-xs md:text-sm">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

        {/* FOOT */}
        <div className="mt-10 pt-5 border-t border-white/10 text-white/40 text-xs">
          ✈️ UçGit.com
        </div>

      </div>

    </main>
  );
}