"use client";

import Link from "next/link";
import { products } from "../../data/products";

export default function Collections() {
  const eliteProducts = products.filter(p => ["Tập Luyện Cường Độ Cao", "Marathon Đường Dài", "Bóng Rổ Elite"].includes(p.category));
  const urbanProducts = products.filter(p => ["Hiệu Suất Đường Phố", "Cardio Hạng Nhẹ"].includes(p.category));
  const trailProducts = products.filter(p => ["Phản Hồi Mọi Địa Hình"].includes(p.category));

  return (
    <main className="min-h-screen bg-background text-on-background font-body-md overflow-hidden">
      {/* Header */}
      <section className="bg-black text-white pt-40 pb-20 px-6 border-b-8 border-orange-600 relative slant-bg z-10 scale-[1.02]">
        <div className="max-w-[1440px] mx-auto text-center space-y-6">
          <h1 className="font-display-lg text-6xl md:text-8xl uppercase italic tracking-tighter">
            KHÁM PHÁ <br/><span className="text-orange-500">KHO VŨ KHÍ</span>
          </h1>
          <p className="font-body-lg text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto uppercase tracking-widest font-label-bold">
            Khám phá các bộ sưu tập được tuyển chọn cho các chỉ số hiệu suất và môi trường vận động cụ thể.
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 py-24 space-y-32">
        {/* Collection 1: ELITE */}
        <section>
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b-4 border-black pb-4">
            <div>
              <span className="bg-primary-container text-black px-3 py-1 font-label-bold text-sm uppercase mb-4 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Cấp Độ Chuyên Nghiệp</span>
              <h2 className="font-display-lg text-5xl md:text-7xl uppercase italic tracking-tighter">THE ELITE SERIES</h2>
            </div>
            <p className="font-label-bold text-secondary uppercase max-w-sm text-right hidden md:block">
              Hoàn trả năng lượng tối đa và hiệu suất đĩa carbon cho những khoảnh khắc mà từng mili giây đều quan trọng.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eliteProducts.map(product => (
              <Link href={`/product/${product.id}`} key={product.id} className="group flex flex-col h-full bg-surface-container border-2 border-transparent hover:border-black transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2">
                <div className="relative aspect-square overflow-hidden bg-neutral-200">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-primary-container text-black px-4 py-1 font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow bg-white">
                  <h3 className="font-headline-md text-2xl uppercase italic text-black group-hover:text-orange-600 transition-colors">{product.name}</h3>
                  <p className="font-body-md text-secondary mt-2 mb-6 flex-grow">{product.category}</p>
                  <div className="flex justify-between items-center border-t-2 border-black/10 pt-4">
                    <span className="font-headline-md text-xl text-black">${product.price.toFixed(2)}</span>
                    <span className="material-symbols-outlined text-orange-600 group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Collection 2: URBAN MOVEMENT */}
        <section>
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b-4 border-black pb-4">
            <div>
              <span className="bg-black text-white px-3 py-1 font-label-bold text-sm uppercase mb-4 inline-block shadow-[2px_2px_0px_0px_#ff8c00]">Sẵn Sàng Xuống Phố</span>
              <h2 className="font-display-lg text-5xl md:text-7xl uppercase italic tracking-tighter">URBAN MOVEMENT</h2>
            </div>
            <p className="font-label-bold text-secondary uppercase max-w-sm text-right hidden md:block">
              Được thiết kế cho rừng bê tông. Độ bền bỉ cao kết hợp với sự thống trị về mặt thẩm mỹ.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {urbanProducts.map((product, idx) => (
              <Link href={`/product/${product.id}`} key={product.id} className={`group flex flex-col md:flex-row h-full bg-white border-2 border-black transition-all hover:shadow-[8px_8px_0px_0px_#ff8c00] hover:-translate-y-2 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto overflow-hidden bg-neutral-200">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 flex flex-col justify-center w-full md:w-1/2 bg-black text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="font-headline-md text-3xl uppercase italic relative z-10">{product.name}</h3>
                  <p className="font-body-md text-neutral-400 mt-2 mb-8 relative z-10">{product.category}</p>
                  <div className="flex justify-between items-center relative z-10">
                    <span className="font-headline-md text-2xl text-orange-500">${product.price.toFixed(2)}</span>
                    <span className="font-label-bold border-b border-orange-500 text-orange-500 pb-1">KHÁM PHÁ</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Collection 3: ALL TERRAIN */}
        <section>
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b-4 border-black pb-4">
            <div>
              <span className="bg-neutral-300 text-black px-3 py-1 font-label-bold text-sm uppercase mb-4 inline-block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">Địa Hình Khó</span>
              <h2 className="font-display-lg text-5xl md:text-7xl uppercase italic tracking-tighter">ALL TERRAIN</h2>
            </div>
            <p className="font-label-bold text-secondary uppercase max-w-sm text-right hidden md:block">
              Họa tiết gai đế gai góc và thân giày được gia cố để đối phó với môi trường hoang dã khó đoán.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-neutral-900 border-2 border-black overflow-hidden relative group">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO2mH7OoCEGceolTDo4yUR_af_skA80g9SjkmAU9yQIR34c1uVMkeJGeIPSVrL-ZMeUhxtcvP1UZMi61nhOzkmgJpLTdlwcTUccB4F7EzplSs_dbYX67ug-4aZUuaboNZ_tNpFi7oHcPuhZpi0UkEJtdHlj__J9yUBbbe-MfOsAaqDW5MM5tUGcHOBJLdSTo7Mrsj1BpVfIjCzPCBMphbCklfdul8vO8hlcetQ8TMQXaQ7TKHgyGg5baT_UnEjYRp0kjsRey2TiVDB" alt="All Terrain Action" className="w-full h-[400px] object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                  <h3 className="font-display-lg text-5xl text-white italic uppercase tracking-tighter mb-4 shadow-black drop-shadow-md">Chinh Phục Mọi Giới Hạn</h3>
                  <Link href="/product/vector-trail" className="bg-orange-600 text-black px-8 py-4 font-label-bold uppercase text-sm shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] transition-all">Mua Dòng Vector Trail</Link>
               </div>
            </div>
            
            {trailProducts.map(product => (
              <Link href={`/product/${product.id}`} key={product.id} className="group flex flex-col h-[400px] bg-surface-container border-2 border-black transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2">
                <div className="relative h-2/3 overflow-hidden bg-neutral-200">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6 flex flex-col justify-center h-1/3 bg-white">
                  <h3 className="font-headline-md text-xl uppercase italic text-black group-hover:text-orange-600 transition-colors">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-headline-md text-lg text-black">${product.price.toFixed(2)}</span>
                    <span className="material-symbols-outlined text-black">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
