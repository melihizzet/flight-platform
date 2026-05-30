export default function BlogPage() {

  const posts = [
    {
      title: "2026’da En Ucuz Avrupa Rotaları",
      category: "Seyahat",
      read: "5 dk",
    },
    {
      title: "Uçak Bileti Alırken En İyi Saatler",
      category: "İpuçları",
      read: "4 dk",
    },
    {
      title: "Business Class mı Economy mi?",
      category: "Karşılaştırma",
      read: "6 dk",
    },
    {
      title: "Schengen Vizesi Nasıl Alınır?",
      category: "Vize",
      read: "8 dk",
    },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-x-hidden relative">

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
      <section className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">

        <p className="text-blue-400 text-base font-semibold">
          UçGit Blog
        </p>

        <h1 className="text-2xl md:text-4xl leading-tight font-black mt-6">
          Seyahat dünyasını <span className="text-blue-500">keşfet</span>
        </h1>

        <p className="text-slate-400 text-base md:text-lg mt-6 max-w-2xl mx-auto">
          Uçuş ipuçları, kampanyalar ve seyahat rehberleri.
        </p>

      </section>

      {/* POSTS */}
      <section className="relative max-w-5xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-6">

          {posts.map((post, index) => (

            <div
              key={index}
              className="bg-white/10 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-400/30 transition backdrop-blur-xl"
            >

              {/* IMAGE */}
              <div className="h-40 md:h-52 bg-gradient-to-br from-slate-700 to-slate-900"></div>

              {/* CONTENT */}
              <div className="p-6">

                <div className="flex items-center gap-3 mb-4">

                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </span>

                  <span className="text-slate-400 text-xs">
                    {post.read}
                  </span>

                </div>

                <h2 className="text-xl md:text-2xl font-black leading-snug">
                  {post.title}
                </h2>

                <p className="text-slate-400 text-sm md:text-base mt-4 leading-relaxed">
                  Uçuş fırsatları, seyahat ipuçları ve yeni rotalar hakkında detaylı içerikleri keşfet.
                </p>

                <button className="mt-6 bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-xl font-semibold text-sm">
                  Devamını Oku
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}