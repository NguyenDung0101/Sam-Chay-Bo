# Sâm Chạy Bộ - Landing Page Cao Cấp

## Tổng Quan

Dự án này là một landing page one-page sang trọng, tinh tế, được thiết kế để quảng bá sản phẩm nhân sâm cao cấp **Sâm Chạy Bộ**. Trang web kết hợp vẻ đẹp quý phái của di sản truyền thống Việt Nam với phong cách hiện đại, lấy cảm hứng từ các thương hiệu cao cấp như Rolex và Dior. Mục tiêu là tạo trải nghiệm trực quan ấn tượng, truyền tải sự độc quyền, chất lượng vượt trội và uy tín của sản phẩm, đồng thời thúc đẩy người dùng đặt hàng và liên hệ.

### Đặc Điểm Nổi Bật
- **Thiết Kế Quý Phái**: Sử dụng bảng màu đỏ burgundy, vàng cổ, trắng ngà, đen than và xanh ngọc để gợi cảm giác sang trọng, thảo dược và truyền thống.
- **Giao Diện Tinh Tế**: Bố cục dọc với nhiều khoảng trắng, phông chữ Cinzel (serif) cho tiêu đề và Montserrat (sans-serif) cho nội dung.
- **Hiệu Ứng Động**: Fade-in khi cuộn, hover phóng to, parallax nền và lấp lánh CTA để tăng tính tương tác.
- **Tập Trung Sản Phẩm**: Nhấn mạnh “Sâm Chạy Bộ” với hình ảnh macro, nội dung chi tiết và nút “Đặt Hàng Ngay” nổi bật.
- **Responsive**: Tối ưu cho desktop, tablet và mobile, đảm bảo trải nghiệm mượt mà trên mọi thiết bị.

## Cấu Trúc Dự Án

Landing page bao gồm các section sau:
1. **Hero Section**: Tiêu đề mạnh mẽ “Sâm Chạy Bộ – Tinh Hoa Sức Sống” cùng hình ảnh sản phẩm và CTA “Đặt Hàng Ngay”.
2. **Giới Thiệu Sản Phẩm**: Mô tả chi tiết nguồn gốc, công nghệ, bao bì và cam kết chất lượng của “Sâm Chạy Bộ”.
3. **Lợi Ích**: 6 lợi ích chính (tăng năng lượng, sức bền, phục hồi, v.v.) với biểu tượng vàng minh họa.
4. **Hướng Dẫn Sử Dụng**: 4 bước sử dụng sản phẩm rõ ràng, kèm CTA.
5. **Chứng Nhận & Uy Tín**: 5 chứng nhận quốc tế (Organic, GMP, ISO 22000, v.v.) với huy hiệu vàng.
6. **Đánh Giá Khách Hàng**: Carousel trích dẫn từ khách hàng với xếp hạng 5 sao.
7. **Liên Hệ**: Form liên hệ chuyên nghiệp và thông tin liên lạc (email, điện thoại, địa chỉ).
8. **Footer**: Logo, liên kết, mạng xã hội và đăng ký bản tin.

## Công Nghệ Sử Dụng
- **Frontend**: React hoặc Next.js, Tailwind CSS.
- **Hiệu Ứng**: CSS animations, parallax, GPU-accelerated transitions.
- **Hình Ảnh**: WebP tối ưu, chụp studio chất lượng cao.
- **SEO**: Meta tags, schema markup cho sản phẩm và đánh giá.
- **Accessibility**: HTML ngữ nghĩa, ARIA labels, tương phản WCAG 2.1 AA.

## Yêu Cầu Hệ Thống
- Node.js (v16 hoặc cao hơn)
- npm hoặc yarn
- Trình duyệt hiện đại (Chrome, Safari, Firefox, Edge)

## Hướng Dẫn Cài Đặt
1. **Clone Repository**:
   ```bash
   git clone <repository-url>
   cd sam-chay-bo-landing-page
   ```
2. **Cài Đặt Dependencies**:
   ```bash
   npm install
   ```
   hoặc
   ```bash
   yarn install
   ```
3. **Chạy Dự Án**:
   ```bash
   npm run dev
   ```
   hoặc
   ```bash
   yarn dev
   ```
   Mở trình duyệt tại `http://localhost:3000` để xem trang web.
4. **Build Sản Phẩm**:
   ```bash
   npm run build
   ```
   hoặc
   ```bash
   yarn build
   ```

## Tùy Chỉnh
- **Màu Sắc**: Chỉnh sửa biến HSL trong `tailwind.config.js` để thay đổi bảng màu.
- **Hình Ảnh**: Thay thế hình trong thư mục `public/images` bằng các file WebP chất lượng cao.
- **Nội Dung**: Cập nhật văn bản trong các component React tại `src/components`.
- **Hiệu Ứng**: Điều chỉnh animations trong `src/styles` hoặc thêm keyframes mới.

## Tối Ưu Hiệu Suất
- **Lazy-load**: Hình ảnh và video được tải lười để tăng tốc độ.
- **Nén Tài Nguyên**: CSS/JS được minify, đạt điểm Lighthouse 95+.
- **CDN**: Sử dụng CDN cho tài nguyên tĩnh (nếu triển khai).

## Triển Khai
- **Nền Tảng**: Vercel, Netlify hoặc bất kỳ dịch vụ hỗ trợ Next.js.
- **SEO**: Đảm bảo meta tags và schema markup được cấu hình đúng.
- **Analytics**: Tích hợp Google Analytics hoặc công cụ tương tự trong `src/pages/_app.js`.

## Đóng Góp
- Tạo issue để báo lỗi hoặc đề xuất tính năng.
- Fork repository, tạo branch mới và gửi pull request với mô tả chi tiết.

## Liên Hệ
- **Email**: contact@samchaybo.vn
- **Điện Thoại**: +84 123 456 789
- **Địa Chỉ**: 123 Đường Sâm, Quận 1, TP. Hồ Chí Minh, Việt Nam
- **Mạng Xã Hội**: [Instagram](https://instagram.com/samchaybo), [Facebook](https://facebook.com/samchaybo)

## Giấy Phép
Dự án được phát triển bởi đội ngũ **Sâm Chạy Bộ** và cấp phép dưới [MIT License](LICENSE).

---

**Sâm Chạy Bộ – Tinh Hoa Sức Sống**  
Nâng tầm sức khỏe với nhân sâm cao cấp, kết tinh từ thiên nhiên và khoa học.
