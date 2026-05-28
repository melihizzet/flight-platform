"use client";

import { useState } from "react";

export default function Home() {
  const airports = [
    "SAW - Sabiha Gokcen",
    "IST - Istanbul Airport",
    "AMS - Amsterdam Schiphol",
  ];

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = airports.filter((airport) =>
    airport.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-900 text-white p-20">

      <div className="relative w-[400px]">

        <input
          value={text}
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setText(e.target.value);
            setOpen(true);
          }}
          placeholder="Nereden?"
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
        />

        {open && (
          <div className="absolute top-16 left-0 w-full bg-slate-800 rounded-xl overflow-hidden border border-white/10">

            {filtered.map((airport) => (
              <div
                key={airport}
                onClick={() => {
                  setText(airport);
                  setOpen(false);
                }}
                className="p-4 hover:bg-slate-700 cursor-pointer"
              >
                {airport}
              </div>
            ))}

          </div>
        )}

      </div>

    </main>
  );
}