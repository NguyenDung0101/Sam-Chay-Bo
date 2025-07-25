import { Button } from "@/components/ui/button";
import ginsengHero from "@/assets/ginseng-hero.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 parallax-slow">
        <div className="absolute top-20 left-10 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-gold animate-float">
            <path d="M50 10C30 30 30 70 50 90C70 70 70 30 50 10Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 w-24 h-24 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full text-gold animate-float animate-delay-300">
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M30 50 L50 30 L70 50 L50 70 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-up">
          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center space-x-2 bg-ivory/10 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/30">
              <div className="w-3 h-3 bg-gold rounded-full"></div>
              <span className="text-ivory text-sm font-montserrat">100% Thiên Nhiên</span>
            </div>
            <div className="flex items-center space-x-2 bg-ivory/10 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/30">
              <div className="w-3 h-3 bg-gold rounded-full"></div>
              <span className="text-ivory text-sm font-montserrat">Đạt Giải Vàng Chất Lượng</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="font-cinzel text-4xl lg:text-6xl font-bold text-ivory leading-tight">
              Sâm Chạy Bộ
              <span className="block text-gradient-gold">Tinh Hoa Sức Sống</span>
            </h1>
            <p className="text-ivory/80 text-lg lg:text-xl font-montserrat leading-relaxed max-w-lg">
              Khám phá nhân sâm cao cấp, mang lại năng lượng đỉnh cao và sức khỏe bền vững cho cuộc sống năng động của bạn
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              className="btn-premium text-lg px-10 py-4 animate-shimmer"
              onClick={() => scrollToSection('contact')}
            >
              Đặt Hàng Ngay
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-premium text-lg px-10 py-4"
              onClick={() => scrollToSection('product')}
            >
              Tìm Hiểu Thêm
            </Button>
          </div>
        </div>

        {/* Right Content - Product Image */}
        <div className="relative animate-fade-up animate-delay-200">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-secondary/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            {/* Product Image */}
            <div className="relative bg-ivory/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/30">
              <img 
                src={ginsengHero} 
                alt="Sâm Chạy Bộ - Nhân sâm cao cấp Việt Nam" 
                className="w-full h-auto rounded-xl shadow-elegant hover:scale-105 transition-transform duration-500"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-gold">
                <svg className="w-6 h-6 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;