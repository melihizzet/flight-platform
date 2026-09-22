import Link from "next/link";

const posts = {
  "2026da-en-uygun-avrupa-rotalari": {
    title: "2026’da En Uygun Avrupa Rotaları",
    category: "Avrupa",
    read: "5 dk",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=85",
    intro:
      "Avrupa seyahati planlayanlar için şehir seçimi, rota oluşturma ve uçuş ararken dikkat edilebilecek noktaları bir araya getirdik.",
    sections: [
      {
        title: "Avrupa seyahatine nereden başlanır?",
        text:
          "Avrupa seyahatinde ilk adım gitmek istediğin şehirleri belirlemek ve seyahat süresine uygun bir rota oluşturmaktır. Tek bir şehirde kalabileceğin gibi birbirine yakın şehirleri aynı seyahatte değerlendirebilirsin.",
      },
      {
        title: "Popüler Avrupa şehirleri",
        text:
          "Paris, Roma, Londra ve Amsterdam farklı şehir deneyimleri sunan popüler rotalar arasında yer alır. Tarih, sanat, mimari, müze ve şehir yaşamı gibi ilgi alanlarına göre rota seçilebilir.",
      },
      {
        title: "Uçuş ararken nelere dikkat edilmeli?",
        text:
          "Uçuş karşılaştırması yaparken yalnızca bilet fiyatına değil, bagaj hakkına, aktarma süresine, havalimanına ve toplam seyahat süresine de bakmak önemlidir.",
      },
    ],
  },

  "paris-gezi-rehberi": {
    title: "Paris Gezi Rehberi: İlk Kez Gideceklere Öneriler",
    category: "Şehir Rehberi",
    read: "7 dk",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=85",
    intro:
      "Paris; tarihi yapıları, müzeleri, meydanları ve Seine Nehri boyunca uzanan şehir dokusuyla Avrupa’nın en popüler şehirlerinden biridir.",
    sections: [
      {
        title: "Paris’te görülmesi gereken yerler",
        text:
          "Eyfel Kulesi, Louvre Müzesi, Notre-Dame, Montmartre ve Şanzelize Paris gezilerinde öne çıkan noktalardandır.",
      },
      {
        title: "Paris’te şehir içi ulaşım",
        text:
          "Paris'in metro ağı şehrin birçok bölgesine ulaşmayı kolaylaştırır. Gezilecek yerleri bölgelere ayırarak planlamak yürüyüş ve ulaşım süresini azaltabilir.",
      },
      {
        title: "Paris gezisi için küçük öneriler",
        text:
          "Müze ve yoğun ziyaret edilen noktalar için önceden çalışma yapmak, günlük gezi programını daha rahat hale getirebilir.",
      },
    ],
  },

  "roma-gezi-rehberi": {
    title: "Roma Gezi Rehberi: Tarih ve Lezzet Rotası",
    category: "Şehir Rehberi",
    read: "7 dk",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1600&q=85",
    intro:
      "Roma, antik dönemden günümüze ulaşan yapıları, meydanları, müzeleri ve İtalyan mutfağıyla şehir gezisi için zengin seçenekler sunar.",
    sections: [
      {
        title: "Roma’da görülmesi gereken yerler",
        text:
          "Kolezyum, Trevi Çeşmesi, Pantheon, Vatikan ve İspanyol Merdivenleri Roma gezilerinde öne çıkan duraklardır.",
      },
      {
        title: "Roma’yı keşfetmek",
        text:
          "Roma'nın tarihi merkezinde birçok nokta birbirine yürüyüş mesafesinde bulunur. Günlük planı bölgelere ayırmak şehir gezisini daha kolay hale getirebilir.",
      },
      {
        title: "Roma’da yemek kültürü",
        text:
          "İtalyan mutfağının farklı örneklerini şehir genelinde deneyebilirsin. Yerel restoranları araştırmak seyahate farklı bir deneyim katabilir.",
      },
    ],
  },

  "balkanlar-seyahat-rehberi": {
    title: "Balkanlar Seyahat Rehberi",
    category: "Balkanlar",
    read: "6 dk",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85",
    intro:
      "Balkanlar; birbirine yakın şehirleri, farklı kültürleri ve doğal güzellikleriyle keşif odaklı seyahatler için ilgi çekici rotalar sunar.",
    sections: [
      {
        title: "Balkan seyahati nasıl planlanır?",
        text:
          "Seyahat süresine göre tek bir ülkeye odaklanabilir veya birbirine yakın şehirleri aynı rota içerisinde değerlendirebilirsin.",
      },
      {
        title: "Şehirleri birlikte değerlendirmek",
        text:
          "Balkan rotalarında şehirler arası ulaşım seçeneklerini önceden araştırmak, seyahat süresini daha verimli kullanmana yardımcı olabilir.",
      },
      {
        title: "Seyahat öncesi kontrol",
        text:
          "Pasaport, ulaşım, konaklama ve giriş koşullarını seyahat tarihinden önce kontrol etmek önemlidir.",
      },
    ],
  },

  "sehir-kacamaklari": {
    title: "2–4 Günlük Şehir Kaçamakları",
    category: "Şehir Kaçamağı",
    read: "5 dk",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1600&q=85",
    intro:
      "Uzun tatil için zaman bulamayanlar için birkaç günlük şehir gezileri, yeni bir destinasyonu kısa sürede keşfetmenin güzel yollarından biridir.",
    sections: [
      {
        title: "Kısa seyahat nasıl planlanır?",
        text:
          "2–4 günlük bir seyahatte şehir merkezine yakın bölgeleri tercih etmek ve görülmek istenen noktaları önceden belirlemek zaman kazandırabilir.",
      },
      {
        title: "Günlük rota oluştur",
        text:
          "Birbirine yakın müze, meydan, restoran ve tarihi noktaları aynı gün içerisinde planlamak gereksiz ulaşım süresini azaltabilir.",
      },
      {
        title: "Uçuş saatlerini karşılaştır",
        text:
          "Kısa seyahatlerde uçuş saatleri özellikle önemlidir. Varış ve dönüş saatlerinin şehirde geçireceğin zamanı nasıl etkilediğini değerlendir.",
      },
    ],
  },

  "ucak-bileti-alirken-dikkat-edilecekler": {
    title: "Uçak Bileti Alırken Nelere Dikkat Edilmeli?",
    category: "İpuçları",
    read: "4 dk",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=85",
    intro:
      "Uçak bileti karşılaştırırken yalnızca görünen fiyatı değil, biletin sunduğu koşulları ve toplam seyahat deneyimini değerlendirmek önemlidir.",
    sections: [
      {
        title: "Bagaj hakkını kontrol et",
        text:
          "Bilet türüne göre kabin veya uçak altı bagaj hakkı değişebilir. Satın alma öncesinde havayolunun güncel bagaj koşullarını kontrol etmek faydalıdır.",
      },
      {
        title: "Aktarma süresine bak",
        text:
          "Daha ucuz görünen bir uçuşun çok uzun aktarma süresi olabilir. Toplam seyahat süresini birlikte değerlendirmek gerekir.",
      },
      {
        title: "Havalimanını kontrol et",
        text:
          "Bazı şehirlerde birden fazla havalimanı bulunabilir. Bilet seçerken havalimanının şehir merkezine uzaklığını da hesaba kat.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center">
          <div className="text-5xl">🌍</div>

          <h1 className="mt-5 text-3xl font-black">
            Yazı bulunamadı
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Aradığın seyahat yazısı bulunamadı.
          </p>

          <Link
            href="/blog"
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white"
          >
            Blog'a dön →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">

          <Link href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-9 w-auto rounded-lg"
            />
          </Link>

          <nav className="hidden items-center gap-5 md:flex">

            <Link
              href="/"
              className="text-[11px] font-semibold text-slate-700 hover:text-blue-600"
            >
              ✈️ Uçuşlar
            </Link>

            <Link
              href="/hotels"
              className="text-[11px] font-semibold text-slate-700 hover:text-blue-600"
            >
              🏨 Otel
            </Link>

            <Link
              href="/cars"
              className="text-[11px] font-semibold text-slate-700 hover:text-blue-600"
            >
              🚗 Araç Kiralama
            </Link>

            <Link
              href="/discover"
              className="text-[11px] font-semibold text-slate-700 hover:text-blue-600"
            >
              🌍 Keşfet
            </Link>

            <Link
              href="/blog"
              className="text-[11px] font-bold text-blue-600"
            >
              📝 Blog
            </Link>

          </nav>

          <Link
            href="/login"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[10px]"
          >
            ♟
          </Link>

        </div>
      </header>

      {/* FOTOĞRAF */}
      <section className="relative">
        <div className="relative h-[280px] overflow-hidden md:h-[360px]">

          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

          <div className="absolute bottom-0 left-0 right-0">
            <div className="mx-auto max-w-4xl px-5 pb-9">

              <span className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold text-blue-600">
                {post.category}
              </span>

              <h1 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
                {post.title}
              </h1>

              <div className="mt-3 flex gap-3 text-[10px] text-white/80">
                <span>UçGit Blog</span>
                <span>•</span>
                <span>{post.read} okuma</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* YAZI */}
      <article className="mx-auto max-w-3xl px-5 py-10">

        <p className="text-base font-semibold leading-7 text-slate-700">
          {post.intro}
        </p>

        <div className="mt-8 space-y-8">

          {post.sections.map((section) => (
            <section key={section.title}>

              <h2 className="text-xl font-black">
                {section.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {section.text}
              </p>

            </section>
          ))}

        </div>

        {/* UÇUŞ BUTONU */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center text-white">

          <div className="text-2xl">
            ✈️
          </div>

          <h2 className="mt-2 text-xl font-black">
            Bu rotayı keşfetmeye hazır mısın?
          </h2>

          <p className="mt-2 text-xs leading-5 text-white/80">
            Gideceğin şehir için uçuş seçeneklerini UçGit üzerinden
            karşılaştır.
          </p>

          <Link
            href="/"
            className="mt-4 inline-flex rounded-lg bg-white px-5 py-2.5 text-[10px] font-bold text-blue-600"
          >
            Uçuş ara →
          </Link>

        </div>

        {/* GERİ BUTONLARI */}
        <div className="mt-8 flex justify-between gap-3">

          <Link
            href="/blog"
            className="rounded-lg border border-slate-200 px-4 py-2.5 text-[10px] font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Blog'a dön
          </Link>

          <Link
            href="/discover"
            className="rounded-lg bg-slate-900 px-4 py-2.5 text-[10px] font-bold text-white"
          >
            Keşfet'e dön →
          </Link>

        </div>

      </article>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-6">

        <div className="mx-auto max-w-7xl px-5 text-center">

          <img
            src="/logo.jpg"
            alt="UçGit"
            className="mx-auto h-8 w-auto rounded-lg"
          />

          <p className="mt-2 text-[10px] text-slate-500">
            © 2026 UçGit. Tüm hakları saklıdır.
          </p>

          <div className="mt-3 flex flex-wrap justify-center gap-3 text-[10px] text-slate-500">

            <Link href="/about" className="hover:text-blue-600">
              Hakkımızda
            </Link>

            <Link href="/discover" className="hover:text-blue-600">
              Keşfet
            </Link>

            <Link href="/contact" className="hover:text-blue-600">
              İletişim
            </Link>

            <Link href="/faq" className="hover:text-blue-600">
              SSS
            </Link>

            <Link href="/privacy-policy" className="hover:text-blue-600">
              Gizlilik
            </Link>

            <Link href="/terms" className="hover:text-blue-600">
              Kullanım Şartları
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}
