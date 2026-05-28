"use client";

import Script from "next/script";

export default function HomePage() {
  return (
    <>
      {/* TRAVELPAYOUTS SCRIPT */}
      <Script
        src="https://tpwdg.com/content?currency=try&trs=18030&shmarker=611533&locale=tr&searchUrl=www.aviasales.com%2Fsearch&powered_by=true&border_radius=20&plain=false&color_button=%232563eb&color_icons=%232563eb&promo_id=7873&campaign_id=100"
        strategy="afterInteractive"
      />

      <main
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at top, #172554 0%, #020617 60%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* HEADER */}
        <header
          style={{
            width: "100%",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(2,6,23,0.9)",
            position: "sticky",
            top: 0,
            zIndex: 999,
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* LOGO */}
            <div
              style={{
                fontSize: "30px",
                fontWeight: 800,
              }}
            >
              ✈️ UçGit
            </div>

            {/* MENU */}
            <nav
              style={{
                display: "flex",
                gap: "30px",
                color: "#cbd5e1",
                fontSize: "16px",
              }}
            >
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Kampanyalar
              </a>

              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Blog
              </a>

              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                İletişim
              </a>

              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Hakkımızda
              </a>
            </nav>

            {/* BUTTON */}
            <button
              style={{
                background: "#2563eb",
                border: "none",
                color: "white",
                padding: "12px 24px",
                borderRadius: "12px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Giriş Yap
            </button>
          </div>
        </header>

        {/* HERO */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "100px 20px 40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#60a5fa",
              marginBottom: "20px",
              fontSize: "18px",
            }}
          >
            En uygun uçuşları saniyeler içinde bul
          </p>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: 1,
              fontWeight: 900,
              marginBottom: "24px",
            }}
          >
            Ucuza uçmanın{" "}
            <span style={{ color: "#3b82f6" }}>en kolay yolu</span>
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto 50px",
              color: "#94a3b8",
              fontSize: "22px",
              lineHeight: 1.6,
            }}
          >
            Tüm havayollarını karşılaştır, gerçek zamanlı fiyatları gör
            ve en uygun bileti hemen bul.
          </p>

          {/* SEARCH BOX */}
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "28px",
              padding: "30px",
              overflow: "hidden",
            }}
          >
            <div
              className="tp-widget"
              data-tpwrt="d6c28"
              data-tp-widget="7"
              data-city-from="IST"
              data-city-to="AYT"
              data-lang="tr"
              data-currency="TRY"
              data-host="search.aviasales.com"
            ></div>
          </div>
        </section>

        {/* AIRLINES */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "80px auto",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "25px",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
                fontWeight: 800,
              }}
            >
              Popüler Havayolları
            </h2>

            <a
              href="#"
              style={{
                color: "#60a5fa",
                textDecoration: "none",
              }}
            >
              Tümünü Gör
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: "20px",
            }}
          >
            {[
              "THY",
              "Pegasus",
              "Lufthansa",
              "Qatar",
              "Emirates",
              "British Airways",
            ].map((airline) => (
              <div
                key={airline}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "22px",
                  height: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "22px",
                }}
              >
                {airline}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}