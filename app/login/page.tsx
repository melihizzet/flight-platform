export default function LoginPage() {
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

      {/* LOGIN */}
      <section className="flex min-h-screen items-center justify-center px-5 py-20">

        <div className="w-full max-w-sm">

          {/* TITLE */}
          <div className="mb-5 text-center">

            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-lg">
              👋
            </div>

            <h1 className="text-2xl font-black text-slate-900">
              Giriş Yap
            </h1>

            <p className="mt-2 text-xs text-slate-500">
              UçGit hesabına giriş yap.
            </p>

          </div>

          {/* FORM CARD */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">

            <form className="space-y-3.5">

              {/* EMAIL */}
              <div>

                <label className="mb-1.5 block text-[11px] font-semibold text-slate-600">
                  E-posta
                </label>

                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white"
                />

              </div>

              {/* PASSWORD */}
              <div>

                <div className="mb-1.5 flex items-center justify-between">

                  <label className="text-[11px] font-semibold text-slate-600">
                    Şifre
                  </label>

                  <a
                    href="#"
                    className="text-[11px] font-semibold text-blue-600 transition hover:text-blue-700"
                  >
                    Şifremi unuttum
                  </a>

                </div>

                <input
                  type="password"
                  placeholder="Şifreniz"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white"
                />

              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#020817] py-2.5 text-xs font-bold text-white transition hover:bg-blue-600"
              >
                Giriş Yap →
              </button>

            </form>

            {/* REGISTER */}
            <div className="mt-5 border-t border-slate-100 pt-4 text-center">

              <p className="text-xs text-slate-500">
                Hesabın yok mu?{" "}

                <a
                  href="/register"
                  className="font-bold text-blue-600 transition hover:text-blue-700"
                >
                  Kayıt Ol
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
