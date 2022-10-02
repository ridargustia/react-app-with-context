import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

//TODO Function API global GET
const Get = (path, typeRoot) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${typeRoot ? OnlineRoot : RootPath}/${path}`)
        .then(res => {
            resolve(res.data);
        }, err => {
            reject(err);
        });
    });
    return promise;
}

export default Get;