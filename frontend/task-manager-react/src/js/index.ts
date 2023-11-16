
import axios from "axios";
import {AxiosInstance} from "axios";

var $host: AxiosInstance;

$host = axios.create({
    baseURL: "http://localhost:3000/api/v1/",
    validateStatus: function (status: number) {
        return status < 500;
    },
    withCredentials: true,
})

export {
    $host
}