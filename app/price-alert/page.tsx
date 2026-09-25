"use client";

import { FormEvent, useEffect, useState } from "react";
import { createClient } from "../utils/supabase/client";

type Airport = {
  code: string;
  city: string;
  airport: string;
};

const airports: Airport[] = [
  { code: "IST", city: "İstanbul", airport: "İstanbul Havalimanı" },
  { code: "SAW", city: "İstanbul", airport: "Sabiha Gökçen" },
  { code: "ESB", city: "Ankara", airport: "Esenboğa Havalimanı" },
  { code: "ADB", city: "İzmir", airport: "Adnan Menderes Havalimanı" },
  { code: "AYT", city: "Antalya", airport: "Antalya Havalimanı" },
  { code: "CDG", city: "Paris", airport: "Charles de Gaulle" },
  { code: "PAR", city: "Paris", airport: "Paris" },
  { code: "FCO", city: "Roma", airport: "Fiumicino" },
  { code: "LON", city: "Londra", airport: "Londra" },
  { code: "LHR", city: "Londra", airport: "Heathrow" },
  { code: "AMS", city: "Amsterdam", airport: "Schiphol" },
  { code: "BCN", city: "Barselona", airport: "El Prat" },
  { code: "DXB", city: "Dubai", airport: "Dubai Uluslararası" },
  { code: "BER", city: "Berlin", airport: "Berlin" },
];

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function PriceAlertPage() {
  const supabase = createClient();

  const [origin, setOrigin] = useState("IST");
  const [destination, setDestination] = useState("PAR");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [targetPrice, setTargetPrice] = useState("");

  const [loading, setLoading] = useState(false);
  const [checkingUser, setCheckingUser] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/login";
        return;
      }

      setCheckingUser(false);
    }

    checkUser();
  }, [supabase]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!origin || !destination) {
      setError("Lütfen kalkış ve varış noktalarını seçin.");
      return;
    }

    if (origin === destination) {
      setError("Kalkış ve varış noktası aynı olamaz.");
      return;
    }

    if (!departureDate) {
      setError("Lütfen gidiş tarihini seçin.");
      return;
    }

    const price = Number(targetPrice);

    if (!price || price <= 0) {
      setError("Lütfen geçerli bir hedef fiyat girin.");
      return;
    }

    if (returnDate && returnDate < departureDate) {
      setError("Dönüş tarihi, gidiş tarihinden önce olamaz.");
      return;
    }

    setLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/login";
        return;
      }

      const { error: insertError } = await supabase
        .from("price_alerts")
        .insert({
          user_id: user.id,
          origin,
          destination,
          departure_date: departureDate,
          return_date: returnDate || null,
          target_price: price,
          currency: "TRY",
          active: true,
        });

      if (insertError) {
        console.error(insertError);
        setError(
          "Fiyat alarmı oluşturulurken bir hata oluştu. Lütfen tekrar deneyin."
        );
        return;
      }

      setMessage(
        "Fiyat alarmınız başarıyla oluşturuldu! Hedef fiyatınıza ulaşıldığında sizi bilgilendireceğiz."
      );

      setTargetPrice("");
    } catch (err) {
      console.error(err);
      setError("Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  if (checkingUser) {
    return (
      <main className="min-h-screen bg-[#020817] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🔔</div>
          <p className="text-white/70">Fiyat Alarmı yükleniyor...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]/90 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-10 w-10 rounded-xl object-cover"
            />

            <div>
              <div className="text-lg font-bold">UçGit</div>
              <div className="text-xs text-white/50">
                En uygun uçak bileti
              </div>
            </div>
          </a>

          <a
            href="/"
            className="text-sm text-white/70 hover:text-white transition"
          >
            ← Ana Sayfa
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-14 pb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 mb-5">
            🔔 Ücretsiz Fiyat Alarmı
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Uçuş fiyatı düşünce
            <span className="block text-blue-400">
              haberin olsun.
            </span>
          </h1>

          <p className="mt-5 text-lg text-white/60 max-w-2xl leading-8">
            Gitmek istediğiniz rotayı ve hedef fiyatınızı belirleyin.
            Fiyat uygun seviyeye geldiğinde sizi bilgilendirelim.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="max-w-3xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 shadow-2xl">
            <div className="mb-7">
              <h2 className="text-2xl font-bold">
                Yeni Fiyat Alarmı
              </h2>

              <p className="mt-2 text-sm text-white/50">
                Hedef fiyatınızı belirleyin, gerisini UçGit takip etsin.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Origin / Destination */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Nereden
                  </label>

                  <select
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#071225] px-4 py-3.5 text-white outline-none focus:border-blue-400"
                  >
                    {airports.map((airport) => (
                      <option key={`${airport.code}-origin`} value={airport.code}>
                        {airport.city} ({airport.code}) — {airport.airport}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Nereye
                  </label>

                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#071225] px-4 py-3.5 text-white outline-none focus:border-blue-400"
                  >
                    {airports.map((airport) => (
                      <option
                        key={`${airport.code}-destination`}
                        value={airport.code}
                      >
                        {airport.city} ({airport.code}) — {airport.airport}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dates */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Gidiş Tarihi
                  </label>

                  <input
                    type="date"
                    min={getToday()}
                    value={departureDate}
                    onChange={(e) => {
                      setDepartureDate(e.target.value);

                      if (
                        returnDate &&
                        e.target.value &&
                        returnDate < e.target.value
                      ) {
                        setReturnDate("");
                      }
                    }}
                    className="w-full rounded-xl border border-white/10 bg-[#071225] px-4 py-3.5 text-white outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Dönüş Tarihi
                    <span className="ml-2 text-white/40 font-normal">
                      (Opsiyonel)
                    </span>
                  </label>

                  <input
                    type="date"
                    min={departureDate || getToday()}
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#071225] px-4 py-3.5 text-white outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              {/* Target Price */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Hedef Fiyat
                </label>

                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    step="1"
                    placeholder="Örn. 5000"
                    value={targetPrice}
                    onChange={(e) => setTargetPrice(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#071225] px-4 py-3.5 pr-16 text-white placeholder:text-white/25 outline-none focus:border-blue-400"
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50">
                    TL
                  </span>
                </div>

                <p className="mt-2 text-xs text-white/40">
                  Uçuş fiyatı belirlediğiniz seviyeye geldiğinde alarm
                  oluşturulacaktır.
                </p>
              </div>

              {/* Success */}
              {message && (
                <div className="rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-4 text-sm text-green-300">
                  <div className="font-semibold mb-1">
                    ✓ Fiyat alarmı oluşturuldu
                  </div>

                  <div className="text-green-300/80">
                    {message}
                  </div>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-4 text-sm text-red-300">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-500 px-6 py-4 font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? "Alarm oluşturuluyor..."
                  : "🔔 Fiyat Alarmı Oluştur"}
              </button>
            </form>
          </div>

          {/* Information */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-2xl mb-3">✈️</div>
              <h3 className="font-semibold">Rotanı seç</h3>
              <p className="mt-2 text-sm text-white/50">
                Gitmek istediğin kalkış ve varış noktasını belirle.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-2xl mb-3">💰</div>
              <h3 className="font-semibold">Hedef fiyat belirle</h3>
              <p className="mt-2 text-sm text-white/50">
                Ödemek istediğin maksimum fiyatı gir.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-2xl mb-3">🔔</div>
              <h3 className="font-semibold">Fiyatı takip et</h3>
              <p className="mt-2 text-sm text-white/50">
                Uygun fiyat yakalandığında seni bilgilendirelim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/40">
          <div>
            © {new Date().getFullYear()} UçGit. Tüm hakları saklıdır.
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="/about" className="hover:text-white transition">
              Hakkımızda
            </a>

            <a href="/contact" className="hover:text-white transition">
              İletişim
            </a>

            <a href="/faq" className="hover:text-white transition">
              SSS
            </a>

            <a href="/privacy-policy" className="hover:text-white transition">
              Gizlilik
            </a>

            <a href="/terms" className="hover:text-white transition">
              Kullanım Şartları
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
