import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Đăng ký thành công!",
      description: "Cảm ơn bạn đã đăng ký nhận tin tức từ Sâm Chạy Bộ.",
    });
    setEmail('');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="section-burgundy border-t-2 border-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10 5C8 7 8 13 10 15C12 13 12 7 10 5Z" fill="currentColor" className="text-gold" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6 animate-fade-up">
            <div>
              <h3 className="font-cinzel text-2xl font-bold text-ivory mb-2">
                Sâm Chạy Bộ
              </h3>
              <p className="font-montserrat italic text-secondary text-lg">
                Tinh Hoa Sức Sống
              </p>
            </div>
            <p className="font-montserrat text-ivory/80 leading-relaxed">
              Sản phẩm nhân sâm cao cấp Việt Nam, mang lại năng lượng và sức khỏe bền vững 
              cho cuộc sống năng động của bạn.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-ivory/10 hover:bg-secondary rounded-xl flex items-center justify-center text-ivory hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.56C23.09 4.95 22.11 5.19 21.11 5.27C22.12 4.67 22.89 3.73 23.25 2.61C22.27 3.17 21.18 3.57 20.03 3.78C19.1 2.84 17.78 2.25 16.33 2.25C13.6 2.25 11.39 4.46 11.39 7.19C11.39 7.57 11.43 7.94 11.52 8.29C7.54 8.1 4.02 6.14 1.64 3.16C1.23 3.83 1 4.61 1 5.45C1 6.99 1.78 8.35 2.96 9.13C2.24 9.11 1.56 8.91 0.96 8.58V8.64C0.96 11.04 2.66 13.05 4.91 13.49C4.52 13.6 4.11 13.65 3.69 13.65C3.39 13.65 3.1 13.62 2.82 13.57C3.4 15.54 5.23 17.02 7.41 17.06C5.72 18.39 3.61 19.18 1.31 19.18C0.92 19.18 0.54 19.16 0.16 19.11C2.36 20.52 4.95 21.33 7.73 21.33C16.32 21.33 20.96 13.73 20.96 7.76C20.96 7.55 20.96 7.35 20.95 7.15C21.94 6.47 22.81 5.62 23.5 4.64" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-ivory/10 hover:bg-secondary rounded-xl flex items-center justify-center text-ivory hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24V15.56H7.08V12.07H10.13V9.41C10.13 6.39 11.93 4.73 14.66 4.73C15.97 4.73 17.34 4.95 17.34 4.95V7.92H15.83C14.34 7.92 13.87 8.84 13.87 9.78V12.07H17.2L16.67 15.56H13.87V24C19.61 23.1 24 18.1 24 12.07" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-ivory/10 hover:bg-secondary rounded-xl flex items-center justify-center text-ivory hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.16C15.2 2.16 15.58 2.17 16.85 2.23C18.04 2.28 18.68 2.48 19.14 2.64C19.76 2.86 20.2 3.14 20.66 3.6C21.12 4.06 21.4 4.5 21.62 5.12C21.78 5.58 21.98 6.22 22.03 7.41C22.09 8.68 22.1 9.06 22.1 12.26C22.1 15.46 22.09 15.84 22.03 17.11C21.98 18.3 21.78 18.94 21.62 19.4C21.4 20.02 21.12 20.46 20.66 20.92C20.2 21.38 19.76 21.66 19.14 21.88C18.68 22.04 18.04 22.24 16.85 22.29C15.58 22.35 15.2 22.36 12 22.36C8.8 22.36 8.42 22.35 7.15 22.29C5.96 22.24 5.32 22.04 4.86 21.88C4.24 21.66 3.8 21.38 3.34 20.92C2.88 20.46 2.6 20.02 2.38 19.4C2.22 18.94 2.02 18.3 1.97 17.11C1.91 15.84 1.9 15.46 1.9 12.26C1.9 9.06 1.91 8.68 1.97 7.41C2.02 6.22 2.22 5.58 2.38 5.12C2.6 4.5 2.88 4.06 3.34 3.6C3.8 3.14 4.24 2.86 4.86 2.64C5.32 2.48 5.96 2.28 7.15 2.23C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33 0.01 7.05 0.07C5.78 0.13 4.9 0.35 4.14 0.66C3.35 0.98 2.68 1.42 2.01 2.09C1.34 2.76 0.9 3.43 0.58 4.22C0.27 4.98 0.05 5.86 -0.01 7.13C-0.07 8.41 -0.08 8.82 -0.08 12.08C-0.08 15.34 -0.07 15.75 -0.01 17.03C0.05 18.3 0.27 19.18 0.58 19.94C0.9 20.73 1.34 21.4 2.01 22.07C2.68 22.74 3.35 23.18 4.14 23.5C4.9 23.81 5.78 24.03 7.05 24.09C8.33 24.15 8.74 24.16 12 24.16C15.26 24.16 15.67 24.15 16.95 24.09C18.22 24.03 19.1 23.81 19.86 23.5C20.65 23.18 21.32 22.74 21.99 22.07C22.66 21.4 23.1 20.73 23.42 19.94C23.73 19.18 23.95 18.3 24.01 17.03C24.07 15.75 24.08 15.34 24.08 12.08C24.08 8.82 24.07 8.41 24.01 7.13C23.95 5.86 23.73 4.98 23.42 4.22C23.1 3.43 22.66 2.76 21.99 2.09C21.32 1.42 20.65 0.98 19.86 0.66C19.1 0.35 18.22 0.13 16.95 0.07C15.67 0.01 15.26 0 12 0Z" />
                  <path d="M12 5.84C8.6 5.84 5.84 8.6 5.84 12C5.84 15.4 8.6 18.16 12 18.16C15.4 18.16 18.16 15.4 18.16 12C18.16 8.6 15.4 5.84 12 5.84ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" />
                  <circle cx="18.41" cy="5.59" r="1.38" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 animate-fade-up animate-delay-100">
            <h4 className="font-cinzel text-xl font-semibold text-ivory">
              Liên Kết Nhanh
            </h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('product')}
                className="block font-montserrat text-ivory/80 hover:text-secondary transition-colors duration-300"
              >
                Sản Phẩm
              </button>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block font-montserrat text-ivory/80 hover:text-secondary transition-colors duration-300"
              >
                Giới Thiệu
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block font-montserrat text-ivory/80 hover:text-secondary transition-colors duration-300"
              >
                Liên Hệ
              </button>
              <a 
                href="#" 
                className="block font-montserrat text-ivory/80 hover:text-secondary transition-colors duration-300"
              >
                Chính Sách Bảo Mật
              </a>
              <a 
                href="#" 
                className="block font-montserrat text-ivory/80 hover:text-secondary transition-colors duration-300"
              >
                Điều Khoản Sử Dụng
              </a>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-6 animate-fade-up animate-delay-200">
            <h4 className="font-cinzel text-xl font-semibold text-ivory">
              Hỗ Trợ Khách Hàng
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
                  </svg>
                </div>
                <span className="font-montserrat text-ivory/80">1800 1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                  </svg>
                </div>
                <span className="font-montserrat text-ivory/80">info@samchaybo.vn</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z" />
                  </svg>
                </div>
                <span className="font-montserrat text-ivory/80">123 Đường Sâm, Quận 1, TP.HCM</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 animate-fade-up animate-delay-300">
            <h4 className="font-cinzel text-xl font-semibold text-ivory">
              Đăng Ký Nhận Tin
            </h4>
            <p className="font-montserrat text-ivory/80 text-sm">
              Nhận thông tin mới nhất về sản phẩm và chương trình khuyến mãi
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-ivory/20 border-secondary/30 text-ivory placeholder:text-ivory/60 focus:border-secondary focus:ring-secondary/20 rounded-xl"
              />
              <Button 
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl font-montserrat font-semibold transition-all duration-300 hover:scale-105"
              >
                Đăng Ký
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-montserrat text-ivory/60 text-sm">
              © 2024 Sâm Chạy Bộ. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-montserrat text-ivory/60 hover:text-secondary text-sm transition-colors duration-300">
                Chính Sách Bảo Mật
              </a>
              <a href="#" className="font-montserrat text-ivory/60 hover:text-secondary text-sm transition-colors duration-300">
                Điều Khoản
              </a>
              <a href="#" className="font-montserrat text-ivory/60 hover:text-secondary text-sm transition-colors duration-300">
                Hỗ Trợ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;