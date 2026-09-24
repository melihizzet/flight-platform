"use client";

import { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/client";

export default function AccountPage() {
  const supabase = createClient();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

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
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white">
        <p className="text-sm text-slate-500">
          Hesabınız yükleniyor...
        </p>
      </main>
    );
  }

  const fullName =
    user?.user_metadata?.full_name || "UçGit Kullanıcısı";

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 text-slate-900">

      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          <a href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-10 w-auto object-contain"
            />
          </a>

          <a
            href="/"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            ← Ana Sayfa
          </a>

        </div>
      </header>

      {/* ACCOUNT */}
      <section className="mx-auto max-w-3xl px-5 py-16">

        {/* TITLE */}
        <div className="mb-8 text-center">

          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
            👤
          </div>

          <h1 className="text-3xl font-black text-slate-900">
            Hesabım
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            UçGit hesabınızı buradan yönetebilirsiniz.
          </p>

        </div>

        {/* PROFILE CARD */}
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl">

          <h2 className="mb-6 text-lg font-bold text-slate-900">
            Profil Bilgileri
          </h2>

          <div className="space-y-4">

            {/* NAME */}
            <div className="rounded-2xl bg-slate-50 p-4">

              <p className="text-xs font-medium text-slate-500">
                Ad Soyad
              </p>

              <p className="mt-1 text-sm font-bold text-slate-900">
                {fullName}
              </p>

            </div>

            {/* EMAIL */}
            <div className="rounded-2xl bg-slate-50 p-4">

              <p className="text-xs font-medium text-slate-500">
                E-posta
              </p>

              <p className="mt-1 text-sm font-bold text-slate-900">
                {user?.email}
              </p>

            </div>

          </div>

          {/* ACCOUNT INFO */}
          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">

            <h3 className="text-sm font-bold text-blue-900">
              ✈️ UçGit hesabınız
            </h3>

            <p className="mt-1 text-xs leading-5 text-blue-700">
              İlerleyen aşamalarda kayıtlı uçuşlar,
              fiyat alarmları ve seyahat tercihleri
              burada görüntülenebilir.
            </p>

          </div>

          {/* LOGOUT */}
          <button
            type="button"
            onClick={handleLogout}
            className="mt-7 w-full rounded-xl bg-[#020817] px-5 py-3 text-sm font-bold text-white transition hover:bg-red-600"
          >
            🚪 Çıkış Yap
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-5 text-center">

        <p className="text-xs text-slate-400">
          © 2026 UçGit. Tüm hakları saklıdır.
        </p>

      </footer>

    </main>
  );
}
