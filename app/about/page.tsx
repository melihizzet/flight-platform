export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-x-hidden relative">

      {/* BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      {/* HEADER */}
      <header className="relative z-20 border-b border-white/10 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">

          <a
            href="/"
            className="flex items-center gap-3"
          >

            <div className="w-9 h-9 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">

              <span className="text-blue-400 text-lg rotate-[-25deg]">
                ✈️
              </span>

            </div>

            <h1 className="text-xl font-black tracking-tight">
              Uç<span className="text-blue-500">Git</span>
            </h1>

          </a>

        </div>

      </header>

      {/* CONTENT */}
      <section className="relative max-w-3xl mx-auto px-6 py-16">

        <p className="text-blue-400 text-[11px] tracking-[0.2em] uppercase mb-3">
          Hakkımızda
        </p>

        <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6">
          UçGit ile en uygun uçuşları kolayca bulun
        </h1>

        <div className="space-y-5 text-white/70 text-sm md:text-base leading-relaxed">

          <p>
            UçGit, kullanıcıların en uygun uçuşları hızlı ve kolay şekilde
            karşılaştırabilmesi için oluşturulmuş modern bir uçuş arama
            platformudur.
          </p>

          <p>
            Amacımız, karmaşık ve eski görünümlü seyahat siteleri yerine daha
            sade, hızlı ve kullanıcı dostu bir deneyim sunmaktır.
          </p>

          <p>
            UçGit üzerinden farklı havayollarının ve seyahat sağlayıcılarının
            fiyatlarını karşılaştırabilir, size en uygun uçuşu saniyeler içinde
            bulabilirsiniz.
          </p>

          <p>
            Platformumuz sürekli gelişmekte olup; daha hızlı arama, daha iyi
            kullanıcı deneyimi ve daha akıllı seyahat araçları sunmak için
            çalışıyoruz.
          </p>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          ✈️ UçGit.com
        </div>

      </section>

    </main>
  );
}
``