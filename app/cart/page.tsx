"use client";

import { useCart } from "../../components/CartProvider";
import Link from "next/link";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount, isMounted } = useCart();

  if (!isMounted) return null;

  return (
    <main className="max-w-[1280px] mx-auto px-6 py-20 min-h-screen">
      <header className="mb-16">
        <h1 className="font-display-lg text-display-lg text-black uppercase italic tracking-tighter">KHO VŨ KHÍ CỦA BẠN</h1>
        <p className="font-label-bold text-label-bold text-secondary uppercase mt-2">{getCartCount()} SẢN PHẨM TRONG GIỎ HÀNG</p>
      </header>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-4">Giỏ hàng của bạn đang trống</h2>
          <Link href="/" className="bg-primary-container text-black px-8 py-4 font-label-bold uppercase">
            Mua Sắm Ngay
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Items List */}
          <div className="lg:col-span-8 space-y-12">
            {cart.map((item) => (
              <div key={`${item.id}-${item.size}`} className="group flex flex-col md:flex-row gap-8 pb-12 border-b-2 border-surface-container">
                <div className="w-full md:w-48 h-48 bg-surface-container relative overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                  {item.badge && <div className="absolute top-0 left-0 bg-primary-container text-black px-3 py-1 font-label-bold text-[10px] uppercase">{item.badge}</div>}
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-headline-md text-headline-md uppercase italic text-black">{item.name}</h3>
                      <p className="font-body-md text-secondary mt-1">DANH MỤC: {item.category}</p>
                      <p className="font-body-md text-secondary">KÍCH CỠ: US {item.size}</p>
                    </div>
                    <div className="font-headline-md text-headline-md text-black">${item.price.toFixed(2)}</div>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center border-2 border-black">
                      <button 
                        onClick={() => updateQuantity(item.id, item.size, Math.max(1, item.quantity - 1))}
                        className="px-4 py-2 hover:bg-black hover:text-white transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="px-6 py-2 font-label-bold text-lg">{item.quantity.toString().padStart(2, '0')}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="px-4 py-2 hover:bg-black hover:text-white transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="flex items-center gap-2 text-secondary hover:text-error transition-colors uppercase font-label-bold text-xs tracking-widest"
                    >
                      <span className="material-symbols-outlined text-sm">delete</span> XÓA SẢN PHẨM
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_#000000] sticky top-32">
              <h2 className="font-headline-md text-headline-md uppercase italic border-b-2 border-black pb-4 mb-8">TÓM TẮT ĐƠN HÀNG</h2>
              <div className="space-y-6 mb-12">
                <div className="flex justify-between items-center font-body-lg text-secondary">
                  <span>TẠM TÍNH</span>
                  <span className="text-black">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center font-body-lg text-secondary">
                  <span>PHÍ VẬN CHUYỂN</span>
                  <span className="text-primary-container font-bold tracking-widest">MIỄN PHÍ</span>
                </div>
                <div className="flex justify-between items-center font-body-lg text-secondary">
                  <span>THUẾ ƯỚC TÍNH</span>
                  <span className="text-black">${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between items-center border-t-2 border-black pt-6 mb-10">
                <span className="font-headline-md text-headline-md uppercase">TỔNG CỘNG</span>
                <span className="font-display-lg text-3xl font-black text-black">${(getCartTotal() * 1.08).toFixed(2)}</span>
              </div>
              <Link href="/checkout" className="w-full bg-primary-container text-black py-6 font-display-lg text-xl uppercase italic tracking-tighter shadow-[4px_4px_0px_0px_#ff8c00] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-4 group">
                TIẾN HÀNH THANH TOÁN
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
              </Link>
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-secondary text-sm uppercase font-label-bold">
                  <span className="material-symbols-outlined text-lg">local_shipping</span>
                  <span>MIỄN PHÍ VẬN CHUYỂN NHANH CHO THÀNH VIÊN</span>
                </div>
                <div className="flex items-center gap-3 text-secondary text-sm uppercase font-label-bold">
                  <span className="material-symbols-outlined text-lg">cached</span>
                  <span>ĐỔI TRẢ MIỄN PHÍ TRONG 30 NGÀY</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-black p-8 text-white">
              <h4 className="font-label-bold text-label-bold mb-4">BẠN CÓ MÃ KHUYẾN MÃI?</h4>
              <div className="flex">
                <input className="flex-grow bg-neutral-900 border-none px-4 py-3 text-white focus:ring-1 focus:ring-primary-container" placeholder="MÃ KHUYẾN MÃI" type="text" />
                <button className="bg-white text-black px-6 font-label-bold uppercase text-xs">ÁP DỤNG</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
