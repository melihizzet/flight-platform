export default function TermsPage() {

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
          Yasal
        </p>

        <h1 className="text-3xl md:text-5xl font-black leading-tight mb-12">
          Kullanım Şartları
        </h1>

        <div className="space-y-8 text-white/70 text-lg leading-relaxed">

          <div>
            <h2 className="text-2xl font-black text-white mb-4">
              Hizmet Kullanımı
            </h2>

            <p>
              UçGit, kullanıcıların uçuşları karşılaştırabilmesi ve seyahat
              fırsatlarını keşfedebilmesi için hizmet sunmaktadır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-4">
              Sorumluluk Reddi
            </h2>

            <p>
              UçGit üzerinden gösterilen fiyatlar ve teklifler üçüncü taraf
              sağlayıcılardan alınmaktadır. Fiyat değişikliklerinden UçGit
              sorumlu değildir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-4">
              Kullanıcı Sorumluluğu
            </h2>

            <p>
              Kullanıcılar, siteyi yasalara uygun şekilde kullanmayı kabul eder.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-4">
              Üçüncü Taraf Bağlantılar
            </h2>

            <p>
              UçGit, kullanıcıları farklı rezervasyon ve seyahat sitelerine
              yönlendirebilir. Bu sitelerin içeriklerinden UçGit sorumlu
              değildir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-4">
              Değişiklik Hakkı
            </h2>

            <p>
              UçGit, kullanım şartlarını herhangi bir zamanda güncelleme hakkını
              saklı tutar.
            </p>
          </div>

        </div>

        {/* FOOT */}
        <div className="mt-16 pt-8 border-t border-white/10 text-white/40">
          ✈️ UçGit.com
        </div>

      </div>

    </main>
  );
}