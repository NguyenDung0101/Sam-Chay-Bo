import { Button } from "@/components/ui/button";

const UsageSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const steps = [
    {
      number: "01",
      title: "Liều Lượng",
      description:
        "Uống 1–2 viên/ngày, trước khi chạy bộ hoặc tập luyện. Thời điểm tốt nhất là buổi sáng để tối đa hóa năng lượng.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18C7 19.1 6.1 20 5 20S3 19.1 3 20 3.9 18 5 18 7 16.9 7 18ZM19 18C19 19.1 18.1 20 17 20S15 19.1 15 20 15.9 18 17 18 19 16.9 19 18ZM8.1 13H15.9L19.2 6H6.2L8.1 13Z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Cách Dùng",
      description:
        "Dùng cùng nước ấm để tăng khả năng hấp thu. Tránh dùng chung với cà phê hoặc đồ uống có cồn.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 21V19H20V21H2ZM20 8V5L18 5V3C18 2.45 17.55 2 17 2H7C6.45 2 6 2.45 6 3V5L4 5V8L6 8V19C6 19.55 6.45 20 7 20H17C17.55 20 18 19.55 18 19V8H20ZM8 5V4H16V5H8Z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Thời Điểm",
      description:
        "Uống trước hoạt động thể chất hoặc công việc khoảng 30 phút để đạt hiệu quả tập trung và bền bỉ cao nhất.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2ZM17 13H11V7H12.5V11.5H17V13Z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Lưu Ý",
      description:
        "Bảo quản nơi khô ráo, tránh nắng gắt. Tham khảo ý kiến bác sĩ nếu đang điều trị bệnh lý đặc biệt hoặc dùng thuốc.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 parallax-slow">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-emerald animate-float"
          >
            <path
              d="M50 10C30 30 30 70 50 90C70 70 70 30 50 10Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 w-32 h-32 parallax-slow">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-secondary animate-float animate-delay-300"
          >
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              d="M35 50 L45 40 L65 60"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-cinzel text-4xl lg:text-5xl font-bold text-primary mb-6">
            Cách Sử Dụng Sâm Chạy Bộ
          </h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-2xl mx-auto">
            Hướng dẫn chi tiết để tận dụng tối đa hiệu quả của sản phẩm
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group animate-fade-up animate-delay-${
                  (index + 1) * 100
                }`}
              >
                <div className="bg-ivory rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-all duration-500 border border-secondary/20">
                  <div className="flex items-start space-x-6">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="font-cinzel text-xl font-bold text-secondary-foreground">
                            {step.number}
                          </span>
                        </div>
                        {/* Connection Line */}
                        {index < steps.length - 1 && (
                          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-secondary/30"></div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-10 h-10 bg-emerald/20 rounded-lg flex items-center justify-center text-emerald group-hover:bg-emerald/30 transition-colors duration-300">
                          {step.icon}
                        </div>
                        <h3 className="font-cinzel text-2xl font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                      <p className="font-montserrat text-muted-foreground leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-up animate-delay-500">
            <Button
              className="btn-premium text-lg px-12 py-4 animate-shimmer"
              onClick={scrollToContact}
            >
              Đặt Hàng Ngay
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageSection;
