"use client";

import { useState } from "react";

const destinations = [
  {
    name: "Paris",
    country: "Fransa",
    region: "Avrupa",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=85",
    description:
      "Paris; Eyfel Kulesi, Louvre Müzesi, Seine Nehri ve tarihi mahalleleriyle Avrupa'nın en popüler şehirlerinden biridir.",
    places: [
      "Eyfel Kulesi",
      "Louvre Müzesi",
      "Notre-Dame",
      "Montmartre",
      "Şanzelize",
    ],
    tips:
      "İlk ziyaret için şehir merkezine yakın konaklamak ve metro ağından yararlanmak pratik bir seçenek olabilir.",
  },
  {
    name: "Roma",
    country: "İtalya",
    region: "Avrupa",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1400&q=85",
    description:
      "Roma, antik yapıları, tarihi meydanları, Vatikan ve İtalyan mutfağıyla tarih ve kültür gezileri için öne çıkar.",
    places: [
      "Kolezyum",
      "Trevi Çeşmesi",
      "Pantheon",
      "Vatikan",
      "İspanyol Merdivenleri",
    ],
    tips:
      "Roma'yı yürüyerek keşfetmek birçok bölgeyi görmek için oldukça kullanışlıdır.",
  },
  {
    name: "Londra",
    country: "Birleşik Krallık",
    region: "Avrupa",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85",
    description:
      "Londra; tarihi sarayları, müzeleri, parkları ve Thames Nehri çevresindeki şehir yaşamıyla büyük bir kültür merkezidir.",
    places: [
      "Big Ben",
      "Tower Bridge",
      "British Museum",
      "Buckingham Palace",
      "London Eye",
    ],
    tips:
      "Londra'da şehir içi ulaşım için metro ve otobüs ağı oldukça geniştir.",
  },
  {
    name: "Amsterdam",
    country: "Hollanda",
    region: "Avrupa",
    image:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1400&q=85",
    description:
      "Amsterdam kanalları, bisiklet yolları, müzeleri ve tarihi şehir merkeziyle kısa şehir gezileri için popülerdir.",
    places: [
      "Rijksmuseum",
      "Van Gogh Müzesi",
      "Anne Frank Evi",
      "Jordaan",
      "Dam Meydanı",
    ],
    tips:
      "Şehir merkezinde yürümek ve bisiklet yollarını kullanmak Amsterdam deneyiminin önemli parçalarındandır.",
  },
  {
    name: "Dubai",
    country: "Birleşik Arap Emirlikleri",
    region: "Orta Doğu",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85",
    description:
      "Dubai; modern mimarisi, gökdelenleri, alışveriş merkezleri, plajları ve çöl deneyimleriyle farklı seyahat seçenekleri sunar.",
    places: [
      "Burj Khalifa",
      "Dubai Mall",
      "Palm Jumeirah",
      "Dubai Marina",
      "Jumeirah",
    ],
    tips:
      "Dubai'de şehir içindeki mesafeler uzun olabildiğinden ulaşım seçeneklerini birlikte değerlendirmek faydalı olabilir.",
  },
  {
    name: "İstanbul",
    country: "Türkiye",
    region: "Türkiye",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1400&q=85",
    description:
      "İstanbul; Boğazı, tarihi yarımadası, sarayları, müzeleri ve iki kıta üzerindeki konumuyla benzersiz bir şehir deneyimi sunar.",
    places: [
      "Ayasofya",
      "Topkapı Sarayı",
      "Sultanahmet",
      "Galata Kulesi",
      "Kapalıçarşı",
    ],
    tips:
      "Tarihi yarımada, Sultanahmet ve Eminönü çevresi yürüyerek keşfedilebilecek birçok noktayı bir arada bulundurur.",
  },
];

const travelIdeas = [
  {
    title: "Avrupa Rotaları",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=85",
    text:
      "Paris, Roma, Amsterdam ve Londra gibi şehirleri farklı seyahat planlarıyla keşfet.",
    tag: "Avrupa",
  },
  {
    title: "Balkanlar",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    text:
      "Yakın coğrafyalarda farklı şehirleri, kültürleri ve doğal güzellikleri keşfet.",
    tag: "Yakın Rotalar",
  },
  {
    title: "Şehir Kaçamakları",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=85",
    text:
      "2–4 günlük kısa seyahatler için şehir merkezli gezi fikirlerinden ilham al.",
    tag: "Kısa Tatil",
  },
];

