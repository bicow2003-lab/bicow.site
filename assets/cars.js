/* ===== DANH SÁCH XE CỦA BICOW – CHỈ CẦN SỬA FILE NÀY ĐỂ THÊM XE =====
   - anh: tên file ảnh đã up vào thư mục assets/cars/ (ví dụ "r34.jpg"). Để trống "" thì hiện hình xe tạm.
   - hang: tên hãng (viết đúng một kiểu, ví dụ luôn là "Mini GT"). Bộ lọc tự tạo theo các hãng bạn ghi.
   - ban: true = xe có bán (hiện nút trao đổi qua Zalo), false = xe sưu tầm riêng.
   - Mỗi xe nằm trong { }, cách nhau bằng dấu phẩy. Nhớ giữ dấu ngoặc kép "" quanh chữ.
   Đây là xe MẪU, hãy thay bằng xe thật của bạn. */
window.BICOW = {
  phone: "0900000000",           // đổi thành số Zalo của bạn

  // 4 xe yêu thích nhất (hiện ngay đầu trang)
  yeuThich: [
    { ten: "Nissan Skyline GT-R (R34)", hang: "Mini GT",      anh: "" },
    { ten: "Porsche 911 GT3",           hang: "Pop Race",     anh: "" },
    { ten: "Mẫu xe độ số 1",            hang: "Kaido House",  anh: "" },
    { ten: "Xe đua livery",             hang: "Tarmac Works", anh: "" }
  ],

  // toàn bộ danh sách xe
  xe: [
    { ten: "Nissan Skyline GT-R (R34)", hang: "Mini GT",       anh: "", ban: false },
    { ten: "Porsche 911 GT3",           hang: "Pop Race",      anh: "", ban: true  },
    { ten: "Mẫu xe độ số 1",            hang: "Kaido House",   anh: "", ban: false },
    { ten: "Xe đua livery",             hang: "Tarmac Works",  anh: "", ban: false },
    { ten: "Mẫu thể thao",              hang: "Pop Race",      anh: "", ban: true  },
    { ten: "Mẫu xe Trends Hobby",       hang: "Trends Hobby",  anh: "", ban: true  },
    { ten: "Mẫu xe Inno64",             hang: "Inno64",        anh: "", ban: false },
    { ten: "Mẫu xe Hot Wheels",         hang: "Hot Wheels",    anh: "", ban: false }
  ]
};
