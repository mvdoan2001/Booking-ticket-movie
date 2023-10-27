import { ThongTinLichChieu } from "../../_core/models/ThongTinLichChieu";
import { CHUYEN_TAB_1, CHUYEN_TAB_2, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "../action/types/QuanLyDatVeType";


const stateDefault = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangDat: [],
    danhSachGheKhachDat: [{maGhe: 64677}],
    tabActive: '1'
}

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe
            return { ...state }
        }

        case DAT_VE: {
            // Cập nhật danh sách ghê đang đặt
            let danhSachGheCapNhat = [...state.danhSachGheDangDat]
            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe)
            
            /* eslint-disable eqeqeq */
            if (index != -1) { // Nếu tìm thấy ghế được chọn trong mảng có nghĩa là trước đó đã click rồi => xóa đi
                danhSachGheCapNhat.splice(index, 1);
            } else {
                danhSachGheCapNhat.push(action.gheDuocChon);
            }
            return { ...state, danhSachGheDangDat: danhSachGheCapNhat }
        }

        case DAT_VE_HOAN_TAT: {
            state.danhSachGheDangDat = []
            return { ...state }
        }



        case CHUYEN_TAB_2: {
            state.tabActive = '2'
            return { ...state }
        }

        case CHUYEN_TAB_1: {
            state.tabActive = '1'
            return { ...state }
        }
        default: return { ...state }
    }
}