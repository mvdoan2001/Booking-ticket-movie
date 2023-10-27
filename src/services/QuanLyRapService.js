import { BaseService } from "./BaseService";

export class QuanLyRapService extends BaseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super ();
    }

    layDanhSachHeThongRap = () => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP00`);
    };

    layThongTinHeThongRap = () => {
        return this.get(`api/QuanLyRap/LayThongTinHeThongRap`);
    };

    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
 }

export const qlRapService = new QuanLyRapService();
