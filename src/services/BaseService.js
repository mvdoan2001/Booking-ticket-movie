import axios from "axios";
import { DOMAIN, TOKEN } from "../utils/setting/config";

export class BaseService {
    //put json về phía back-end
    put = (url, model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }

    post = (url, model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }

    get = (url, model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) } // token yêu cầu từ back-end chứng minh user đã đăng nhập rồi
        })
    }

    delete = (url, model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }
}