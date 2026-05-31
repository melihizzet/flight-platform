<form
  action="https://formsubmit.co/support@ucgit.com"
  method="POST"
  className="space-y-5"
>

  <input
    type="text"
    name="name"
    placeholder="Ad Soyad"
    required
    className="w-full bg-[#081225] border border-white/10 rounded-2xl px-5 py-4 outline-none"
  />

  <input
    type="email"
    name="email"
    placeholder="E-posta"
    required
    className="w-full bg-[#081225] border border-white/10 rounded-2xl px-5 py-4 outline-none"
  />

  <textarea
    name="message"
    placeholder="Mesajınız"
    rows={6}
    required
    className="w-full bg-[#081225] border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none"
  />

  <button
    type="submit"
    className="w-full bg-blue-500 hover:bg-blue-600 transition rounded-2xl py-4 font-semibold"
  >
    Gönder
  </button>

</form>