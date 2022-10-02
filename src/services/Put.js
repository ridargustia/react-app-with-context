import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

const Put = (path, typeRoot, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.put(`${typeRoot ? OnlineRoot : RootPath}/${path}`, data).then(res => {
            resolve(res);
        }, err => {
            reject(err);
        });
    });
    return promise;
}

export default Put;