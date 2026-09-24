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
    href: "/blog/2026da-en-uygun-avrupa-rotalari",
  },
  {
    title: "Balkanlar",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    text:
      "Yakın coğrafyalarda farklı şehirleri, kültürleri ve doğal güzellikleri keşfet.",
    tag: "Yakın Rotalar",
    href: "/blog/balkanlar-seyahat-rehberi",
  },
  {
    title: "Şehir Kaçamakları",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=85",
    text:
      "2–4 günlük kısa seyahatler için şehir merkezli gezi fikirlerinden ilham al.",
    tag: "Kısa Tatil",
    href: "/blog/sehir-kacamaklari",
  },
];

export default function DiscoverPage() {
  const [selected, setSelected] = useState<
    (typeof destinations)[number] | null
  >(null);

  const [languageOpen, setLanguageOpen] = useState(false);

  const getGuideLink = (city: string) => {
    if (city === "Paris") {
      return "/blog/paris-gezi-rehberi";
    }

    if (city === "Roma") {
      return "/blog/roma-gezi-rehberi";
    }

    return "/travel-guide";
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">

      {/* ===================================================== */}
      {/* GLOBAL STYLE                                          */}
      {/* ===================================================== */}

      <style jsx global>{`
        @keyframes planeFly {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          18% {
            transform: translate3d(3px, -2px, 0) rotate(-2deg);
          }

          36% {
            transform: translate3d(8px, -5px, 0) rotate(-4deg);
          }

          52% {
            transform: translate3d(13px, -8px, 0) rotate(-5deg);
          }

          68% {
            transform: translate3d(10px, -6px, 0) rotate(-3deg);
          }

          84% {
            transform: translate3d(5px, -3px, 0) rotate(-1deg);
          }

          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
        }

        .animate-plane-fly {
          display: inline-block;
          transform-origin: center center;
          animation: planeFly 3s ease-in-out infinite;
          will-change: transform;
          filter: drop-shadow(
            0 3px 5px rgba(37, 99, 235, 0.18)
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-plane-fly {
            animation: none !important;
          }
        }
      `}</style>


      {/* ===================================================== */}
      {/* HEADER                                                 */}
      {/* ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          {/* LOGO */}

          <a href="/" className="flex items-center">

            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-10 w-auto object-contain"
            />

          </a>


          {/* MENU */}

          <nav className="hidden items-center gap-8 md:flex">

            {/* UÇUŞLAR */}

            <a
              href="/"
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >

              <span className="mr-1 inline-block animate-plane-fly">
                ✈️
              </span>

              Uçuşlar

            </a>


            {/* KEŞFET */}

            <a
              href="/discover"
              className="border-b-2 border-blue-600 py-5 text-sm font-semibold text-blue-600"
            >

              <span className="mr-1">
                🌍
              </span>

              Keşfet

            </a>


            {/* BLOG */}

            <a
              href="/blog"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >

              <span className="mr-1">
                📝
              </span>

              Blog

            </a>

          </nav>


          {/* SAĞ MENÜ */}

          <div className="flex items-center gap-3">

            {/* DESTEK */}

            <a
              href="/contact"
              className="hidden text-sm font-medium text-slate-700 transition hover:text-blue-600 md:block"
            >
              ♧ Destek
            </a>


            {/* DİL */}

            <div className="relative">

              <button
                type="button"
                onClick={() =>
                  setLanguageOpen(!languageOpen)
                }
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
              >

                🇹🇷 TR⌄

              </button>


              {languageOpen && (

                <div className="absolute right-0 top-10 z-[100] w-36 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">

                  <button
                    type="button"
                    onClick={() => setLanguageOpen(false)}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-blue-50"
                  >
                    🇹🇷 Türkçe
                  </button>

                  <button
                    type="button"
                    onClick={() => setLanguageOpen(false)}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-blue-50"
                  >
                    🇬🇧 English
                  </button>

                </div>

              )}

            </div>


            {/* LOGIN */}

            <a
              href="/login"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-base transition hover:bg-blue-50"
            >
              ♙
            </a>

          </div>

        </div>

      </header>


      {/* ===================================================== */}
      {/* HERO                                                   */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">

        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-purple-400/10 blur-3xl" />


        <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-9 md:pb-12">

          <div className="max-w-2xl">

            <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700">
              UÇGİT KEŞFET
            </span>


            <h1 className="mt-3 text-3xl font-black leading-[1.08] tracking-tight text-slate-900 md:text-5xl">

              Bir sonraki seyahatini{" "}

              <span className="text-blue-600">
                keşfet.
              </span>

            </h1>


            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 md:text-base">
              Dünyanın popüler şehirlerini keşfet, gezilecek yerleri öğren ve
              bir sonraki rotanı UçGit ile planla.
            </p>


            <a
              href="/"
              className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
            >
              Uçuş aramaya başla →
            </a>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* DESTİNASYONLAR                                         */}
      {/* ===================================================== */}

      <section className="bg-white py-10 md:py-12">

        <div className="mx-auto max-w-7xl px-6">

          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">
            POPÜLER DESTİNASYONLAR
          </p>


          <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
            Nereye gitmek istersin?
          </h2>


          <p className="mt-2 text-sm text-slate-500">
            Bir şehir seç ve seyahat rehberini keşfet.
          </p>


          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {destinations.map((destination) => (

              <button
                key={destination.name}
                onClick={() => setSelected(destination)}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="relative h-44 overflow-hidden">

                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />


                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />


                  <div className="absolute bottom-0 left-0 right-0 p-4">

                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/75">
                      {destination.region}
                    </span>


                    <h3 className="mt-1 text-xl font-black text-white">
                      {destination.name}
                    </h3>


                    <p className="text-xs text-white/80">
                      {destination.country}
                    </p>

                  </div>

                </div>


                <div className="p-4">

                  <p className="line-clamp-2 text-xs leading-5 text-slate-500">
                    {destination.description}
                  </p>


                  <span className="mt-3 inline-flex text-xs font-bold text-blue-600">
                    Şehri keşfet →
                  </span>

                </div>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* ŞEHİR DETAYI                                           */}
      {/* ===================================================== */}

      {selected && (

        <section className="bg-slate-50 py-10">

          <div className="mx-auto max-w-6xl px-6">

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

              <div className="grid md:grid-cols-[42%_58%]">

                <div className="relative min-h-[280px]">

                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />


                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />


                  <div className="absolute bottom-5 left-5">

                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/75">
                      {selected.region}
                    </p>


                    <h2 className="mt-1 text-3xl font-black text-white">
                      {selected.name}
                    </h2>

                  </div>

                </div>


                <div className="p-6">

                  <div className="flex items-start justify-between">

                    <div>

                      <p className="text-[10px] font-bold text-blue-600">
                        {selected.country}
                      </p>


                      <h2 className="mt-1 text-2xl font-black text-slate-900">
                        {selected.name} rehberi
                      </h2>

                    </div>


                    <button
                      onClick={() => setSelected(null)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm text-slate-500 transition hover:bg-slate-200"
                    >
                      ×
                    </button>

                  </div>


                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {selected.description}
                  </p>


                  <div className="mt-5">

                    <h3 className="text-xs font-black text-slate-900">
                      Görülecek yerler
                    </h3>


                    <div className="mt-2 flex flex-wrap gap-2">

                      {selected.places.map((place) => (

                        <span
                          key={place}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-600"
                        >
                          {place}
                        </span>

                      ))}

                    </div>

                  </div>


                  <div className="mt-5 rounded-xl bg-blue-50 p-4">

                    <p className="text-[10px] font-bold text-blue-700">
                      Seyahat ipucu
                    </p>


                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      {selected.tips}
                    </p>

                  </div>


                  <div className="mt-5 flex flex-wrap gap-3">

                    <a
                      href="/"
                      className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-700"
                    >
                      {selected.name} için uçuş ara →
                    </a>


                    <a
                      href={getGuideLink(selected.name)}
                      className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
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


      {/* ===================================================== */}
      {/* SEYAHAT FİKİRLERİ                                      */}
      {/* ===================================================== */}

      <section className="bg-slate-50 py-10 md:py-12">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">
              SEYAHAT FİKİRLERİ
            </p>


            <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
              Seyahat tarzını seç
            </h2>


            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
              Bir sonraki seyahatinden ilham al.
            </p>

          </div>


          <div className="mt-6 grid gap-5 md:grid-cols-3">

            {travelIdeas.map((idea) => (

              <a
                key={idea.title}
                href={idea.href}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="relative h-36 overflow-hidden">

                  <img
                    src={idea.image}
                    alt={idea.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />


                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />


                  <span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold text-blue-600">
                    {idea.tag}
                  </span>

                </div>


                <div className="p-5">

                  <h3 className="text-sm font-black text-slate-900">
                    {idea.title}
                  </h3>


                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {idea.text}
                  </p>


                  <span className="mt-3 inline-block text-xs font-bold text-blue-600">
                    Rehberleri keşfet →
                  </span>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* BLOG                                                    */}
      {/* ===================================================== */}

      <section className="bg-white py-10 md:py-12">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex items-end justify-between gap-4">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">
                UÇGİT BLOG
              </p>


              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
                Seyahatini daha iyi planla
              </h2>


              <p className="mt-2 text-sm text-slate-500">
                Seyahat planlamasıyla ilgili pratik bilgiler.
              </p>

            </div>


            <a
              href="/blog"
              className="text-xs font-bold text-blue-600 transition hover:text-blue-700"
            >
              Tüm yazılar →
            </a>

          </div>


          <div className="mt-6 grid gap-5 md:grid-cols-3">

            <a
              href="/blog/ucak-bileti-alirken-dikkat-edilecekler"
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <span className="text-2xl">
                ✈️
              </span>


              <h3 className="mt-3 text-sm font-black">
                Uçak bileti alırken nelere dikkat edilmeli?
              </h3>


              <p className="mt-2 text-xs leading-5 text-slate-500">
                Bilet koşulları, bagaj ve uçuş detaylarını kontrol etmek için
                pratik öneriler.
              </p>


              <span className="mt-3 inline-block text-xs font-bold text-blue-600">
                Yazıyı incele →
              </span>

            </a>


            <a
              href="/blog/2026da-en-uygun-avrupa-rotalari"
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <span className="text-2xl">
                🌍
              </span>


              <h3 className="mt-3 text-sm font-black">
                Avrupa seyahati için pratik öneriler
              </h3>


              <p className="mt-2 text-xs leading-5 text-slate-500">
                Avrupa'da şehir gezisi planlarken işine yarayabilecek temel
                bilgileri keşfet.
              </p>


              <span className="mt-3 inline-block text-xs font-bold text-blue-600">
                Yazıyı incele →
              </span>

            </a>


            <a
              href="/blog/ucak-bileti-alirken-dikkat-edilecekler"
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <span className="text-2xl">
                🧳
              </span>


              <h3 className="mt-3 text-sm font-black">
                Seyahat öncesi kontrol listesi
              </h3>


              <p className="mt-2 text-xs leading-5 text-slate-500">
                Bilet, pasaport, bagaj ve diğer hazırlıklarını seyahatten önce
                kontrol et.
              </p>


              <span className="mt-3 inline-block text-xs font-bold text-blue-600">
                Yazıyı incele →
              </span>

            </a>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* CTA                                                      */}
      {/* ===================================================== */}

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-10">

        <div className="mx-auto max-w-4xl px-6 text-center text-white">

          <div className="text-3xl">
            ✈️
          </div>


          <h2 className="mt-2 text-2xl font-black md:text-3xl">
            Rotanı bulmaya hazır mısın?
          </h2>


          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/80">
            Gideceğin şehri keşfet ve uçuş seçeneklerini UçGit ile karşılaştır.
          </p>


          <a
            href="/"
            className="mt-5 inline-flex rounded-xl bg-white px-6 py-3 text-xs font-bold text-blue-600 shadow-lg transition hover:-translate-y-0.5"
          >
            Uçuş ara →
          </a>

        </div>

      </section>


      {/* ===================================================== */}
      {/* FOOTER                                                   */}
      {/* ===================================================== */}

      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-7">

          <div className="grid gap-6 md:grid-cols-4">

            {/* BRAND */}

            <div>

              <img
                src="/logo.jpg"
                alt="UçGit"
                className="h-12 w-auto object-contain"
              />


              <p className="mt-2 max-w-xs text-xs leading-5 text-slate-500">
                Seyahatinizin en kolay yolu.
              </p>

            </div>


            {/* COMPANY */}

            <div>

              <h3 className="mb-2 text-sm font-bold text-slate-900">
                Şirket
              </h3>


              <div className="space-y-1.5 text-xs text-slate-500">

                <a
                  href="/about"
                  className="block transition hover:text-blue-600"
                >
                  Hakkımızda
                </a>


                <a
                  href="/contact"
                  className="block transition hover:text-blue-600"
                >
                  İletişim
                </a>

              </div>

            </div>


            {/* SUPPORT */}

            <div>

              <h3 className="mb-2 text-sm font-bold text-slate-900">
                Destek
              </h3>


              <div className="space-y-1.5 text-xs text-slate-500">

                <a
                  href="/faq"
                  className="block transition hover:text-blue-600"
                >
                  SSS
                </a>


                <a
                  href="/contact"
                  className="block transition hover:text-blue-600"
                >
                  Bize Ulaşın
                </a>


                <a
                  href="/privacy-policy"
                  className="block transition hover:text-blue-600"
                >
                  Gizlilik Politikası
                </a>

              </div>

            </div>


            {/* EXPLORE */}

            <div>

              <h3 className="mb-2 text-sm font-bold text-slate-900">
                Keşfet
              </h3>


              <div className="space-y-1.5 text-xs text-slate-500">

                <a
                  href="/flights"
                  className="block transition hover:text-blue-600"
                >
                  Popüler Rotalar
                </a>


                <a
                  href="/blog"
                  className="block transition hover:text-blue-600"
                >
                  Blog
                </a>


                <a
                  href="/travel-guide"
                  className="block transition hover:text-blue-600"
                >
                  Seyahat Rehberi
                </a>

              </div>

            </div>

          </div>


          {/* COPYRIGHT */}

          <div className="mt-6 border-t border-slate-100 pt-4">

            <div className="flex flex-col items-center justify-between gap-2 text-[11px] text-slate-400 md:flex-row">

              <span>
                © 2026 UçGit. Tüm hakları saklıdır.
              </span>


              <div className="flex gap-4">

                <span>
                  Instagram
                </span>

                <span>
                  X
                </span>

                <span>
                  LinkedIn
                </span>

              </div>


              <span>
                Built by Melih İzzet Zorluoğlu
              </span>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}
