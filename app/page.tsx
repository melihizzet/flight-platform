"use client";

import Script from "next/script";

export default function Home() {
  return (
    <>
      <div id="travelpayouts-widget"></div>

      <Script
        src="https://tpwdg.com/content?currency=USD"
        strategy="afterInteractive"
      />
    </>
  );
}