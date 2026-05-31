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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[160px] rounded-full"></div>

      {/* HEADER */}
      <header className="relative z-20 border-b border-white/10 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">

          <a
            href="/"
            className="text-3xl font-black text-white"
          >
            Uç<span className="text-blue-500">Git</span>
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">

        <p className="text-blue-400 text-sm uppercase tracking-wide">
          Kampanyalar
        </p>

        <h1 className="text-3xl md:text-5xl font-black mt-6">
          En iyi uçuş fırsatları
        </h1>

        <p className="text-white/60 mt-6 text-lg max-w-2xl mx-auto">
          Güncel uçuş kampanyalarını keşfet ve avantajlı fiyatları yakala.
        </p>

      </section>

      {/* CARDS */}
      <section className="relative max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {campaigns.map((campaign, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-400/30 transition backdrop-blur-xl"
            >

              <span className="text-blue-400 text-sm font-semibold">
                {campaign.airline}
              </span>

              <h2 className="text-2xl font-black mt-4 leading-snug">
                {campaign.title}
              </h2>

              <p className="text-white/60 mt-4 leading-relaxed">
                {campaign.desc}
              </p>

              <a
                href={campaign.link}
                target="_blank"
                className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-xl font-semibold text-sm"
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