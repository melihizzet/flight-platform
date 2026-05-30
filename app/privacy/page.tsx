export default function PrivacyPolicyPage() {

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
          Gizlilik Politikası
        </h1>

        <div className="space-y-8 text-white/70 text-lg leading-relaxed">

          <div>
            <h2 className="text-2xl font-black text-white mb-4">
              Toplanan Bilgiler
            </h2>

            <p>
              UçGit, kullanıcı deneyimini geliştirmek amacıyla temel kullanım
              verilerini ve analiz bilgilerini toplayabilir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-4">
              Çerezler
            </h2>

            <p>
              Web sitemiz, performansı artırmak ve kullanıcı tercihlerini
              hatırlamak için çerezler kullanabilir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-4">
              Üçüncü Taraf Hizmetler
            </h2>

            <p>
              UçGit, uçuş sonuçlarını göstermek için üçüncü taraf iş ortakları
              ve seyahat sağlayıcılarıyla çalışabilir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-4">
              Veri Güvenliği
            </h2>

            <p>
              Kullanıcı bilgilerinin korunması için gerekli teknik ve güvenlik
              önlemleri uygulanmaktadır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-4">
              İletişim
            </h2>

            <p>
              Gizlilik politikasıyla ilgili sorularınız için
              support@ucgit.com adresinden bize ulaşabilirsiniz.
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