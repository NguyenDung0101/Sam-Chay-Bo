import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Nguyễn Văn Minh",
      role: "Vận động viên Marathon",
      comment: "Sâm Chạy Bộ giúp tôi chạy marathon mà không mệt mỏi! Năng lượng kéo dài suốt cuộc đua và phục hồi nhanh chóng sau thi đấu.",
      rating: 5,
      avatar: "NVM"
    },
    {
      name: "Trần Thị Lan Anh",
      role: "Huấn luyện viên thể hình",
      comment: "Tôi đã sử dụng nhiều sản phẩm bổ sung, nhưng Sâm Chạy Bộ thực sự khác biệt. Cảm giác tỉnh táo và năng lượng tự nhiên rất ấn tượng.",
      rating: 5,
      avatar: "TTLA"
    },
    {
      name: "Lê Hoàng Nam",
      role: "Doanh nhân, yêu thể thao",
      comment: "Với công việc bận rộn, Sâm Chạy Bộ giúp tôi duy trì thói quen tập luyện và luôn tràn đầy sinh lực. Chất lượng sản phẩm rất đáng tin cậy.",
      rating: 5,
      avatar: "LHN"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 section-burgundy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="testimonial-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M25 15C20 20 20 30 25 35C30 30 30 20 25 15Z" fill="currentColor" className="text-gold" />
              <circle cx="25" cy="25" r="3" fill="currentColor" className="text-gold opacity-50" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonial-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-cinzel text-4xl lg:text-5xl font-bold text-ivory mb-6">
            Cảm Nhận Từ Khách Hàng
          </h2>
          <p className="font-montserrat text-lg text-ivory/80 max-w-2xl mx-auto">
            Những chia sẻ chân thực từ người dùng về hiệu quả của Sâm Chạy Bộ
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-6"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="bg-ivory/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gold/20 shadow-elegant animate-fade-up animate-delay-200">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <svg className="w-8 h-8 text-secondary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21V7.41C14.017 5.077 16.094 3 18.427 3S22.837 5.077 22.837 7.41V21H14.017ZM1.163 21V7.41C1.163 5.077 3.24 3 5.573 3S9.983 5.077 9.983 7.41V21H1.163Z" />
                  </svg>
                </div>

                {/* Testimonial Content */}
                <div className="mb-8">
                  <p className="font-montserrat italic text-xl lg:text-2xl text-ivory leading-relaxed mb-6">
                    "{testimonials[activeIndex].comment}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-6 h-6 text-secondary animate-scale-in" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Customer Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center text-secondary-foreground font-cinzel font-bold text-lg shadow-lg">
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-cinzel text-lg font-semibold text-ivory">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="font-montserrat text-ivory/70">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-secondary scale-125 shadow-lg' 
                      : 'bg-ivory/30 hover:bg-ivory/50'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-ivory/10 backdrop-blur-sm rounded-full flex items-center justify-center text-ivory hover:bg-ivory/20 transition-all duration-300 border border-gold/20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-ivory/10 backdrop-blur-sm rounded-full flex items-center justify-center text-ivory hover:bg-ivory/20 transition-all duration-300 border border-gold/20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Additional Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-ivory/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:bg-ivory/10 transition-all duration-300 cursor-pointer animate-fade-up animate-delay-${(index + 3) * 100} ${
                  index === activeIndex ? 'ring-2 ring-secondary' : ''
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-cinzel font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h5 className="font-cinzel text-sm font-semibold text-ivory">
                      {testimonial.name}
                    </h5>
                    <p className="font-montserrat text-xs text-ivory/70">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
                </div>
                <p className="font-montserrat text-sm text-ivory/80 leading-relaxed line-clamp-3">
                  {testimonial.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;