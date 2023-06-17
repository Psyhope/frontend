export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20 pt-5">
      {/* Hero */}
      <div className="h-[419px] w-full bg-[#53389E] rounded-3xl p-10">
        <div className="w-3/5 h-full justify-center flex flex-col">
          <p className="text-[#E9D7FE99] font-inter font-bold text-4xl">
            Layanan Konseling UI
          </p>
          <p className="text-[#F2F4F7] text-sm mt-3 mb-14 leading-relaxed">
            Aliansi Departemen Adkesma BEM se-UI menyediakan layanan konseling
            sebaya yang diperuntukkan bagi mahasiswa program sarjana atau
            vokasi. Bersama teman sebaya, kamu dapat bercerita dengan aman dan
            nyaman.
          </p>
          <button className="py-3 font-semibold rounded-lg drop-shadow-lg active:drop-shadow-none px-4 bg-[#7F56D9] flex-none w-fit text-white">
            Daftar Konseling Sekarang!
          </button>
        </div>
      </div>
    </main>
  )
}
