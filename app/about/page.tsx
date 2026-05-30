export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden relative">

      {/* BG GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[160px] rounded-full"></div>

      {/* HERO */}
      <section className="relative max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">

        <p className="text-blue-400 font-semibold text-lg">
          Hakkımızda
        </p>

        <h1 className="text-2xl md:text-4xl leading-tight font-black mt-6 tracking-tight">
          Uçuş aramayı{" "}
          <span className="text-blue-500">yeniden tasarlıyoruz</span>
        </h1>

        <p className="text-slate-300 text-base md:text-lg leading-relaxed mt-10 max-w-3xl mx-auto">
          UçGit, tüm havayollarını tek platformda karşılaştırarak
          kullanıcılara en hızlı, en modern ve en uygun uçuş deneyimini sunar.

          <br /><br />

          Amacımız; uçuş arama sürecini karmaşık olmaktan çıkarıp,
          saniyeler içinde premium bir deneyime dönüştürmektir.
        </p>

      </section>

      {/* STATS */}
      <section className="relative max-w-5xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl">

            <h2 className="text-4xl md:text-5xl font-black text-blue-400">
              120+
            </h2>

            <p className="text-slate-300 text-base mt-3">
              Havayolu
            </p>

          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl">

            <h2 className="text-4xl md:text-5xl font-black text-blue-400">
              10M+
            </h2>

            <p className="text-slate-300 text-base mt-3">
              Uçuş Verisi
            </p>

          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl">

            <h2 className="text-4xl md:text-5xl font-black text-blue-400">
              190+
            </h2>

            <p className="text-slate-300 text-base mt-3">
              Ülke
            </p>

          </div>

        </div>

      </section>

      {/* WHY US */}
      <section className="relative max-w-5xl mx-auto px-6 pb-24">

        <div className="bg-white/10 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">

          <h2 className="text-3xl md:text-4xl font-black mb-10 text-center">
            Neden UçGit?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#0b1736] border border-white/10 rounded-2xl p-6">

              <h3 className="text-xl font-bold mb-3">
                Gerçek Zamanlı Fiyatlar
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Yüzlerce havayolundan anlık fiyatları karşılaştırır
                ve en avantajlı seçenekleri sunar.
              </p>

            </div>

            <div className="bg-[#0b1736] border border-white/10 rounded-2xl p-6">

              <h3 className="text-xl font-bold mb-3">
                Modern Deneyim
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Hızlı, sade ve premium kullanıcı deneyimiyle
                uçuş aramayı keyifli hale getirir.
              </p>

            </div>

            <div className="bg-[#0b1736] border border-white/10 rounded-2xl p-6">

              <h3 className="text-xl font-bold mb-3">
                Güvenilir Altyapı
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Global uçuş sağlayıcılarıyla entegre çalışan
                güçlü altyapı sistemi kullanır.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}