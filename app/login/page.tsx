export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

      <div className="fixed -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="fixed -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl" />

      {/* HEADER */}
      <header className="absolute left-0 right-0 top-0 z-20">

        <div className="mx-auto flex max-w-7xl items-center px-6 py-5">

          <a href="/" className="flex items-center">
            <img
              src="/logo.jpg"
              alt="UçGit"
              className="h-14 w-auto rounded-xl"
            />
          </a>

        </div>

      </header>

      {/* LOGIN */}
      <section className="flex min-h-screen items-center justify-center px-6 pt-20">

        <div className="w-full max-w-md">

          {/* TITLE */}
          <div className="mb-7 text-center">

            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl">
              👋
            </div>

            <h1 className="text-3xl font-black text-slate-900">
              Giriş Yap
            </h1>

            <p className="mt-3 text-sm text-slate-500">
              UçGit hesabına giriş yap.
            </p>

          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl">

            <form className="space-y-4">

              <div>

                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  E-posta
                </label>

                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white"
                />

              </div>

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label className="text-xs font-semibold text-slate-600">
                    Şifre
                  </label>

                  <a
                    href="#"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Şifremi unuttum
                  </a>

                </div>

                <input
                  type="password"
                  placeholder="Şifreniz"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white"
                />

              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#020817] py-3.5 text-sm font-bold text-white transition hover:bg-blue-600"
              >
                Giriş Yap →
              </button>

            </form>

            {/* REGISTER */}
            <div className="mt-6 border-t border-slate-100 pt-5 text-center">

              <p className="text-sm text-slate-500">
                Hesabın yok mu?{" "}

                <a
                  href="/register"
                  className="font-bold text-blue-600 hover:text-blue-700"
                >
                  Kayıt Ol
                </a>
              </p>

            </div>

          </div>

          {/* BACK */}
          <div className="mt-6 text-center">

            <a
              href="/"
              className="text-xs font-semibold text-slate-500 transition hover:text-blue-600"
            >
              ← Ana sayfaya dön
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="absolute bottom-0 left-0 right-0 py-5 text-center">

        <p className="text-xs text-slate-400">
          © 2026 UçGit. Tüm hakları saklıdır.
        </p>

      </footer>

    </main>
  );
}
