import Link from "next/link";
import { products } from "../data/products";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img src="/banner.jpg" alt="Panther Banner" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center">
          <span className="bg-primary-container text-black font-label-bold px-4 py-1 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black">KỶ NGUYÊN MỚI</span>
          <h1 className="font-display-lg text-6xl md:text-8xl uppercase italic tracking-tighter mb-6">
            SINH RA TỪ <br />
            <span className="text-primary-container">TỐC ĐỘ</span>
          </h1>
          <p className="text-body-lg font-body-lg text-neutral-200 max-w-2xl mx-auto mb-10 text-xl">
            Thiết kế dành cho những người xuất chúng. Dòng sản phẩm Panther kết hợp khả năng phản hồi sợi carbon mang tính cách mạng với lớp lưới khóa đà đặc trưng của chúng tôi.
          </p>
          <Link href="/collections" className="bg-primary-container text-black px-12 py-5 font-label-bold uppercase tracking-widest text-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:translate-x-2 active:shadow-none transition-all duration-150 inline-block">
            Xem Bộ Sưu Tập
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="container-max mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-headline-xl text-headline-xl uppercase italic tracking-tighter border-l-8 border-primary-container pl-6">DANH MỤC</h2>
            <Link href="#" className="font-label-bold text-black border-b-2 border-black pb-1 hover:text-primary-container hover:border-primary-container transition-colors">XEM TẤT CẢ DÒNG SẢN PHẨM</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Sport */}
            <div className="group cursor-pointer">
              <div className="bg-surface-container-low aspect-[3/2] mb-4 overflow-hidden relative border-2 border-black transition-all hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img alt="Thể Thao" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/sport.png" />
              </div>
              <h3 className="font-label-bold uppercase text-center group-hover:text-primary-container transition-colors">Thể Thao</h3>
            </div>
            {/* Soccer */}
            <div className="group cursor-pointer">
              <div className="bg-surface-container-low aspect-[3/2] mb-4 overflow-hidden relative border-2 border-black transition-all hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img alt="Bóng Đá" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/soccer.png" />
              </div>
              <h3 className="font-label-bold uppercase text-center group-hover:text-primary-container transition-colors">Bóng Đá</h3>
            </div>
            {/* Fashion */}
            <div className="group cursor-pointer">
              <div className="bg-surface-container-low aspect-[3/2] mb-4 overflow-hidden relative border-2 border-black transition-all hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img alt="Thời Trang" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/fashion.png" />
              </div>
              <h3 className="font-label-bold uppercase text-center group-hover:text-primary-container transition-colors">Thời Trang</h3>
            </div>
            {/* School */}
            <div className="group cursor-pointer">
              <div className="bg-surface-container-low aspect-[3/2] mb-4 overflow-hidden relative border-2 border-black transition-all hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img alt="Học Đường" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/school.png" />
              </div>
              <h3 className="font-label-bold uppercase text-center group-hover:text-primary-container transition-colors">Học Đường</h3>
            </div>
            {/* Home */}
            <div className="group cursor-pointer">
              <div className="bg-surface-container-low aspect-[3/2] mb-4 overflow-hidden relative border-2 border-black transition-all hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img alt="Trong Nhà" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/home.jpg" />
              </div>
              <h3 className="font-label-bold uppercase text-center group-hover:text-primary-container transition-colors">Trong Nhà</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-32 bg-on-background text-white slant-reverse overflow-hidden">
        <div className="container-max mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h2 className="font-display-lg text-headline-xl leading-tight">ĐỘ CHÍNH XÁC &amp;<br /><span className="text-primary-container">ĐỘNG LỰC</span></h2>
            <div className="w-24 h-2 bg-primary-container"></div>
            <p className="text-body-lg text-zinc-400">Được thành lập tại giao điểm của kỹ thuật cơ khí và hiệu suất thể thao, Panther Athletics định nghĩa lại tiêu chuẩn cho giày dép phản ứng nhanh. Chúng tôi tin rằng mỗi mili giây tiếp đất là một cơ hội để tạo đà. Công nghệ đế đã được cấp bằng sáng chế của chúng tôi không chỉ hấp thụ lực tác động—nó còn tái chế lực đó thành chuyển động hướng về phía trước bùng nổ.</p>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div>
                <p className="text-4xl font-bold font-display-lg text-primary-container">12.5%</p>
                <p className="text-label-bold uppercase text-zinc-500">Tăng Năng Lượng Phản Hồi</p>
              </div>
              <div>
                <p className="text-4xl font-bold font-display-lg text-primary-container">210g</p>
                <p className="text-label-bold uppercase text-zinc-500">Trọng Lượng Siêu Nhẹ Trung Bình</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="pt-12">
                <img alt="Chi Tiết Công Nghệ" className="w-full h-[400px] object-cover border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhsnjU_IH3yfmsBMCTWy8_EYQfwGAlOG75t3B573kpvwxb5erb22zrLsTwgXXRbjHks2O2bPgzjfF4cg22YktEsJmKQJvm8TrWW2bGB_mKb4XsMGeZyNBRU4v5J0nukDJE_mAOoN6jjefyf_hP0LOP8EY7uW6KSCEJel8cUjX6ik6gOtGke5uqYUjdMyQm1Z6CSJ9_onsk8fqjUTIvMtkfSvq9a6eHDs6xajNI2yEXKSmRC3Z6kVkeVA5Ay6urQyAL2t5RP4-GhewT" />
              </div>
              <div>
                <img alt="Thử Nghiệm Phòng Lab" className="w-full h-[400px] object-cover border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgmoWzRiau2nhvRREBWG9gmxWtF5zKaQlWkzV11xKygJpFs_wHACDowyV6JJ6340mEBGCpsbaypHoJUft9X2R7SLtOMpPDub2QKELhSgd0JeEypA9EgmOlRzkSpNLHvFt9BgD39QLxRPKy4GPd2lz4ecvAXaqUtiM1200nM0E7loudtfhxMWiaaVNDjUsxoTKysQmD1HK1tKUYm_U3SpXMvPmjO_38Y8iwF6zvrdo5zXFBlUwB8jFU_dGPTAq9cYV61Dab3w-Nx2Im" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Posters */}
      <section className="py-24 bg-background">
        <div className="container-max mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-xl uppercase italic tracking-tighter">TẦM NHÌN PANTHER</h2>
            <div className="w-16 h-2 bg-primary-container mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform bg-neutral-200">
              <img src="/poster1.jpg" alt="Poster 1" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="group relative overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform bg-neutral-200 mt-0 md:mt-12">
              <img src="/poster2.jpg" alt="Poster 2" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="group relative overflow-hidden border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform bg-neutral-200">
              <img src="/poster3.jpg" alt="Poster 3" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 bg-white">
        <div className="container-max mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <div>
              <h2 className="font-display-lg text-headline-xl uppercase">DÒNG ELITE</h2>
              <p className="text-zinc-500 font-body-md">Trang bị hiệu suất được tuyển chọn cho sự theo đuổi chuyên nghiệp.</p>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative bg-surface-container aspect-square mb-6 overflow-hidden">
                  <Link href={`/product/${product.id}`}>
                    <img alt={product.name} className="w-full h-full object-contain p-12 group-hover:scale-105 transition-transform duration-500" src={product.image} />
                  </Link>
                  {product.badge && <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-label-bold uppercase">{product.badge}</div>}
                  <Link href={`/product/${product.id}`} className="absolute bottom-0 left-0 right-0 bg-primary-container text-black font-label-bold py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">add</span> XEM CHI TIẾT
                  </Link>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-headline-md text-xl uppercase mb-1">{product.name}</h3>
                    </Link>
                    <p className="text-zinc-500 text-sm uppercase font-label-bold">{product.category}</p>
                  </div>
                  <p className="font-headline-md text-xl">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary-container text-black border-y-8 border-black">
        <div className="container-max mx-auto px-8 flex flex-col items-center text-center">
          <h2 className="font-display-lg text-headline-xl uppercase mb-6 tracking-tighter">GIA NHẬP VÒNG TRONG</h2>
          <p className="font-body-lg text-lg max-w-2xl mb-12 uppercase font-bold">Nhận quyền truy cập sớm vào các đợt mở bán giới hạn và nội dung độc quyền của vận động viên. Không rườm rà, chỉ có động lực.</p>
          <form className="flex w-full max-w-xl gap-0 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <input className="flex-grow px-6 py-4 bg-white focus:ring-0 focus:outline-none font-label-bold uppercase border-none" placeholder="ĐỊA CHỈ EMAIL CỦA BẠN" type="email" />
            <button className="bg-black text-white px-10 py-4 font-label-bold uppercase hover:bg-zinc-800 transition-colors" type="button">ĐĂNG KÝ</button>
          </form>
        </div>
      </section>
    </>
  );
}
