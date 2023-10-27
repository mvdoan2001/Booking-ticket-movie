import { SET_CAROUSEL } from "./types/CarouselType";
import { qlPhimService } from '../../services/QuanLyPhimService';


export const getCarouselAction = () => {

    return async (dispatch) => {
        try {
            const result = await qlPhimService.layDanhSachBanner();
            dispatch({
                type: SET_CAROUSEL,
                arrImg: result.data.content
            })

        } catch (error) {
            alert(error)
        }
    };
};

