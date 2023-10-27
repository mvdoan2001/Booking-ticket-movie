import { SET_DANH_SACH_RAP, SET_THONG_TIN_RAP } from "../action/types/QuanLyRapType"


const initialState = {
    heThongRapChieu: [],
    thongTinRap: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {

        case SET_DANH_SACH_RAP: {
            state.heThongRapChieu = action.heThongRapChieu;
            return { ...state }
        }

        case SET_THONG_TIN_RAP: {
            state.thongTinRap = action.thongTinRap;
            return { ...state }
        }
        default:
            return { ...state }
    }
}
