/** Phân tích
 * Đầu vào: Tên phim, giá vé người lớn, giá vé trẻ em, phần trăm trích quỹ từ thiện
 * Xử lý:
 * 1. Tạo lần lượt biến tenPhim, giaVeNguoiLon, giaVeTreEm, soVeNguoiLon, soVeTreEm, tiLeTuThien gán giá trị người dùng nhập
 * 2. Tạo biến tongVeDaBan, gán giá trị tính bằng ct: soVeNguoiLon + soVeTreEm
 * 3. Tạo biến tongDoanhThu,------------------------: soVeNguoiLon *  giaVeNguoiLon + soVeTreEm * giaVeTreEm
 * 4. Tạo biến tienTuThien, ------------------------: tongDoanhThu * tiLeTuThien
 * 5. Tạo biến tienConLai,  ------------------------: tongDoanhThu - tienTuThien
 * 6. Định dạng tiền VND
 * 7. In kết quả ra màn hình
 * Đầu ra: Số vé đã bán, doanh thu, tổng tiền từ thiện, tổng thu được sau khi trừ
 */

const dinhDangTienVND = function (soTien) {
    const formattedVND = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(soTien);
    return formattedVND;
};

document.getElementById('giaVeNguoiLon').addEventListener('blur', function () {
    const userInput = parseInt(this.value);
    if (userInput % 1000 !== 0) {
        this.value = userInput * 1000;
    }
});

document.getElementById('giaVeTreEm').addEventListener('blur', function () {
    const userInput = parseInt(this.value);

    if (userInput % 1000 !== 0) {
        this.value = userInput * 1000;
    }
});

document.getElementById('btnTinhNao').addEventListener('click', function () {
    const tenPhim = document.getElementById('tenPhim').value;
    const giaVeNguoiLon = document.getElementById('giaVeNguoiLon').value * 1;
    const giaVeTreEm = document.getElementById('giaVeTreEm').value;
    const soVeNguoiLon = document.getElementById('soVeNguoiLon').value * 1;
    const soVeTreEm = document.getElementById('soVeTreEm').value * 1;
    const tiLeTuThien = document.getElementById('tiLeTuThien').value * 1;
    const tongVeDaBan = soVeNguoiLon + soVeTreEm;
    const tongDoanhThu = soVeNguoiLon * giaVeNguoiLon + soVeTreEm * giaVeTreEm;
    const tienTuThien = ((tongDoanhThu * tiLeTuThien) / 100).toFixed(2);
    console.log(tienTuThien);
    const tienConLai = (tongDoanhThu - tienTuThien).toFixed(2);
    console.log(tienConLai);
    const hienKetQua = document.getElementById('hienKetQua');

    var content = '';
    content = `
     <div class="card alert alert-success">
        <h4>Tên phim: ${tenPhim}</h4>
        <p>Số vé đã bán: ${tongVeDaBan}</p>
        <p>Doanh thu: ${dinhDangTienVND(tongDoanhThu)}</p>
        <p>Trích % từ thiện: ${tiLeTuThien} %</p>
        <p>Tổng tiền trích từ thiện: ${dinhDangTienVND(tienTuThien)}</p>
        <p>Tổng thu được sau khi trừ: ${dinhDangTienVND(tienConLai)}</p>
     </div>
    `;
    hienKetQua.innerHTML = content;
});
