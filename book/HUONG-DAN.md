# BOOK BICOW – Hướng dẫn cho người mới

Đây là website tĩnh (HTML/CSS/JS thuần), không cần cài gì, không cần build. Mở `index.html` bằng trình duyệt là xem được.

## 1. Các file trong thư mục
| File / thư mục | Dùng để làm gì |
|---|---|
| `index.html` | Trang chủ |
| `game-caster.html`, `mc.html`, `hop-tac.html` | 3 trang dịch vụ |
| `booking.html` | Form đặt lịch |
| `assets/config.js` | **Nơi sửa số Zalo, giờ nhận booking, danh sách game, link nhận form** |
| `assets/style.css` | Màu sắc, kiểu chữ, hiệu ứng |
| `img/` | Ảnh trên web |
| `google-apps-script.gs` | Đoạn code dán vào Google Sheet để nhận form |
| `hub-card/` | Ảnh dùng cho thẻ BOOK BICOW ở trang chọn (đã được dùng trong gói cập nhật) |

## 2. Việc cần sửa trước khi đưa lên mạng
1. Mở `assets/config.js`, đổi `zalo` thành số Zalo thật.
2. Muốn thêm/bớt tựa game: sửa dòng `games` trong `assets/config.js` (form tự cập nhật). Phần chữ chạy ngang và nhãn ở trang chủ nằm trong các file `.html`, bạn dùng Ctrl+F tìm tên game cũ rồi sửa.
3. Số liệu live ở trang chủ (155 và 580): mở `index.html`, tìm `data-count="155"` và `data-count="580"`, đổi số ở cả `data-count` lẫn chữ bên trong thẻ.
4. Đổi ảnh: thay file trong `img/` bằng ảnh mới **cùng tên**.
5. Địa chỉ web đã đặt sẵn là `bicow.site/book/`. Đổi tên miền thì tìm và thay `https://bicow.site/book/` trong các file `.html`.

## 3. Đưa lên web: nằm chung bicow.site, ở địa chỉ `bicow.site/book/`
Không cần repo mới, không cần thêm DNS. Book nằm trong cùng repo với site hiện tại.
1. Vào repo site chính trên GitHub (repo đang chạy bicow.site).
2. **Add file → Upload files**. Kéo **cả thư mục `book`** từ máy vào (thư mục `book` phải nằm cùng chỗ với `bicow` và `portfolio`). Không cần upload `HUONG-DAN.md`, `hub-card`, `google-apps-script.gs`.
3. **Commit changes**, chờ 1 đến 2 phút.
4. Mở `https://bicow.site/book/` để xem. Trang chủ `bicow.site` hiện 3 lựa chọn là do file `index.html` ở gốc repo (có trong gói cập nhật đi kèm).

## 4. Kết nối form booking (bắt buộc, nếu không form chỉ chạy chế độ thử)
Form dùng Google Sheet làm nơi nhận, miễn phí.
1. Tạo Google Sheet mới, đặt tên `BOOK BICOW Booking`.
2. Menu **Tiện ích mở rộng → Apps Script**.
3. Xóa code mẫu, dán toàn bộ nội dung file `google-apps-script.gs`. Sửa `OWNER_EMAIL` thành email của bạn. Bấm biểu tượng lưu.
4. **Triển khai (Deploy) → Triển khai mới → loại Ứng dụng web**. Chọn: *Thực thi với tư cách: Tôi*, *Người có quyền truy cập: Bất kỳ ai*. Bấm Triển khai, cấp quyền khi Google hỏi.
5. Copy **URL ứng dụng web** (kết thúc bằng `/exec`).
6. Mở `assets/config.js`, dán vào `endpoint: "..."`. Upload lại file này lên GitHub (mở file → biểu tượng cây bút → dán → Commit).
7. Vào `booking.html` trên web, gửi thử một yêu cầu. Kiểm tra Sheet có dòng mới và email có thông báo.
Mỗi lần sửa code Apps Script, phải Deploy lại bằng **Quản lý bản triển khai → sửa → Phiên bản mới**.

## 5. Sửa nội dung sau này trên GitHub
Mở file → biểu tượng **cây bút** → sửa → **Commit changes** → chờ 1-2 phút → tải lại web (Ctrl+F5).
Ảnh mới: **Add file → Upload files** vào đúng thư mục `img`.

## 6. Liên kết với các trang khác
- Trang chủ `bicow.site` có sẵn 3 lựa chọn: Minh Phát Portfolio, Bicow Garage, Book Bicow.
- Muốn thêm nút từ Portfolio sang Book: trỏ tới `https://bicow.site/book/`.
- Các trang con: `/book/game-caster.html`, `/book/mc.html`, `/book/hop-tac.html`, `/book/booking.html`.

## 7. Xóa thư mục `portfolio` cũ trên GitHub (nếu muốn làm lại từ đầu)
Vào repo của site chính → bấm thư mục `portfolio` → bấm dấu `...` góc trên phải → **Delete directory** → Commit. Sau đó upload portfolio mới vào lại thư mục `portfolio`.
