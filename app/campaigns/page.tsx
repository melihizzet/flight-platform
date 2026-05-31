export default function CampaignsPage() {

  const campaigns = [
    {
      title: "Antalya Uçuş Fırsatları",
      airline: "Pegasus",
      desc: "Antalya için güncel düşük fiyatlı uçuşları keşfet.",
      link: "https://aviasales.tpx.lt/CN2doqTk",
    },
    {
      title: "Dubai Özel Fiyatlar",
      airline: "Emirates",
      desc: "Dubai uçuşlarında avantajlı bilet fırsatları.",
      link: "https://aviasales.tpx.lt/CN2doqTk",
    },
    {
      title: "Paris Yaz Kampanyası",
      airline: "Air France",
      desc: "Paris seyahatleri için özel indirimli fiyatlar.",
      link: "https://aviasales.tpx.lt/CN2doqTk",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-x-hidden relative">

      {/* BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      {/* HEADER */}
      <header className="relative z-20 border-b border-white/10 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">

          <a
            href="/"
            className="text-2xl font-black text-white"
          >
            Uç<span className="text-blue-500">Git</span>
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="relative max-w-5xl mx-auto px-6 pt-10 pb-10 text-center">

        <p className="text-blue-400 text-[11px] uppercase tracking-[0.25em]">
          Kampanyalar
        </p>

        <h1 className="text-2xl md:text-4xl font-black mt-4 leading-tight">
          En iyi uçuş fırsatları
        </h1>

        <p className="text-white/50 mt-4 text-sm md:text-base max-w-xl mx-auto">
          Güncel uçuş kampanyalarını keşfet ve avantajlı fiyatları yakala.
        </p>

      </section>

      {/* CARDS */}
      <section className="relative max-w-5xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {campaigns.map((campaign, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-blue-400/30 transition backdrop-blur-xl"
            >

              <span className="text-blue-400 text-xs font-semibold">
                {campaign.airline}
              </span>

              <h2 className="text-lg md:text-xl font-black mt-3 leading-snug">
                {campaign.title}
              </h2>

              <p className="text-white/55 mt-3 leading-relaxed text-sm">
                {campaign.desc}
              </p>

              <a
                href={campaign.link}
                target="_blank"
                className="inline-block mt-5 bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-xl font-semibold text-xs"
              >
                Kampanyayı İncele
              </a>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}