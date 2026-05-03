"use client";

import { use } from "react";
import { useState } from "react";
import { products, getProduct } from "../../../data/products";
import { useCart } from "../../../components/CartProvider";
import { notFound } from "next/navigation";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProduct(id);
  const [selectedSize, setSelectedSize] = useState("9");
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="max-w-[1440px] mx-auto px-6 py-12 text-center">
        <h1 className="text-2xl">Không tìm thấy sản phẩm</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, 1, selectedSize);
    alert("Đã thêm vào giỏ hàng!");
  };

  return (
    <main className="max-w-[1440px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Side: High-impact Gallery */}
        <div className="lg:col-span-7 space-y-gutter">
          <div className="relative bg-surface-container overflow-hidden">
            <div className="absolute top-8 left-8 z-10 bg-primary-container text-black font-['Space_Grotesk'] font-black px-4 py-1 italic tracking-widest text-sm">
              NEW ERA 1.0
            </div>
            <img 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500" 
              alt={product.name} 
              src={product.image} 
            />
          </div>
          <div className="grid grid-cols-2 gap-gutter">
            <div className="bg-surface-container overflow-hidden border-2 border-black">
              <img className="w-full aspect-square object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXpZPrnZwiqSErJrPHS2YMiSzpkUPuWOanodId-IbjSLy-wj6cLgiQjSfSoYnTglyOttdGM7TXrVNgHnFZ6o5LZBoYQYV8syPHK7KvcrHDDz2tXhCQAgo2YUUNF16GVWNMmVFIHk-ilGkl66Hsk_w7x8ZFvkcKmdU7e5D6FB-y7Cf8Hs4ei7xGHqE_IGjnvcAJpfyFvQw3sjqBDs0YkTp2bCGoB5pQJv2LQV--Y3MOnnQEgynz-UMiJi-RL8c9JmnVAtYRorM7MBuq" alt="Detail 1" />
            </div>
            <div className="bg-surface-container overflow-hidden border-2 border-black">
              <img className="w-full aspect-square object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvkuEuoSAQYKoeqIm5_MyKrbw6OBp2QwVYxEgd4OKbuCixq0NY0HzvyMIDak9UDaYMaUyz7IpxjhDNpOOqMkOG6OqndFF2HeaA5-MkzJ9jZDhd8TM5b23DA_ZR90avOsNtE0tB1gkPPezsaee4_A9bwCpyq3khPm4MKWxqI9GImjbYVQrnEfmp8VZAkFM42exn4g20tTTW8EPYZDYKtrix_EmiXleYhNb_o3yBT2MpsfdgwtinHoqFEGJtUDux6lFCfT_skUf_RYsF" alt="Detail 2" />
            </div>
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="lg:col-span-5 lg:pl-12">
          <div className="sticky top-32 space-y-10">
            <div>
              <h1 className="font-display-lg text-headline-xl uppercase italic leading-none mb-2">{product.name}</h1>
              <p className="text-secondary font-label-bold">{product.category} / LÕI CARBON</p>
            </div>
            <div className="flex items-baseline space-x-4">
              <span className="font-display-lg text-headline-xl text-orange-600">${product.price.toFixed(2)}</span>
              <span className="text-tertiary font-label-bold line-through">${(product.price * 1.25).toFixed(2)}</span>
            </div>

            {/* Size Selector */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-label-bold uppercase tracking-widest text-xs">CHỌN KÍCH CỠ (US)</label>
                <a className="text-xs font-bold underline" href="#">HƯỚNG DẪN KÍCH CỠ</a>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["7", "8", "9", "10", "11", "12"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border-2 border-black py-4 font-display-lg text-xl transition-all active:scale-95 ${
                      selectedSize === size
                        ? "bg-primary-container text-black border-black shadow-[4px_4px_0px_0px_#000]"
                        : "hover:bg-black hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-primary-container text-black font-display-lg text-2xl py-6 uppercase italic shadow-[4px_4px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-4"
              >
                THÊM VÀO GIỎ HÀNG
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </button>
              <button className="w-full border-2 border-black text-black font-display-lg text-lg py-4 uppercase italic hover:bg-black hover:text-white transition-all">
                YÊU THÍCH
              </button>
            </div>

            {/* Technical Specs */}
            <div className="space-y-6 pt-10 border-t-2 border-black">
              <h3 className="font-headline-md uppercase italic text-2xl">THÔNG SỐ KỸ THUẬT</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-black p-2 text-white">
                    <span className="material-symbols-outlined text-lg">rocket_launch</span>
                  </div>
                  <div>
                    <p className="font-label-bold uppercase text-sm">Phản hồi sợi carbon</p>
                    <p className="text-tertiary text-sm font-body-md mt-1">Tấm carbon trải dài toàn bộ đế được thiết kế để bật lại theo từng sải chân, chuyển đổi năng lượng thành động lực hướng về phía trước một cách thuần túy.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-black p-2 text-white">
                    <span className="material-symbols-outlined text-lg">lock</span>
                  </div>
                  <div>
                    <p className="font-label-bold uppercase text-sm">Lưới khóa đà</p>
                    <p className="text-tertiary text-sm font-body-md mt-1">Lưới thoáng khí cấp độ công nghiệp giúp giữ chặt bàn chân trong các chuyển động ngang chịu lực G cao.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <section className="mt-section-gap relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black -skew-y-3 origin-left z-0 scale-110"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center text-white">
          <div className="space-y-6">
            <h2 className="font-display-lg text-display-lg italic leading-[0.9] uppercase">RÈN TRONG<br/>LỬA ĐỎ CỦA<br/>TỐC ĐỘ</h2>
            <p className="font-body-lg text-surface-container-highest max-w-md">
              Panther 1.0 không chỉ là một đôi giày. Đó là một tuyên ngôn về ý chí chuyển động. Được thiết kế cho những người từ chối việc đứng yên, nổi bật với tỷ lệ trọng lượng trên công suất nhẹ nhất trong lịch sử của chúng tôi.
            </p>
            <div className="pt-6">
              <button className="bg-orange-500 text-black px-10 py-4 font-display-lg text-xl uppercase italic shadow-[4px_4px_0px_0px_#ff8c00]">KHÁM PHÁ TRIẾT LÝ THIẾT KẾ</button>
            </div>
          </div>
          <div className="relative">
            <img className="w-full h-[500px] object-cover border-4 border-orange-500 transform lg:rotate-3" alt="Action" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO2mH7OoCEGceolTDo4yUR_af_skA80g9SjkmAU9yQIR34c1uVMkeJGeIPSVrL-ZMeUhxtcvP1UZMi61nhOzkmgJpLTdlwcTUccB4F7EzplSs_dbYX67ug-4aZUuaboNZ_tNpFi7oHcPuhZpi0UkEJtdHlj__J9yUBbbe-MfOsAaqDW5MM5tUGcHOBJLdSTo7Mrsj1BpVfIjCzPCBMphbCklfdul8vO8hlcetQ8TMQXaQ7TKHgyGg5baT_UnEjYRp0kjsRey2TiVDB" />
          </div>
        </div>
      </section>

      {/* Product Features Bento */}
      <section className="mt-section-gap">
        <h2 className="font-display-lg text-headline-xl uppercase mb-12">CHI TIẾT</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container-high p-8 border-l-8 border-orange-600">
            <span className="material-symbols-outlined text-4xl mb-4">speed</span>
            <h4 className="font-headline-md text-xl uppercase mb-2">TỐC ĐỘ TỐI ĐA</h4>
            <p className="text-tertiary">Hình dáng khí động học được thử nghiệm trong hầm gió cho lực cản không khí ở mức tối thiểu khi đạt tốc độ tối đa.</p>
          </div>
          <div className="bg-black text-white p-8 border-l-8 border-orange-600">
            <span className="material-symbols-outlined text-4xl mb-4 text-orange-500">grid_view</span>
            <h4 className="font-headline-md text-xl uppercase mb-2">ĐỘ BÁM+</h4>
            <p className="text-neutral-400">Kiểu dáng đế ngoài cao su siêu nhỏ cung cấp độ bám 360 độ trên mọi loại bề mặt.</p>
          </div>
          <div className="bg-surface-container-high p-8 border-l-8 border-orange-600">
            <span className="material-symbols-outlined text-4xl mb-4">model_training</span>
            <h4 className="font-headline-md text-xl uppercase mb-2">KHÓA SINH HỌC</h4>
            <p className="text-tertiary">Khung gót chân giải phẫu học giúp ngăn ngừa trơn trượt và giảm ma sát trong những đợt chạy nước rút căng thẳng.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
