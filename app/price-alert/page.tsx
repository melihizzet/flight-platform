"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import { createClient } from "../utils/supabase/client";

const inter = Inter({
  subsets: ["latin"],
});

type Airport = {
  code: string;
  city: string;
  airport: string;
};

const airports: Airport[] = [
  {
    code: "IST",
    city: "İstanbul",
    airport: "İstanbul Havalimanı",
  },
  {
    code: "SAW",
    city: "İstanbul",
    airport: "Sabiha Gökçen",
  },
  {
    code: "ESB",
    city: "Ankara",
    airport: "Esenboğa Havalimanı",
  },
  {
    code: "ADB",
    city: "İzmir",
    airport: "Adnan Menderes Havalimanı",
  },
  {
    code: "AYT",
    city: "Antalya",
    airport: "Antalya Havalimanı",
  },
  {
    code: "CDG",
    city: "Paris",
    airport: "Charles de Gaulle",
  },
  {
    code: "PAR",
    city: "Paris",
    airport: "Paris",
  },
  {
    code: "FCO",
    city: "Roma",
    airport: "Fiumicino",
  },
  {
    code: "LON",
    city: "Londra",
    airport: "Londra",
  },
  {
    code: "LHR",
    city: "Londra",
    airport: "Heathrow",
  },
  {
    code: "AMS",
    city: "Amsterdam",
    airport: "Schiphol",
  },
  {
    code: "BCN",
    city: "Barselona",
    airport: "El Prat",
  },
  {
    code: "DXB",
    city: "Dubai",
    airport: "Dubai Uluslararası",
  },
  {
    code: "BER",
    city: "Berlin",
    airport: "Berlin",
  },
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

  const [language, setLanguage] = useState<"tr" | "en">("tr");
  const [languageOpen, setLanguageOpen] = useState(false);

  const [user, setUser] = useState<any>(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  const [origin, setOrigin] = useState("IST");
  const [destination, setDestination] = useState("PAR");

  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [targetPrice, setTargetPrice] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/login";
        return;
      }

      setUser(user);
      setLoading(false);
    }

    loadUser();
  }, [supabase]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isEnglish = language === "en";

  const text = {
    tr: {
      flights: "Uçuşlar",
      discover: "Keşfet",
      blog: "Blog",
      support: "Destek",

      priceAlert: "Fiyat Alarmı",
      priceAlertTitle: "Uçuş fiyatı düşünce",
      priceAlertTitle2: "haberin olsun.",
      priceAlertDescription:
        "Gitmek istediğiniz rotayı ve hedef fiyatınızı belirleyin. Fiyat uygun seviyeye geldiğinde sizi bilgilendirelim.",

      newAlert: "Yeni Fiyat Alarmı",
      newAlertDescription:
        "Hedef fiyatınızı belirleyin, gerisini UçGit takip etsin.",

      from: "Nereden",
      to: "Nereye",

      departure: "Gidiş Tarihi",
      return: "Dönüş Tarihi",
      optional: "(Opsiyonel)",

      targetPrice: "Hedef Fiyat",
      example: "Örn. 5000",

      priceInfo:
        "Uçuş fiyatı belirlediğiniz seviyeye geldiğinde alarm oluşturulacaktır.",

      createAlert: "Fiyat Alarmı Oluştur",
      creatingAlert: "Alarm oluşturuluyor...",

      successTitle: "Fiyat alarmı oluşturuldu",
      successMessage:
        "Fiyat alarmınız başarıyla oluşturuldu! Hedef fiyatınıza ulaşıldığında sizi bilgilendireceğiz.",

      routeTitle: "Rotanı seç",
      routeText:
        "Gitmek istediğin kalkış ve varış noktasını belirle.",

      targetTitle: "Hedef fiyat belirle",
      targetText:
        "Ödemek istediğin maksimum fiyatı gir.",

      trackTitle: "Fiyatı takip et",
      trackText:
        "Uygun fiyat yakalandığında seni bilgilendirelim.",

      myAccount: "Hesabım",
      accountSettings: "Hesap Ayarları",
      logout: "Çıkış Yap",
      login: "Giriş Yap",
      register: "Kayıt Ol",

      turkish: "Türkçe",
      english: "English",

      company: "Şirket",
      about: "Hakkımızda",
      contact: "İletişim",

      supportMenu: "Destek",
      faq: "SSS",
      contactUs: "Bize Ulaşın",
      privacy: "Gizlilik Politikası",

      explore: "Keşfet",
      popularRoutes: "Popüler Rotalar",
      travelGuide: "Seyahat Rehberi",

      slogan: "Seyahatinizin en kolay yolu.",
      rights: "Tüm hakları saklıdır.",
      built: "Built by Melih İzzet Zorluoğlu",
    },

    en: {
      flights: "Flights",
      discover: "Discover",
      blog: "Blog",
      support: "Support",

      priceAlert: "Price Alert",
      priceAlertTitle: "Know when your",
      priceAlertTitle2: "flight price drops.",
      priceAlertDescription:
        "Choose your route and target price. We will notify you when the price reaches your target.",

      newAlert: "New Price Alert",
      newAlertDescription:
        "Set your target price and let UçGit track it for you.",

      from: "From",
      to: "To",

      departure: "Departure Date",
      return: "Return Date",
      optional: "(Optional)",

      targetPrice: "Target Price",
      example: "e.g. 5000",

      priceInfo:
        "You will be notified when the flight price reaches your target.",

      createAlert: "Create Price Alert",
      creatingAlert: "Creating alert...",

      successTitle: "Price alert created",
      successMessage:
        "Your price alert has been successfully created. We will notify you when your target price is reached.",

      routeTitle: "Choose your route",
      routeText:
        "Select your departure and destination.",

      targetTitle: "Set your target",
      targetText:
        "Enter the maximum price you want to pay.",

      trackTitle: "Track the price",
      trackText:
        "We will notify you when a suitable price is found.",

      myAccount: "My Account",
      accountSettings: "Account Settings",
      logout: "Log Out",
      login: "Login",
      register: "Register",

      turkish: "Türkçe",
      english: "English",

      company: "Company",
      about: "About Us",
      contact: "Contact",

      supportMenu: "Support",
      faq: "FAQ",
      contactUs: "Contact Us",
      privacy: "Privacy Policy",

      explore: "Explore",
      popularRoutes: "Popular Routes",
      travelGuide: "Travel Guide",

      slogan: "The easiest way to travel.",
      rights: "All rights reserved.",
      built: "Built by Melih İzzet Zorluoğlu",
    },
  }[language];

  const userName =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    (isEnglish ? "UçGit User" : "UçGit Kullanıcısı");

  const userEmail = user?.email || "";

  async function handleLogout() {
    await supabase.auth.signOut();

    setUser(null);
    setProfileOpen(false);

    window.location.href = "/";
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!origin || !destination) {
      setError(
        isEnglish
          ? "Please select your departure and destination."
          : "Lütfen kalkış ve varış noktalarını seçin."
      );
      return;
    }

    if (origin === destination) {
      setError(
        isEnglish
          ? "Departure and destination cannot be the same."
          : "Kalkış ve varış noktası aynı olamaz."
      );
      return;
    }

    if (!departureDate) {
      setError(
        isEnglish
          ? "Please select a departure date."
          : "Lütfen gidiş tarihini seçin."
      );
      return;
    }

    const price = Number(targetPrice);

    if (!price || price <= 0) {
      setError(
        isEnglish
          ? "Please enter a valid target price."
          : "Lütfen geçerli bir hedef fiyat girin."
      );
      return;
    }

    if (returnDate && returnDate < departureDate) {
      setError(
        isEnglish
          ? "Return date cannot be before departure date."
          : "Dönüş tarihi, gidiş tarihinden önce olamaz."
      );
      return;
    }

    setSaving(true);

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
          isEnglish
            ? "An error occurred while creating your price alert."
            : "Fiyat alarmı oluşturulurken bir hata oluştu. Lütfen tekrar deneyin."
        );

        return;
      }

      setMessage(text.successMessage);

      setTargetPrice("");
    } catch (err) {
      console.error(err);

      setError(
        isEnglish
          ? "An unexpected error occurred."
          : "Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin."
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main
        className={
          inter.className +
          " min-h-screen bg-white flex items-center justify-center"
        }
      >
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">
            🔔
          </div>

          <p className="text-sm text-slate-500">
            {isEnglish
              ? "Loading price alerts..."
              : "Fiyat Alarmı yükleniyor..."}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      className={
        inter.className +
        " min-h-screen bg-white text-slate-900 overflow-x-hidden"
      }
    >
      {/* ===================================================== */}
      {/* HEADER                                                */}
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

            <a
              href="/"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              <span className="mr-1">
                ✈
              </span>

              {text.flights}
            </a>

            <a
              href="/discover"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              <span className="mr-1">
                🌍
              </span>

              {text.discover}
            </a>

            <a
              href="/blog"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              <span className="mr-1">
                📝
              </span>

              {text.blog}
            </a>

          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            <a
              href="/contact"
              className="hidden text-sm font-medium text-slate-700 transition hover:text-blue-600 md:block"
            >
              ♧ {text.support}
            </a>

            {/* LANGUAGE */}
            <div className="relative">

              <button
                type="button"
                onClick={() =>
                  setLanguageOpen(!languageOpen)
                }
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
              >
                {isEnglish ? "🇬🇧 EN" : "🇹🇷 TR"} ⌄
              </button>

              {languageOpen && (
                <div className="absolute right-0 top-10 z-[100] w-36 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl">

                  <button
                    type="button"
                    onClick={() => {
                      setLanguage("tr");
                      setLanguageOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition hover:bg-blue-50 ${
                      language === "tr"
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700"
                    }`}
                  >
                    🇹🇷 {text.turkish}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setLanguage("en");
                      setLanguageOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition hover:bg-blue-50 ${
                      language === "en"
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700"
                    }`}
                  >
                    🇬🇧 {text.english}
                  </button>

                </div>
              )}
            </div>

            {/* PROFILE */}
            <div
              ref={profileRef}
              className="relative"
            >

              <button
                type="button"
                onClick={() =>
                  setProfileOpen(!profileOpen)
                }
                className={`flex h-9 w-9 items-center justify-center rounded-full text-base transition ${
                  profileOpen
                    ? "bg-blue-100 text-blue-700"
                    : "bg-slate-100 hover:bg-blue-50"
                }`}
              >
                👤
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-12 z-[200] w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

                  <div className="border-b border-slate-100 bg-slate-50 px-4 py-4">
                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl">
                        👤
                      </div>

                      <div className="min-w-0">

                        <p className="truncate text-sm font-bold text-slate-900">
                          {userName}
                        </p>

                        <p className="truncate text-[11px] text-slate-500">
                          {userEmail}
                        </p>

                      </div>

                    </div>
                  </div>

                  <div className="p-1.5">

                    <a
                      href="/price-alert"
                      onClick={() =>
                        setProfileOpen(false)
                      }
                      className="flex items-center gap-3 rounded-xl bg-blue-50 px-3 py-2.5 text-xs font-semibold text-blue-600"
                    >
                      🔔
                      {text.priceAlert}
                    </a>

                    <a
                      href="/account"
                      onClick={() =>
                        setProfileOpen(false)
                      }
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      👤
                      {text.myAccount}
                    </a>

                    <a
                      href="/account"
                      onClick={() =>
                        setProfileOpen(false)
                      }
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      ⚙️
                      {text.accountSettings}
                    </a>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-medium text-red-600 transition hover:bg-red-50"
                    >
                      🚪
                      {text.logout}
                    </button>

                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </header>

      {/* ===================================================== */}
      {/* HERO                                                  */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/65" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-12 md:pb-20 md:pt-14">

          <div className="max-w-3xl">

            {/* BADGE */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600">
              🔔 {text.priceAlert}
            </div>

            {/* TITLE */}
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-900 md:text-6xl">

              {text.priceAlertTitle}

              <br />

              <span className="text-blue-600">
                {text.priceAlertTitle2}
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              {text.priceAlertDescription}
            </p>

          </div>

          {/* ================================================= */}
          {/* FORM CARD                                         */}
          {/* ================================================= */}

          <div className="mt-10 max-w-4xl rounded-[24px] bg-white p-6 shadow-2xl ring-1 ring-slate-200 md:p-8">

            <div className="mb-7">

              <h2 className="text-2xl font-black text-slate-900">
                {text.newAlert}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {text.newAlertDescription}
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* FROM / TO */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    {text.from}
                  </label>

                  <select
                    value={origin}
                    onChange={(e) =>
                      setOrigin(e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    {airports.map((airport) => (
                      <option
                        key={`origin-${airport.code}`}
                        value={airport.code}
                      >
                        {airport.city} ({airport.code}) —{" "}
                        {airport.airport}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    {text.to}
                  </label>

                  <select
                    value={destination}
                    onChange={(e) =>
                      setDestination(e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    {airports.map((airport) => (
                      <option
                        key={`destination-${airport.code}`}
                        value={airport.code}
                      >
                        {airport.city} ({airport.code}) —{" "}
                        {airport.airport}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* DATES */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    {text.departure}
                  </label>

                  <input
                    type="date"
                    min={getToday()}
                    value={departureDate}
                    onChange={(e) => {

                      setDepartureDate(
                        e.target.value
                      );

                      if (
                        returnDate &&
                        e.target.value &&
                        returnDate < e.target.value
                      ) {
                        setReturnDate("");
                      }
                    }}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    {text.return}

                    <span className="ml-2 font-normal text-slate-400">
                      {text.optional}
                    </span>
                  </label>

                  <input
                    type="date"
                    min={
                      departureDate ||
                      getToday()
                    }
                    value={returnDate}
                    onChange={(e) =>
                      setReturnDate(
                        e.target.value
                      )
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

              </div>

              {/* TARGET PRICE */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  {text.targetPrice}
                </label>

                <div className="relative">

                  <input
                    type="number"
                    min="1"
                    step="1"
                    placeholder={text.example}
                    value={targetPrice}
                    onChange={(e) =>
                      setTargetPrice(
                        e.target.value
                      )
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-16 text-sm text-slate-900 placeholder:text-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">
                    TL
                  </span>

                </div>

                <p className="mt-2 text-xs text-slate-400">
                  {text.priceInfo}
                </p>

              </div>

              {/* SUCCESS */}
              {message && (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-700">

                  <div className="font-bold">
                    ✓ {text.successTitle}
                  </div>

                  <div className="mt-1 text-emerald-600">
                    {message}
                  </div>

                </div>
              )}

              {/* ERROR */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={saving}
                className="w-full rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving
                  ? text.creatingAlert
                  : `🔔 ${text.createAlert}`}
              </button>

            </form>
          </div>

          {/* ================================================= */}
          {/* THREE FEATURES                                    */}
          {/* ================================================= */}

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            {/* ROUTE */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-lg">
                ✈️
              </div>

              <h3 className="text-sm font-bold text-slate-900">
                {text.routeTitle}
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {text.routeText}
              </p>

            </div>

            {/* TARGET */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-lg">
                💰
              </div>

              <h3 className="text-sm font-bold text-slate-900">
                {text.targetTitle}
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {text.targetText}
              </p>

            </div>

            {/* TRACK */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-lg">
                🔔
              </div>

              <h3 className="text-sm font-bold text-slate-900">
                {text.trackTitle}
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {text.trackText}
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* FOOTER                                                */}
      {/* ===================================================== */}

      <footer className="bg-white">

        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-4">

          {/* BRAND */}
          <div>

            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-12 w-auto object-contain"
            />

            <p className="mt-2 max-w-xs text-xs leading-5 text-slate-500">
              {text.slogan}
            </p>

          </div>

          {/* COMPANY */}
          <div>

            <h3 className="mb-2 text-sm font-bold text-slate-900">
              {text.company}
            </h3>

            <div className="space-y-1.5 text-xs text-slate-500">

              <a
                href="/about"
                className="block transition hover:text-blue-600"
              >
                {text.about}
              </a>

              <a
                href="/contact"
                className="block transition hover:text-blue-600"
              >
                {text.contact}
              </a>

            </div>

          </div>

          {/* SUPPORT */}
          <div>

            <h3 className="mb-2 text-sm font-bold text-slate-900">
              {text.supportMenu}
            </h3>

            <div className="space-y-1.5 text-xs text-slate-500">

              <a
                href="/faq"
                className="block transition hover:text-blue-600"
              >
                {text.faq}
              </a>

              <a
                href="/contact"
                className="block transition hover:text-blue-600"
              >
                {text.contactUs}
              </a>

              <a
                href="/privacy-policy"
                className="block transition hover:text-blue-600"
              >
                {text.privacy}
              </a>

            </div>

          </div>

          {/* EXPLORE */}
          <div>

            <h3 className="mb-2 text-sm font-bold text-slate-900">
              {text.explore}
            </h3>

            <div className="space-y-1.5 text-xs text-slate-500">

              <a
                href="/flights"
                className="block transition hover:text-blue-600"
              >
                {text.popularRoutes}
              </a>

              <a
                href="/blog"
                className="block transition hover:text-blue-600"
              >
                {text.blog}
              </a>

              <a
                href="/travel-guide"
                className="block transition hover:text-blue-600"
              >
                {text.travelGuide}
              </a>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-slate-100">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-3 text-[11px] text-slate-400 md:flex-row">

            <span>
              © 2026 UçGit. {text.rights}
            </span>

            <div className="flex gap-4">
              <span>Instagram</span>
              <span>X</span>
              <span>LinkedIn</span>
            </div>

            <span>
              {text.built}
            </span>

          </div>

        </div>

      </footer>
    </main>
  );
}
