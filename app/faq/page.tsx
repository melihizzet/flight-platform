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
    <main className="min-h-screen bg-[#020817] text-white px-6 py-20">

      {/* LOGO */}
      <a
        href="/"
        className="flex items-center gap-3 mb-16"
      >

        <div className="w-10 h-10 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">

          <span className="text-blue-400 text-xl rotate-[-25deg]">
            ✈️
          </span>

        </div>

        <h1 className="text-3xl font-black tracking-tight">
          Uç<span className="text-blue-500">Git</span>
        </h1>

      </a>

      <div className="max-w-4xl mx-auto">

        <p className="text-blue-400 text-sm tracking-wide uppercase mb-4">
          Destek
        </p>

        <h1 className="text-3xl md:text-5xl font-black leading-tight mb-12">
          Sık Sorulan Sorular
        </h1>

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
            >

              <h2 className="text-xl md:text-2xl font-black mb-4">
                {faq.question}
              </h2>

              <p className="text-white/60 leading-relaxed text-base md:text-lg">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

        {/* FOOT */}
        <div className="mt-16 pt-8 border-t border-white/10 text-white/40">
          ✈️ UçGit.com
        </div>

      </div>

    </main>
  );
}