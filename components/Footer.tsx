import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-zinc-900 w-full border-t-8 border-orange-500">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-16 gap-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="inline-flex items-center">
            <Image src="/logo.png" alt="Panther Athletics Logo" width={160} height={45} className="object-contain" />
          </Link>
          <div className="font-['Space_Grotesk'] text-sm tracking-widest text-zinc-400 space-y-2 mt-2 text-center md:text-left">
            <p className="uppercase">@panthersport</p>
            <p className="uppercase">SĐT: +84 332 882 508</p>
            <p>Địa chỉ: 33 Xô Viết Nghệ Tĩnh, Hòa Cường, TP. Đà Nẵng</p>
            <p className="uppercase text-xs mt-4 opacity-50">© 2024 PANTHER ATHLETICS. ĐỘ CHÍNH XÁC & ĐỘNG LỰC.</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-['Space_Grotesk'] text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500" href="#">Bản Tin</a>
          <a className="font-['Space_Grotesk'] text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500" href="#">Cửa Hàng</a>
          <a className="font-['Space_Grotesk'] text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500" href="#">Đổi Trả</a>
          <a className="font-['Space_Grotesk'] text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500" href="#">Bảo Mật</a>
          <a className="font-['Space_Grotesk'] text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500" href="#">Điều Khoản</a>
        </div>
        <div className="flex gap-4">
          <a className="w-10 h-10 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:border-orange-500 transition-all" href="#">
            <span className="material-symbols-outlined text-sm">public</span>
          </a>
          <a className="w-10 h-10 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:border-orange-500 transition-all" href="#">
            <span className="material-symbols-outlined text-sm">alternate_email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
