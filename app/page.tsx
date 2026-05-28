"use client";

import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* TravelPayouts Script */}
      <Script id="tp-script" strategy="afterInteractive">
        {`
          (function () {
            var script = document.createElement("script");
            script.async = 1;
            script.src = "https://tpwdg.com/content?currency=try&trs=18030&shmarker=567496&locale=tr&powered_by=true";
            document.body.appendChild(script);
          })();
        `}
      </Script>

      <main
        style={{
          minHeight: "100vh",
          background: "#020817",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        {/* HEADER */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 48px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
            ✈️ UçGit
          </h1>

          <nav
            style={{
              display: "flex",
              gap: "32px",
              fontSize: "18px",
            }}
          >
            <a href="#">Kampanyalar</a>
            <a href="#">Blog</a>
            <a href="#">İletişim</a>
            <a href="#">Hakkımızda</a>
          </nav>
        </header>

        {/* HERO */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 20px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              marginBottom: "24px",
            }}
          >
            Ucuza uçmanın en kolay yolu
          </h2>

          <p
            style={{
              fontSize: "22px",
              opacity: 0.8,
              marginBottom: "50px",
            }}
          >
            Tüm havayollarını karşılaştır, gerçek zamanlı fiyatları gör
            ve en uygun bileti hemen bul.
          </p>

          {/* SEARCH WIDGET */}
          <div
            id="tp-widget"
            data-skyscanner-widget
            style={{
              width: "100%",
              minHeight: "120px",
              borderRadius: "24px",
              overflow: "hidden",
              background: "#111827",
              padding: "20px",
            }}
          />
        </section>

        {/* AIRLINES */}
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "40px 20px",
          }}
        >
          <h3
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Popüler Havayolları
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6,1fr)",
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
                  background: "#111827",
                  borderRadius: "20px",
                  padding: "40px 20px",
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
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