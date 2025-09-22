import { Button } from "@/components/ui/button";
import productPackage from "@/assets/product-package.jpg";

const ProductSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="product"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern
              id="ginseng-pattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M10 5C8 7 8 13 10 15C12 13 12 7 10 5Z"
                fill="currentColor"
                className="text-emerald"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ginseng-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-cinzel text-4xl lg:text-5xl font-bold text-primary mb-6">
            SÂM CHẠY BỘ – TINH TUÝ TỪ THIÊN NHIÊN
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className="relative animate-fade-up animate-delay-200">
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-8 border-2 border-secondary/30 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="absolute -inset-4 border border-secondary/50 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500"></div>

              {/* Main Image Container */}
              <div className="relative bg-ivory rounded-2xl p-8 shadow-elegant">
                <img
                  src={productPackage}
                  alt="Bao bì Sâm Chạy Bộ cao cấp"
                  className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-500"
                />

                {/* Quality Badge */}
                <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-montserrat font-semibold text-sm shadow-lg">
                  Premium Quality
                </div>
              </div>
            </div>

            {/* Supporting Images */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-ivory/50 backdrop-blur-sm rounded-xl p-4 border border-secondary/20">
                <div className="w-full h-24 bg-gradient-to-br from-emerald/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-emerald"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V6.5L17.5 7.5L19 8.5L21 9ZM3 9L5 8.5L6.5 7.5L9 6.5V5.5L3 7V9ZM12 8C13.1 8 14 8.9 14 10V22H10V10C10 8.9 10.9 8 12 8Z" />
                  </svg>
                </div>
                <p className="text-center text-sm font-montserrat mt-2 text-muted-foreground">
                  Nguyên liệu tươi
                </p>
              </div>
              <div className="bg-ivory/50 backdrop-blur-sm rounded-xl p-4 border border-secondary/20">
                <div className="w-full h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" />
                  </svg>
                </div>
                <p className="text-center text-sm font-montserrat mt-2 text-muted-foreground">
                  Quy trình chuẩn
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-up animate-delay-300">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-cinzel text-2xl font-semibold text-primary">
                  NGUỒN GỐC TINH HOA
                </h3>
                <p className="font-montserrat text-muted-foreground leading-relaxed">
                  Những rễ sâm quý hiếm được chọn lọc từ vùng núi cao Việt Nam,
                  nơi khí hậu mát lành và thổ nhưỡng giàu dưỡng chất, tạo nên
                  nguồn năng lượng đậm đặc hiếm có.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-cinzel text-2xl font-semibold text-primary">
                  CÔNG NGHỆ HIỆN ĐẠI
                </h3>
                <p className="font-montserrat text-muted-foreground leading-relaxed">
                  Ứng dụng khoa học hiện đại để chiết xuất tinh chất sâm, tối ưu
                  hóa năng lượng và sức bền cho người dùng, đặc biệt dành cho
                  vận động viên chạy bộ và những người yêu thể thao.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-cinzel text-2xl font-semibold text-primary">
                  THIẾT KẾ SANG TRỌNG
                </h3>
                <p className="font-montserrat text-muted-foreground leading-relaxed">
                  Bao bì lấy cảm hứng từ nghệ thuật truyền thống, kết hợp cùng
                  nét hiện đại, mang màu đỏ quyền lực và họa tiết vàng tinh tế,
                  khẳng định đẳng cấp người dùng.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-cinzel text-2xl font-semibold text-primary">
                  CAM KẾT CHẤT LƯỢNG
                </h3>
                <p className="font-montserrat text-muted-foreground leading-relaxed">
                  100% tự nhiên, không phụ gia, không chất bảo quản. Sản phẩm
                  trải qua kiểm định nghiêm ngặt, mang đến sự an toàn, tinh
                  khiết và chất lượng cao nhất cho sức khỏe.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button
                className="btn-premium text-lg px-10 py-4 animate-shimmer"
                onClick={scrollToContact}
              >
                Đặt Hàng Ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
