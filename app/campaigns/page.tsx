export default function CampaignsPage() {

  const campaigns = [
    {
      title: "%40’a Varan Avrupa İndirimleri",
      airline: "Pegasus",
      desc: "Amsterdam, Paris ve Berlin uçuşlarında büyük fırsat.",
    },
    {
      title: "Dubai Uçuşlarında Özel Fiyatlar",
      airline: "Emirates",
      desc: "Sınırlı süreli business ve economy kampanyaları.",
    },
    {
      title: "THY Yaz Kampanyası",
      airline: "THY",
      desc: "Yurt dışı rotalarında avantajlı fiyatlar seni bekliyor.",
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
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {campaigns.map((campaign, index) => (

            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-400/30 transition backdrop-blur-xl"
            >

              <div className="h-36 bg-gradient-to-br from-blue-500/20 to-slate-900"></div>

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

                <button className="mt-6 bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-xl font-semibold text-sm">
                  Kampanyayı İncele
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}