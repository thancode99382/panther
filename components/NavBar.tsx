"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const { getCartCount, isMounted } = useCart();
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isMounted) {
      setCartCount(getCartCount());
    }
  }, [getCartCount, isMounted]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="bg-white dark:bg-zinc-950 docked full-width top-0 border-b-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(255,140,0,1)] sticky z-50">
      <nav className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-12">
          <Link href="/" className="inline-flex items-center">
            <Image src="/logo.png" alt="Panther Athletics Logo" width={140} height={40} className="object-contain " />
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="font-['Space_Grotesk'] font-bold tracking-tighter uppercase text-black dark:text-white border-b-4 border-transparent hover:border-orange-500 pb-1 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-150 active:translate-y-1">
              Cửa Hàng
            </Link>
            <Link href="/collections" className="font-['Space_Grotesk'] font-bold tracking-tighter uppercase text-zinc-500 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-400 border-b-4 border-transparent hover:border-orange-500 pb-1 transition-all duration-150 active:translate-y-1">
              Bộ Sưu Tập
            </Link>
            <Link href="/about" className="font-['Space_Grotesk'] font-bold tracking-tighter uppercase text-zinc-500 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-400 border-b-4 border-transparent hover:border-orange-500 pb-1 transition-all duration-150 active:translate-y-1">
              Về Chúng Tôi
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <form onSubmit={handleSearch} className="hidden lg:block relative">
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-surface-container border-2 border-black px-4 py-2 text-label-bold focus:ring-0 focus:outline-none w-64" 
              placeholder="TÌM KIẾM" 
              type="text" 
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center">
              <span className="material-symbols-outlined hover:text-orange-500 transition-colors">search</span>
            </button>
          </form>
          <Link href="/cart" className="active:translate-y-1 transition-transform relative">
            <span className="material-symbols-outlined text-black dark:text-white text-3xl">shopping_cart</span>
            {isMounted && cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary-container text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
