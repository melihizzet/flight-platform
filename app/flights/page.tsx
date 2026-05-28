"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function FlightsInner() {

  const searchParams = useSearchParams();

  const from = searchParams.get("from") || "SAW";
  const to = searchParams.get("to") || "AMS";

  return (

    <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-7xl font-black">
          {from} → {to}
        </h1>

        <p className="text-slate-400 text-2xl mt-6">
          Flights page çalışıyor 🚀
        </p>

      </div>

    </main>

  );
}

export default function FlightsPage() {

  return (

    <Suspense
      fallback={
        <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center">

          <h1 className="text-4xl font-black">
            Loading...
          </h1>

        </main>
      }
    >

      <FlightsInner />

    </Suspense>

  );
}