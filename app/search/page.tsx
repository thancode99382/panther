"use client";

import { use } from "react";
import Link from "next/link";
import { products } from "../../data/products";

export default function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const resolvedSearchParams = use(searchParams);
  const query = resolvedSearchParams.q || "";
  const lowercaseQuery = query.toLowerCase();

  const searchResults = products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.category.toLowerCase().includes(lowercaseQuery) ||
    (product.tags && product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
  );

  return (
    <main className="min-h-screen bg-background text-on-background font-body-md overflow-hidden">
      <section className="bg-black text-white pt-40 pb-20 px-6 border-b-8 border-orange-600 relative slant-bg z-10 scale-[1.02]">
        <div className="max-w-[1440px] mx-auto text-center space-y-6">
          <h1 className="font-display-lg text-6xl md:text-8xl uppercase italic tracking-tighter">
            KẾT QUẢ <br/><span className="text-orange-500">TÌM KIẾM</span>
          </h1>
          <p className="font-body-lg text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto uppercase tracking-widest font-label-bold">
            {query ? `Hiển thị kết quả cho "${query}"` : "Vui lòng nhập từ khóa để tìm kiếm"}
          </p>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 py-24">
        {searchResults.length === 0 && query ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-display-lg uppercase italic mb-4">KHÔNG TÌM THẤY SẢN PHẨM</h2>
            <p className="text-secondary mb-8 font-label-bold">THỬ TÌM KIẾM VỚI TỪ KHÓA KHÁC HOẶC KHÁM PHÁ KHO VŨ KHÍ CỦA CHÚNG TÔI.</p>
            <Link href="/collections" className="bg-primary-container text-black px-12 py-5 font-display-lg text-xl uppercase italic shadow-[4px_4px_0px_0px_#ff8c00] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#ff8c00] transition-all inline-block">
              XEM BỘ SƯU TẬP
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {searchResults.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <div className="group cursor-pointer border-4 border-black p-4 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all bg-white relative">
                  <div className="bg-neutral-100 aspect-square overflow-hidden mb-6 border-2 border-black relative">
                    <img alt={product.name} className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500" src={product.image} />
                    {product.badge && <div className="absolute top-4 left-4 bg-primary-container text-black px-3 py-1 font-label-bold text-xs uppercase border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{product.badge}</div>}
                  </div>
                  <h3 className="font-display-lg text-3xl uppercase italic tracking-tighter group-hover:text-orange-600 transition-colors">{product.name}</h3>
                  <p className="font-body-md text-neutral-500 mt-2 mb-8 relative z-10">{product.category}</p>
                  <div className="flex justify-between items-center relative z-10">
                    <span className="font-headline-md text-2xl text-orange-500">${product.price.toFixed(2)}</span>
                    <span className="font-label-bold border-b border-orange-500 text-orange-500 pb-1">KHÁM PHÁ</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
