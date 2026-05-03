"use client";

import { useCart } from "../../components/CartProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Checkout() {
  const { cart, getCartTotal, clearCart, isMounted } = useCart();
  const router = useRouter();

  if (!isMounted) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanh toán thành công! Cảm ơn bạn đã đặt hàng.");
    clearCart();
    router.push("/");
  };

  if (cart.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-32 text-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Giỏ Hàng Của Bạn Đang Trống</h1>
        <p className="mb-8">Thêm sản phẩm vào giỏ hàng để thanh toán.</p>
        <Link href="/" className="bg-primary-container text-black px-8 py-4 font-label-bold uppercase">
          Quay Lại Cửa Hàng
        </Link>
      </main>
    );
  }

  const subtotal = getCartTotal();
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Breadcrumbs & Title */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-secondary mb-4 font-label-bold uppercase tracking-widest text-xs">
          <span>GIỎ HÀNG</span>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-on-background">THANH TOÁN</span>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="opacity-50">XÁC NHẬN</span>
        </div>
        <h1 className="font-display-lg text-headline-xl uppercase italic tracking-tighter">THANH TOÁN AN TOÀN</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Checkout Details */}
        <div className="lg:col-span-7 space-y-12">
          {/* Shipping Address Section */}
          <section className="bg-white p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold">1</div>
              <h2 className="font-headline-md uppercase tracking-tight">ĐỊA CHỈ GIAO HÀNG</h2>
            </div>
            <form id="checkout-form" onSubmit={handleCheckout} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <label className="block font-label-bold text-xs mb-2">TÊN</label>
                <input required className="w-full border-2 border-black p-3 focus:ring-0 focus:border-primary-container bg-surface-container-low" placeholder="Nhập tên" type="text" />
              </div>
              <div className="md:col-span-1">
                <label className="block font-label-bold text-xs mb-2">HỌ</label>
                <input required className="w-full border-2 border-black p-3 focus:ring-0 focus:border-primary-container bg-surface-container-low" placeholder="Nhập họ" type="text" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-label-bold text-xs mb-2">ĐỊA CHỈ ĐƯỜNG</label>
                <input required className="w-full border-2 border-black p-3 focus:ring-0 focus:border-primary-container bg-surface-container-low" placeholder="123 Đường Hiệu Suất" type="text" />
              </div>
              <div className="md:col-span-1">
                <label className="block font-label-bold text-xs mb-2">THÀNH PHỐ</label>
                <input required className="w-full border-2 border-black p-3 focus:ring-0 focus:border-primary-container bg-surface-container-low" placeholder="Hà Nội" type="text" />
              </div>
              <div className="md:col-span-1 grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-bold text-xs mb-2">QUẬN/HUYỆN</label>
                  <input required className="w-full border-2 border-black p-3 focus:ring-0 focus:border-primary-container bg-surface-container-low" placeholder="Cầu Giấy" type="text" />
                </div>
                <div>
                  <label className="block font-label-bold text-xs mb-2">MÃ BƯU CHÍNH</label>
                  <input required className="w-full border-2 border-black p-3 focus:ring-0 focus:border-primary-container bg-surface-container-low" placeholder="100000" type="text" />
                </div>
              </div>
            </form>
          </section>

          {/* Payment Method Section */}
          <section className="bg-white p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold">2</div>
              <h2 className="font-headline-md uppercase tracking-tight">PHƯƠNG THỨC THANH TOÁN</h2>
            </div>
            <div className="space-y-4">
              {/* Card Payment Option */}
              <div className="border-2 border-black p-4 flex flex-col gap-6 bg-surface-container-low">
                <label className="flex items-center gap-4 cursor-pointer">
                  <input defaultChecked className="w-5 h-5 text-primary-container border-2 border-black focus:ring-0" name="payment" type="radio" />
                  <span className="font-label-bold">THẺ TÍN DỤNG / GHI NỢ</span>
                  <div className="ml-auto flex gap-2">
                    <span className="material-symbols-outlined text-secondary">credit_card</span>
                  </div>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-black/10">
                  <div className="md:col-span-2">
                    <label className="block font-label-bold text-xs mb-2">SỐ THẺ</label>
                    <input className="w-full border-2 border-black p-3 focus:ring-0 focus:border-primary-container bg-white" placeholder="0000 0000 0000 0000" type="text" />
                  </div>
                  <div>
                    <label className="block font-label-bold text-xs mb-2">NGÀY HẾT HẠN</label>
                    <input className="w-full border-2 border-black p-3 focus:ring-0 focus:border-primary-container bg-white" placeholder="MM/YY" type="text" />
                  </div>
                  <div>
                    <label className="block font-label-bold text-xs mb-2">CVC</label>
                    <input className="w-full border-2 border-black p-3 focus:ring-0 focus:border-primary-container bg-white" placeholder="123" type="text" />
                  </div>
                </div>
              </div>

              {/* PayPal Option */}
              <label className="border-2 border-black p-4 flex items-center gap-4 cursor-pointer hover:bg-surface-container-low transition-colors">
                <input className="w-5 h-5 text-primary-container border-2 border-black focus:ring-0" name="payment" type="radio" />
                <span className="font-label-bold">PAYPAL</span>
                <div className="ml-auto">
                  <span className="material-symbols-outlined text-secondary">account_balance_wallet</span>
                </div>
              </label>

              {/* Apple Pay Option */}
              <label className="border-2 border-black p-4 flex items-center gap-4 cursor-pointer hover:bg-surface-container-low transition-colors">
                <input className="w-5 h-5 text-primary-container border-2 border-black focus:ring-0" name="payment" type="radio" />
                <span className="font-label-bold">APPLE PAY</span>
                <div className="ml-auto">
                  <span className="material-symbols-outlined text-secondary">contactless</span>
                </div>
              </label>
            </div>
          </section>

          {/* Security Badges */}
          <div className="flex flex-wrap items-center justify-center gap-12 py-6 border-y-2 border-black/5">
            <div className="flex items-center gap-2 text-secondary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <span className="font-label-bold text-[10px] tracking-widest uppercase">THANH TOÁN BẢO MẬT SSL</span>
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
              <span className="font-label-bold text-[10px] tracking-widest uppercase">BẢO VỆ CHỐNG GIAN LẬN</span>
            </div>
            <div className="flex items-center gap-2 text-secondary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
              <span className="font-label-bold text-[10px] tracking-widest uppercase">VẬN CHUYỂN CÓ THEO DÕI</span>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5">
          <div className="sticky top-32 space-y-8">
            <div className="bg-black text-white p-8 shadow-[4px_4px_0px_0px_#ff8c00]">
              <h2 className="font-headline-md uppercase tracking-tight mb-8">TÓM TẮT ĐƠN HÀNG</h2>
              
              {/* Cart Items */}
              <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-neutral-800 flex-shrink-0">
                      <img alt={item.name} className="w-full h-full object-cover grayscale brightness-125" src={item.image} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-label-bold text-sm tracking-tight">{item.name}</h3>
                        <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-neutral-400 font-medium mb-1">DANH MỤC: {item.category}</p>
                      <p className="text-xs text-neutral-400 font-medium">KÍCH CỠ: US {item.size}</p>
                      <div className="mt-2 text-xs font-bold border border-white/20 inline-block px-2 py-1">SL: {item.quantity}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Calculations */}
              <div className="space-y-4 pt-8 border-t border-white/20">
                <div className="flex justify-between text-sm font-label-bold">
                  <span className="text-neutral-400 uppercase tracking-widest">TẠM TÍNH</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-label-bold">
                  <span className="text-neutral-400 uppercase tracking-widest">PHÍ VẬN CHUYỂN</span>
                  <span className="text-primary-container">MIỄN PHÍ</span>
                </div>
                <div className="flex justify-between text-sm font-label-bold">
                  <span className="text-neutral-400 uppercase tracking-widest">THUẾ ƯỚC TÍNH</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-display-lg pt-4 border-t-2 border-white/10">
                  <span className="italic">TỔNG CỘNG</span>
                  <span className="text-primary-container">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                type="submit" 
                form="checkout-form"
                className="w-full mt-12 py-5 bg-primary-container text-black font-display-lg text-headline-md uppercase italic tracking-tighter transition-all hover:bg-orange-400 active:translate-y-1 active:translate-x-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
              >
                HOÀN TẤT MUA HÀNG
              </button>
              <p className="text-center text-[10px] text-neutral-500 font-label-bold tracking-widest mt-6 uppercase">
                BẰNG CÁCH NHẤP VÀO, BẠN ĐỒNG Ý VỚI CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN CỦA CHÚNG TÔI
              </p>
            </div>

            {/* Promo Code Box */}
            <div className="bg-white border-2 border-black p-6">
              <label className="block font-label-bold text-xs mb-3">BẠN CÓ MÃ KHUYẾN MÃI?</label>
              <div className="flex gap-2">
                <input className="flex-grow border-2 border-black p-3 focus:ring-0 focus:border-primary-container uppercase font-bold" placeholder="NHẬP MÃ" type="text" />
                <button className="bg-black text-white px-6 font-label-bold text-xs uppercase hover:bg-neutral-800 transition-colors">ÁP DỤNG</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
