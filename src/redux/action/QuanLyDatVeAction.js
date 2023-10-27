import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { CHUYEN_TAB_2, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "./types/QuanLyDatVeType";

export const QuanLyDatVeAction = (maLichChieu) => {
    return async dispatch => {
        try {
            dispatch(displayLoadingAction)
            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
            if (result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }
            dispatch(hideLoadingAction)

        } catch (error) {
            console.log('error', error);
            console.log('error', error.response?.data);
        }
    }
}

export const DatVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async dispatch => {
        try {
            dispatch(displayLoadingAction)
            const result = await quanLyDatVeService.datVe(thongTinDatVe);
            alert(result.data.content);
            await dispatch(QuanLyDatVeAction(thongTinDatVe.maLichChieu))
            await dispatch({
                type: DAT_VE_HOAN_TAT
            })
            await dispatch(hideLoadingAction)
            dispatch({
                type: CHUYEN_TAB_2
            })

        } catch (error) {
            alert(error.response.data);
        }
    }
}
