import { SET_DANH_SACH_PHIM } from "../action/types/QuanLyPhimType"
import { CHI_TIET_PHIM } from "../action/types/QuanLyRapType"

const initialState = {
    arrFilm: [],
    arrFilmDefault : [],
    filmDetail: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {

        case SET_DANH_SACH_PHIM: {
            state.arrFilm = action.arrFilm
            state.arrFilmDefault = state.arrFilm
            return { ...state }
        }

        case CHI_TIET_PHIM: {
            state.filmDetail = action.filmDetail
            return { ...state }
        }
        default:
            return { ...state }
    }
}
