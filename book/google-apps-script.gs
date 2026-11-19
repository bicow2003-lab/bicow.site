// Dán toàn bộ đoạn này vào Google Apps Script (mở từ Google Sheet: Tiện ích mở rộng > Apps Script).
// Mỗi yêu cầu booking sẽ thành 1 dòng trong Sheet và gửi 1 email thông báo cho bạn.
const OWNER_EMAIL = "email-cua-ban@gmail.com";   // đổi thành email của bạn

function doPost(e) {
  const p = e.parameter;
  if (p.website) return ContentService.createTextOutput("ignored");
  const sh = SpreadsheetApp.getActiveSheet();
  if (sh.getLastRow() === 0) {
    sh.appendRow(["Thời gian gửi","Mã","Họ tên","Dịch vụ","Tựa game","Ngày tổ chức","Giờ bắt đầu","Thời lượng","Hình thức","Tên sự kiện","Ngân sách","Liên hệ","Ghi chú","Trạng thái"]);
  }
  sh.appendRow([new Date(), p.ma, p.hoten, p.dichvu, p.game, p.ngay, p.gio, p.thoiluong, p.hinhthuc, p.sukien, p.ngansach, p.lienhe, p.ghichu, "Chưa xử lý"]);
  const body = ["Mã: "+p.ma,"Họ tên: "+p.hoten,"Dịch vụ: "+p.dichvu,"Tựa game: "+p.game,
    "Ngày: "+p.ngay+" lúc "+p.gio+" ("+p.thoiluong+")","Hình thức: "+p.hinhthuc,"Sự kiện: "+p.sukien,
    "Ngân sách: "+p.ngansach,"Liên hệ: "+p.lienhe,"Ghi chú: "+p.ghichu].join("\n");
  MailApp.sendEmail(OWNER_EMAIL, "[BOOK BICOW] Yêu cầu mới " + p.ma, body);
  return ContentService.createTextOutput("ok");
}
