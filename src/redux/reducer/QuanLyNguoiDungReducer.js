import { ThongTinNguoiDung } from "../../_core/models/ThongTinNguoiDung";
import { TOKEN, USER_LOGIN } from "../../utils/setting/config";
import { DANG_NHAP, THONG_TIN_NGUOI_DUNG } from "../action/types/QuanLyNguoiDung";

let user = {};
if(localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const stateDefault = {
    userLogin: user,
    thongTinNguoiDung: new ThongTinNguoiDung()
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {

  case DANG_NHAP: {
    const { thongTinNguoiDung } = action;
    localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinNguoiDung));
    localStorage.setItem(TOKEN, thongTinNguoiDung.accessToken);
    return { ...state, userLogin: thongTinNguoiDung }
  }

  case THONG_TIN_NGUOI_DUNG: {
    state.thongTinNguoiDung = action.thongTinNguoiDung
    return { ...state }
  }
  default:
    return { ...state }
  }
}
