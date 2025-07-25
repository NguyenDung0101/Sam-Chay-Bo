const BenefitsSection = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 9V3.5L18 2L19 6L13 9ZM6 7H3V11H6L11 6L6 7ZM11 18L6 17V21H3V17H1V13H6L11 18ZM13 12L18 17L19 22L13 20.5V12Z" />
        </svg>
      ),
      title: "Tăng Cường Năng Lượng",
      description: "Cung cấp năng lượng bền vững, giúp duy trì hiệu suất trong các hoạt động chạy bộ và thể thao cường độ cao."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 8C13.1 8 14 8.9 14 10V22H10V10C10 8.9 10.9 8 12 8Z" />
        </svg>
      ),
      title: "Hỗ Trợ Sức Bền",
      description: "Tăng cường khả năng chịu đựng, giảm mệt mỏi trong các bài tập cường độ cao và hoạt động kéo dài."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 14H15L13.5 15.5L11.91 13.91L10.5 15.5L12 17L19 10V14ZM12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" />
        </svg>
      ),
      title: "Phục Hồi Nhanh Chóng",
      description: "Giúp cơ thể phục hồi sau vận động, giảm đau nhức cơ bắp và rút ngắn thời gian nghỉ ngơi."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
        </svg>
      ),
      title: "Cân Bằng Cơ Thể",
      description: "Hỗ trợ hệ miễn dịch, điều hòa huyết áp và cải thiện sức khỏe tổng thể một cách tự nhiên."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3C8.24 3 5.5 5.88 5.5 9.5C5.5 10.73 5.89 11.86 6.55 12.8L12 22L17.45 12.8C18.11 11.86 18.5 10.73 18.5 9.5C18.5 5.88 15.76 3 12 3ZM12 7C13.38 7 14.5 8.12 14.5 9.5S13.38 12 12 12S9.5 10.88 9.5 9.5S10.62 7 12 7Z" />
        </svg>
      ),
      title: "Tăng Tập Trung",
      description: "Cải thiện sự tỉnh táo và tập trung tinh thần trong các hoạt động hàng ngày và công việc."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.6 11.48L19.44 8.3A7.96 7.96 0 0 0 12 4A7.96 7.96 0 0 0 4.56 8.3L6.4 11.48C6.72 12.08 7.34 12.5 8 12.5H8.76L10.05 21.76C10.13 22.31 10.6 22.73 11.16 22.73H12.84C13.4 22.73 13.87 22.31 13.95 21.76L15.24 12.5H16C16.66 12.5 17.28 12.08 17.6 11.48Z" />
        </svg>
      ),
      title: "Tự Nhiên & An Toàn",
      description: "100% chiết xuất tự nhiên, không tác dụng phụ, không chất bảo quản, phù hợp cho mọi đối tượng."
    }
  ];

  return (
    <section className="py-24 section-burgundy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="leaf-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 10C15 15 15 25 20 30C25 25 25 15 20 10Z" fill="currentColor" className="text-gold" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-cinzel text-4xl lg:text-5xl font-bold text-ivory mb-6">
            Sức Mạnh Từ Sâm Chạy Bộ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`card-premium group hover:bg-ivory/20 animate-fade-up animate-delay-${(index + 1) * 100}`}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center text-secondary-foreground group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {benefit.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-cinzel text-xl font-semibold text-ivory mb-3 group-hover:text-secondary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="font-montserrat text-ivory/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;