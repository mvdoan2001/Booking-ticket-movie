import { BaseService } from "./BaseService";

export class QuanLyNguoiDung extends BaseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    quanLyDangNhap = (thongTinNguoiDung) => { // { taiKhoan = '', matKhau = '' }
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinNguoiDung)
    }

    layThongTinNguoiDung = () => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }

    quanLyDangKy = (thongTinNguoiDung) => {
        return this.post(`api/QuanLyNguoiDung/DangKy`, thongTinNguoiDung)
    }
}

export const quanLyNguoiDung = new QuanLyNguoiDung();