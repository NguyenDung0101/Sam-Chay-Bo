const CertificationsSection = () => {
  const certifications = [
    {
      title: "Organic Certified",
      description: "Đạt chứng nhận hữu cơ quốc tế, đảm bảo 100% tự nhiên",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.6 11.48L19.44 8.3A7.96 7.96 0 0 0 12 4A7.96 7.96 0 0 0 4.56 8.3L6.4 11.48C6.72 12.08 7.34 12.5 8 12.5H8.76L10.05 21.76C10.13 22.31 10.6 22.73 11.16 22.73H12.84C13.4 22.73 13.87 22.31 13.95 21.76L15.24 12.5H16C16.66 12.5 17.28 12.08 17.6 11.48Z" />
        </svg>
      )
    },
    {
      title: "GMP Certified",
      description: "Sản xuất theo tiêu chuẩn quốc tế, quy trình kiểm soát nghiêm ngặt",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" />
        </svg>
      )
    },
    {
      title: "ISO 22000",
      description: "Hệ thống quản lý an toàn thực phẩm, đảm bảo chất lượng ổn định",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L9 9L1 9L7.5 14L5 22L12 17L19 22L16.5 14L23 9L15 9L12 1Z" />
        </svg>
      )
    },
    {
      title: "Lab-Tested",
      description: "Kiểm định bởi phòng thí nghiệm độc lập, không chất bảo quản",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 2V13L8.5 14.5L12 11L15.5 14.5L17 13V2H7ZM8 3H16V11.17L15.5 11.67L12 8.17L8.5 11.67L8 11.17V3ZM5 16L12 23L19 16H17V15H7V16H5Z" />
        </svg>
      )
    },
    {
      title: "Giải Vàng Chất Lượng",
      description: "Được trao giải thưởng uy tín trong ngành thực phẩm bổ sung",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 16L3 5H1L3.5 16H5ZM8.5 16L11 5H13L15.5 16H8.5ZM19 16L21.5 5H23L21 16H19ZM12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="cert-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="2" fill="currentColor" className="text-secondary" />
              <path d="M10 15L15 10L20 15L15 20Z" fill="currentColor" className="text-secondary opacity-50" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cert-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-cinzel text-4xl lg:text-5xl font-bold text-primary mb-6">
            Chất Lượng Được Công Nhận Toàn Cầu
          </h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-2xl mx-auto">
            Các chứng nhận uy tín khẳng định chất lượng và độ an toàn của sản phẩm
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`group text-center animate-fade-up animate-delay-${(index + 1) * 100}`}
            >
              <div className="relative">
                {/* Badge Container */}
                <div className="relative bg-gradient-to-br from-ivory to-ivory/80 rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 border-2 border-secondary/20 group-hover:border-secondary/40">
                  {/* Decorative Corner */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-secondary-foreground rounded-full"></div>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center text-secondary-foreground mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    {cert.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-cinzel text-lg font-semibold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="font-montserrat text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-16 animate-fade-up animate-delay-600">
          <div className="bg-gradient-to-r from-transparent via-secondary/10 to-transparent p-8 rounded-2xl border border-secondary/20">
            <h3 className="font-cinzel text-2xl font-semibold text-primary mb-4">
              Cam Kết Chất Lượng Hàng Đầu
            </h3>
            <p className="font-montserrat text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Mỗi lô sản phẩm Sâm Chạy Bộ đều trải qua quy trình kiểm định nghiêm ngặt 
              và được các tổ chức uy tín quốc tế công nhận về chất lượng và độ an toàn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;