export default function DiscoverPage() {
  const [selected, setSelected] = useState<
    (typeof destinations)[number] | null
  >(null);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">

          <a href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-9 w-auto rounded-lg"
            />
          </a>

          <nav className="hidden items-center gap-5 md:flex">
            <a
              href="/"
              className="text-[11px] font-semibold text-slate-700 hover:text-blue-600"
            >
              ✈️ Uçuşlar
            </a>

            <a
              href="/hotels"
              className="text-[11px] font-semibold text-slate-700 hover:text-blue-600"
            >
              🏨 Otel
            </a>

            <a
              href="/cars"
              className="text-[11px] font-semibold text-slate-700 hover:text-blue-600"
            >
              🚗 Araç Kiralama
            </a>

            <a
              href="/discover"
              className="text-[11px] font-bold text-blue-600"
            >
              🌍 Keşfet
            </a>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <button className="rounded-full border border-slate-200 px-2.5 py-1 text-[10px] font-semibold">
              TR 🇹🇷
            </button>

            <a
              href="/login"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[10px]"
            >
              ♟
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-11">
          <div className="max-w-2xl">

            <span className="inline-flex rounded-full bg-blue-100 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-blue-700">
              UÇGİT KEŞFET
            </span>

            <h1 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
              Bir sonraki seyahatini{" "}
              <span className="text-blue-600">
                keşfet.
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-xs leading-6 text-slate-600">
              Dünyanın popüler şehirlerini keşfet, gezilecek yerleri öğren ve
              bir sonraki rotanı UçGit ile planla.
            </p>

            <a
              href="/"
              className="mt-5 inline-flex rounded-lg bg-blue-600 px-4 py-2.5 text-[11px] font-bold text-white shadow-md transition hover:bg-blue-700"
            >
              Uçuş aramaya başla →
            </a>

          </div>
        </div>
      </section>

      {/* DESTİNASYONLAR */}
      <section className="bg-white py-9">
        <div className="mx-auto max-w-6xl px-5">

          <p className="text-[9px] font-bold uppercase tracking-wider text-blue-600">
            POPÜLER DESTİNASYONLAR
          </p>

          <h2 className="mt-1 text-2xl font-black">
            Nereye gitmek istersin?
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Bir şehir seç ve seyahat rehberini keşfet.
          </p>

          <div className="mt-5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">

            {destinations.map((destination) => (
              <button
                key={destination.name}
                onClick={() => setSelected(destination)}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >

                <div className="relative h-36 overflow-hidden">

                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-3.5">

                    <span className="text-[8px] font-bold uppercase tracking-wider text-white/75">
                      {destination.region}
                    </span>

                    <h3 className="mt-0.5 text-lg font-black text-white">
                      {destination.name}
                    </h3>

                    <p className="text-[9px] text-white/80">
                      {destination.country}
                    </p>

                  </div>
                </div>

                <div className="p-3.5">

                  <p className="line-clamp-2 text-[10px] leading-4 text-slate-500">
                    {destination.description}
                  </p>

                  <span className="mt-2.5 inline-flex text-[10px] font-bold text-blue-600">
                    Şehri keşfet →
                  </span>

                </div>
              </button>
            ))}

          </div>
        </div>
      </section>

      {/* ŞEHİR DETAYI - DAHA YUKARIDA VE KOMPAKT */}
      {selected && (
        <section className="-mt-2 bg-slate-50 pb-9 pt-2">
          <div className="mx-auto max-w-5xl px-5">

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">

              <div className="grid md:grid-cols-[42%_58%]">

                <div className="relative min-h-[230px]">

                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <p className="text-[8px] font-bold uppercase tracking-wider text-white/75">
                      {selected.region}
                    </p>

                    <h2 className="mt-0.5 text-2xl font-black text-white">
                      {selected.name}
                    </h2>
                  </div>
                </div>

                <div className="p-5">

                  <div className="flex items-start justify-between">

                    <div>
                      <p className="text-[9px] font-bold text-blue-600">
                        {selected.country}
                      </p>

                      <h2 className="mt-0.5 text-xl font-black">
                        {selected.name} rehberi
                      </h2>
                    </div>

                    <button
                      onClick={() => setSelected(null)}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-500 hover:bg-slate-200"
                    >
                      ×
                    </button>

                  </div>

                  <p className="mt-3 text-[11px] leading-5 text-slate-600">
                    {selected.description}
                  </p>

                  <div className="mt-4">

                    <h3 className="text-[10px] font-black">
                      Görülecek yerler
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-1.5">

                      {selected.places.map((place) => (
                        <span
                          key={place}
                          className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[9px] font-semibold text-slate-600"
                        >
                          {place}
                        </span>
                      ))}

                    </div>
                  </div>

                  <div className="mt-4 rounded-xl bg-blue-50 p-3">

                    <p className="text-[9px] font-bold text-blue-700">
                      Seyahat ipucu
                    </p>

                    <p className="mt-1 text-[9px] leading-4 text-slate-600">
                      {selected.tips}
                    </p>

                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">

                    <a
                      href="/"
                      className="rounded-lg bg-blue-600 px-3.5 py-2 text-[9px] font-bold text-white hover:bg-blue-700"
                    >
                      {selected.name} için uçuş ara →
                    </a>

                    <a
                      href="/blog"
                      className="rounded-lg border border-slate-200 px-3.5 py-2 text-[9px] font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
                    >
                      Seyahat rehberleri
                    </a>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SEYAHAT FİKİRLERİ */}
      <section className="bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-5">

          <div className="text-center">
            <p className="text-[9px] font-bold uppercase tracking-wider text-blue-600">
              SEYAHAT FİKİRLERİ
            </p>

            <h2 className="mt-1 text-2xl font-black">
              Seyahat tarzını seç
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-xs text-slate-500">
              Bir sonraki seyahatinden ilham al.
            </p>
          </div>

          <div className="mt-5 grid gap-3.5 md:grid-cols-3">

            {travelIdeas.map((idea) => (
              <a
                key={idea.title}
                href="/blog"
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >

                <div className="relative h-32 overflow-hidden">

                  <img
                    src={idea.image}
                    alt={idea.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

                  <span className="absolute bottom-2.5 left-3 rounded-full bg-white/90 px-2 py-1 text-[8px] font-bold text-blue-600">
                    {idea.tag}
                  </span>

                </div>

                <div className="p-4">

                  <h3 className="text-sm font-black">
                    {idea.title}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-4 text-slate-500">
                    {idea.text}
                  </p>

                  <span className="mt-2.5 inline-block text-[10px] font-bold text-blue-600">
                    Rehberleri keşfet →
                  </span>

                </div>
              </a>
            ))}

          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-5">

          <div className="flex items-end justify-between gap-3">

            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-blue-600">
                UÇGİT BLOG
              </p>

              <h2 className="mt-1 text-2xl font-black">
                Seyahatini daha iyi planla
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Seyahat planlamasıyla ilgili pratik bilgiler.
              </p>
            </div>

            <a
              href="/blog"
              className="text-[10px] font-bold text-blue-600"
            >
              Tüm yazılar →
            </a>

          </div>

          <div className="mt-5 grid gap-3.5 md:grid-cols-3">

            <a
              href="/blog"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-xl">✈️</span>

              <h3 className="mt-2 text-xs font-black">
                Uçak bileti alırken nelere dikkat edilmeli?
              </h3>

              <p className="mt-1.5 text-[10px] leading-4 text-slate-500">
                Bilet koşulları, bagaj ve uçuş detaylarını kontrol etmek için
                pratik öneriler.
              </p>

              <span className="mt-2.5 inline-block text-[10px] font-bold text-blue-600">
                Yazıyı incele →
              </span>
            </a>

            <a
              href="/blog"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-xl">🌍</span>

              <h3 className="mt-2 text-xs font-black">
                Avrupa seyahati için pratik öneriler
              </h3>

              <p className="mt-1.5 text-[10px] leading-4 text-slate-500">
                Avrupa'da şehir gezisi planlarken işine yarayabilecek temel
                bilgileri keşfet.
              </p>

              <span className="mt-2.5 inline-block text-[10px] font-bold text-blue-600">
                Yazıyı incele →
              </span>
            </a>

            <a
              href="/blog"
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-xl">🧳</span>

              <h3 className="mt-2 text-xs font-black">
                Seyahat öncesi kontrol listesi
              </h3>

              <p className="mt-1.5 text-[10px] leading-4 text-slate-500">
                Bilet, pasaport, bagaj ve diğer hazırlıklarını seyahatten önce
                kontrol et.
              </p>

              <span className="mt-2.5 inline-block text-[10px] font-bold text-blue-600">
                Yazıyı incele →
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-9">
        <div className="mx-auto max-w-4xl px-5 text-center text-white">

          <div className="text-2xl">
            ✈️
          </div>

          <h2 className="mt-2 text-2xl font-black">
            Rotanı bulmaya hazır mısın?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-white/80">
            Gideceğin şehri keşfet ve uçuş seçeneklerini UçGit ile karşılaştır.
          </p>

          <a
            href="/"
            className="mt-4 inline-flex rounded-lg bg-white px-5 py-2.5 text-[10px] font-bold text-blue-600 shadow-md"
          >
            Uçuş ara →
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-5">
        <div className="mx-auto max-w-7xl px-5 text-center">

          <img
            src="/logo.jpg"
            alt="UçGit"
            className="mx-auto h-8 w-auto rounded-lg"
          />

          <p className="mt-1.5 text-[10px] text-slate-500">
            © 2026 UçGit. Tüm hakları saklıdır.
          </p>

          <div className="mt-2.5 flex flex-wrap justify-center gap-3 text-[10px] text-slate-500">

            <a href="/about" className="hover:text-blue-600">
              Hakkımızda
            </a>

            <a href="/blog" className="hover:text-blue-600">
              Blog
            </a>

            <a href="/contact" className="hover:text-blue-600">
              İletişim
            </a>

            <a href="/faq" className="hover:text-blue-600">
              SSS
            </a>

            <a href="/privacy-policy" className="hover:text-blue-600">
              Gizlilik
            </a>

            <a href="/terms" className="hover:text-blue-600">
              Kullanım Şartları
            </a>

          </div>
        </div>
      </footer>

    </main>
  );
}
