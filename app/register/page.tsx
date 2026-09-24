"use client";

import { FormEvent, useState } from "react";
import { createClient } from "../utils/supabase/client";

export default function RegisterPage() {
  const supabase = createClient();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setMessage("");

    if (!fullName.trim()) {
      setError("Lütfen ad soyadınızı girin.");
      return;
    }

    if (!email.trim()) {
      setError("Lütfen e-posta adresinizi girin.");
      return;
    }

    if (password.length < 6) {
      setError("Şifreniz en az 6 karakter olmalıdır.");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          emailRedirectTo: "https://www.ucgit.com",
          data: {
            full_name: fullName.trim(),
          },
        },
      });

      if (error) {
        console.error("Supabase kayıt hatası:", error);

        setError(error.message);
        setLoading(false);
        return;
      }

      console.log("Supabase kayıt sonucu:", data);

      setMessage(
        "Kayıt başarılı! E-posta adresinize doğrulama bağlantısı gönderildi. Lütfen e-postanızı kontrol edin."
      );

      setFullName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Beklenmeyen kayıt hatası:", err);

      setError(
        "Kayıt sırasında bir bağlantı hatası oluştu. Lütfen tekrar deneyin."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

      <div className="fixed -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="fixed -bottom-32 -left-32 -z-10 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl" />

      {/* HEADER */}
      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center px-5 py-4">
          <a href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-11 w-auto rounded-lg"
            />
          </a>
        </div>
      </header>

      {/* REGISTER */}
      <section className="flex min-h-screen items-center justify-center px-5 py-20">

        <div className="w-full max-w-sm">

          {/* TITLE */}
          <div className="mb-5 text-center">

            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-lg">
              ✨
            </div>

            <h1 className="text-2xl font-black text-slate-900">
              Kayıt Ol
            </h1>

            <p className="mt-2 text-xs text-slate-500">
              Yeni UçGit hesabını oluştur.
            </p>

          </div>

          {/* FORM CARD */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">

            <form onSubmit={handleRegister} className="space-y-3.5">

              {/* AD SOYAD */}
              <div>
                <label className="mb-1.5 block text-[11px] font-semibold text-slate-600">
                  Ad Soyad
                </label>

                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ad Soyad"
                  autoComplete="name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-1.5 block text-[11px] font-semibold text-slate-600">
                  E-posta
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresiniz"
                  autoComplete="email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white"
                />
              </div>

              {/* ŞİFRE */}
              <div>
                <label className="mb-1.5 block text-[11px] font-semibold text-slate-600">
                  Şifre
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Şifreniz"
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white"
                />
              </div>

              {/* ERROR */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-xs leading-5 text-red-600">
                  {error}
                </div>
              )}

              {/* SUCCESS */}
              {message && (
                <div className="rounded-xl border border-green-200 bg-green-50 px-3 py-2.5 text-xs leading-5 text-green-700">
                  {message}
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#020817] py-2.5 text-xs font-bold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Hesap oluşturuluyor..."
                  : "Hesap Oluştur →"}
              </button>

            </form>

            {/* LOGIN */}
            <div className="mt-5 border-t border-slate-100 pt-4 text-center">

              <p className="text-xs text-slate-500">
                Zaten hesabın var mı?{" "}

                <a
                  href="/login"
                  className="font-bold text-blue-600 transition hover:text-blue-700"
                >
                  Giriş Yap
                </a>
              </p>

            </div>

          </div>

          {/* BACK */}
          <div className="mt-4 text-center">

            <a
              href="/"
              className="text-[11px] font-semibold text-slate-500 transition hover:text-blue-600"
            >
              ← Ana sayfaya dön
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="absolute bottom-0 left-0 right-0 py-4 text-center">
        <p className="text-[11px] text-slate-400">
          © 2026 UçGit. Tüm hakları saklıdır.
        </p>
      </footer>

    </main>
  );
}
