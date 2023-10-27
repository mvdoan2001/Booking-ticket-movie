import { ThongTinDatVe } from '../_core/models/ThongTinDatVe';
import { BaseService } from './BaseService';

export class QuanLyDatVeService extends BaseService {
  
    // eslint-disable-next-line no-useless-constructor
    constructor() {
    super();
  }

  layChiTietPhongVe = (maLichChieu) => {
    return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
  }

  datVe = (thongTinDatVe = new ThongTinDatVe()) => { 
    return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe);
  }


}

export const quanLyDatVeService = new QuanLyDatVeService(); 
