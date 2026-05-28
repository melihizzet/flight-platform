export default function LoginPage() {

  return (
    <main className="min-h-screen bg-[#020617] flex items-center justify-center px-6">

      <div className="w-full max-w-[500px] bg-white/10 border border-white/10 rounded-[40px] p-10 text-white backdrop-blur-2xl">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-black">
            Giriş Yap
          </h1>

          <p className="text-slate-400 mt-4">
            UçGit hesabına giriş yap.
          </p>

        </div>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="E-posta"
            className="w-full bg-slate-800 border border-white/10 rounded-2xl px-5 py-5 outline-none"
          />

          <input
            type="password"
            placeholder="Şifre"
            className="w-full bg-slate-800 border border-white/10 rounded-2xl px-5 py-5 outline-none"
          />

          <button className="w-full bg-blue-500 hover:bg-blue-600 transition py-5 rounded-2xl font-black text-xl">
            Giriş Yap
          </button>

        </div>

        <div className="mt-8 text-center">

          <a
            href="/register"
            className="text-blue-400"
          >
            Hesabın yok mu? Kayıt Ol
          </a>

        </div>

      </div>

    </main>
  );
}