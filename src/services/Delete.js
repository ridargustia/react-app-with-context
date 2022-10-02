import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

const Delete = (path, typeRoot) => {
    const promise = new Promise((resolve, reject) => {
        axios.delete(`${typeRoot ? OnlineRoot : RootPath}/${path}`).then(res => {
            resolve(res);
        }, err => {
            reject(err);
        });
    });
    return promise;
}

export default Delete;