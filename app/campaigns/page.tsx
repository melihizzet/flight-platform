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
    <main className="min-h-screen bg-[#020617] text-white">

      {/* HERO */}
      <section className="max-w-[1600px] mx-auto px-8 pt-32 pb-24 text-center">

        <p className="text-blue-400 text-xl font-semibold">
          Kampanyalar
        </p>

        <h1 className="text-[90px] leading-[95px] font-black mt-8">

          En iyi uçuş
          <span className="text-blue-500"> fırsatları</span>

        </h1>

        <p className="text-slate-400 text-2xl mt-10 max-w-[900px] mx-auto">
          Havayollarının güncel kampanyalarını keşfet.
        </p>

      </section>

      {/* CAMPAIGNS */}
      <section className="max-w-[1600px] mx-auto px-8 pb-32">

        <div className="grid lg:grid-cols-3 gap-8">

          {campaigns.map((campaign, index) => (

            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-[40px] overflow-hidden hover:border-blue-400/30 transition"
            >

              <div className="h-[240px] bg-gradient-to-br from-blue-500/30 to-slate-900"></div>

              <div className="p-10">

                <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-bold">
                  {campaign.airline}
                </span>

                <h2 className="text-4xl font-black mt-8 leading-tight">
                  {campaign.title}
                </h2>

                <p className="text-slate-400 text-lg mt-6 leading-relaxed">
                  {campaign.desc}
                </p>

                <button className="mt-8 bg-blue-500 hover:bg-blue-600 transition px-6 py-4 rounded-2xl font-bold">
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