import { BaseService } from "./BaseService";

export class QuanLyPhimService extends BaseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super ();
    }

    layDanhSachBanner = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachBanner`);
    };

    layDanhSachPhim = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00`);
    };
 }

export const qlPhimService = new QuanLyPhimService();
