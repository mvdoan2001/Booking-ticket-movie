import { quanLyNguoiDung } from "../../services/QuanLyNguoiDung"
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { DANG_KY, DANG_NHAP, THONG_TIN_NGUOI_DUNG } from "./types/QuanLyNguoiDung";

export const dangNhapAction = (thongTinNguoiDung) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDung.quanLyDangNhap(thongTinNguoiDung);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP,
                    thongTinNguoiDung: result.data.content
                });
            window.location.href = '/'
            }
        } catch (error) {
            alert(error.response.data);
        }
        
    }
}

export const layThongTinNguoiDungAction = () => {
    return async dispatch => {
        try {
            dispatch(displayLoadingAction)
            const result = await quanLyNguoiDung.layThongTinNguoiDung()
            if(result.data.statusCode === 200) {
                dispatch({
                    type: THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });
            }
            dispatch(hideLoadingAction)
        } catch (error) {
            console.log(error.response.data);
        }
    }
}

export const dangKyAction = (thongTinNguoiDung) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDung.quanLyDangKy(thongTinNguoiDung)
            if(result.data.statusCode === 200) {
                dispatch({
                    type: DANG_KY,
                    thongTinNguoiDung: result.data.content
                });
            }
            alert(result.data.message)
            window.location.href = '/'

        } catch (error) {
            console.log(error.response.data);
        }
    }
}