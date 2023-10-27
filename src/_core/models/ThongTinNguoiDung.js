export class ThongTinNguoiDung {
    taiKhoan = ""
    matKhau = ""
    hoTen = ""
    email = ""
    soDT = ""
    maNhom = ""
    loaiNguoiDung = ""
    thongTinDatVe = new Array(new ThongTinDatVe())

    // eslint-disable-next-line no-useless-constructor
    constructor () {
        
    }
}

class ThongTinDatVe {
    maHeThongRap = ''
    tenHeThongRap = ''
    maCumRap = ''
    tenCumRap = ''
    maRap = ''
    tenRap = ''
    maGhe = ''
    tenGhe = ''
}