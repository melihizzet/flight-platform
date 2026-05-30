export default function CampaignsPage() {

  const campaigns = [
    {
      title: "Antalya Uçuş Fırsatları",
      airline: "Aviasales",
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
    {
      title: "Londra Hafta Sonu Kaçamağı",
      airline: "British Airways",
      desc: "Londra uçuşlarında fırsatları incele.",
      link: "https://aviasales.tpx.lt/CN2doqTk",
    },
    {
      title: "Roma Uçuşlarında İndirim",
      airline: "ITA Airways",
      desc: "Roma için en uygun uçuş fırsatları burada.",
      link: "https://aviasales.tpx.lt/CN2doqTk",
    },
    {
      title: "Amsterdam Uçuş Kampanyası",
      airline: "KLM",
      desc: "Amsterdam uçuşlarında güncel fırsatlar.",
      link: "https://aviasales.tpx.lt/CN2doqTk",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden relative">

      {/* BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[160px] rounded-full"></div>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">

        <p className="text-blue-400 text-base font-semibold">
          Kampanyalar
        </p>

        <h1 className="text-2xl md:text-4xl leading-tight font-black mt-6">
          En iyi uçuş <span className="text-blue-500">fırsatları</span>
        </h1>

        <p className="text-slate-400 text-base md:text-lg mt-6 max-w-2xl mx-auto">
          Havayollarının güncel kampanyalarını keşfet.
        </p>

      </section>

      {/* CAMPAIGNS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {campaigns.map((campaign, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-400/30 transition backdrop-blur-xl"
            >

              <div className="h-40 bg-gradient-to-br from-blue-500/20 to-slate-900"></div>

              <div className="p-6">

                <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">
                  {campaign.airline}
                </span>

                <h2 className="text-xl md:text-2xl font-black mt-4 leading-snug">
                  {campaign.title}
                </h2>

                <p className="text-slate-400 text-sm md:text-base mt-4 leading-relaxed">
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

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}