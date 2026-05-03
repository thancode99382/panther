"use client";

import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-on-background font-body-md overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 bg-black text-white border-b-8 border-orange-600 slant-bg scale-[1.02] z-10">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvkuEuoSAQYKoeqIm5_MyKrbw6OBp2QwVYxEgd4OKbuCixq0NY0HzvyMIDak9UDaYMaUyz7IpxjhDNpOOqMkOG6OqndFF2HeaA5-MkzJ9jZDhd8TM5b23DA_ZR90avOsNtE0tB1gkPPezsaee4_A9bwCpyq3khPm4MKWxqI9GImjbYVQrnEfmp8VZAkFM42exn4g20tTTW8EPYZDYKtrix_EmiXleYhNb_o3yBT2MpsfdgwtinHoqFEGJtUDux6lFCfT_skUf_RYsF" 
              alt="Engineering Background" 
              className="w-full h-full object-cover grayscale"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="font-display-lg text-6xl md:text-9xl uppercase italic tracking-tighter leading-none mb-6">
              SINH RA TỪ <br/><span className="text-orange-500">TỐC ĐỘ</span>
            </h1>
            <div className="w-24 h-2 bg-orange-500 mb-6"></div>
          </div>
          <div className="pb-4">
            <p className="font-body-lg text-xl md:text-2xl text-neutral-300 font-label-bold uppercase tracking-widest leading-relaxed">
              Chúng tôi không chỉ làm giày. Chúng tôi chế tạo các công cụ động lực học được thiết kế để phá vỡ mọi giới hạn.
            </p>
          </div>
        </div>
      </section>

      {/* The Origin */}
      <section className="max-w-[1440px] mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-600 translate-x-4 translate-y-4"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-0fwoHcbC9SoBDEQ4jw_fkR9GJk61YqQYOKzqISX-rWq1_v6h5yKuV0NaUFt1AzqwLNWdUkIrZYT7N286ZvWvMdWbTNuyumLpKfZrFDMuH-l3TbbI_f4y0sIOGw-2vcxk-dNVlqNVMyd5deoUUcY5mLwNDN-HedeT5XUUEvOQbMWJjvkVTnatzs_fi1QiSgdfDnGzk0fAD124BRQLSQnFs7APQT75HRsxOFWL1YG91Mb8XbtHN1NkfkTWVmG37yh0VNH81AYNIMR-" 
              alt="Panther Origin" 
              className="relative z-10 w-full h-[600px] object-cover border-4 border-black grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="space-y-8">
            <h2 className="font-display-lg text-5xl md:text-7xl uppercase italic tracking-tighter">SỰ GIAO THOA GIỮA <br/>KỸ THUẬT & NGHỆ THUẬT</h2>
            <p className="font-body-md text-secondary text-lg leading-relaxed">
              Panther Athletics được thành lập bởi các kỹ sư hàng không vũ trụ và những vận động viên chạy marathon cự phách. Mục tiêu rất đơn giản: coi chuyển động của con người như một bài toán vật lý.
            </p>
            <p className="font-body-md text-secondary text-lg leading-relaxed">
              Mỗi đường cong, mỗi tấm carbon và mỗi milimet bọt đều được tính toán để giảm lực cản, hoàn trả năng lượng và đẩy vận động viên tiến lên phía trước. Chúng tôi đã gạt bỏ các quy tắc thiết kế giày dép truyền thống và bắt đầu lại từ những dữ liệu thô.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t-2 border-black/10">
              <div>
                <span className="block font-display-lg text-6xl italic text-black mb-2">12.5%</span>
                <span className="font-label-bold text-xs uppercase tracking-widest text-secondary">TĂNG NĂNG LƯỢNG PHẢN HỒI</span>
              </div>
              <div>
                <span className="block font-display-lg text-6xl italic text-black mb-2">48g</span>
                <span className="font-label-bold text-xs uppercase tracking-widest text-secondary">NHẸ HƠN MỨC TRUNG BÌNH CỦA NGÀNH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="bg-primary-container text-black py-24 px-6 border-y-8 border-black overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <h2 className="font-display-lg text-4xl md:text-6xl uppercase italic tracking-tighter max-w-4xl mx-auto leading-tight">
            "SỰ THỎA HIỆP LÀ KẺ THÙ CỦA HIỆU SUẤT. CHÚNG TÔI CHẾ TẠO DÀNH CHO NHỮNG NGƯỜI ĐÒI HỎI ĐỘ CHÍNH XÁC TUYỆT ĐỐI."
          </h2>
          <p className="font-label-bold uppercase tracking-widest mt-8 font-bold">- TIẾN SĨ MARCUS VANCE, KỸ SƯ TRƯỞNG</p>
        </div>
        
        {/* Decorative background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display-lg font-black italic opacity-5 whitespace-nowrap pointer-events-none">
          CHÍNH XÁC
        </div>
      </section>

      {/* Lab / Tech Showcase */}
      <section className="max-w-[1440px] mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="font-display-lg text-5xl md:text-7xl uppercase italic tracking-tighter">SỰ THỐNG TRỊ TỪ PHÒNG THÍ NGHIỆM</h2>
          <p className="font-label-bold text-secondary uppercase tracking-widest mt-4">Bên trong Cơ Sở Sáng Tạo Panther</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container border-2 border-black p-8 group hover:-translate-y-2 transition-transform hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <span className="material-symbols-outlined text-5xl mb-6 text-orange-600">air</span>
            <h3 className="font-headline-md text-2xl uppercase italic mb-4">Đã Kiểm Chứng Trong Hầm Gió</h3>
            <p className="font-body-md text-secondary">Các thiết kế của chúng tôi được thử nghiệm ở tốc độ lên tới 64km/h để đảm bảo hệ số lực cản ở mức tối thiểu. Hình dáng khí động học cắt ngang không khí, giảm thiểu lực cản.</p>
          </div>
          
          <div className="bg-black text-white border-2 border-black p-8 group hover:-translate-y-2 transition-transform hover:shadow-[6px_6px_0px_0px_#ff8c00]">
            <span className="material-symbols-outlined text-5xl mb-6 text-orange-500">memory</span>
            <h3 className="font-headline-md text-2xl uppercase italic mb-4">Lõi Lưới Carbon</h3>
            <p className="font-body-md text-neutral-400">Không chỉ là một tấm carbon. Đây là một ma trận carbon bản đồ 3D đầy đủ, phản hồi khác nhau tùy thuộc vào vị trí tiếp đất của bàn chân, mang lại lực đẩy tùy chỉnh.</p>
          </div>
          
          <div className="bg-surface-container border-2 border-black p-8 group hover:-translate-y-2 transition-transform hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <span className="material-symbols-outlined text-5xl mb-6 text-orange-600">scatter_plot</span>
            <h3 className="font-headline-md text-2xl uppercase italic mb-4">Bản Đồ Mút Động Học</h3>
            <p className="font-body-md text-secondary">Các điều chỉnh vi mô về mật độ bọt dọc theo đế giữa đảm bảo khả năng hấp thụ sốc chính xác ở những nơi cần thiết mà không làm mất đi độ nảy.</p>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-32 px-6 text-center border-t-2 border-surface-container">
        <h2 className="font-display-lg text-5xl uppercase italic tracking-tighter mb-8">SẴN SÀNG NÂNG CẤP CHƯA?</h2>
        <Link href="/" className="inline-block bg-black text-white px-12 py-5 font-display-lg text-2xl uppercase italic shadow-[6px_6px_0px_0px_#ff8c00] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#ff8c00] transition-all">
          KHÁM PHÁ CỬA HÀNG
        </Link>
      </section>
    </main>
  );
}
