import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

//TODO Function API global POST
const Post = (path, typeRoot, data) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${typeRoot ? OnlineRoot : RootPath}/${path}`, data).then(res => {
            resolve(res);
        }, err => {
            reject(err);
        });
    });
    return promise;
}

export default Post;