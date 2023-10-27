import { qlRapService } from "../../services/QuanLyRapService";
import { CHI_TIET_PHIM, SET_DANH_SACH_RAP, SET_THONG_TIN_RAP } from "./types/QuanLyRapType";


export const layDanhSachHeThongRapAction = () => {
    return async (dispatch) => {
        try {
            const result = await qlRapService.layDanhSachHeThongRap();
            dispatch({
                type: SET_DANH_SACH_RAP,
                heThongRapChieu: result.data.content
            })
        } catch (error) {
            alert(error)
        }
    };
}

export const layThongTinHeThongRapAction = () => {
    return async (dispatch) => {
        try {
            const result = await qlRapService.layThongTinHeThongRap();
            dispatch({
                type: SET_THONG_TIN_RAP,
                thongTinRap: result.data.content
            })
        } catch (error) {
            alert(error)
        }
    };
}

export const layThongTinChiTietPhim = (id) => {
    return async ( dispatch) => {
        try {
            const result = await qlRapService.layThongTinLichChieuPhim(id);
            dispatch({
                type: CHI_TIET_PHIM,
                filmDetail: result.data.content
            })
        } catch (error) {
            alert(error)
        }
    }
}