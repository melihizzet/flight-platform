export default function AboutPage() {

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* BG GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      {/* HERO */}
      <section className="relative max-w-[1600px] mx-auto px-8 pt-36 pb-32 text-center">

        <p className="text-blue-400 font-semibold text-2xl">
          Hakkımızda
        </p>

        <h1 className="text-[110px] leading-[115px] font-black mt-8 tracking-tight">

          Uçuş aramayı{" "}

          <span className="text-blue-500">
            yeniden tasarlıyoruz
          </span>

        </h1>

        <p className="text-slate-300 text-[28px] leading-[52px] mt-14 max-w-[1100px] mx-auto font-medium">

          UçGit, tüm havayollarını tek platformda karşılaştırarak
          kullanıcılara en hızlı, en modern ve en uygun uçuş deneyimini sunar.

          <br /><br />

          Amacımız; uçuş arama sürecini karmaşık olmaktan çıkarıp,
          saniyeler içinde premium bir deneyime dönüştürmek.

        </p>

      </section>

      {/* STATS */}
      <section className="relative max-w-[1600px] mx-auto px-8 pb-28">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 border border-white/10 rounded-[40px] p-14 text-center backdrop-blur-2xl">

            <h2 className="text-[80px] font-black text-blue-400">
              120+
            </h2>

            <p className="text-slate-300 text-2xl mt-5">
              Havayolu
            </p>

          </div>

          <div className="bg-white/10 border border-white/10 rounded-[40px] p-14 text-center backdrop-blur-2xl">

            <h2 className="text-[80px] font-black text-blue-400">
              10M+
            </h2>

            <p className="text-slate-300 text-2xl mt-5">
              Uçuş Verisi
            </p>

          </div>

          <div className="bg-white/10 border border-white/10 rounded-[40px] p-14 text-center backdrop-blur-2xl">

            <h2 className="text-[80px] font-black text-blue-400">
              190+
            </h2>

            <p className="text-slate-300 text-2xl mt-5">
              Ülke
            </p>

          </div>

        </div>

      </section>

      {/* WHY US */}
      <section className="relative max-w-[1600px] mx-auto px-8 pb-36">

        <div className="bg-white/10 border border-white/10 rounded-[50px] p-16 backdrop-blur-2xl">

          <h2 className="text-6xl font-black mb-16 text-center">
            Neden UçGit?
          </h2>

          <div className="grid lg:grid-cols-3 gap-12">

            <div className="bg-[#0b1736] border border-white/10 rounded-[35px] p-10">

              <h3 className="text-4xl font-black mb-6">
                Gerçek Zamanlı Fiyatlar
              </h3>

              <p className="text-slate-400 text-xl leading-relaxed">
                Yüzlerce havayolundan anlık fiyatları karşılaştırır
                ve en avantajlı seçenekleri sunar.
              </p>

            </div>

            <div className="bg-[#0b1736] border border-white/10 rounded-[35px] p-10">

              <h3 className="text-4xl font-black mb-6">
                Modern Deneyim
              </h3>

              <p className="text-slate-400 text-xl leading-relaxed">
                Hızlı, sade ve premium kullanıcı deneyimiyle
                uçuş aramayı keyifli hale getirir.
              </p>

            </div>

            <div className="bg-[#0b1736] border border-white/10 rounded-[35px] p-10">

              <h3 className="text-4xl font-black mb-6">
                Güvenilir Altyapı
              </h3>

              <p className="text-slate-400 text-xl leading-relaxed">
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